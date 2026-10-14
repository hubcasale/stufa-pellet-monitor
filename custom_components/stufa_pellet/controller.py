"""Il "cervello" di una stufa: segue la presa intelligente, tiene lo stato, i conteggi e l'interruttore allineati."""
from __future__ import annotations

import logging
from datetime import datetime, timedelta
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, EventStateChangedData, HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.event import async_track_state_change_event, async_track_time_interval
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util

from .const import CONF_ENERGY, CONF_POWER, CONF_SWITCH, DOMAIN, SIGNAL_UPDATE, STORAGE_VERSION, TICK_SECONDS
from .logic import (
    RUNNING_STATES, STATE_IGNITION, STATE_OFF, STATE_SHUTDOWN, STATE_UNAVAILABLE, Blocker, DailyStats, Settings,
    StateTracker, classify, decide_switch_action, format_duration, valid_power,
)

_LOGGER = logging.getLogger(__name__)


class StufaController:
    """Una voce di configurazione = una stufa."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry) -> None:
        self.hass = hass
        self.entry = entry
        self.settings = Settings.from_dict(entry.options)
        self.tracker = StateTracker()
        self.blocker = Blocker()
        self.stats = DailyStats()
        self.power: float | None = None
        self.switch_on: bool | None = None
        self.energy_today: float | None = None
        self._energy_base: dict[str, Any] = {}
        self._store: Store = Store(hass, STORAGE_VERSION, f"{DOMAIN}.{entry.entry_id}")
        self._unsubs: list = []
        self._last_save = dt_util.utcnow()
        self._notified_unavailable = False
        self.sources = (entry.data.get(CONF_POWER), entry.data.get(CONF_SWITCH) or None, entry.data.get(CONF_ENERGY) or None)

    # ------------------------------------------------------------------ ciclo di vita
    @property
    def power_entity(self) -> str:
        return self.entry.data[CONF_POWER]

    @property
    def switch_entity(self) -> str | None:
        return self.entry.data.get(CONF_SWITCH) or None

    @property
    def energy_entity(self) -> str | None:
        return self.entry.data.get(CONF_ENERGY) or None

    @property
    def signal(self) -> str:
        return SIGNAL_UPDATE.format(self.entry.entry_id)

    async def async_start(self) -> None:
        saved = await self._store.async_load() or {}
        now = dt_util.now()
        self.stats = DailyStats.from_dict(saved.get("stats"), now)
        self._energy_base = saved.get("energy_base", {}) or {}
        entities = [e for e in (self.power_entity, self.switch_entity, self.energy_entity) if e]
        self._unsubs.append(async_track_state_change_event(self.hass, entities, self._on_event))
        self._unsubs.append(async_track_time_interval(self.hass, self._on_tick, timedelta(seconds=TICK_SECONDS)))
        self._evaluate(now, startup=True)

    async def async_stop(self) -> None:
        for unsub in self._unsubs:
            unsub()
        self._unsubs.clear()
        await self._async_save()

    async def _async_save(self) -> None:
        await self._store.async_save({"stats": self.stats.to_dict(), "energy_base": self._energy_base})
        self._last_save = dt_util.utcnow()

    @callback
    def update_settings(self, settings: Settings) -> None:
        self.settings = settings
        self._evaluate(dt_util.now())

    # ------------------------------------------------------------------ eventi
    @callback
    def _on_event(self, event: Event[EventStateChangedData]) -> None:
        self._evaluate(dt_util.now())

    @callback
    def _on_tick(self, now: datetime) -> None:
        self._evaluate(dt_util.now())
        if (dt_util.utcnow() - self._last_save).total_seconds() > 300:
            self.hass.async_create_task(self._async_save())

    # ------------------------------------------------------------------ valutazione
    def _read_inputs(self) -> tuple[float | None, bool | None, Any]:
        st = self.hass.states.get(self.power_entity)
        power = valid_power(st.state) if st else None
        sw = None
        sw_state = None
        if self.switch_entity:
            sw_state = self.hass.states.get(self.switch_entity)
            if sw_state is not None and sw_state.state in ("on", "off"):
                sw = sw_state.state == "on"
        return power, sw, sw_state

    @callback
    def _evaluate(self, now: datetime, startup: bool = False) -> None:
        power, switch_on, sw_state = self._read_inputs()
        self.power, self.switch_on = power, switch_on
        s = self.settings
        raw = classify(power, switch_on, s)
        old = self.tracker.state
        state, changed = self.tracker.update(now, raw, s.confirm_seconds)
        blocked = self.blocker.update(now, power is not None, s.restore_delay_seconds)
        if changed and startup:
            self.stats.sync(now, state)
        elif changed:
            self.stats.on_change(now, old, state)
            self._notify_change(old, state, power)
        else:
            self.stats.tick(now)
        # il blocco finisce da solo: avvisa quando le azioni ripartono
        if self._notified_unavailable and not blocked and power is not None:
            self._notified_unavailable = False
            self._notify("sensor", "Stufa a pellet", "Sensore di potenza di nuovo disponibile: le azioni automatiche sono riprese.")
        self._update_energy(now)
        # azioni sull'interruttore (con la lettura grezza della potenza, come faceva il vecchio pacchetto)
        if not startup:
            since_on = None
            if switch_on is True and sw_state is not None:
                since_on = (dt_util.utcnow() - sw_state.last_changed).total_seconds()
            action = decide_switch_action(power, state, switch_on, since_on, blocked, s)
            if action and self.switch_entity:
                self._call("homeassistant", action, {"entity_id": self.switch_entity})
                if action == "turn_on":
                    self._notify("event", "Stufa a pellet", f"Rilevata accensione, interruttore acceso (potenza {power:.0f} W).")
                else:
                    self._notify("event", "Stufa a pellet", f"Potenza minima rilevata, interruttore spento (potenza {power:.1f} W).")
        async_dispatcher_send(self.hass, self.signal)

    # ------------------------------------------------------------------ energia
    def _update_energy(self, now: datetime) -> None:
        if not self.energy_entity:
            self.energy_today = None
            return
        st = self.hass.states.get(self.energy_entity)
        value = valid_power(st.state) if st else None
        if value is None:
            return
        if st is not None and st.attributes.get("unit_of_measurement") == "Wh":
            value = value / 1000
        day = now.date().isoformat()
        base = self._energy_base
        if base.get("day") != day or value < float(base.get("value", value)):
            self._energy_base = {"day": day, "value": value}
        self.energy_today = round(value - float(self._energy_base["value"]), 3)

    # ------------------------------------------------------------------ notifiche
    def _notify_change(self, old: str | None, new: str, power: float | None) -> None:
        if new == STATE_UNAVAILABLE:
            self._notified_unavailable = True
            self._notify("sensor", "Stufa a pellet", "Sensore di potenza non disponibile: le azioni automatiche sono bloccate.")
        elif new == STATE_IGNITION:
            self._notify("event", "Stufa a pellet", "Stufa in accensione.")
        elif new == STATE_SHUTDOWN:
            self._notify("event", "Stufa a pellet", "Stufa in spegnimento.")
        elif new == STATE_OFF and old in RUNNING_STATES:
            self._notify("event", "Stufa a pellet", "Stufa spenta.")

    def _notify(self, kind: str, title: str, message: str) -> None:
        s = self.settings
        if (kind == "event" and not s.notify_events) or (kind == "sensor" and not s.notify_sensor_problem):
            return
        service = s.notify_service.strip()
        if service and "." in service:
            domain, name = service.split(".", 1)
            if self.hass.services.has_service(domain, name):
                self._call(domain, name, {"title": title, "message": message})
                return
        self._call(
            "persistent_notification", "create",
            {"title": title, "message": message, "notification_id": f"{DOMAIN}_{self.entry.entry_id}_{kind}"},
        )

    def _call(self, domain: str, service: str, data: dict[str, Any]) -> None:
        """Chiama un servizio senza aspettare; se non esiste o fallisce lo si scrive nel registro e basta."""

        async def _run() -> None:
            try:
                await self.hass.services.async_call(domain, service, data, blocking=True)
            except HomeAssistantError as err:
                _LOGGER.warning("Servizio %s.%s non riuscito: %s", domain, service, err)

        self.hass.async_create_task(_run())

    # ------------------------------------------------------------------ dati per le entita' e per la scheda
    @property
    def state(self) -> str:
        return self.tracker.state or STATE_UNAVAILABLE

    @property
    def since(self) -> datetime | None:
        return self.tracker.since

    @property
    def duration_text(self) -> str | None:
        if self.tracker.since is None:
            return None
        return format_duration(dt_util.now() - self.tracker.since)

    @property
    def blocked(self) -> bool:
        return self.blocker.blocked

    def info(self) -> dict[str, Any]:
        return {
            "entry_id": self.entry.entry_id,
            "title": self.entry.title,
            "state": self.state,
            "power": self.power,
            "since": self.since.isoformat() if self.since else None,
            "sources": {
                "power_sensor": self.power_entity,
                "switch": self.switch_entity,
                "energy_sensor": self.energy_entity,
            },
            "settings": self.settings.to_dict(),
        }
