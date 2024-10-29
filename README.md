# Findora - React Tailwind

## Sommario

- [Panoramica](#panoramica)
- [Prerequisiti](#prerequisiti)
- [Installazione](#installazione)
- [Avvio del Progetto](#avvio-del-progetto)
- [Build per la Produzione](#build-per-la-produzione)
- [Anteprima della Build di Produzione](#anteprima-della-build-di-produzione)
- [Linting](#linting)
- [Deploy del Progetto](#deploy-del-progetto)
- [Struttura del Progetto](#struttura-del-progetto)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Dipendenze](#dipendenze)
- [Supporto Browser](#supporto-browser)
- [File di Configurazione](#file-di-configurazione)
- [Informazioni Aggiuntive](#informazioni-aggiuntive)

## Panoramica

Findora è un progetto sviluppato utilizzando React, Tailwind CSS, e Vite come tool di build. Questo README ha lo scopo di fornire una guida completa per installare, configurare e avviare il progetto.

## Prerequisiti

Prima di iniziare, assicurati di avere installato i seguenti strumenti:

- [Node.js](https://nodejs.org/) (versione 14.0 o superiore)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) per la gestione dei pacchetti

## Installazione

Per installare il progetto, segui questi passaggi:

1. Clona il repository:

   ```bash
   git clone <URL_REPOSITORY>
   ```

2. Entra nella directory del progetto:

   ```bash
   cd findora_-_react_tailwind
   ```

3. Installa le dipendenze necessarie:
   ```bash
   npm install
   ```
   oppure, se preferisci usare yarn:
   ```bash
   yarn install
   ```

## Avvio del Progetto

Per avviare il progetto in modalità di sviluppo:

```bash
npm start
```

oppure, usando yarn:

```bash
yarn start
```

Questo comando utilizza Vite per avviare un server di sviluppo e permette di visualizzare il progetto nel browser all'indirizzo [http://localhost:5173](http://localhost:5173).

## Build per la Produzione

Per creare una build ottimizzata per la produzione:

```bash
npm run build
```

Il comando sopra utilizza Vite per creare la build di produzione all'interno della directory `dist`.

## Anteprima della Build di Produzione

Puoi eseguire una preview della build di produzione utilizzando il comando:

```bash
npm run preview
```

Questo avvierà un server che simula la versione di produzione del progetto.

## Linting

Per garantire la qualità del codice, è possibile eseguire ESLint per controllare eventuali errori e seguire le convenzioni stilistiche definite:

```bash
npm run lint
```

Il comando ESLint è configurato per interrompere in caso di errori e non accetta più di zero avvisi (`--max-warnings 0`).

## Deploy del Progetto

Per effettuare il deploy del progetto su GitHub Pages:

1. Esegui il comando `predeploy` per impostare la variabile di ambiente `NODE_ENV` su `production` e creare una build di produzione:

   ```bash
   npm run predeploy
   ```

2. Esegui il comando `deploy` per pubblicare la build di produzione su GitHub Pages utilizzando il contenuto della directory `dist`:
   ```bash
   npm run deploy
   ```

Questi comandi utilizzano `gh-pages` per pubblicare i contenuti della directory `dist` su GitHub Pages. Assicurati di avere configurato correttamente il repository GitHub per supportare il deploy.

## Pulizia della Build

Per rimuovere la build di produzione esistente:

```bash
npm run clean
```

Questo comando rimuove la directory `dist` per assicurare una build pulita.

## Struttura del Progetto

- `src/` - Contiene il codice sorgente principale del progetto.
- `public/` - Contiene file statici come immagini e favicon.
- `dist/` - Directory di output per la build di produzione.

## Tecnologie Utilizzate

- **React** - Libreria per costruire l'interfaccia utente.
- **Tailwind CSS** - Framework CSS per il design.
- **Vite** - Tool di build per progetti veloci e performanti.
- **TypeScript** - Superset di JavaScript per un typing più robusto.

## Dipendenze

### Dipendenze di Produzione

- `react`, `react-dom` - Fondamentali per la UI.
- `react-router-dom` - Per la gestione del routing nel progetto.
- `tailwindcss-animated` - Per facilitare animazioni con Tailwind.
- `typescript` - Per una maggiore sicurezza del codice.

### Dipendenze di Sviluppo

- `@typescript-eslint` - Linter per TypeScript.
- `vite` - Tool di build per l'avvio del progetto.
- `tailwindcss`, `postcss`, `autoprefixer` - Per la configurazione del CSS.
- `gh-pages` - Per il deploy su GitHub Pages.
- `cross-env` - Per gestire le variabili d'ambiente in modo cross-platform.

## Supporto Browser

Il progetto è compatibile con i seguenti browser:

- **Produzione**: tutti i browser moderni con quota di mercato superiore allo 0.2% e che non sono considerati "dead" (non più supportati).
- **Sviluppo**: Ultima versione di Chrome, Firefox e Safari.

## File di Configurazione

- **`package.json`** - Contiene le informazioni di configurazione del progetto e gli script utili.
- **`vite.config.js`** - Configurazione di Vite per gestire il build e il server di sviluppo.
- **`.eslintrc`** - File di configurazione di ESLint per le regole di linting.

## Informazioni Aggiuntive

- Usa `npm run start` per avviare l'ambiente di sviluppo.
- Le build per la produzione possono essere deployate direttamente su server statici.
- ESLint e TypeScript sono configurati per garantire qualità e robustezza del codice.
