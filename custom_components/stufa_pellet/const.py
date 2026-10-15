"""Costanti dell'integrazione Stufa a pellet."""
from homeassistant.const import Platform

DOMAIN = "stufa_pellet"
PLATFORMS = [Platform.SENSOR, Platform.BINARY_SENSOR, Platform.SWITCH]

CONF_NAME = "name"
CONF_POWER = "power_sensor"
CONF_SWITCH = "switch"      # interruttore che accende e spegne la stufa (per esempio lo Shelly sul contatto della scheda)
CONF_PLUG = "plug"          # interruttore della presa che alimenta la stufa: se ne mostra solo lo stato
CONF_ENERGY = "energy_sensor"

STORAGE_VERSION = 1
CARD_URL = "/stufa_pellet_static/stufa-pellet-card.js"
CARD_FILE = "frontend/stufa-pellet-card.js"

SIGNAL_UPDATE = f"{DOMAIN}_update_{{}}"   # formato con l'id della voce di configurazione
TICK_SECONDS = 20
