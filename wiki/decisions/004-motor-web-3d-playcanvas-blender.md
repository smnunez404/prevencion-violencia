---
title: 004 — Cadena 3D web PlayCanvas + Blender
type: decision
updated: 2026-09-16
status: draft
---

# 004 — Cadena 3D web PlayCanvas + Blender

## Contexto

El producto dejó de apuntar a una experiencia cerrada de Roblox y se está explorando como videojuego 3D web, móvil y de decisiones, con una estética low-poly amable. La referencia visual aportada por Diego muestra una cámara en tercera persona, islas pequeñas, puentes y exploración breve; no define una copia del juego mostrado.

## Decisión provisional

Usar PlayCanvas Editor como entorno de escenas y ejecución web, Blender como herramienta de modelado y animación, y glTF/GLB como formato de intercambio. Usar los MCP oficiales para acelerar inspección y edición asistida, manteniendo checkpoints y revisión humana.

## Motivo

PlayCanvas está orientado a publicar experiencias 3D en navegador y su MCP está diseñado para trabajar con un Editor abierto. Blender cubre la producción de assets y exporta glTF/GLB. Esta combinación conserva una ruta web más directa que convertir un proyecto Godot a WebAssembly y evita introducir Unity, que ya fue descartado.

## No decidido todavía

- Cuenta y proyecto concreto de PlayCanvas.
- Presupuesto de arte y si habrá assets propios o licenciados.
- Backend, analítica y modelo de negocio.
- Prueba de rendimiento en teléfonos Android concretos.

## Criterio de validación

La decisión pasa a estable solo si el vertical slice mantiene carga razonable y controles táctiles utilizables en un teléfono de gama media, permite recorrer una isla en menos de diez minutos y soporta tres decisiones con feedback claro sin guardar relatos personales.

## See also

- [Cadena técnica web 3D](../project/toolchain-web-3d.md)
- [No hacer](../project/no-hacer.md)
- [Preguntas abiertas](../project/preguntas-abiertas.md)
