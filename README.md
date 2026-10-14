# Stufa a pellet monitor

Integrazione per Home Assistant che dice **in che stato è la stufa a pellet** guardando solo la potenza assorbita da una presa smart (consumo in watt), con una **scheda Lovelace** ispirata alla scheda del boiler: illustrazione della stufa (Edilkamin Iris), stato, barra della potenza con le soglie, cronologia delle ultime 24 ore, grafici e preferenze configurabili dalla scheda stessa.

Nasce per sostituire un pacchetto YAML (`packages/stufa_pellet.yaml`) con qualcosa di installabile, configurabile dall'interfaccia e provato con i test.

## Come riconosce lo stato

| Stato | Quando |
|---|---|
| **Spenta** | potenza sotto la soglia (predefinita 5 W) |
| **Accensione** | potenza oltre la soglia dell'accenditore (predefinita 250 W) |
| **Spegnimento** | potenza nella fascia della ventola in raffreddamento (predefinita 126–129 W) e, se attivo, interruttore della presa spento |
| **In funzione** | tutto il resto |
| **Non disponibile** | il sensore di potenza non risponde |

Un nuovo stato deve durare qualche secondo (conferma) prima di essere accettato, così i picchi non fanno rimbalzare lo stato. Quando il sensore torna dopo un guasto, le azioni sulla presa restano bloccate per qualche secondo.

## Che cosa crea

Un dispositivo "Stufa a pellet" con:

- `sensor.stufa_a_pellet_stato` (spenta / accensione / accesa / spegnimento / non_disponibile) con attributi `potenza`, `da`, `durata`, `interruttore`, `azioni_bloccate`
- accensioni di oggi, ore in funzione di oggi, ultima accensione, ultimo spegnimento
- energia di oggi (kWh), solo se indichi un contatore di energia
- `binary_sensor` in funzione e azioni bloccate (diagnostica)

Facoltativamente tiene allineata la presa: la accende se la stufa parte da sola e la spegne dopo un periodo di grazia quando la stufa è spenta. Può avvisare con una notifica di Home Assistant o con un servizio `notify.*` a tua scelta.

## Installazione

**HACS** → Integrazioni → menu ⋮ → *Repository personalizzati* → `https://github.com/hubcasale/stufa-pellet-monitor`, categoria *Integrazione* → installa → riavvia Home Assistant.

**A mano**: copia `custom_components/stufa_pellet` nella cartella `custom_components` e riavvia.

Poi *Impostazioni → Dispositivi e servizi → Aggiungi integrazione → Stufa a pellet* e scegli:

1. il **sensore di potenza** (obbligatorio, in W);
2. l'**interruttore** della presa (facoltativo);
3. il **contatore di energia** (facoltativo, kWh).

## La scheda

L'integrazione serve da sola il file della scheda: non serve aggiungere risorse. Aggiungi alla dashboard una scheda manuale:

```yaml
type: custom:stufa-pellet-card
# facoltativi
title: Stufa a pellet
entry_id: ...   # solo se hai più stufe
```

Pulsanti della scheda:

- **Stato**: frasi su cosa sta facendo la stufa e i numeri di oggi.
- **Grafici**: potenza della presa con le linee delle soglie e le fasce dello stato (6 ore, 24 ore, 3 e 7 giorni); passa sopra per leggere i valori.
- **Presa**: accende e spegne l'interruttore (si può nascondere dalle preferenze).
- **Ingranaggio, Preferenze**: sensori, soglie, comportamento, notifiche e colore delle ceramiche (rosso, arancio, avorio). Il pulsante *Suggerisci le soglie dallo storico* le ricava dagli ultimi 14 giorni della potenza. Le preferenze sono le stesse del menu *Configura* dell'integrazione.

## Migrare da `stufa_pellet.yaml`

1. Installa l'integrazione e configurala con gli stessi sensori (nel vecchio pacchetto: `sensor.presa_stufa_pellet_power` e `switch.stufa_pellet`).
2. Se le soglie del pacchetto erano diverse dalle predefinite, impostale dalle preferenze.
3. Sostituisci nelle dashboard il vecchio testo `input_text.stato_stufa_pellet` con `sensor.stufa_a_pellet_stato` (i valori sono `spenta`, `accensione`, `accesa`, `spegnimento`, `non_disponibile`: se una dashboard o un'automazione confronta il testo, controlla che coincida).
4. Controlla per qualche giorno che stato e notifiche si comportino come prima.
5. Togli `packages/stufa_pellet.yaml` e i suoi helper, poi ricarica la configurazione e riavvia.

## Sviluppo

```bash
npm ci
npm run build        # genera custom_components/stufa_pellet/frontend/stufa-pellet-card.js (da committare)
npm test             # test della logica della scheda
python3 -m pytest -q tests   # test della logica dello stato
```

`dev/index.html` (dopo `npm run build:dev`) mostra la scheda con un Home Assistant simulato, per vedere la grafica nei cinque stati.

## Licenza

MIT
