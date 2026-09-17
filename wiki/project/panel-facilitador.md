---
title: Panel del facilitador — plan de desarrollo
type: product
updated: 2026-09-17
status: draft
sources: Arianna (17-09-2026, aporte de su mentora); evidencia psicológica §9 y §12
---

# Panel del facilitador — plan de desarrollo

Herramienta para el docente o facilitador, separada de la experiencia del niño. Nace de un punto que planteó Arianna, citando a su mentora (psicóloga): el agresor suele ser del entorno familiar cercano, así que el docente puede ser la única persona adulta a la que el niño le cuente algo. El panel existe para que ese docente esté **preparado y acompañado**, no para vigilar al niño.

Contexto interno: [Evidencia psicológica y de protección](../research/evidencia-psicologica-proteccion.md#9-participación-segura-de-niños-consentimiento-de-familias-y-pruebas-con-escuelas) · [No hacer](no-hacer.md) · [Guiones — La Isla de los Acuerdos](../narrative/isla-de-los-acuerdos-guiones.md) · [Canvas B — mercado y negocio](../research/canvas-b-mercado-negocio.md) · [Preguntas abiertas](preguntas-abiertas.md).

> **Estado: plan técnico y de producto, sin construir.** Sirve para que el equipo y Arianna revisen el alcance completo de una vez, no como autorización para implementarlo tal cual. El Módulo 4 en particular (protocolo de derivación) no se publica sin que Arianna apruebe el texto exacto.

## 1. Propósito y límite duro

**Propósito:** que el docente llegue capacitado, tenga el protocolo de derivación a un toque de distancia, y que la institución (colegio, ONG) pueda ver que el acompañamiento está pasando — sin que la app se convierta en un sistema de vigilancia infantil.

**Límite duro, heredado de [no-hacer.md](no-hacer.md) y de la evidencia §12 (medir sin diagnosticar):**

- Nunca existe un perfil, ficha o registro de un niño individual. No hay tabla `students` ni `children` con datos identificables — es una decisión de arquitectura, no solo de política, para que la regla no se pueda romper por accidente.
- Nunca se le pide al docente que escriba lo que un niño le contó. Ningún campo de texto libre sobre un menor.
- Todo lo que el panel mide es sobre el **adulto** (¿está capacitado?, ¿leyó el protocolo?) o sobre el **aula como grupo** (¿se completó el episodio?), nunca sobre un niño en particular.
- Ante una revelación real, el panel **deriva** al protocolo humano de la institución (espacio seguro → responsable de protección → DNA/Fiscalía) — nunca la reemplaza ni la automatiza.

## 2. Usuarios y roles

| Rol | Quién | Qué ve |
| --- | --- | --- |
| Facilitador | Docente de aula, voluntario de ONG capacitado | Sus propias aulas, su propio checklist, el protocolo, los materiales |
| Coordinador institucional | Dirección del colegio, coordinación de la ONG | Agregado de todas las aulas de su institución; no ve detalle por aula que no sea suyo |
| Administrador YAIS-RED | Equipo del proyecto | Soporte técnico; sin acceso a datos operativos de una institución sin permiso explícito |

Los niños **no tienen cuenta ni login**. El dispositivo proyectado en el aula corre la sesión sin identidad individual, como ya está definido en `content/episodes/ep01-saludo.json`.

## 3. Módulos

### Módulo 1 — Cuentas y acceso institucional

- El colegio o la ONG se registra como **organización**, no el niño ni la familia.
- Autenticación de docentes: email institucional o código de invitación generado por el coordinador de su institución (Supabase Auth).
- Multi-tenant desde el diseño de datos: cada organización solo ve lo suyo, aunque el año 1 tenga pocos clientes — más barato construirlo bien ahora que migrar datos después.
- [POR VALIDAR] Si además hace falta un consentimiento explícito del docente para tener cuenta (protección de datos del propio adulto), separado del consentimiento institucional a las familias que ya se definió en la evidencia §9.

### Módulo 2 — Progreso por aula (no por niño)

- Unidad mínima de seguimiento: el **aula**, no el niño. Como el modo de uso es proyectado (un dispositivo para todo el grupo), el progreso ya es naturalmente agregado — esto no es una limitación, es lo que hace que el módulo sea seguro por diseño.
- Por aula: qué episodios se completaron y cuándo (ej. "Episodio 2 completado el 14-10-2026").
- Sin conteo de "cuántos niños respondieron correctamente" por nombre; como mucho, un porcentaje agregado del grupo (ej. "el grupo completó el debrief").

### Módulo 3 — Checklist de preparación del docente

- Ítems por persona (el docente, no el niño — no cruza el límite duro):
  - Capacitación inicial completada (sí/no + fecha).
  - Lectura y confirmación del protocolo de derivación (Módulo 4).
  - Contacto local de la DNA o línea de ayuda guardado y marcado como verificado este ciclo.
  - Política de privacidad y límites del panel revisados.
- Gate suave: la app puede recomendar completar el checklist antes de habilitar los episodios 3 y 4 (los más sensibles — secreto que pesa, a quién le cuento), con una advertencia clara, sin bloqueo duro que frustre el uso real en aula.

### Módulo 4 — Protocolo de derivación, siempre a un toque

- Botón fijo, visible en cualquier pantalla del panel: **"¿Qué hago si un niño me cuenta algo?"**
- Contenido (base ya investigada en [evidencia §6 y §8](../research/evidencia-psicologica-proteccion.md)): escuchar, creer, no interrogar ni pedir detalles (para no contaminar una futura entrevista única en Cámara Gesell), no prometer secreto absoluto, avisar al responsable de protección de la institución, contactar a la DNA o a una línea gratuita (156, Familia Segura 800-11-30-40 — verificar vigencia local antes de publicar), seguir el protocolo específico del colegio si existe uno propio.
- Personalizable por institución: el coordinador puede cargar el protocolo y los contactos propios de su colegio o su ONG, porque no todos van a ser idénticos.
- **No se publica el texto final sin que Arianna lo apruebe línea por línea.** Este módulo es el único del panel con riesgo real de daño si el contenido está mal escrito.

### Módulo 5 — Recordatorios de refuerzo (booster)

- Notificación solo al facilitador (nunca al niño): "Pasaron unas semanas desde el Episodio 2 — ¿conviene retomar el acuerdo de esa sesión?"
- Base: la evidencia ya investigada (§2.4) muestra que el refuerzo sostiene mejor el aprendizaje que una sola exposición.
- Cadencia configurable por institución. [POR VALIDAR con Arianna] cuál es una cadencia razonable sin volverse repetitivo o generar fatiga en el docente.

### Módulo 6 — Registro agregado de seguimiento

- Un botón simple, sin campo de texto: **"Registré una conversación de seguimiento esta semana"** — incrementa un contador agregado por aula y periodo.
- Propósito: que la institución tenga evidencia de que el acompañamiento está pasando de verdad, y alimenta la métrica S9 ya definida en el Canvas de negocio ("derivaciones acompañadas según protocolo... solo conteo agregado, sin detalle, casos ni fechas").
- Explícitamente **no** es un formulario de incidentes ni un sistema de casos.
- [POR VALIDAR — riesgo a revisar con Arianna] incluso agregado por aula, un contador inusualmente alto podría malinterpretarse como señal de "algo raro pasa en esa aula". Hay que decidir si el contador se muestra tal cual o solo como "activo / con seguimiento" sin número exacto, para no crear un proxy de riesgo por accidente.

### Módulo 7 — Panel institucional (coordinador / dirección)

- Vista agregada de toda la institución: episodios completados por aula, docentes capacitados y su checklist, contador de seguimientos (con el cuidado del punto anterior).
- Exportable como reporte para la institución, una ONG que las financia, o una empresa con patrocinio RSE — alimenta directamente las métricas S1–S10 ya definidas en el [Canvas B de negocio](../research/canvas-b-mercado-negocio.md).
- Este es el valor tangible para quien paga (colegio, ONG): algo que reportar, sin exponer nunca a un niño.

### Módulo 8 — Materiales y guía descargable

- Repositorio de la guía docente, material para familias y protocolo, con versión **offline / PDF** además de la web — conecta con la decisión ya tomada de operar en modo aula proyectada, con poco ancho de banda.

## 4. Modelo de datos (borrador)

Alto nivel, pensado para Supabase/Postgres, sin ninguna tabla de identidad infantil:

```
organizations        (id, nombre, tipo, protocolo_contacto_json)
users                 (id, org_id, rol, nombre, email)              -- docentes y coordinadores, nunca niños
classrooms            (id, org_id, facilitador_id, etiqueta, grado, modo_edad)
episode_completions   (id, classroom_id, episode_id, completado_en) -- sin student_id: no existe esa identidad
facilitator_checklist (id, user_id, item, completado_en)
followup_log          (id, classroom_id, semana, contador)          -- sin campo de texto
booster_reminders     (id, classroom_id, episode_id, programado_para, enviado)
```

No hay tabla `students` ni `children`. Es deliberado: si el campo no existe, nadie —ni por error, ni bajo presión de un cliente que "quiere ver el detalle"— puede llenarlo.

## 5. Fases sugeridas

| Fase | Cuándo | Módulos |
| --- | --- | --- |
| 0 | Antes de construir nada | Validar con Arianna el contenido exacto del Módulo 4 |
| 1 — MVP | Validación gratuita hasta 1.000 usuarios | Módulos 1, 2, 4, 8 (acceso, progreso por aula, protocolo, materiales) |
| 2 | Cuando haya colegios u ONG pagando | Módulos 3, 5, 6 (checklist, refuerzo, seguimiento agregado) |
| 3 | Escala, varios clientes institucionales | Módulo 7 (panel institucional con reportes) |

## 6. Lo que sigue necesitando a Arianna (no resuelto aquí)

1. Texto final del protocolo del Módulo 4.
2. Cadencia recomendada de los recordatorios de refuerzo (Módulo 5).
3. Si mostrar el número exacto del contador de seguimiento (Módulo 6) es seguro, o si conviene mostrar solo un estado binario para evitar que se lea como señal de riesgo.
4. Si los docentes necesitan su propio consentimiento de datos, aparte del consentimiento institucional a las familias.

## See also

- [Evidencia psicológica y de protección](../research/evidencia-psicologica-proteccion.md)
- [No hacer](no-hacer.md)
- [Guiones — La Isla de los Acuerdos](../narrative/isla-de-los-acuerdos-guiones.md)
- [Canvas B — mercado y negocio](../research/canvas-b-mercado-negocio.md)
- [Plan de continuidad](plan-continuidad-historia-negocio.md)
- [Preguntas abiertas](preguntas-abiertas.md)
