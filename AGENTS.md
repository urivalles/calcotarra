# Calçotarra

## Objectiu

Calçotarra és un cançoner de guitarra personal inspirat en Ultimate Guitar. L’aplicació és gratuïta, sense publicitat i en català. Ha de poder-se fer servir amb comoditat mentre es toca la guitarra en un mòbil, una tauleta o un ordinador. Prioritza l’estabilitat, la lectura de la partitura i la facilitat d’ús.

## Context compartit i seguiment

- Abans de començar qualsevol tasca, consulta [AGENTS.md](AGENTS.md), [CONTEXT.md](CONTEXT.md) i [ROADMAP.md](ROADMAP.md).
- Després de cada canvi o conversa rellevant, revisa els tres fitxers i actualitza la informació que correspongui a cadascun. Desa les normes de treball a `AGENTS.md`, les decisions i preferències a `CONTEXT.md` i l’estat de les tasques i les proves a `ROADMAP.md`.
- Registra a `ROADMAP.md` les tasques que hagin quedat a mitges o bloquejades. Indica què queda per fer, què n’ha impedit la finalització i el pas següent si es coneix.
- Marca una funcionalitat com a verificada només si s’ha provat. Anota què s’ha executat, en quin entorn i amb quin resultat. Identifica explícitament les comprovacions que queden pendents.
- El repositori és públic. Exclou de tots els fitxers la informació personal, les credencials i les converses privades. Resumeix únicament les decisions del projecte que es puguin fer públiques.

## Desenvolupament

- Revisa els fitxers existents abans de modificar l’aplicació. Aprofita les funcions existents i fes canvis incrementals.
- Mantén el nom visible **Calçotarra** i escriu en català els textos de la interfície. Respecta el disseny responsive i prova els fluxos afectats amb una amplada de mòbil.
- Mantén una PWA estàtica, instal·lable i utilitzable sense connexió després de la primera càrrega. Quan extreguis mòduls o afegeixis recursos imprescindibles, actualitza els recursos que `sw.js` posa a la memòria cau i comprova l’obertura sense xarxa.
- Separa progressivament la interfície, la lògica musical i l’accés a les dades. Prioritza les API natives del navegador i evita dependències innecessàries i serveis de pagament.
- Fes servir fitxers sintètics per provar importacions, versions i repertoris. Comprova la persistència després de recarregar quan canviïs els fluxos de dades.

## Dades i drets d’ús

- Conserva `json/Calcotarra-biblioteca.json` a `json/` amb l’exclusió del `.gitignore`. És una còpia personal que l’usuari pot importar des d’**Ajustos**. Pot faltar en una còpia del repositori i l’aplicació ha de funcionar igualment.
- Mantén les biblioteques personals, les còpies de seguretat reals i les lletres d’ús restringit fora de Git, dels artefactes públics i de la memòria cau de l’aplicació. Verifica els fitxers preparats abans de fer un commit o un desplegament. Respecta les condicions d’ús de les fonts externes.
- Preserva les dades existents, els identificadors i els vincles entre cançons, versions i repertoris en qualsevol canvi d’esquema. Conserva una còpia recuperable de l’original quan s’edita una cançó, se’n crea una versió o s’importa un identificador que ja existeix.
- Mantén la importació compatible amb els JSON existents i la possibilitat d’exportar la biblioteca. Si canvies el desament de `localStorage` o l’origen web, comprova una migració o una restauració amb una còpia sintètica abans de canviar el flux de l’usuari.

## Git i publicació

- El repositori compartit és `urivalles/calcotarra`. `main` és la branca de publicació. Consulta l’estat de Git abans de fer canvis i sincronitza amb GitHub els canvis acabats de codi i documentació. Si la sincronització falla o l’entorn no hi té accés, indica què queda pendent i per què.
- El desplegament actiu és [GitHub Pages](https://urivalles.github.io/calcotarra/), amb l’arrel de `main` i sense pas de compilació. Netlify és l’opció preferida si es decideix traslladar l’allotjament. Planifica el trasllat de les dades del navegador abans de qualsevol canvi d’origen.
- Per provar en local, executa `python -m http.server 8000 --bind 127.0.0.1` i obre `http://localhost:8000/`. Mantén els enllaços dels recursos relatius perquè el lloc funcioni tant a l’arrel com sota `/calcotarra/`.
