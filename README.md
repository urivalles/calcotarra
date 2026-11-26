# Calçotarra 0.1

Calçotarra és un cançoner de guitarra que funciona al navegador. GitHub Pages publica els fitxers estàtics des de l’arrel de `main` a [Calçotarra](https://urivalles.github.io/calcotarra/). El fitxer `.nojekyll` permet servir-los directament.

Per executar l’aplicació en local, executa `python -m http.server 8000 --bind 127.0.0.1` i obre `http://localhost:8000/`.

La còpia personal `json/Calcotarra-biblioteca.json` es conserva en local i Git la ignora. Per carregar-la, obre **Ajustos → Importa JSON / text / ChordPro** i selecciona el fitxer. L’aplicació desa la biblioteca a `localStorage` per navegador i origen. Per traslladar-la a un altre dispositiu o domini, exporta-la des dels ajustos i importa-la al navegador de destinació. No publiquis lletres de tercers sense autorització.

PDF: obre una cançó, prem PDF i tria Desa com a PDF al diàleg d'impressió. El metrònom usa Web Audio i l'afinador necessita micròfon i HTTPS/localhost. La PWA i l'offline s'activen després de publicar i carregar una primera vegada. L'afinador és experimental. La simplificació elimina les inversions (baixos); no substitueix tots els acords avançats. La celleta és una anotació. Les formes d'acords disponibles són parcials.
