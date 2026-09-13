---
title: LLM Wiki
type: concept
updated: 2026-09-12
status: draft
sources: Andrej Karpathy, gist llm-wiki; Diego, 2026-09-12
raw: [intención inicial](../../raw/seeds/2026-09-12-intencion-inicial.md)
---

# LLM Wiki

Patrón de Karpathy: el modelo no recupera trozos en cada pregunta; **compila** un wiki y lo mantiene.

## Tres capas

1. `raw/` — verdad de origen, inmutable.
2. `wiki/` — síntesis interconectada, la escribe el agente.
3. Esquema — `AGENTS.md` + skill `llm-wiki`.

## Tres operaciones

- **Ingest** — una fuente entra y se integra.
- **Query** — se pregunta contra páginas ya compiladas.
- **Lint** — salud del grafo (contradicciones, huérfanos, huecos).

## Por qué aplica a un MVP de hackathon

En un evento o en un sprint corto el contexto se pierde entre chats. La wiki es el tablero que sobrevive al hilo.

## See also

- [Segunda memoria](segunda-memoria.md)
- [Síntesis](synthesis.md)
