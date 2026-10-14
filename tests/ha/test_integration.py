"""Prove dentro un Home Assistant vero (pytest-homeassistant-custom-component): configurazione, entità, azioni sulla presa, comandi per la scheda."""
from datetime import timedelta

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from homeassistant.util import dt as dt_util
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_fire_time_changed

from custom_components.stufa_pellet.const import DOMAIN

POWER = "sensor.presa_stufa_pellet_power"
SWITCH = "switch.stufa_pellet"


async def _setup(hass: HomeAssistant, power: str = "1.0", switch: str = "off", options: dict | None = None) -> MockConfigEntry:
    hass.states.async_set(POWER, power, {"unit_of_measurement": "W", "device_class": "power"})
    hass.states.async_set(SWITCH, switch)
    entry = MockConfigEntry(domain=DOMAIN, title="Stufa a pellet", data={"power_sensor": POWER, "switch": SWITCH}, options=options or {})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


def _state_entity(hass: HomeAssistant, entry: MockConfigEntry) -> str:
    from homeassistant.helpers import entity_registry as er

    eid = er.async_get(hass).async_get_entity_id("sensor", DOMAIN, f"{entry.entry_id}_stato")
    assert eid
    return eid


async def test_setup_and_off_state(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    st = hass.states.get(_state_entity(hass, entry))
    assert st is not None and st.state == "spenta"
    assert st.attributes["potenza"] == 1.0


async def test_ignition_then_running(hass: HomeAssistant) -> None:
    entry = await _setup(hass, options={"confirm_seconds": 0})
    eid = _state_entity(hass, entry)
    hass.states.async_set(POWER, "300", {"unit_of_measurement": "W"})
    await hass.async_block_till_done()
    assert hass.states.get(eid).state == "accensione"
    hass.states.async_set(POWER, "70", {"unit_of_measurement": "W"})
    await hass.async_block_till_done()
    assert hass.states.get(eid).state == "accesa"


async def test_unavailable_sensor(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    eid = _state_entity(hass, entry)
    hass.states.async_set(POWER, "unavailable")
    await hass.async_block_till_done()
    assert hass.states.get(eid).state == "non_disponibile"


async def test_switch_follows_ignition(hass: HomeAssistant) -> None:
    """La stufa parte da sola con la presa spenta: la presa si deve accendere."""
    calls = []

    async def _turn_on(call):
        calls.append(call.data["entity_id"])

    hass.services.async_register("homeassistant", "turn_on", _turn_on)
    entry = await _setup(hass, options={"confirm_seconds": 0})
    hass.states.async_set(POWER, "300", {"unit_of_measurement": "W"})
    await hass.async_block_till_done()
    async_fire_time_changed(hass, dt_util.utcnow() + timedelta(seconds=60))
    await hass.async_block_till_done()
    assert entry.state.value == "loaded"
    assert any(SWITCH in (c if isinstance(c, list) else [c]) for c in calls)


async def test_websocket_info_and_update(hass: HomeAssistant, hass_ws_client) -> None:
    entry = await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json({"id": 1, "type": "stufa_pellet/info"})
    res = await client.receive_json()
    assert res["success"]
    assert res["result"]["state"] == "spenta"
    assert res["result"]["sources"]["power_sensor"] == POWER
    assert "stato" in res["result"]["entities"]
    assert res["result"]["settings"]["ignition_above"] == 250

    await client.send_json({"id": 2, "type": "stufa_pellet/update", "settings": {"ignition_above": 260, "tile_color": "arancio"}})
    res = await client.receive_json()
    assert res["success"]
    await hass.async_block_till_done()
    assert entry.options["ignition_above"] == 260
    assert entry.options["tile_color"] == "arancio"

    # senza sensore di potenza non si salva
    await client.send_json({"id": 3, "type": "stufa_pellet/update", "sources": {"power_sensor": ""}})
    res = await client.receive_json()
    assert not res["success"]


async def test_config_flow(hass: HomeAssistant) -> None:
    hass.states.async_set(POWER, "1", {"unit_of_measurement": "W", "device_class": "power"})
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": "user"})
    assert result["type"] == "form"
    result = await hass.config_entries.flow.async_configure(result["flow_id"], {"name": "Stufa", "power_sensor": POWER})
    assert result["type"] == "create_entry"
    assert result["data"] == {"power_sensor": POWER}
    # doppia configurazione dello stesso sensore
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": "user"})
    result = await hass.config_entries.flow.async_configure(result["flow_id"], {"name": "Altra", "power_sensor": POWER})
    assert result["type"] == "abort"


async def test_options_flow(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    result = await hass.config_entries.options.async_init(entry.entry_id)
    assert result["type"] == "form"


async def test_card_is_served(hass: HomeAssistant, hass_client) -> None:
    await _setup(hass)
    client = await hass_client()
    resp = await client.get("/stufa_pellet_static/stufa-pellet-card.js")
    assert resp.status == 200
    assert "stufa-pellet-card" in await resp.text()
