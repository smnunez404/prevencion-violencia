---
title: Plan de implementación — juego y panel
type: product
updated: 2026-09-17
status: draft
sources: Mauricio (17-09-2026); investigación de harness engineering y SDD
---

# Plan de implementación — juego y panel del facilitador

Esto es lo que el equipo ejecuta cuando los assets 3D estén listos. Cubre las dos superficies: la **experiencia del niño** (La Isla de los Acuerdos) y el **panel del facilitador**.

Contexto: [Panel del facilitador](panel-facilitador.md) · [Guiones](../narrative/isla-de-los-acuerdos-guiones.md) · [Evidencia psicológica](../research/evidencia-psicologica-proteccion.md) · [No hacer](no-hacer.md) · [Constitución del código](../../specs/constitution.md).

## 1. Qué se construye ahora y qué no

**Ahora: todo lo visual.** Lo que el jurado va a ver funcionando. Sin backend, sin base de datos, sin cuentas. El contenido sale de archivos JSON estáticos y los datos del panel son semilla local.

**Después, si hay tiempo:** Supabase (auth, progreso por aula, reportes). El código se diseña desde hoy para que ese día no haya que reescribir: toda lectura/escritura de progreso pasa por la interfaz `ProgressStore`, con implementación local ahora y remota después.

**Nunca:** identidad de niño, chat, relatos, marcado de riesgo. Eso no es "después": es no.

## 2. Stack

| Capa | Elección | Por qué |
| --- | --- | --- |
| Base | Vite + React + TypeScript estricto | Una sola app para las dos superficies; Gabriel ya es fullstack en este mundo |
| 3D | React Three Fiber + drei | Carga GLB nativa, convive con la UI de React, y hay camino a React Native después |
| UI panel | Tailwind CSS | Rápido para maquetar el panel; el juego lleva estilos propios |
| Estado | Zustand | Mínimo, sin ceremonia |
| Validación | Zod contra el esquema de episodios | Convierte el contrato de contenido en un mecanismo, no en un acuerdo verbal |
| Tests | Vitest | Suficiente para el motor y los componentes |
| Persistencia | `localStorage` detrás de `ProgressStore` | Cambiar a Supabase después es cambiar una implementación |

Esto actualiza la [decisión 004](../decisions/004-motor-web-3d-playcanvas-blender.md) (PlayCanvas) — ver [decisión 005](../decisions/005-stack-visual-react-r3f.md) para el razonamiento y lo que se pierde.

## 3. Estructura del repo

```
app/
  src/
    engine/     TypeScript puro: máquina de estados del episodio, validación, flags.
                Sin React, sin DOM, sin Three. Es lo que se porta a React Native.
    game/       Experiencia del niño: R3F, diálogo, minijuegos.
    panel/      Panel del facilitador: React + Tailwind, datos semilla.
    shared/     Registro de assets, tokens de diseño, utilidades.
content/        Episodios en JSON (ya existe ep01).
assets/         GLB y renders (ya existe).
specs/          SDD: constitución, specs, planes, tareas.
```

La frontera de `engine/` es la decisión de arquitectura más importante: si la lógica del episodio no depende de React ni de Three, el día que se porte a móvil se porta la mitad del trabajo, no cero.

## 4. Módulos

### Juego

| ID | Módulo | Depende de assets | Entrega |
| --- | --- | --- | --- |
| G1 | Motor de contenido: carga, valida y ejecuta el JSON del episodio | No | Máquina de estados testeada, sin UI |
| G2 | Runtime de diálogo: globos, opciones, feedback, reintento | No | Episodio jugable en 2D con primitivas |
| G3 | Escena 3D: GLB, cámara, luces, modo proyector | Sí | Episodio 1 con la mascota y los NPC reales |
| G4 | Minijuegos: clasificar fichas, elegir persona, círculo de 3 | Parcial | Los tres tipos del guion |
| G5 | Accesibilidad: audio, subtítulos, contraste, toque grande, fallback sin WebGL | No | Checklist de `a11y-perf-reviewer` en verde |
| G6 | Progreso y flags detrás de `ProgressStore` | No | Solo flags; nada personal |
| G7 | Mapa de decisiones del aula (estilo Detroit) | No | Ver §6 |
| G8 | Shell: inicio, selector de episodio y de modo de edad | No | Navegación completa |

### Panel del facilitador

