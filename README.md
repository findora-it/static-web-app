# Findora - React Tailwind

## Sommario

- [Prerequisiti](#prerequisiti)
- [Installazione](#installazione)
- [Avvio del Progetto](#avvio-del-progetto)
- [Build per la Produzione](#build-per-la-produzione)
- [Anteprima della Build di Produzione](#anteprima-della-build-di-produzione)
- [Deploy del Progetto](#deploy-del-progetto)
- [Pulizia della build in locale](#pulizia-della-build-in-locale)
- [Hosting](#hosting)
- [Struttura del Progetto](#struttura-del-progetto)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Dipendenze](#dipendenze)
- [File di Configurazione](#file-di-configurazione)

## Prerequisiti

Prima di iniziare, assicurati di avere installato i seguenti strumenti:

- [Node.js](https://nodejs.org/) (versione 14.0 o superiore)
- [npm](https://www.npmjs.com/) o per la gestione dei pacchetti

> [!NOTE]
> Assicurati che Node.js sia aggiornato alla versione 14.0 o superiore per evitare problemi di compatibilità.

## Installazione

Per installare il progetto, segui questi passaggi:

1. Clona il repository:

   ```bash
   git clone https://github.com/findora-it/static-web-app.git
   ```

2. Entra nella directory del progetto:

   ```bash
   cd static-web-app
   ```

> [!IMPORTANT]
> Non dimenticare di spostarti nella directory `static-web-app` prima di eseguire `npm install`, altrimenti l'installazione delle dipendenze fallirà.

3. Installa le dipendenze necessarie:

   ```bash
   npm install
   ```

## Avvio del Progetto

Per avviare il progetto in modalità di sviluppo:

```bash
npm start
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

## Deploy del Progetto

Per effettuare il deploy del progetto su GitHub Pages:

1. Esegui il comando predeploy per impostare la variabile di ambiente NODE_ENV su production e creare una build di produzione:

   ```bash
   npm run predeploy
   ```

2. Esegui il comando deploy per pubblicare la build di produzione su GitHub Pages utilizzando il contenuto della directory `dist`:

   ```bash
   npm run deploy
   ```

   > [!WARNING]
   > Prima di eseguire il deploy, verifica che il tuo repository GitHub sia configurato correttamente per supportare GitHub Pages. Eventuali errori nella configurazione potrebbero impedire la pubblicazione corretta.

Questi comandi utilizzano gh-pages per pubblicare i contenuti della directory `dist` su [GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages). Assicurati di avere configurato correttamente il repository GitHub per supportare il deploy.

## Pulizia della Build in Locale

Per rimuovere la build di produzione esistente:

```bash
npm run clean
```

Questo comando rimuove la directory `dist` per assicurare una build pulita.

> [!TIP]
> Prima di generare una nuova build di produzione, esegui `npm run clean` per assicurarti che non ci siano file vecchi che possano causare conflitti.

## Hosting

Il sito è hostato su GitHub Pages, mentre il dominio personalizzato è gestito da Aruba. Per collegare il dominio personalizzato e abilitare HTTPS, segui le guide ufficiali di GitHub e Aruba ai link seguenti:

- [Guida GitHub Pages per configurare un dominio personalizzato](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Guida GitHub Pages per configurare il certificato HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Guida Aruba per la configurazione DNS](https://guide.hosting.aruba.it/servizi-dominio/gestione-dns.aspx)

> [!IMPORTANT]
> Seguire correttamente le guide di GitHub e Aruba per la configurazione del dominio e del certificato HTTPS è fondamentale per garantire che il sito sia sicuro e professionale.

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

> [!TIP]
> Utilizza `@typescript-eslint` per identificare problemi nel codice durante lo sviluppo. Questo ti aiuterà a mantenere il progetto più stabile e facile da manutenere.

## File di Configurazione

- **package.json** - Contiene le informazioni di configurazione del progetto e gli script utili.
- **vite.config.js** - Configurazione di Vite per gestire il build e il server di sviluppo.
- **.eslintrc** - File di configurazione di ESLint per le regole di linting.
