# Full de ruta de Calçotarra

Revisat el 26 de novembre de 2026 sobre Calçotarra 0.1 (`c5d5ced`). El desplegament actiu és GitHub Pages des de l’arrel de `main`. [Obre Calçotarra](https://urivalles.github.io/calcotarra/)

## Estat de les funcionalitats

### Biblioteca, còpies i cerca

| Funcionalitat | Estat | Abast actual |
| --- | --- | --- |
| Afegir, editar, eliminar, cercar i marcar com a preferida | Implementada | Cerca per títol o artista sense distingir accents. |
| Organització per artista i títol | Parcial | La llista s’ordena per títol. Queden pendents la vista o l’ordre per artista. |
| Repertoris personalitzats | Implementada | Es poden crear i eliminar, i afegir, treure i reordenar cançons. |
| Versions personalitzades | Implementada | Es poden crear diverses versions, triar-les i editar-ne el contingut. Desar una versió conserva l’original. |
| Conservació de l’original | Parcial | Editar l’original reemplaça el text. Importar una cançó amb el mateix identificador pot reemplaçar tant l’original com les versions. |
| Importació i exportació JSON | Parcial | Importa cançons, versions i repertoris. L’exportació inclou les preferències i la importació només restaura la biblioteca. Una entrada invàlida pot deixar un canvi parcial en memòria que es desi amb una acció posterior. |
| Descoberta i importació per enganxat | Implementada | Obre cerques de Google i de Google restringides a Ultimate Guitar. Permet enganxar acords i lletra i anotar-ne la font. |
| Importació de text i ChordPro | Parcial | Un fitxer de text o ChordPro obre una cançó per revisar. El visor interpreta els acords entre claudàtors. Queda pendent interpretar les metadades i directives de ChordPro. |
| Importació massiva i dossiers PDF | Pendent | Cal afegir un flux local amb previsualització i revisió abans de desar. |

### Interpretació

| Funcionalitat | Estat | Abast actual |
| --- | --- | --- |
| Transposició per semitons | Implementada | Transposa les arrels i els baixos quan reconeix la notació de l’acord. |
| Tonalitat original i actual, i celleta | Parcial | Quan s’ha introduït la tonalitat, es mostra a la capçalera i es calcula la transposada. La celleta es desa a la versió com a anotació. Queda pendent indicar com afecta la tonalitat que sona. |
| Simplificació | Parcial | Elimina el baix indicat a les inversions. Queden pendents les substitucions opcionals d’acords complexos. |
| Alineació d’acords i lletra | Parcial | Admet línies separades d’acords i acords dins la lletra. Cal ampliar les proves d’alineació amb espais, tabulacions i canvis de longitud en transposar. |
| Diagrames de digitació i diccionari | Parcial | El visor mostra digitacions d’acords coneguts i el diccionari en llista una selecció. La cobertura és desigual entre notes enharmòniques, com `C#` i `Db`. A les inversions es mostra l’acord base. |
| Desplaçament automàtic, mida del text i temes | Implementada | Velocitat regulable, controls de mida i modes clar i fosc. |
| Pantalla completa | Parcial | El mode de concentració amaga la capçalera i la navegació. Queda pendent la pantalla completa del navegador quan el dispositiu la permeti. |
| Impressió i PDF | Implementada | La vista d’impressió amaga els controls i permet desar el PDF amb el navegador. |

### Eines i plataforma

| Funcionalitat | Estat | Abast actual |
| --- | --- | --- |
| Metrònom i Tap Tempo | Implementada | BPM regulables, pulsacions per compàs i indicació visual. |
| Afinador cromàtic | Parcial | Processa l’àudio del micròfon en local i mostra nota i desviació. S’ha verificat amb un senyal simulat. Queda pendent provar-lo amb micròfons reals i permisos de navegadors mòbils. |
| Temporitzador de pràctica | Pendent | Cal afegir inici, pausa i reinici de la sessió. |
| PWA, disseny responsive i ús offline | Implementada | Manifest, icones i service worker per a l’aplicació estàtica. L’obertura offline funciona després de la primera càrrega. Queda pendent comprovar la instal·lació en dispositius reals. |
| Emmagatzematge local | Implementada | Cançons, repertoris i preferències es desen a `localStorage` per origen. Hi ha una còpia JSON separada del codi públic. |
| Sincronització entre dispositius | Pendent | Ara el trasllat es fa exportant i important el JSON. |

## Arquitectura i ordre de treball

L’HTML, el CSS, la interfície, l’àudio, els acords i l’accés a les dades conviuen a `index.html`. El manifest, les icones i `sw.js` ja estan separats. La publicació estàtica és suficient per al funcionament actual i permet extreure mòduls de JavaScript natius per etapes.

1. **Protegir la biblioteca.** Valida tota la importació abans d’aplicar-la i desa el resultat d’una sola vegada. Conserva l’original i les versions en cas de conflicte d’identificador. Separa la fusió de cançons de la restauració completa de la còpia i informa si falla el desament. Mantén la compatibilitat amb `calcotarra.v1` i amb els JSON existents. Comprova amb dades sintètiques les importacions invàlides, els conflictes i una exportació seguida d’una restauració.
2. **Separar el codi per responsabilitats.** Extreu primer l’emmagatzematge i la validació de còpies. Separa després les funcions musicals pures, com el reconeixement i la transposició d’acords, de les vistes i els controls. Extreu els estils i els controladors d’àudio quan es treballi en aquestes parts. Actualitza la llista i la versió de la memòria cau de la PWA quan canviïn els recursos que necessita per arrencar offline.
3. **Completar els fluxos d’ús.** Afegeix l’organització per artista, millora l’alineació, la simplificació, la tonalitat amb celleta i la cobertura de digitacions. Completa la pantalla completa mantenint el mode de concentració on calgui. Afegeix el temporitzador i verifica l’àudio i la instal·lació en dispositius reals.
4. **Ampliar la importació i preparar la sincronització.** Separa la lectura de cada format de la validació i la confirmació de la importació. Incorpora PDF i lots quan es pugui revisar el resultat abans de desar-lo. Defineix revisions, conflictes i eliminacions abans d’afegir sincronització. Valora un canvi a IndexedDB si el volum de dades o les transaccions ho requereixen.

GitHub Pages continua com a desplegament actiu. Netlify és l’opció preferida si es trasllada l’allotjament i pot publicar des del mateix repositori. Un canvi d’origen necessita un trasllat de la biblioteca mitjançant còpia de seguretat. [Documentació de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [Documentació de Netlify](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)

## Verificació de la versió 0.1

- En Chromium amb amplades de mòbil i escriptori, s’han comprovat els fluxos de biblioteca, cerca, favorits, versions, repertoris, importació i exportació, transposició, diagrames, desplaçament, mode de concentració, PDF i metrònom. L’afinador ha detectat un senyal simulat de 440 Hz. L’aplicació ha reobert la biblioteca de prova amb el servidor local desconnectat.
- Al lloc públic s’han comprovat HTTPS, el nom visible, el manifest, les icones, l’activació del service worker i el `404` del JSON personal. No s’han fet servir cançons reals a les proves de navegador.
