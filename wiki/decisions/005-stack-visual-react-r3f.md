---
title: 005 — Stack visual React + React Three Fiber
type: decision
updated: 2026-09-17
status: draft
sources: Mauricio, 2026-09-17
---

# 005 — Stack visual React + React Three Fiber

## Decisión

La fase visual (juego y panel) se construye como **una sola app Vite + React + TypeScript**, con **React Three Fiber** para la escena 3D y **Tailwind** para el panel. Sin backend ni base de datos en esta fase; el progreso pasa por una interfaz `ProgressStore` con implementación local.

## Contexto

La [decisión 004](004-motor-web-3d-playcanvas-blender.md) eligió PlayCanvas como motor web 3D, y se registró explícitamente como **provisional**, pendiente de validar con un vertical slice. Desde entonces cambiaron tres cosas:

1. Hay una segunda superficie que también hay que construir: el [panel del facilitador](../project/panel-facilitador.md), que es UI de aplicación, no 3D.
2. El equipo definió que la validación se hace primero en web y que una versión nativa en React Native es el paso posterior.
3. Se decidió que esta fase es visual, sin backend, para demostrar a jurados.

## Por qué React Three Fiber y no PlayCanvas

- **Una sola base de código para las dos superficies.** Con PlayCanvas, el juego vive en su propio editor y ecosistema, y el panel sería una app aparte. Con R3F, el juego y el panel comparten build, tipos, tokens y despliegue.
- **Camino real a React Native.** R3F existe en React Native; el conocimiento de React se transfiere. PlayCanvas obligaría a rehacer.
- **La frontera de `engine/` se sostiene sola.** La lógica del episodio queda en TypeScript puro, independiente del renderizador: si mañana R3F resulta insuficiente, se cambia la capa visual sin tocar el motor.
- Blender y el pipeline GLB **no cambian**: Diego sigue exportando lo mismo. Lo que cambia es quién consume el GLB.

## Lo que se pierde

- El editor visual de PlayCanvas, que es cómodo para armar escenas sin código. Con R3F, la escena se arma en código.
- Herramientas de optimización que PlayCanvas trae listas; con R3F hay que aplicarlas a mano (Draco/Meshopt, LOD, instancing, render bajo demanda).

Se asume el costo porque el proyecto tiene más UI de aplicación que mundo 3D, y porque una sola app es mucho menos trabajo para un equipo de cuatro personas que dos aplicaciones separadas.

## Consecuencias

- 004 queda **superada en el motor de render**, no en la cadena de creación de assets (Blender + glTF/GLB siguen vigentes).
- La escena se arma en código, así que el bloqueo por assets es menor: se trabaja con placeholders y se cambian por los reales.
- Si el rendimiento en el hardware del aula no alcanza, hay que revisar esta decisión antes de rehacer arte.

## See also

- [004 — Cadena 3D web PlayCanvas + Blender](004-motor-web-3d-playcanvas-blender.md)
- [Plan de implementación](../project/plan-implementacion.md)
- [Cadena técnica web 3D](../project/toolchain-web-3d.md)
