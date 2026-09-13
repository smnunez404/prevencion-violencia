---
name: llm-wiki
description: Mantiene la segunda memoria de YAIS-RED (patrón Karpathy). Usar al ingerir fuentes, preguntar qué sabe la wiki, archivar una respuesta, hacer lint, o cuando el usuario diga ingest, query, lint, segunda memoria, wiki o raw/.
---

# LLM Wiki — YAIS-RED

Leer `AGENTS.md` si hace falta el contrato del repo. Plantillas en `references/`.

## Ingest

1. Obtener la fuente (archivo, URL, texto pegado). Si no se puede leer, pedir el contenido.
2. Guardarla en `raw/` **sin reescribir opiniones**. Limpiar solo ruido de formato.
   - Clasificar: `raw/inbox/` (sin clasificar), `raw/hackathon/`, `raw/notes/`, `raw/seeds/`.
   - Nombre: `YYYY-MM-DD-slug-kebab.md` (máx. 60 caracteres en el slug).
   - Formato: `references/raw-template.md`.
   - Nunca modificar un `raw/` existente.
3. Integrar en `wiki/`:
   - Misma tesis → fusionar en la página existente.
   - Concepto nuevo → página nueva en `wiki/project/`, `wiki/meta/`, `wiki/sources/` o `wiki/decisions/`.
   - Una fuente puede tocar 10–15 páginas. Anotar contradicciones con atribución.
4. Actualizar `wiki/index.md` y anexar `wiki/log.md`:
   ```
   ## [YYYY-MM-DD] ingest | <título de la página principal>
   - Updated: <página tocada>
   ```

## Query

1. Leer `wiki/index.md`.
2. Leer las páginas pertinentes. Preferir la wiki al conocimiento del modelo.
3. Responder con citas `wiki/.../archivo.md`.
4. No escribir archivos salvo que Diego pida archivar.

### Archivar

Si pide guardar la respuesta:

1. Nueva página en `wiki/archives/` (`references/archive-template.md`). Nunca fusionar un archivo en una página viva.
2. Actualizar índice. Prefijo de resumen: `[Archivado]`.
3. Log: `## [YYYY-MM-DD] query | Archived: <título>`.

## Lint

**Auto-arreglar:** entradas de índice huérfanas o rotas, enlaces internos con un único destino obvio, `Raw:` que apunta a un archivo movido.

**Solo reportar:** contradicciones, claims viejos, huérfanos, conceptos sin página, huecos de fuente.

Log: `## [YYYY-MM-DD] lint | <N> issues, <M> auto-fixed`.

## Convenciones

- Español. Un nivel de carpetas bajo `wiki/` y `raw/`.
- Enlaces dentro de `wiki/`: relativos al archivo. En el chat: rutas desde la raíz.
- `Updated` = último cambio de conocimiento, no el mtime.
- `status`: `seed` | `draft` | `stable` | `superseded`.
