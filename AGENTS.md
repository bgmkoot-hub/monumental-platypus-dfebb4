# Projectgids voor agents

## Architectuur

Durfboot is een frameworkloze statische site. `index.html` bevat de pagina, `styles.css` de visuele laag en `site.js` het mobiele menu en dynamische jaartal. `/reserveren` bevat een statisch aanvraagformulier; `reserveren/reserveren.js` opent uitsluitend e-mail- of WhatsApp-berichten in de browser. `scripts/build.mjs` kopieert publiceerbare bronnen naar `dist/`. Netlify-configuratie staat in `netlify.toml`.

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

De actuele basis is de goedgekeurde restyling ‘Durfboot wordt Waterbus’, met petrolgroene hero, pinguïn, interieurinleg en aangepast Waterbus-logo. Behoud deze beelden en bestaande secties. De herkomst staat in `content/waterbus-basis.json`. Gebruik nooit de eerdere placeholder-homepage als ontwikkelbasis.

Contact loopt rechtstreeks via bgmkoot@gmail.com en 06 1076 1118. De reserveringspagina slaat geen formuliergegevens op en opent alleen een bericht dat de bezoeker zelf verstuurt. Een aanvraag is pas definitief na persoonlijke bevestiging.
