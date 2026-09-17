---
title: Plan de continuidad — historia, diseño y modelo de negocio
type: project
updated: 2026-09-17
status: draft
sources: Diego, 2026-09-17; wiki vigente de YAIS-RED
---

# Plan de continuidad — historia, diseño y modelo de negocio

## Propósito de esta página

Esta página sirve como **handoff para otra sesión/agente**. Diego quiere continuar por separado con historia, niveles, diálogos, diseño de experiencia, investigación psicológica, planificación de desarrollo y modelo de negocio, mientras la sesión actual conserva el trabajo 3D.

No cierra decisiones nuevas. Todo lo que diga «propuesta», «candidato» o «investigar» debe tratarse como hipótesis hasta que Diego y el equipo lo validen.

## Punto de partida que se debe conservar

- Proyecto: **YAIS-RED**.
- Producto actual: experiencia de **prevención primaria de ASI** para niños de primaria, aproximadamente 6–12 años, con acompañamiento para padres y escuela.
- Eje vigente: salud mental entendida como promoción/prevención primaria; no es diagnóstico, terapia ni sustituto de profesionales. Ver [Salud mental](salud-mental.md) y [Decisión 002](../decisions/002-eje-salud-mental-asi.md).
- Concepto visual en curso: **La Isla de los Acuerdos**, una antología de minijuegos con mascota propia, no un mundo abierto. La estética 3D aprobada por Diego corresponde a la entrega anterior; los cuatro NPC nuevos quedan para revisión artística.
- Núcleo de minijuegos ya bocetado: «saludo que puedo elegir», «mi círculo de 3», «secreto que pesa vs sorpresa» y «a quién le cuento».
- Cadena técnica provisional actual: PlayCanvas + Blender + glTF/GLB. Blender puede ejecutarse headless; el juego web no necesita Blender en tiempo de ejecución. Ver [Cadena técnica web 3D](toolchain-web-3d.md).
- Modelo de negocio: **pendiente de investigación y definición**. No inventar pagador, precio, métricas ni sostenibilidad como hechos.

La memoria histórica todavía conserva el contexto de HACKBIZ 2026, Roblox y una sesión cerrada. La dirección web 3D es posterior y provisional; si el equipo decide que YAIS-RED deja de ser solo un entregable de hackathon, documentar esa decisión aparte y no borrar el historial.

## Estado 3D al hacer el traspaso

