---
title: 000 — Arranque de la segunda memoria
type: decision
updated: 2026-09-12
status: stable
sources: Diego, 2026-09-12
raw: [intención inicial](../../raw/seeds/2026-09-12-intencion-inicial.md)
---

# 000 — Arranque de la segunda memoria

## Decisión

YAIS-RED usa un LLM Wiki (Karpathy) como segunda memoria del proyecto. El primer alcance es un MVP con tema hackathon.

## Contexto

Hacía falta un sitio donde el conocimiento del proyecto se acumule entre chats, en vez de redescubrirse.

## Consecuencias

- El agente mantiene `wiki/`.
- Diego tira fuentes a `raw/` y pregunta.
- El producto no se inventa: se compila cuando existan fuentes o decisiones.

## Pendiente (resuelto después)

La lectura evento-vs-producto se cerró en [001](001-evento-hackbiz-2026.md): el evento es HACKBIZ 2026.

## See also

- [Overview](../meta/overview.md)
- [Síntesis](../meta/synthesis.md)
- [001 — HACKBIZ](001-evento-hackbiz-2026.md)
