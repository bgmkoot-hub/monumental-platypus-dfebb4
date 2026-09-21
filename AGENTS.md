# Projectgids voor agents

## Architectuur

Durfboot is een frameworkloze statische site. `index.html` bevat de pagina, `styles.css` de visuele laag en `site.js` alleen het mobiele menu en dynamische jaartal. `scripts/build.mjs` kopieert publiceerbare bronnen naar `dist/`. Netlify-configuratie staat in `netlify.toml`.

## Mappen

- `images/`: tijdelijke lokale projectbeelden; voeg nooit willekeurige stockfoto's toe.
- `content/`: gestructureerde lokale brondata voor toekomstige logboekuitbreiding.
- `scripts/`: kleine buildhulpmiddelen.

## Conventies

- Schrijf Nederlandse, concrete teksten zonder marketingjargon.
- Presenteer Durfboot als persoonlijk maakproject binnen TimeDesk/Bennemans, nooit als onderdeel van Stichting Durfhuis.
- Voeg geen onbevestigde gegevens over boot, ligplaats, capaciteit, vaargebied of beschikbaarheid toe.
- Houd HTML semantisch, toetsenbordtoegankelijk en mobile-first.
- Voeg geen tracking, cookies, CMS, database, reserveringen of betalingen toe zonder expliciete opdracht.

De fotografie is bewust vervangen door lokale technische beeldvlakken die duidelijk als tijdelijk zijn gemarkeerd. Het contact loopt via de Bennemans-site omdat er geen bevestigd e-mailadres in deze repository stond. Logboekkaarten staan in HTML voor robuustheid; de parallelle JSON-bron maakt een latere lokale contentbuild eenvoudig.
