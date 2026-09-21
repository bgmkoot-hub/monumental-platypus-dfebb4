# Durfboot

Zelfstandige statische projectsite voor Durfboot: varende werkplaats, ontmoetingsplek en filmset binnen de werktafel van TimeDesk en de maakpraktijk van Bennemans.

## Lokaal werken

Vereist Node.js 22 of nieuwer. Voer `npm install` en daarna `npm run dev` uit. Maak een productieversie met `npm run build`; de uitvoer staat in `dist/`.

## Inhoud aanpassen

- Alle paginatekst staat semantisch gegroepeerd in `index.html`.
- Kleuren, typografie en responsive vormgeving staan in `styles.css`.
- De tijdelijke beelden staan in `images/`. Vervang ze door geoptimaliseerde projectfoto's en pas bron, afmetingen en alt-teksten in `index.html` aan.
- De voorbereidende logboekdata staat in `content/logboek.json`. Nieuwe items krijgen een uniek volgnummer, status en titel. Tot er contentgeneratie is, wordt dezelfde kaart ook in `index.html` toegevoegd. Er is bewust geen CMS.

## Netlify

Netlify leest `netlify.toml`, voert `npm run build` uit en publiceert `dist/`. Er zijn geen omgevingsvariabelen, functies, database, cookies of tracking nodig. De enige externe aanvraag is de lettertype-download van Google Fonts.

Na de eerste publicatie moet `durfboot.timedesk.info` in Netlify handmatig als custom domain worden toegevoegd. Verbind daarna de DNS volgens de instructies van Netlify. Deze repository wijzigt geen DNS.

## Nog aan te leveren

- Definitieve Durfboot-fotografie voor het hero- en detailbeeld.
- Bevestigde technische gegevens, alleen wanneer die openbaar mogen worden.
- Een direct contactadres of specifieke contactpagina. Tot die tijd verwijst de knop naar Bennemans.
- Eerste echte logboekberichten.

## Vervolgpunten

- Koppel echte logboekdetailpagina's zodra de eerste berichten beschikbaar zijn.
- Overweeg lettertypen later lokaal mee te leveren om ook die externe aanvraag te verwijderen.
- Controleer de uiteindelijke projectfoto's op uitsnede, bestandsgrootte en alt-tekst.
