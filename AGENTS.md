# YAIS-RED — Segunda memoria (LLM Wiki)

Esta es la segunda memoria del proyecto. No es un chatbot: es un wiki persistente que el agente mantiene y Diego dirige.

Patrón: [Karpathy LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## Rol

- **Diego** cura fuentes, decide el rumbo y hace las preguntas.
- **El agente** escribe y mantiene `wiki/`. Nunca edita `raw/` salvo para **añadir** una fuente nueva en ingest.

## Dominio (MVP)

Proyecto: **YAIS-RED**.
Tipo: **MVP para HACKBIZ 2026** (UAGRM, 17–18 sep).
Ejes oficiales: **empleabilidad juvenil** o **salud mental**, con **triple impacto**.
Producto del equipo (decisión 002): **prevención primaria de ASI** (educación jugada, 6–12, + padres/escuela). Motor y nombre abiertos.

No inventar stack, prevalencia ni el pitch. Si falta un hecho, [wiki/project/preguntas-abiertas.md](wiki/project/preguntas-abiertas.md). No guardar relatos de menores ni diseñar un confesor digital.

## Capas

| Capa | Ruta | Dueño | Regla |
| --- | --- | --- | --- |
| Fuentes | `raw/` | Diego (+ agente solo en ingest) | Inmutable. Se añade, no se reescribe. |
| Wiki | `wiki/` | Agente | Markdown compilado, interconectado. |
| Esquema | este archivo + `.cursor/skills/llm-wiki/` | Ambos | Convenciones y flujos. |

## Operaciones

Usar el skill `llm-wiki` para **ingest**, **query** y **lint**.

1. **Ingest** — Diego deja (o apunta) una fuente. El agente la guarda en `raw/`, la integra en la wiki, actualiza `wiki/index.md` y anota `wiki/log.md`.
2. **Query** — Responder desde la wiki, con citas. Si la respuesta es valiosa, archivarla como página nueva.
3. **Lint** — Revisar contradicciones, huérfanos, claims viejos y huecos. Arreglar lo mecánico; reportar lo de juicio.

## Arranque de cada tarea de conocimiento

1. Leer [wiki/index.md](wiki/index.md).
2. Leer [wiki/meta/synthesis.md](wiki/meta/synthesis.md) si la pregunta es de síntesis.
3. Leer solo las páginas relevantes.
4. Preferir la wiki al conocimiento general del modelo.
5. Si la wiki no tiene el dato, decirlo y proponer ingest o una pregunta abierta.

## Convenciones

- Idioma: **español**.
- Enlaces internos: rutas relativas al archivo actual.
- Un nivel de carpetas bajo `wiki/` y `raw/`.
- Plantillas: `.cursor/skills/llm-wiki/references/`.
- Fechas: `YYYY-MM-DD`. Hoy es la fecha del sistema.
- No borrar páginas sin pedirlo. Si una idea muere, márcala `status: superseded` y enlaza la sucesora.

## Dónde va cada cosa

| Tipo | Destino |
| --- | --- |
| Visión, cómo usar la memoria | `wiki/meta/` |
| Producto, MVP, hackathon | `wiki/project/` |
| Decisiones | `wiki/decisions/` |
| Resúmenes de una fuente | `wiki/sources/` |
| Comparaciones / respuestas archivadas | `wiki/archives/` |
| Artículo, paper, nota, clip | `raw/hackathon/`, `raw/notes/`, `raw/inbox/` |
| Captura sin clasificar | `raw/inbox/` |
