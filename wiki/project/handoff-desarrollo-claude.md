---
title: Handoff de desarrollo para Claude
type: project
updated: 2026-09-17
status: ready
sources: Diego; SPEC-001; plan de implementación; producción 3D vigente
---

# Handoff de desarrollo para Claude

## Resultado esperado

Comenzar el producto ejecutable de **La Isla de los Acuerdos** como una web 3D para laptop/proyector. El primer resultado comprobable no es el juego completo: es el vertical slice de **«Saludo que puedo elegir»**, con Capi y Tomi, decisiones accesibles y fallback 2D.

## Dónde trabajar

| Propósito | Ruta | Regla |
| --- | --- | --- |
| Código y build | `C:\Users\qwert\Documents\yais-game-hackbiz` | Escribir aquí. Es la fuente de verdad del software. |
| Wiki/Obsidian | `C:\Users\qwert\Documents\YAIS-RED` | Referencia de producto e investigación. No desarrollar la app aquí. |

La separación está registrada en la [decisión 006](../decisions/006-repositorio-codigo-separado.md). Los recursos del vault fueron copiados al repositorio de código, sin borrar los originales.

## Lectura obligatoria, en orden

En `yais-game-hackbiz`:

1. `AGENTS.md`
2. `CLAUDE.md`
3. `specs/constitution.md`
4. `specs/001-juego-episodio-1/spec.md`
5. `specs/001-juego-episodio-1/plan.md`
6. `specs/001-juego-episodio-1/tasks.md`
7. `docs/HANDOFF-DESARROLLO.md`

Después puede consultarse el vault para contexto, especialmente `wiki/project/plan-implementacion.md`, `wiki/narrative/isla-de-los-acuerdos-guiones.md` y `wiki/research/evidencia-psicologica-proteccion.md`.

## Estado listo para implementar

- Stack vigente: Vite + React + TypeScript estricto + React Three Fiber/drei, Zustand, Zod y Vitest.
- No existe todavía una app ni un `package.json`; la primera tarea crea el scaffold y `npm run verify`.
- Contenido estructurado: `content/episodes/ep01-saludo.json`, siete escenas, cuatro minijuegos y nodos adicionales.
- Primera entrega visual: solo el núcleo de saludo con Capi y Tomi. El episodio completo se valida, pero no se promete UI para todos sus tipos en el primer hito.
- Assets animados: cinco personajes, cinco clips por personaje (`Idle`, locomoción, `Wave`, `Listen`, `TalkGesture`).
- Los nombres narrativos de animación superan los clips disponibles: usar `shared/animation-intents.ts`, fallback a `Idle` y advertencia solo en desarrollo.
- El JSON contiene varias intenciones de persistencia, pero en esta spec únicamente puede persistir `ep01.completed`.
- El contenido marcado `[VALIDAR]` sigue siendo borrador y debe mostrarse como tal hasta revisión de Arianna.

## Assets para el primer hito

- Capi: `assets/production/animated/v001/mascot/mascot.glb`.
- Tomi: `assets/production/animated/v001/child_explorer/child_explorer.glb`.
- Mundo mínimo y props: los allowlists exactos están en `specs/001-juego-episodio-1/plan.md`.
- Fallback 2D: renders `three-quarter.png` de las versiones estáticas vigentes.
- Manifiesto animado: `assets/production/animated/v001/manifest.json`.

No cargar los cinco personajes ni todo el archipiélago en la primera escena. `scripts/sync-runtime-assets.mjs` debe copiar al `public` del build solo el subconjunto documentado.

## Decisiones visuales cerradas para este arranque

- No generar ni recortar más imágenes raster antes del scaffold.
- No usar una lámina conceptual compuesta como pantalla final.
- Crear los iconos faltantes como SVG accesibles, con nombre y texto equivalente.
- No rediseñar los modelos ni retocar rigs durante el vertical slice.
- No optimizar geometría para móvil todavía; medir primero. Carga diferida, fallback y render bajo demanda sí forman parte de una implementación responsable.

## Reglas que bloquean una implementación

- Nada de identidad, cuenta, nombre, foto, voz o identificador de un niño.
- Nada de chat, diario, confesionario o texto libre sobre lo que un menor contó.
- No diagnosticar ni marcar riesgo individual o por aula.
- `persistChoices` siempre es `false`; las decisiones viven solo durante la sesión.
- Sin puntos, rankings, rachas, temporizadores agresivos, castigo ni «respuesta incorrecta».
- Toda línea infantil no aprobada por Arianna continúa detrás de un flag y con `Borrador no validado` visible.
- `app/src/engine/` no depende de React, DOM ni Three.

## Orden de trabajo

1. `T-001-01`: scaffold y compuerta `npm run verify`.
2. `T-001-02` y `T-001-03`: assets y validación del contenido; pueden ir en paralelo.
3. `T-001-04`: motor puro y persistencia mínima.
4. `T-001-05`: experiencia 2D accesible.
5. `T-001-06`: escena R3F con Capi y Tomi.
6. `T-001-07`: verificación integral y reporte.

Cada tarea debe quedar verde antes de continuar. La primera sesión de Claude debe empezar por `T-001-01`, sin anticipar narrativa, backend, panel ni optimización móvil.

## Qué significa «listo para probar»

El plan está listo para comenzar, pero el juego todavía no existe. La primera prueba real empieza cuando:

- `npm run verify` pasa;
- el shell muestra `Borrador no validado`;
- el saludo puede completarse con teclado y sin WebGL;
- Capi y Tomi se cargan desde GLB reales y los demás NPC no se descargan;
- solo `ep01.completed` queda almacenado;
- no hay tráfico de red con datos del jugador.

La prueba en laptop no cuenta como validación móvil ni como prueba con niños. Las revisiones profesionales y de protección siguen siendo compuertas separadas.

## Hilos posteriores, no mezclar ahora

- optimización móvil, LOD, compresión y retopología;
- pulido de manos, articulaciones, cara, parpadeo y lipsync;
- completar los otros tres minijuegos;
- panel del facilitador y backend;
- modelo de negocio y métricas de triple impacto.

