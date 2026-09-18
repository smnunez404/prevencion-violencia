---
title: 006 — Repositorio de código separado del vault
type: decision
updated: 2026-09-17
status: accepted
sources: Diego, 2026-09-17
---

# 006 — Repositorio de código separado del vault

## Decisión

El código ejecutable de **La Isla de los Acuerdos** se desarrollará en:

`C:\Users\qwert\Documents\yais-game-hackbiz`

La segunda memoria, investigación, decisiones y documentación histórica permanecen en el vault:

`C:\Users\qwert\Documents\YAIS-RED`

Los assets, el contenido narrativo, las specs y los documentos técnicos necesarios se **copian** al repositorio de código. No se borran ni se mueven sus originales del vault, para conservar enlaces, procedencia y versiones previas.

## Responsabilidades

- **Repositorio de código:** fuente de verdad de la aplicación, dependencias, pruebas, build y copias runtime de assets.
- **Vault YAIS-RED:** fuente de verdad de investigación, decisiones, negocio, guiones, evidencia y memoria histórica.
- Una decisión de producto tomada durante desarrollo debe registrarse también en el vault; un cambio de código no convierte una hipótesis en decisión.

## Alcance inicial

El primer objetivo es un vertical slice web en laptop/proyector del episodio **«Saludo que puedo elegir»**, con Capi y Tomi. La optimización móvil, el pulido de articulaciones/manos/cara y los demás episodios quedan fuera de este primer hito, salvo prácticas baratas como carga diferida y no descargar personajes que no aparecen.

No hacen falta nuevas imágenes raster para iniciar: las láminas aprobadas cubren la dirección visual. Los iconos faltantes se construirán como SVG accesibles y los cinco clips existentes tendrán un mapa explícito de fallbacks.

## Consecuencias

- Claude y otros agentes de programación deben trabajar en `yais-game-hackbiz`, no dentro del vault.
- El repositorio de código puede leer la copia de sus propios recursos sin depender de rutas absolutas al vault en tiempo de ejecución.
- No se copia `raw/` al repositorio de código.
- El historial 3D y sus fuentes permanecen intactos; la aplicación sirve solo un subconjunto allowlisted.

## See also

- [005 — Stack visual React + React Three Fiber](005-stack-visual-react-r3f.md)
- [Handoff de desarrollo para Claude](../project/handoff-desarrollo-claude.md)
- [Plan de implementación](../project/plan-implementacion.md)

