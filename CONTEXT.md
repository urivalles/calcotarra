# Context compartit de Calçotarra

Aquest fitxer recull les decisions i preferències vigents per reprendre el projecte des de ChatGPT, Codex Cloud o Codex a Visual Studio Code. La versió dels fitxers a GitHub és el punt de partida compartit. Les normes de treball i l’estat de les tasques es mantenen als documents corresponents. [AGENTS.md](AGENTS.md) · [ROADMAP.md](ROADMAP.md)

## Producte i experiència d’ús

- El nom visible és **Calçotarra** i el repositori es diu `calcotarra`. És un cançoner de guitarra gratuït, sense publicitat i en català, inspirat en els fluxos de cerca i interpretació d’Ultimate Guitar.
- El mòbil té prioritat. L’aplicació també ha de funcionar bé en tauleta i ordinador. La llegibilitat de la lletra i els acords, els controls durant la interpretació i l’estabilitat guien els canvis visuals.
- Cada cançó ha de conservar un original recuperable i admetre versions personalitzades. Els favorits i els repertoris formen part de la biblioteca personal.
- La descoberta obre cerques externes. La importació local i l’enganxat de text permeten afegir contingut que l’usuari tingui dret a fer servir. La importació massiva de dossiers PDF queda per a una fase posterior amb previsualització abans de desar.
- El tutorial de Biblioteca i Ajustos presenta l’enganxat i els fitxers de text o ChordPro per afegir cançons, i el JSON com a còpia de la biblioteca. L’exemple obre l’editor perquè es pugui provar abans de desar.

## Arquitectura i dades

- Es manté la PWA estàtica existent i s’evoluciona per etapes. L’edició directa de l’original encara ha de conservar una còpia recuperable. La interfície, la lògica musical i l’emmagatzematge es poden separar progressivament amb mòduls natius del navegador.
- En importar JSON, les entrades existents tenen prioritat en les col·lisions d’identificador. Es poden afegir versions i cançons de repertori noves. La biblioteca s’actualitza després de validar i desar tota la importació.
- L’aplicació ha de funcionar sense connexió després de la primera càrrega. Es mantenen les rutes relatives, el manifest i la memòria cau dels recursos de l’aplicació. Es prioritzen les API natives i s’eviten les dependències i els serveis de pagament innecessaris.
- Actualment la biblioteca es desa al navegador, a `localStorage` amb la clau `calcotarra.v1`. La còpia JSON personal es manté a `json/` fora de Git. Les actualitzacions han de conservar les dades i la compatibilitat amb les còpies existents.
- La biblioteca es trasllada entre dispositius o dominis exportant i important una còpia JSON. La sincronització futura de la biblioteca és una funcionalitat pendent, independent de la sincronització del codi amb GitHub.

## Publicació i continuïtat

- `urivalles/calcotarra` és el repositori públic compartit. GitHub Pages publica l’arrel de `main` sense compilació. Netlify és l’opció preferida si es decideix traslladar l’allotjament, amb un pla previ per conservar les biblioteques del navegador. [Calçotarra a GitHub Pages](https://urivalles.github.io/calcotarra/)
- Es minimitzen els passos manuals. Cada entorn de treball ha de poder reprendre la feina a partir del codi, les decisions i l’estat de les proves que s’hagin sincronitzat amb GitHub. Els documents compartits recullen acords tècnics i de producte que es poden publicar.
