# DOVAC - websiteconcept

Een moderniseringsconcept van de DOVAC-website, hersteld uit een Hermes-sessie en daarna doorgebouwd.

## Direct online zetten via GitHub Pages

1. Maak een repository, bijvoorbeeld `dovac`.
2. Pak dit ZIP-bestand uit en zet de mapinhoud van `dovac/` in de hoofdmap van de repository. Let op: `index.html` moet in de root staan.
3. Commit en push naar de `main`-branch:

   ```sh
   git add .
   git commit -m "DOVAC websiteconcept"
   git push origin main
   ```

4. Ga in GitHub naar **Settings -> Pages**.
5. Kies bij **Source**: *Deploy from a branch*, branch `main`, map `/ (root)`.
6. Wacht een minuut. De site staat dan op:

   ```
   https://<gebruikersnaam>.github.io/<repository>/
   ```

Het bestand `.nojekyll` zorgt dat GitHub Pages de bestanden zonder extra verwerking serveert.

## Op je computer bekijken

Dubbelklik `index.html`, of open het in je browser. Er is geen installatie of internet nodig.

## De React-versie draaien

De map `src/` bevat de React-broncode van hetzelfde concept.

```sh
npm install
npm run dev
```

Gebruik een recente Node.js-versie die past bij Vite 8 (22.12+ aanbevolen).

Let op het basispad: de React-app gebruikt standaard `/dovac/`. Host je de app op het hoofddomein, bouw dan met `VITE_BASE_PATH=/`.

```sh
npm run build
```

## Wat erin zit

- Zeven pagina's plus productdetailpagina's: home, assortiment, onderhoud en reparaties, datasheets, FAQ, over ons en contact.
- Volledig assortiment: 7 hoofdcategorieen met 35 subcategorieen, met filter en zoekveld. Elke categorie verwijst naar de actuele productpagina bij DOVAC.
- Datasheets op aanvraag: 14 vloeistofringdatasheets, klauwendocumenten met reserveonderdelenlijsten en 10 documentatiecategorieen. Elk item opent de echte aanvraagpagina op dovac.nl of een voorgevuld e-mailconcept.
- Contactformulier dat een e-mailconcept maakt; er wordt niets naar een server verzonden.
- Donkere en lichte weergave, animaties en een rustige modus voor kleinere schermen.

## Nog te doen voor livegang

- **Bedrijfsfoto's ontbreken.** De site gebruikt duidelijk gemarkeerde conceptvisuals. Vervang de beelden in `public/images/` door de originele foto's en het logo.
- **Geen echte datasheets.** DOVAC publiceert de PDF's niet openbaar, dus er staan geen technische specificaties in de site. De pagina verwijst naar de aanvraagprocedure.
- **Links controleren.** De categorie- en documentlinks volgen de adresstructuur van dovac.nl; test ze voor publicatie.
- **Metadata.** De pagina's staan op `noindex, nofollow`. Haal dat weg zodra de site goedgekeurd en publiek is.
- **Tekst en claims.** Bedrijfshistorie, bereikbaarheid en garantieclaims moeten door DOVAC worden bevestigd.