| ID | Módulo | Entrega |
| --- | --- | --- |
| P1 | Shell, navegación y selector de rol simulado | Rutas y layout |
| P2 | Aulas y progreso (semilla local) | Vista por aula, nunca por niño |
| P3 | Protocolo de derivación a un toque | Botón fijo + contenido offline |
| P4 | Materiales descargables | Guía docente y protocolo imprimible |
| P5 | Vista agregada del coordinador | Solo lectura, solo agregados |
| P6 | Checklist de preparación del docente | Fase 2 |
| P7 | Recordatorios de refuerzo | Fase 2 |
| P8 | Registro agregado de seguimiento | Fase 2, pendiente de decisión de Arianna |

Los módulos P6–P8 y el detalle completo de los 8 módulos están en [Panel del facilitador](panel-facilitador.md).

## 4 bis. Rendimiento: escritorio primero, móvil diferido

Por decisión de Diego del 2026-09-17, el primer vertical slice se presenta en **web para laptop/proyector**. La optimización móvil no es una compuerta de esta implementación. Se puede comenzar con `assets/production/animated/v001/`: es una primera pasada utilizable para demostrar el producto, no la entrega móvil final. El GLB aprobado se conserva como **fuente** y las variantes móviles se crearán después, cuando existan mediciones y un teléfono objetivo.

### Prácticas baratas que sí se mantienen desde ahora

- Cargar únicamente la escena y los personajes activos; no importar los cinco NPC al inicio.
- Aplicar carga diferida del GLB, precargar solo el siguiente recurso y liberar la escena anterior.
- Limitar `devicePixelRatio`, usar sombras simples o desactivadas, una luz principal, sin postprocesado y cámara con distancias razonables.
- Renderizar bajo demanda cuando la escena está quieta; actualizar animación con el mixer, no con estado React en cada frame.
- Usar la geometría actual para escritorio/demo y dejar el contrato preparado para una variante ligera futura.
- Instanciar elementos repetidos del escenario y activar culling; evitar cargar props que no estén en la toma.
- Mantener fallback 2D/estático y controles táctiles grandes.

Estas medidas son principalmente decisiones sanas de carga y render, no una campaña de optimización móvil. No cambian la forma artística de los modelos.

### Qué sí puede requerir pipeline de Blender o herramientas de assets

- Reducir triángulos y piezas de pelo mediante retopología/decimación controlada.
- Reducir primitivas/materiales y sustituir geometría pequeña por textura/normal map.
- Crear LOD y variantes GLB; comprimir mallas/animaciones y texturas con herramientas compatibles con el cargador.
- Limpiar pesos, contactos y claves redundantes de animación.

No hace falta abrir la interfaz de Blender: Blender puede ejecutarse headless y las herramientas de glTF pueden automatizarse. Pero estas operaciones sí pueden cambiar el binario, el peso y ocasionalmente el aspecto; por eso se harán en una versión nueva (`animated/v002`), conservando v001 y comparando renders.

### Datos que fijan la prioridad

La primera pasada tiene 31,13 MB de GLB, 625.722 triángulos y 82 primitivas de material; la capibara sola pesa 16,41 MB. Es demasiado pronto para llamarla optimizada para móvil. El episodio inicial debe probarse con una composición mínima: capibara + un NPC + solo los props visibles. En esta fase se mide en la PC/proyector de la demo; la compuerta móvil se abre en una fase posterior y con un teléfono objetivo.

### Secuencia revisada

1. **S0:** crear app Vite/React/TypeScript, motor de contenido, registro de assets y pruebas.
2. **S1:** hacer jugable el Episodio 1 en 2D con datos JSON y controles accesibles.
3. **S2:** integrar la isla, capibara y un NPC real con GLB; añadir carga diferida y fallback desde el comienzo.
4. **S3:** completar el panel del facilitador y el debrief agregado.
5. **S4:** conectar los cuatro minijuegos, props y elenco restante.
6. **S5 posterior:** medir en dispositivos móviles objetivo, generar variantes ligeras y corregir cuellos de botella; no declarar rendimiento por estimación.
7. **Después:** pulido de articulaciones, manos/cara y rig facial, salvo que una deformación impida mostrar una escena.

Así el producto se puede ver y validar antes de terminar el arte técnico, pero la arquitectura no queda atada a los GLB pesados actuales.

## 5. Sprints

Una semana cada uno, con demo al cierre. **Los sprints 0 a 2 no dependen de los assets finales**: se trabaja contra placeholders del registro de assets y se cambian por los reales cuando Diego los entregue.

