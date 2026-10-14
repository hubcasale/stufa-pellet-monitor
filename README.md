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

Con l'interruttore configurato aggiunge anche:

- `sensor.stufa_a_pellet_modo` (programma / manuale / fuori_programma / timer) con gli attributi `prossima_azione`, `prossimo_evento`, `timer_fino` e `ultima_azione`
- `sensor.stufa_a_pellet_prossimo_evento` (data e ora della prossima accensione o del prossimo spegnimento)
- `switch.stufa_a_pellet_programmazione` per attivare o disattivare la programmazione dalle automazioni

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
- **Programma**: programmazione settimanale con **più fasce al giorno**: per ogni fascia scegli i giorni, l'ora di accensione e quella di spegnimento (se lo spegnimento è prima dell'accensione la fascia finisce il giorno dopo). Sopra le fasce c'è la vista dell'intera settimana. Le fasce che si sovrappongono si uniscono.
- **Timer**: accende subito e spegne dopo 30 minuti, 1, 2, 3, 4, 6 ore o un tempo a scelta; durante il timer le fasce non intervengono.
- **Presa**: accende e spegne l'interruttore (si può nascondere dalle preferenze).
- **Ingranaggio, Preferenze**: sensori, soglie, comportamento, notifiche e colore delle ceramiche (rosso, arancio, avorio). Il pulsante *Suggerisci le soglie dallo storico* le ricava dagli ultimi 14 giorni della potenza. Le preferenze sono le stesse del menu *Configura* dell'integrazione.

## Programma, timer e modalità

La fascia agisce **solo ai cambi**: alle ore indicate accende o spegne l'interruttore, poi non insiste. Se accendi o spegni a mano (pulsante a muro, scheda, stufa), il programma riprende alla fascia successiva. La riga sopra la stufa dice cosa sta succedendo:

| Riga | Significato |
|---|---|
| **Programma attivo** | la programmazione è attiva e la stufa fa quello che prevede; sono indicati il prossimo cambio e l'ora |
| **Manuale** | la programmazione non è attiva |
| **Manuale, fuori programma** | la programmazione è attiva ma la stufa è accesa o spenta contro quanto previsto |
| **Timer** | timer in corso, con l'ora di spegnimento |

Dopo un riavvio di Home Assistant si recupera al massimo l'ultimo cambio degli ultimi 10 minuti. Attivando la programmazione dentro una fascia la stufa non si accende da sola: parte alla fascia successiva. L'interruttore deve essere quello che comanda la stufa; senza interruttore configurato queste funzioni non compaiono.

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
pip install pytest-homeassistant-custom-component home-assistant-frontend
python3 -m pytest -q tests   # logica dello stato e prove dentro un Home Assistant vero
```

`dev/index.html` (dopo `npm run build:dev`) mostra la scheda con un Home Assistant simulato, per vedere la grafica nei cinque stati.

## Licenza

MIT
