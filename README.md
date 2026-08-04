# Recruiter CRM — App desktop (v3)

CRM professionale per recruiter, completamente offline, installabile come
programma vero su Windows.

## Funzioni principali

- **Candidati**: anagrafica completa ed editabile, vista Lista o **Kanban**
  trascinabile, fonte del candidato, azienda cliente (per chi lavora anche
  per conto terzi), valutazione a stelle, consenso privacy GDPR con avviso
  se mancante, controllo duplicati (telefono/email) alla creazione
- **Pipeline** interamente personalizzabile da dentro il programma: aggiungi,
  rinomina, riordina o elimini le fasi senza toccare il codice
- **Richiami**: promemoria di chiamata con notifica nativa di Windows
- **CV**: caricamento PDF/DOCX con estrazione automatica delle skill
- **Fogli**: crea fogli di lavoro liberi (es. "Agosto"), scegli quante colonne
  all'inizio, poi configuri ogni colonna con un tipo (Testo, Numero, Data, o
  **Scelta con elenco di convalida** — esattamente come "Dati > Convalida
  dati" di Excel, valori separati da `;`). Puoi **copiare un'intera riga o
  foglio e incollarlo in Excel**, e viceversa incollare righe copiate da
  Excel direttamente nella griglia (Ctrl+V su una cella)
- **Grafici**: distribuzione candidati per fase, andamento assunzioni per
  mese, distribuzione per fonte — disegnati internamente, funzionano anche
  senza internet
- **Template messaggi**: modelli per LinkedIn/email con segnaposto che
  pescano automaticamente dai tuoi dati recruiter e da quelli del candidato
- **Backup**: oltre al backup manuale (salva/ripristina un file quando
  vuoi), il programma tiene in automatico le ultime 10 copie di sicurezza
  ad ogni salvataggio e alla chiusura — consultabili e ripristinabili dal
  pulsante "Backup automatici" nella sezione Candidati
- **Import/Export Excel** dell'anagrafica candidati
- Tasti **Riavvia** ed **Esci** sempre disponibili nel menu laterale

## Come generare l'installer .exe

Serve **Node.js** (nodejs.org, versione LTS).

1. Apri il Prompt dei comandi nella cartella `crm-desktop`
2. `npm install` (richiede internet, qualche minuto)
3. `npm run dist`
4. Trovi l'installer in `dist\Recruiter CRM Setup 3.0.0.exe`

Doppio clic per installare: icona su desktop e menu Start, come un
programma normale.

## Uso senza generare l'installer

Dopo `npm install`, esegui `npm start`.

## Dove sono salvati i dati

Tutto in `%APPDATA%\Recruiter CRM\`:
- `candidati.json` — anagrafica candidati
- `settings.json` — pipeline, dati recruiter, template
- `fogli.json` — i tuoi fogli personalizzati
- `cv\` — i CV caricati
- `backup-automatici\` — le ultime 10 copie di sicurezza automatiche

## Aggiornamenti automatici (opzionale, come un software vero)

Il programma può controllare da solo se esiste una versione più recente e
proporre di scaricarla e installarla, esattamente come Slack o Discord.
Serve però un posto online dove pubblichi le nuove versioni.

### Configurazione (una tantum)

1. Crea un account GitHub gratuito (github.com) se non ne hai uno
2. Crea una repository (può essere privata) chiamata ad es. `recruiter-crm-releases`
3. In `package.json`, nel blocco `"publish"`, sostituisci `TUO-NOME-UTENTE-GITHUB`
   con il tuo nome utente GitHub (il nome della repo puoi lasciarlo o cambiarlo,
   basta che corrisponda)
4. Crea un **token di accesso personale** su GitHub (Settings → Developer
   settings → Personal access tokens → Generate new token, con permesso
   "repo"). Copialo, non lo rivedrai più
5. Nel Prompt dei comandi, prima di pubblicare, imposta il token:
   ```
   set GH_TOKEN=il-tuo-token-qui
   ```

### Ogni volta che vuoi rilasciare un aggiornamento

1. Modifica il codice come vuoi
2. In `package.json`, alza il numero di `"version"` (es. da 3.0.0 a 3.1.0) —
   **fondamentale**: senza questo passo il programma non si accorge che è
   cambiato qualcosa
3. Esegui:
   ```
   npm run publish
   ```
4. Aspetta che finisca (carica il file su GitHub Releases in automatico)

### Cosa vedono i tuoi colleghi

Ogni volta che aprono il programma (o cliccano "Controlla aggiornamenti" nel
menu laterale), se c'è una versione più recente pubblicata compare una
finestra: "È disponibile la versione X — Scarica e installa / Più tardi".
Se scelgono di scaricare, alla fine viene chiesto se riavviare subito per
installare. I dati dei candidati non vengono mai toccati da un aggiornamento.

Nota: serve connessione a internet sul PC di chi usa il programma per questa
funzione — il resto del CRM continua a funzionare offline come sempre.

