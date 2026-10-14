"""Stufa a pellet: stato, interruttore allineato, conteggi, scheda e preferenze, da una presa con misura di potenza."""
from __future__ import annotations

import logging
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any

import voluptuous as vol

from homeassistant.components import frontend, websocket_api
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.typing import ConfigType
from homeassistant.util import dt as dt_util

from .const import CARD_FILE, CARD_URL, CONF_ENERGY, CONF_POWER, CONF_SWITCH, DOMAIN, PLATFORMS
from .controller import StufaController
from .logic import Settings, suggest_thresholds, valid_power

_LOGGER = logging.getLogger(__name__)
CONFIG_SCHEMA = vol.Schema({DOMAIN: vol.Schema({})}, extra=vol.ALLOW_EXTRA)
ENTITY_KEYS = {
    "sensor": ["stato", "accensioni_oggi", "ore_in_funzione_oggi", "ultima_accensione", "ultimo_spegnimento", "energia_oggi"],
    "binary_sensor": ["in_funzione", "azioni_bloccate"],
}


def _version() -> str:
    import json

    try:
        return json.loads((Path(__file__).parent / "manifest.json").read_text())["version"]
    except (OSError, ValueError, KeyError):
        return "0"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Registra la scheda (servita dall'integrazione, nessuna risorsa da aggiungere) e i comandi per le preferenze."""
    hass.data.setdefault(DOMAIN, {})
    card_path = Path(__file__).parent / CARD_FILE
    if await hass.async_add_executor_job(card_path.is_file):
        version = await hass.async_add_executor_job(_version)
        await hass.http.async_register_static_paths([StaticPathConfig(CARD_URL, str(card_path), cache_headers=False)])
        frontend.add_extra_js_url(hass, f"{CARD_URL}?v={version}")
    else:
        _LOGGER.warning("Scheda non trovata in %s: costruiscila con npm run build", card_path)
    websocket_api.async_register_command(hass, ws_info)
    websocket_api.async_register_command(hass, ws_update)
    websocket_api.async_register_command(hass, ws_suggest)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    controller = StufaController(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = controller
    await controller.async_start()
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    entry.async_on_unload(entry.add_update_listener(_async_options_updated))
    return True


async def _async_options_updated(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Preferenze cambiate: si applicano subito; se cambiano i sensori si ricarica la voce."""
    controller: StufaController | None = hass.data[DOMAIN].get(entry.entry_id)
    sources_now = (entry.data.get(CONF_POWER), entry.data.get(CONF_SWITCH) or None, entry.data.get(CONF_ENERGY) or None)
    if controller is None or sources_now != controller.sources:
        await hass.config_entries.async_reload(entry.entry_id)
        return
    controller.update_settings(Settings.from_dict(entry.options))


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if ok:
        controller: StufaController = hass.data[DOMAIN].pop(entry.entry_id)
        await controller.async_stop()
    return ok


# ---------------------------------------------------------------------- comandi per la scheda
def _entities_of(hass: HomeAssistant, entry: ConfigEntry) -> dict[str, str]:
    reg = er.async_get(hass)
    out: dict[str, str] = {}
    for domain, keys in ENTITY_KEYS.items():
        for key in keys:
            eid = reg.async_get_entity_id(domain, DOMAIN, f"{entry.entry_id}_{key}")
            if eid:
                out[key] = eid
    return out


def _controller(hass: HomeAssistant, entry_id: str | None) -> StufaController | None:
    controllers: dict[str, StufaController] = {k: v for k, v in hass.data.get(DOMAIN, {}).items() if isinstance(v, StufaController)}
    if entry_id:
        return controllers.get(entry_id)
    return next(iter(controllers.values()), None)


@websocket_api.websocket_command({vol.Required("type"): "stufa_pellet/info", vol.Optional("entry_id"): str})
@callback
def ws_info(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    c = _controller(hass, msg.get("entry_id"))
    if c is None:
        connection.send_error(msg["id"], "not_found", "Nessuna stufa configurata")
        return
    data = c.info()
    data["entities"] = _entities_of(hass, c.entry)
    connection.send_result(msg["id"], data)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "stufa_pellet/update",
        vol.Optional("entry_id"): str,
        vol.Optional("settings"): dict,
        vol.Optional("sources"): dict,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_update(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    c = _controller(hass, msg.get("entry_id"))
    if c is None:
        connection.send_error(msg["id"], "not_found", "Nessuna stufa configurata")
        return
    entry = c.entry
    options = entry.options
    data = entry.data
    if "settings" in msg:
        merged = {**Settings.from_dict(entry.options).to_dict(), **msg["settings"]}
        options = Settings.from_dict(merged).to_dict()
    if "sources" in msg:
        src = msg["sources"]
        new = dict(entry.data)
        if CONF_POWER in src and not src[CONF_POWER]:
            connection.send_error(msg["id"], "invalid", "Il sensore di potenza è obbligatorio")
            return
        for key in (CONF_POWER, CONF_SWITCH, CONF_ENERGY):
            if key in src:
                if src[key]:
                    new[key] = src[key]
                elif key != CONF_POWER:
                    new.pop(key, None)
        if not new.get(CONF_POWER):
            connection.send_error(msg["id"], "invalid", "Il sensore di potenza e' obbligatorio")
            return
        data = new
    hass.config_entries.async_update_entry(entry, data=data, options=options)
    connection.send_result(msg["id"], {"settings": Settings.from_dict(options).to_dict()})


@websocket_api.websocket_command(
    {vol.Required("type"): "stufa_pellet/suggest", vol.Optional("entry_id"): str, vol.Optional("days", default=14): vol.All(int, vol.Range(min=1, max=60))}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_suggest(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Propone le soglie dalla storia della potenza della presa."""
    c = _controller(hass, msg.get("entry_id"))
    if c is None:
        connection.send_error(msg["id"], "not_found", "Nessuna stufa configurata")
        return
    try:
        from homeassistant.components.recorder import get_instance, history
    except ImportError:
        connection.send_error(msg["id"], "no_recorder", "Il registratore (recorder) non e' disponibile")
        return
    end = dt_util.utcnow()
    start = end - timedelta(days=msg["days"])

    def _load() -> list[tuple[float, float]]:
        res = history.get_significant_states(
            hass, start, end, [c.power_entity], significant_changes_only=False, minimal_response=False, no_attributes=True
        )
        samples: list[tuple[float, float]] = []
        last_t = -1e9
        for st in res.get(c.power_entity, []):
            w = valid_power(st.state)
            if w is None:
                continue
            ts = st.last_updated.timestamp() if isinstance(st.last_updated, datetime) else float(st.last_updated)
            if ts - last_t >= 10:      # al massimo un campione ogni 10 secondi
                samples.append((ts, w))
                last_t = ts
        return samples

    samples = await get_instance(hass).async_add_executor_job(_load)
    suggestion = suggest_thresholds(samples)
    connection.send_result(msg["id"], {"samples": len(samples), "days": msg["days"], "suggestion": suggestion})