| Sprint | Objetivo | Módulos | Demo al cierre |
| --- | --- | --- | --- |
| **S0** | Cimientos | Scaffold, CI, `verify`, tokens, registro de assets con placeholders, G1 | El motor recorre el ep01 completo en tests, sin UI |
| **S1** | Vertical slice jugable | G2, G6, G8 | Un niño juega el episodio 1 de punta a punta, en 2D |
| **S2** | Capa 3D | G3 | El mismo episodio, ahora con la isla y los personajes |
| **S3** | Panel MVP | P1–P5 | El docente ve sus aulas y llega al protocolo en un toque |
| **S4** | Contenido completo | G4, G7, episodios 2–4 y cierre | Los cuatro episodios y el mapa de decisiones del aula |
| **S5** | Pulido de demo | G5, rendimiento, guion de pitch | Corriendo en la máquina real del aula, proyectado |
| **S6** *(opcional)* | Backend | Supabase detrás de `ProgressStore` | Progreso que sobrevive al navegador |

Si el calendario aprieta, el orden de sacrificio es: S6, luego los episodios 3 y 4 de S4, luego P4–P5. **S5 no se sacrifica**: una demo que se traba en el proyector del colegio no demuestra nada.

## 6. El mapa de decisiones, estilo Detroit

La referencia de *Detroit: Become Human* es el diagrama de ramas que aparece al terminar una escena: qué caminos tomaste y cuáles no.

Aquí se usa **solo del lado del adulto**, nunca del lado del niño:

- **Para el niño:** no hay diagrama. Mostrarle los caminos que no tomó se lee como "te perdiste lo correcto", y eso contradice el principio de que no hay respuesta incorrecta.
- **Para el aula, en el debrief:** un mapa agregado de qué ramas exploró el grupo, como material de conversación para el docente. Sin nombres, sin conteo por niño, sin ranking entre aulas.

Esa distinción es el módulo G7 y es una decisión de diseño, no un detalle de implementación.

## 7. Cómo se trabaja con agentes

El flujo es spec-driven: la spec es lo más valioso que produce un humano cuando el código lo escribe un agente.

```
/spec NNN-nombre     →  qué y por qué, criterios EARS
/plan NNN-nombre     →  cómo, archivos, contratos, riesgos
/tasks NNN-nombre    →  tareas autocontenidas
/implement T-NNN-01  →  el agente implementa una tarea
/verify              →  compuertas + revisores independientes
```

Agentes disponibles en `.claude/agents/`:

| Agente | Rol |
| --- | --- |
| `game-engineer` | Implementa motor, runtime y escena 3D |
| `panel-engineer` | Implementa el panel |
| `content-guardian` | **Revisor independiente.** Audita todo lo que toque niños, contenido o datos contra la constitución |
| `a11y-perf-reviewer` | **Revisor independiente.** Accesibilidad y rendimiento contra el escenario de aula real |

La regla que importa: **quien implementa no se aprueba a sí mismo.** Los revisores son agentes aparte, con su propio contexto, porque un agente revisando su propio trabajo encuentra mucho menos.

## 8. Definición de terminado

Una tarea está terminada cuando:

- [ ] `npm run verify` pasa (typecheck, lint, test, `check:safety`, build).
- [ ] El criterio de aceptación de la spec se comprobó de verdad, no se asumió.
- [ ] Si tocó contenido, protocolo o datos: `content-guardian` dio veredicto.
- [ ] Si tocó UI o 3D: `a11y-perf-reviewer` dio veredicto.
- [ ] Lo que quedó pendiente está escrito, no en la cabeza de alguien.

## 9. Las reglas se hacen cumplir con mecanismos

`scripts/check-safety.mjs` corre en cada `verify` y falla el build si aparece un identificador de niño, un campo de texto libre sobre un menor, un marcado de riesgo, puntaje competitivo, o si un episodio trae `persistChoices` distinto de `false`.

No es burocracia: es la diferencia entre una regla que alguien recuerda y una regla que el repo no deja romper. Si un mecanismo da falso positivo, se ajusta el mecanismo; no se desactiva la verificación.

## 10. Lo que bloquea y lo que no

| Bloquea | No bloquea |
| --- | --- |
| Los assets finales bloquean **solo G3** y parte de G4 | S0, S1, S3 se pueden hacer hoy |
| La aprobación de Arianna bloquea **publicar** contenido infantil y el texto del protocolo | No bloquea implementar, si va detrás del flag de borrador |
| La decisión sobre el contador de seguimiento bloquea **P8** | No bloquea P1–P5 |

## See also

- [Panel del facilitador](panel-facilitador.md)
- [Guiones — La Isla de los Acuerdos](../narrative/isla-de-los-acuerdos-guiones.md)
- [005 — Stack visual React + R3F](../decisions/005-stack-visual-react-r3f.md)
- [Constitución del código](../../specs/constitution.md)
- [Preguntas abiertas](preguntas-abiertas.md)
