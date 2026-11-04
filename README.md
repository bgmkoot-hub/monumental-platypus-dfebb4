# Durfboot wordt Waterbus

Frameworkloze statische projectsite, met de goedgekeurde petrolgroene Waterbus-restyling, originele hero met pinguïn en interieurinleg en het aangepaste Waterbus-logo. Durfboot is een persoonlijk maakproject binnen TimeDesk / Bennemans.

## Actuele ontwikkelbasis

De aanvankelijk aanwezige broncode bevatte de oude vormgeving. De goedgekeurde versie is vóór de reserveringsuitbreiding teruggehaald uit de vaste deploy https://6aeb1b8d682944fa6af15bf8--monumental-platypus-dfebb4.netlify.app. `content/waterbus-basis.json` legt de herkomst en SHA-256-controles van die basis vast. Door Netlify geïnjecteerde preview-scripts en previewmetadata zijn niet overgenomen.

Deze wijziging bevat de volledige herstelde basis plus de reserveringspagina en herstelde contactgegevens. Beoordeel deze samen in één deploy-preview. Voeg daarna de volledige wijzigingsbranch samen naar `main`, inclusief HTML, CSS, JavaScript, afbeeldingen, buildscript en documentatie. Gebruik bij conflicten niet de oude homepage van `main`: behoud de Waterbus-versie en controleer de hero, het logo en alle secties. Begin toekomstige wijzigingen vanuit de bijgewerkte `main`.

Er is in deze wijziging geen productiepublicatie uitgevoerd. Het samenvoegen naar `main` kan de bestaande automatische productie-deploy starten; doe dit pas na goedkeuring van de preview.

## Bestanden

- `index.html`: vernieuwde homepage en directe contactlinks.
- `reserveren/index.html`: aanvraagpagina op `/reserveren`.
- `reserveren/reserveren.js`: valideert het formulier en opent een lokaal samengesteld mail- of WhatsApp-bericht; de bezoeker verstuurt dat zelf.
- `styles.css`: gedeelde huisstijl en responsive navigatie/formulier.
- `site.js`: uitklapmenu, Escape-bediening en jaartal.
- `images/durfboot-hero*.webp` en `images/waterbus-logo.png`: goedgekeurde beelden.
- `scripts/build.mjs`: kopieert de statische site, inclusief reserveringspagina, naar `dist/`.

## Lokaal werken

Node.js 22 of nieuwer. Installeer met `npm install`. Gebruik `netlify dev --port 8889` voor de lokale site. Netlify voert de build automatisch uit volgens `netlify.toml`.

Er zijn geen formulierinzendingen, accounts, database, betalingen of beschikbaarheidskalender. Formuliergegevens worden uitsluitend gebruikt om een berichtlink in de browser te maken. Er wordt geen ontvangst- of reserveringsbevestiging getoond. Contact: bgmkoot@gmail.com en 06 1076 1118.
