# YAIS-RED

Segunda memoria del proyecto: un [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) para un **MVP en HACKBIZ 2026** (UAGRM, 17–18 de septiembre).

El agente escribe la wiki. Tú tiras fuentes y preguntas.

## Cómo usarla

| Tú dices | Pasa |
| --- | --- |
| `ingest` + URL, PDF, nota o archivo en `raw/inbox/` | Se guarda en `raw/`, se integra en `wiki/`, se actualiza el índice y el log |
| una pregunta de producto | Se responde desde `wiki/` con citas |
| `archiva esto` | La respuesta queda en `wiki/archives/` |
| `lint` | Revisa contradicciones, huérfanos y huecos |

Punto de entrada: [wiki/index.md](wiki/index.md). Tesis viva: [wiki/meta/synthesis.md](wiki/meta/synthesis.md). Huecos: [wiki/project/preguntas-abiertas.md](wiki/project/preguntas-abiertas.md).

## Capas

```
raw/          fuentes (no se reescriben)
wiki/         conocimiento compilado
AGENTS.md     esquema
```

Obsidian puede abrir esta carpeta y usar la vista grafo sobre `wiki/`.