La entrada de revisión está en [catálogo de producción](../../assets/production/index.html#npc) y el detalle técnico en [PRODUCCION-3D.md](../../PRODUCCION-3D.md).

- Mascota capibara v005: BLEND, GLB, cuatro vistas y visor web; fidelidad artística aprobada por Diego el 2026-09-17.
- Mundo/arquitectura: 20 piezas estáticas.
- Props: 20 piezas estáticas.
- NPC: niño explorador v001; niña en silla de ruedas, educadora y guía comunitario v002; cada uno tiene BLEND, GLB, cuatro vistas, galería y ficha.
- Todo lo anterior sigue sin retopología móvil definitiva, LOD, rig, pesos, clips de animación y colisiones integradas en PlayCanvas.
- La niña tiene partes separadas de la silla para poder preparar después ruedas, silla y personaje como sistemas coordinados.

La siguiente sesión no debe rehacer el arte 3D ni afirmar que está listo para producción móvil. Puede trabajar en paralelo sobre documentación, guion y datos narrativos.

## Línea de trabajo A — historia y arco de aprendizaje

### Objetivo de diseño

Construir una experiencia breve, cálida y jugable que ayude a reconocer límites, diferenciar situaciones y buscar apoyo. El aprendizaje debe salir de decisiones comprensibles y de una conversación posterior, no de miedo, castigo, exposición personal o memorización de definiciones.

### Arco candidato de la Isla

Es una propuesta de orden, no una decisión cerrada:

1. **Llegada:** conocer la isla, elegir cómo saludar y descubrir que se puede aceptar, cambiar o rechazar un saludo.
2. **Mi círculo de 3:** distinguir personas de confianza por conductas de cuidado y ayuda, no solo por parentesco o autoridad.
3. **Secreto o sorpresa:** diferenciar una sorpresa agradable y temporal de un secreto que produce presión, miedo o peso.
4. **A quién le cuento:** practicar pedir ayuda a una persona adulta segura y elegir otra opción si la primera no escucha.
5. **Integración:** resolver una situación nueva combinando las cuatro habilidades, sin representar abuso ni pedir al niño que relate experiencias reales.
6. **Puente para adultos:** material breve para familias/facilitadores sobre escuchar, no culpar, no prometer silencio absoluto y activar la ruta local correspondiente.

Investigar antes de fijar: duración de cada sesión, orden óptimo, división por edades, lectura autónoma, audio, dificultad, repetición, cantidad de finales y si el módulo adulto debe estar dentro del juego o ser una guía externa.

### Ficha que debe escribirse para cada minijuego

Cada episodio debe tener una ficha con:

- habilidad observable;
- situación cotidiana segura y no gráfica;
- decisión del jugador y alternativas válidas;
- feedback inmediato y explicación breve;
- oportunidad de reintentar sin vergüenza;
- cierre/debrief para aula o familia;
- accesibilidad (texto, audio, contraste, tamaño, control táctil);
- qué datos se guardan —preferir progreso, no contenido personal—;
- criterio de éxito pedagógico y prueba con niños/facilitadores;
- límites: qué el episodio no enseña ni promete.

### Principios de diálogo que deben validarse

Propuestas de trabajo para revisar con psicología y protección infantil:

- frases cortas, concretas, sin dobles sentidos ni interrogatorio;
- validar la elección y el derecho a cambiar de opinión;
- no presentar la obediencia a adultos como valor absoluto;
- no clasificar a una persona como «buena» o «mala» por una sola señal;
- no pedir confesiones, nombres, lugares ni detalles de experiencias reales;
- no premiar con puntos una revelación ni castigar una respuesta distinta;
- diferenciar privacidad, secreto dañino y sorpresa temporal con ejemplos seguros;
- permitir que el jugador practique volver a pedir ayuda si no fue escuchado;
- evitar prometer «esto queda entre nosotros»;
- cerrar con una ruta humana de apoyo, no con una alerta automática.

Las frases concretas de apoyo, derivación y respuesta adulta deben ser revisadas por el perfil profesional de Arianna/Mauricio y por el protocolo local antes de implementarse. Ver [No hacer](no-hacer.md).

## Línea de trabajo B — investigación psicológica y de protección

La otra sesión debe construir una tabla de evidencia, no solo una colección de consejos. Para cada afirmación: fuente, población/edad, intervención, resultado, limitación, aplicación posible y riesgo.

Temas a investigar:

- prevención primaria de ASI y educación sobre límites apropiada por edad;
- desarrollo cognitivo, emocional y lingüístico de 6–8 y 9–12 años;
- aprendizaje socioemocional y práctica de habilidades de ayuda;
- diseño informado por trauma sin recrear el daño;
- lenguaje recomendado para escuchar y responder sin culpar;
- diferencia entre promoción, prevención y atención clínica;
- protocolos de derivación y salvaguarda aplicables en Bolivia/Santa Cruz;
- participación segura de niños, consentimiento de familias y pruebas con escuelas;
- accesibilidad e inclusión, incluida la representación de discapacidad;
- privacidad infantil: minimización, no diarios, no chat y no almacenamiento de relatos;
- cómo medir aprendizaje sin convertirlo en diagnóstico ni examen de riesgo.

Usar fuentes primarias o institucionales y citar cada recomendación. Si una fuente contradice la wiki, anotarlo con atribución; no resolver la contradicción silenciosamente.

## Línea de trabajo C — diseño de juego y gamificación

Investigar qué mecánicas ayudan a practicar decisiones y cuáles serían dañinas en este dominio. La dirección inicial es:

- decisiones con consecuencias narrativas legibles, no respuestas «correctas» humillantes;
- reintento, exploración y feedback; no rachas ni tablas públicas;
- recompensas cosméticas o de reconstrucción de la isla, nunca premios por contar algo personal;
- sesiones cortas con pausas y un debrief facilitado;
- cámara y controles móviles definidos por prueba en teléfono, no por preferencia estética;
- audio opcional, texto legible, controles grandes y navegación sin precisión motora excesiva;
- contenido narrativo separado del código para poder revisarlo por profesionales;
- telemetría mínima y anónima, si realmente sirve para mejorar el producto.

Preguntas: ¿qué edad mínima puede leer el juego?, ¿conviene separar 6–8 y 9–12?, ¿qué significa «progreso» sin fomentar competencia?, ¿cuándo debe intervenir un facilitador?, ¿cómo se evalúa la transferencia a una conversación real?

## Línea de trabajo D — modelo de negocio pendiente

Esta sección deja anotado **qué se quiere investigar**, no una decisión de ingresos.

### Marco que ya corresponde usar

Completar el [Canvas B](canvas-b.md) en este orden:

1. problema acotado;
2. propósito;
3. propuesta de valor;
4. segmentos;
5. relación con cada segmento;
6. cadena de valor y aliados;
7. actividades clave;
8. recursos clave;
9. canales con bajo impacto ambiental;
10. costos;
11. métricas de impacto;
12. fuentes de ingresos.

### Hipótesis que se deben conservar como hipótesis

- Usuario directo posible: niño acompañado por docente, facilitador o familia.
- Compradores/aliados posibles: colegios, ONG, fundaciones, municipios, programas de protección, cooperación o iniciativas de RSE. **Ninguno está confirmado como pagador.**
- Valor social candidato: práctica segura de límites, red de apoyo y conversación adulta antes del daño.
- Valor económico candidato: kit reutilizable para sesiones de aula, con materiales para facilitadores y familias.
- Valor ambiental candidato: reducir materiales impresos y viajes o campañas repetidas, pero esto es insuficiente sin una métrica concreta y una comparación de base.
- Posibles ingresos a estudiar: licencia institucional, precio por aula/ciclo, implementación y capacitación, contratos de programa, subvenciones o RSE. No escoger uno sin entrevistas, costos y validación.

### Preguntas de negocio para la siguiente sesión

- ¿Quién tiene el problema presupuestado y quién firma la compra?
- ¿Quién usa el producto y quién asume salvaguarda, capacitación y soporte?
- ¿Se vende software, un programa pedagógico acompañado o un kit mixto?
- ¿El cliente paga por aula, por escuela, por cohorte o por periodo?
- ¿Qué parte debe ser gratuita para que no se excluya a escuelas con menos recursos?
- ¿Cuál es el costo real de revisión psicológica, accesibilidad, hosting, soporte, actualización de contenido y cumplimiento legal?
- ¿Qué aliados reducen costo y aumentan confianza sin ceder datos de niños?
- ¿Qué evidencia mínima pediría un colegio/ONG antes de pagar?
- ¿Cómo se evita la dependencia de subvenciones puntuales?
- ¿Qué mercado inicial es accesible para el equipo: Bolivia, Santa Cruz, ONG, colegios privados o programas públicos?
- ¿Qué modelo ambiental medible encaja de verdad: materiales evitados, desplazamientos, energía, reutilización o una intervención urbana concreta?

### Métricas a diseñar, sin inventar cifras

Separar indicadores de salida, resultado e impacto:

- **Social:** alcance, finalización, comprensión de conceptos, capacidad de identificar una persona segura, calidad del debrief y derivaciones acompañadas por protocolo.
- **Económico:** costo por aula, tiempo de facilitación, retención institucional, costo de implementación y sostenibilidad del proveedor.
- **Ambiental:** línea base, unidad evitada o intervención concreta, método de medición y posibles efectos no deseados. «Paperless» o una planta virtual no bastan.

No recolectar relatos de menores para producir métricas. El diseño de evaluación debe pasar por ética, consentimiento y minimización de datos.

## Línea de trabajo E — planificación de desarrollo independiente del 3D

El agente de programación puede trabajar con contenido ficticio y datos estructurados sin esperar el rig:

1. definir el vertical slice de un solo episodio;
2. escribir guion, estados, decisiones, feedback y debrief en una tabla o JSON versionable;
3. separar contenido, localización, audio y lógica;
4. definir el contrato de datos que PlayCanvas leerá;
5. montar una escena gris con botones táctiles y accesibilidad;
6. medir carga y controles en un teléfono objetivo;
7. conectar modelos temporales solo después de que el flujo sea jugable;
8. integrar arte estático;
9. añadir rig/animaciones;
10. probar con facilitadores antes de pruebas infantiles formales.

Entregables útiles para esa sesión:

- documento de visión de experiencia;
- mapa de episodios y dependencias;
- ficha de cada minijuego;
- matriz de diálogos y estados;
- tabla de evidencia psicológica;
- Canvas B con hipótesis, evidencia y huecos;
- backlog priorizado y criterios de aceptación;
- esquema de contenido versionable;
- registro de riesgos de seguridad, privacidad, producto y negocio.

## Orden recomendado para la siguiente sesión

1. Leer [Síntesis](../meta/synthesis.md), [MVP](mvp.md), [No hacer](no-hacer.md), [Salud mental](salud-mental.md), [Triple impacto](triple-impacto.md) y esta página.
2. No empezar por los cuatro episodios completos: elegir un vertical slice, preferiblemente «saludo que puedo elegir» o «a quién le cuento», y justificarlo.
3. Investigar evidencia psicológica y salvaguarda antes de fijar diálogos sensibles.
4. Producir el guion y la matriz de decisiones con contenido ficticio, sin pedir datos personales al jugador.
5. En paralelo, investigar clientes, entrevistas, costos y opciones de ingresos para completar el Canvas B.
6. Convertir decisiones confirmadas en una página de `wiki/decisions/`; conservar las alternativas rechazadas como historial.
7. Actualizar `wiki/index.md` y `wiki/log.md` al cerrar la sesión.

## Riesgos que no se deben perder en el traspaso

- Convertir prevención en terapia, diagnóstico o promesa de seguridad.
- Diseñar un confesor, diario, chat o alerta automática.
- Pedir o guardar relatos de menores.
- Usar puntos, rankings o premios sobre revelaciones y vulnerabilidad.
- Mezclar empleabilidad, inglés, IA y triple impacto dentro del primer episodio sin justificar alcance.
- Llamar triple impacto a «digital/paperless» sin métrica ambiental.
- Elegir un pagador o precio sin validación.
- Tratar el prototipo 3D como juego terminado o como rendimiento móvil validado.

## See also

- [Síntesis](../meta/synthesis.md)
- [Alcance MVP](alcance-mvp.md)
- [Propuesta de valor](propuesta-valor.md)
- [Canvas B](canvas-b.md)
- [Triple impacto](triple-impacto.md)
- [Salud mental](salud-mental.md)
- [Empleabilidad juvenil](empleabilidad-juvenil.md)
- [No hacer](no-hacer.md)
- [Cadena técnica web 3D](toolchain-web-3d.md)
- [Plan de producción 3D](../../PRODUCCION-3D.md)
