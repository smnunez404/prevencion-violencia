---
title: Cadena técnica web 3D
type: project
updated: 2026-09-16
status: draft
---

# Cadena técnica web 3D

## Decisión de trabajo

Para el prototipo 3D web de YAIS-RED se adopta provisionalmente **PlayCanvas Editor + Blender + glTF/GLB**. PlayCanvas será el entorno de escena, interacción y publicación web; Blender será la fábrica de modelos, rig y animaciones. La decisión sigue siendo validable con una primera escena jugable, no un compromiso irreversible de producción.

El MCP de PlayCanvas se conecta a un Editor abierto y permite inspeccionar o modificar el proyecto desde Codex. El MCP oficial de Blender usa un add-on dentro de Blender y un servidor local que se comunica por TCP. Las operaciones generativas deben limitarse al proyecto y revisarse antes de aplicar cambios importantes.

## Instalado en este equipo

- Blender 5.2.1 LTS.
- Extensión oficial de Blender MCP 1.0.0, instalada en el repositorio de extensiones del usuario y habilitada en preferencias.
- Servidor Python oficial de Blender MCP en `.tools/blender_mcp_venv/`.
- Node.js portátil 22.23.2 en `.tools/node-v22.23.2-win-x64/`.
- Servidor oficial `@playcanvas/editor-mcp-server`, registrado en la configuración global de Codex mediante `npx`.
- Servidor Blender MCP, registrado en la configuración global de Codex mediante el ejecutable del entorno virtual local.
- `@gltf-transform/cli` 4.5.0, instalado localmente para inspeccionar y optimizar GLB sin abrir Blender.

Las herramientas locales están ignoradas por Git mediante `.gitignore`; no deben commitearse el runtime de Node ni el entorno Python.

## Comandos de verificación

Desde la raíz del repositorio:

```powershell
.\scripts\check-toolchain.ps1
.\scripts\start-blender-mcp.ps1 -NoWindow
```

El puente de Blender debe responder en `127.0.0.1:9876`. El MCP de PlayCanvas solo puede comprobarse cuando un proyecto está abierto en PlayCanvas Editor.

La ruta headless ya fue validada: `scripts/build-blender-headless.ps1` creó `assets/generated/isla-acuerdos-blockout.blend` y `assets/generated/isla-acuerdos-blockout.glb`; `scripts/optimize-glb.ps1` produjo una versión optimizada y Blender generó un PNG de preview sin mostrar la interfaz.

La referencia visual 3D completa está en `assets/references-3d/README.md`. Se generó a partir de las láminas conceptuales aprobadas y debe guiar la producción de modelos; las imágenes siguen siendo referencias, no assets finales.

## Paso externo pendiente

1. Abrir o crear el proyecto de YAIS-RED en PlayCanvas Editor e iniciar sesión en la cuenta del equipo.
2. En el Editor, abrir el botón `MCP` de la barra inferior y conectar el servidor local en el puerto `52000`.
3. Hacer una comprobación de solo lectura desde Codex antes de crear entidades o importar assets.
4. Crear un checkpoint del proyecto antes de cualquier modificación importante.

La cuenta, el proyecto remoto y cualquier publicación son acciones del equipo; no se crean ni se comparten automáticamente desde esta configuración local.

## Alcance técnico del primer vertical slice

- Una isla pequeña, sin mundo abierto.
- Cámara tercera persona y controles táctiles en landscape.
- Una mascota, dos personajes secundarios, tres decisiones y dos desenlaces.
- Escena ligera: modelos low-poly, texturas comprimidas, colisiones simples y sin combate.
- Contenido narrativo separado del arte en datos estructurados; no chat, no diario y no almacenamiento de relatos de menores.

## Fuentes primarias

- [PlayCanvas Editor MCP Server](https://developer.playcanvas.com/user-manual/editor/mcp-server/)
- [PlayCanvas Editor](https://developer.playcanvas.com/user-manual/editor/)
- [Blender MCP oficial](https://www.blender.org/lab/mcp-server/)
- [Blender glTF 2.0](https://docs.blender.org/manual/en/4.0/addons/import_export/scene_gltf2.html)
