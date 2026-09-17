---
title: La Isla de los Acuerdos — guiones y matrices de decisión (4 episodios)
type: narrative
updated: 2026-09-17
status: draft
---

# La Isla de los Acuerdos — guiones y matrices de decisión

> **Estado: borrador de diseño narrativo, sin validar.** Nada de este documento está listo para usarse con niños. Todas las frases marcadas con **[VALIDAR]** tienen que revisarse contra la tabla de evidencia (Línea B), con psicología (Arianna/Mauricio) y con el protocolo local de protección antes de grabar audio o implementarlas. Los nombres marcados como **[PROPUESTA]** son provisionales. El nombre del juego para niños sigue abierto.

Relacionado: [Plan de continuidad](../project/plan-continuidad-historia-negocio.md) · [No hacer](../project/no-hacer.md) · [Plataforma preventiva ASI](../project/plataforma-preventiva-asi.md) · [Problema](../project/problema.md) · [Producción 3D](../../PRODUCCION-3D.md) · Contenido de datos del episodio 1: `content/episodes/ep01-saludo.json`

## Convenciones de este documento

| Marca | Significado |
| --- | --- |
| **[VALIDAR]** | Frase o regla sensible. No implementar hasta que la revisen la evidencia y psicología. |
| **[PROPUESTA]** | Nombre o decisión creativa provisional. |
| `EP01_S03_L002` | Id de localización: episodio, escena y línea. Coincide con el JSON cuando existe. |
| *(animación / emoción)* | Sugerencia para rig y clips. Todavía no existen rigs ni clips (ver PRODUCCION-3D). |
| **6–8 / 9–12** | La línea u opción aparece solo en ese modo de edad. |
| «tú» | El jugador. No tiene avatar ni nombre. Los personajes le hablan en segunda persona y con lenguaje neutro de género («te doy la bienvenida», no «bienvenido/a»). |

Reglas de escritura que se aplican a **todas** las líneas:

- Frases de 12 palabras o menos siempre que se pueda. Una idea por globo.
- Presente, voz activa, vocabulario de segundo de primaria. «Persona grande» en 6–8 y «adulto» en 9–12.
- Español neutro con registro boliviano cálido («¡Qué lindo!», «nomás», «ándale» solo en personajes adultos y con moderación). **[VALIDAR]** los regionalismos con docentes de Santa Cruz.
- Nunca: «¡Incorrecto!», «¡Mal!», «perdiste», sonidos de error, caras de enojo dirigidas al jugador, cuentas regresivas ni vidas.
- Nunca se le pregunta al jugador por su vida real («¿a ti te pasó?», «¿quién es?», «¿dónde?»).
- Nunca se nombra ni se muestra abuso. La palabra «abuso» no aparece en la pantalla para niños. En la guía para adultos sí se nombra con claridad.
- Nadie es «malo». Se habla de **conductas** («eso no es cuidar») y no de personas.

---

# 0. Visión general

## 0.1 Premisa

**La Isla de los Acuerdos** es una isla pequeña donde la gente vive con acuerdos para cuidarse. Un *acuerdo* es «algo que decidimos juntos para cuidarnos». Los acuerdos están escritos en tarjetas que sostienen la isla: forman las tablas de los puentes, las piedras de los caminos, las ventanas de la casa y la luz del faro.

Anoche sopló un **viento travieso** que desordenó caminos y puentes y apagó el faro. No es una tormenta peligrosa ni hay villano: es solo desorden. **Capi**, la capibara guía, necesita ayuda para arreglar la isla. Cada episodio practica un acuerdo y, al terminarlo, se reconstruye una parte de la isla.

¿Por qué «de los Acuerdos»? Porque el tema de fondo es el **consentimiento y el cuidado mutuo**, presentado como algo que se decide, se respeta y se puede pedir, no como una lista de prohibiciones. «Acuerdo» también sirve para el aula: el facilitador empieza cada sesión con los acuerdos del grupo.

### Qué se reconstruye (recompensa solo cosmética)

La reconstrucción ocurre **al completar el episodio por cualquier camino**. No depende de acertar, de la cantidad de intentos ni de revelar nada.

| Episodio | Acuerdo que se practica | Parte de la isla que vuelve | Detalle cosmético |
| --- | --- | --- | --- |
| 1. Saludo que puedo elegir | «Yo elijo mi saludo y respeto el de los demás.» | Puente grande hacia la isla y banco | Estrella nueva en la mochila de Capi |
| 2. Mi círculo de 3 | «Tengo personas que me cuidan.» | Camino de piedras, vallas y huerto (brotes) | El círculo de tres se ilumina en la plaza |
| 3. Secreto que pesa o sorpresa | «Las sorpresas alegran; los secretos que pesan se cuentan.» | Casa: ventanas, techo y flores | Fiesta sorpresa con regalo para la profe |
| 4. A quién le cuento | «Si no me escuchan, lo digo otra vez o busco a otra persona.» | Escalera y faro encendido | La luz del faro recorre la isla |
| Cierre. Fiesta del faro | Los cuatro acuerdos juntos | Isla completa, nubes y agua en movimiento | Escena final con todos los personajes; sin puntaje |

## 0.2 Tono

- **Cálido, curioso y con humor suave**, como un libro ilustrado. La isla es un lugar seguro. La incomodidad se muestra en pequeño y siempre se resuelve dentro de la escena.
- **Sin miedo:** no hay música tensa, oscuridad, desconocidos amenazantes ni «peligro» como gancho. Las situaciones difíciles se cuentan desde fuera («a Tomi le pesa la mochila») y nunca desde dentro.
- **Sin moralina:** Capi no sermonea. Resume en una frase lo que el jugador acaba de hacer («Preguntaste primero. Eso es cuidar.»).
- **Agencia:** el jugador ayuda a otros (Tomi, Luna) más de lo que se protege a sí mismo. Así practica la habilidad con distancia emocional. Esta es una decisión de diseño **[VALIDAR]**: se apoya en el principio de practicar a través de un personaje, pero hay que confirmar que la transferencia no se pierde.

## 0.3 Personajes

Se usan los modelos 3D existentes. Los nombres son **[PROPUESTA]** y no deben coincidir con personas del equipo ni con niños reales.

| Personaje | Modelo existente | Nombre [PROPUESTA] | Función narrativa | Rasgos de voz |
| --- | --- | --- | --- | --- |
| Mascota capibara con mochila con estrella | `mascot` v005 | **Capi** | Guía. Acompaña, resume, invita a reintentar y nunca juzga. Lleva en la mochila los objetos de cada episodio. | Tranquila, alegre, frases muy cortas; pausa antes de cada pregunta. Género neutro («la guía»). |
| Niño explorador (camiseta de ola, shorts cargo, mochila azul) | `child_explorer` v001 | **Tomi** | Compañero impulsivo y cariñoso. Se equivoca con naturalidad y aprende (abraza sin preguntar). En los episodios 3 y 4 carga un «secreto que pesa» sin contenido explícito. | Rápido, entusiasta, exclamaciones. |
| Niña en silla de ruedas (moños, camiseta de flor, mochila morada) | `child_wheelchair` v002 | **Luna** | Amiga segura de sí, con criterio y buenas ideas. Pone límites con calma. **No es víctima ni objeto de lástima**: su silla no es el tema, salvo para modelar el respeto de su espacio. | Clara, serena, con humor. |
| Educadora (sobrecamisa azul, libro, credencial) | `educator` v002 | **Profe Clara** | Adulta de confianza que modela cómo escuchar. Aparece en los episodios 1 a 4. | Pausada, se agacha a la altura de los niños, valida. |
| Guía comunitario (gorra, chaleco, barba, bolso) | `community_guide` v002 | **Don Beto** | Adulto cariñoso y ocupado. Modela que un adulto que quiere a los niños **también** puede equivocarse (insistir con un abrazo en 9–12, no escuchar a la primera en el episodio 4) y corregirse. | Bonachón, bromista y cálido; pide perdón con naturalidad. |

> **Decisión delicada [VALIDAR]:** que Don Beto, un adulto querido, insista con un abrazo (Ep1, 9–12) o no escuche a la primera (Ep4) sirve para enseñar que las personas conocidas también pueden equivocarse, **sin** convertirlo en sospechoso. Nunca hace algo más que eso y siempre repara la situación. Psicología debe decidir si es adecuado o si esos roles los debe tomar un personaje sin modelo (una voz fuera de cámara).

**Otros personajes sin modelo:** solo aparecen como ejemplos en tarjetas ilustradas 2D («un primo», «una vecina», «un chico mayor»). No se animan en 3D ni tienen escenas propias. Así se evita modelar a «el sospechoso».

## 0.4 El papel de Capi

1. **Guía de navegación:** abre el mapa, presenta el objetivo y marca el siguiente paso.
2. **Espejo sin juicio:** después de cada decisión dice qué pasó y por qué importa, en una sola frase.
3. **Red de reintento:** si una opción no cuida, Capi invita a «probar otra vez» sin marcar error.
4. **Portador de herramientas:** de su mochila salen la brújula del cuerpo (Ep1), el círculo de tres (Ep2), la mochila liviana o pesada (Ep3) y el globo de diálogo (Ep4).
5. **Lo que Capi no es:** no es terapeuta, confidente ni adulto de confianza. Capi **no recibe secretos del jugador** y siempre deriva a «una persona grande de tu círculo». Capi lo dice de forma explícita en el Ep2 **[VALIDAR]**.

## 0.5 Herramientas transversales

### Brújula del cuerpo (prop: brújula)

La aguja tiene tres zonas con icono, color **y** forma, para no depender del color:

| Zona | Icono | Color | Texto 6–8 | Texto 9–12 |
| --- | --- | --- | --- | --- |
| Tranquilidad | Sol | Verde agua | «Todo tranquilo» | «Me siento tranquilo o tranquila» |
| Duda | Nube | Amarillo arena | «Hmm, no sé» | «No estoy seguro o segura» |
| Uh-oh | Gota con signo de exclamación suave | Naranja coral (no rojo alarma) | «¡Uh-oh!» | «Uh-oh: algo no se siente bien» |

Regla de diseño: **las emociones nunca se califican como correctas o incorrectas.** La brújula enseña a notar la señal, no a acertar. **[VALIDAR]**

### Regla «No – Me alejo – Lo cuento»

Aparece por primera vez al final del Ep1 (solo mencionada), se practica en el Ep4 y se integra en el cierre. Siempre va con la cláusula de no culpa: **«Si no pudiste decir no o alejarte, igual puedes contarlo. No es tu culpa.»** **[VALIDAR]**

### Botón de pausa y salida suave (prop: pausa/sonido)

Está siempre visible. Pausar abre: «Podemos parar cuando quieras.» Opciones: **Seguir**, **Volver al mapa**, **Terminar por hoy**. Terminar no tiene penalización y se guarda el progreso de la última escena completada.

### Mapa (prop: mapa)

Muestra los cuatro episodios más el cierre. Los episodios se desbloquean en orden **[VALIDAR el orden]**, y el facilitador puede desbloquear todos desde un menú adulto (acceso con gesto largo más una suma simple, sin cuentas ni contraseñas).

## 0.6 Estructura de sesión

Hipótesis de duración, pendiente de validar en pruebas con facilitadores (Línea C):

| Momento | Aula (con facilitador) | Familia | Quién guía |
| --- | --- | --- | --- |
| Pre-juego | 5–8 min: acuerdos del grupo, calentamiento sin pantallas, se presentan Capi y la palabra del día | 2–3 min: leer juntos la tarjeta del episodio | Adulto |
| Juego | 12–15 min (6–8) / 15–18 min (9–12) | Igual | El niño juega; el adulto acompaña sin dictar respuestas |
| Debrief | 10–15 min: 3–5 preguntas y una actividad corta | 5–10 min: 2–3 preguntas en la vida cotidiana | Adulto |
| **Total** | **≈ 30–40 min por episodio** (un período escolar) | **≈ 20–30 min** | |

- **Un episodio por sesión.** Recomendación: una sesión por semana durante 5 semanas (4 episodios más el cierre) **[VALIDAR frecuencia y dosis]**.
- **Formas de juego en aula** (a definir con pruebas):
  - *Proyector colectivo:* el grupo vota o una niña o un niño distinto toca en cada decisión. Es recomendable para 6–8.
  - *Parejas con un teléfono o una computadora:* recomendable para 9–12.
  - *Individual:* solo en familia o en el laboratorio de computación con apoyo.
- **Regla de aula:** en la votación nadie tiene que explicar *por qué* eligió algo personal. Se discuten los personajes, no la vida de cada quien.

## 0.7 Variantes por edad

| Aspecto | 6–8 | 9–12 |
| --- | --- | --- |
| Lectura | No se asume. Narración en audio **activada por defecto**, texto corto de apoyo e iconos grandes en cada opción | El texto es principal y el audio es opcional (activado por defecto; se puede apagar) |
| Opciones por decisión | 2–3 (máx. 4 con iconos) | 3–4 |
| Vocabulario | «Persona grande», «uh-oh», «secreto que pesa» | «Adulto de confianza», «incómodo», «presión», «privado» |
| Contenido extra | — | Ep1: adulto que insiste con un abrazo. Ep3: categoría «privado». Ep4: adulto que minimiza. Cierre: situación con mensaje en una pantalla **[VALIDAR]** |
| Minijuegos | Tocar para elegir; nunca arrastrar obligatorio | Arrastrar o tocar (hay alternativa de toque siempre) |
| Duración de juego | 12–15 min | 15–18 min |

El facilitador elige el modo de edad al iniciar. **No se le pregunta la edad al niño.**

## 0.8 Accesibilidad

- **Lectura:** audio en todas las líneas; subtítulos siempre activos; tipografía sans de alta legibilidad y ≥ 20 px equivalentes en teléfono; tamaño ajustable en tres pasos; texto sobre panel opaco con contraste ≥ 4.5:1.
- **Motor:** controles táctiles grandes (≥ 48 × 48 px, con separación); ninguna decisión depende de precisión, velocidad ni gestos complejos; no hay límites de tiempo; todo arrastre tiene alternativa de «tocar origen y tocar destino»; en computadora se juega con teclado (Tab/Enter/flechas).
- **Visión:** los estados usan icono, forma y texto además del color; paleta revisada para daltonismo; hay opción de reducir movimiento de cámara.
- **Audición:** subtítulos con nombre del hablante y color o icono del personaje; los sonidos importantes tienen un equivalente visual.
- **Cognición y regulación:** una instrucción a la vez; se puede repetir el audio de cualquier línea; pausa siempre visible; no hay sustos, destellos ni ruidos fuertes; hay un modo de «música suave o sin música».
- **Representación:** Luna usa silla de ruedas y participa en igualdad (propone ideas, pone límites, ayuda a Tomi). Los saludos alternativos no requieren manos, hay opción «de lejos con sonrisa». **[VALIDAR representación de discapacidad con personas con discapacidad o organizaciones]**.
- **Idioma:** la localización está separada del contenido (JSON). Queda abierta una posible versión en otras lenguas de Bolivia **[VALIDAR necesidad y pertinencia]**.
- **Dispositivo:** teléfono en horizontal y computadora. El diseño de cámara se definirá con pruebas en un teléfono objetivo (Línea E).

## 0.9 Datos: qué se guarda y qué no

**Se guarda (localmente en el dispositivo, sin cuenta):**

- `episodio.XX.iniciado` y `episodio.XX.completado` (booleanos).
- Partes de la isla reconstruidas (derivadas de lo anterior).
- Ajustes: modo de edad, audio, tamaño de texto, movimiento reducido.
- Última escena completada, para retomar.

**No se guarda nunca:**

- Qué opción eligió el jugador en cada decisión. Esto se mantiene solo en memoria durante la escena para ramificar y se borra al salir.
- Nombres, edades, escuela, dibujos, texto libre, audio o imagen del niño.
- Tiempos de reacción, cantidad de reintentos o patrones de respuesta que puedan interpretarse como «señal de riesgo».

**No existe:** chat, diario, caja de secretos, campo de texto libre, botón de denuncia ni alerta automática.

Telemetría: **ninguna por defecto.** Si en el futuro se agrega, será agregada y anónima (p. ej., «% de sesiones que completan el Ep1»), con revisión ética y sin datos de elecciones individuales **[VALIDAR]**.

## 0.10 Protocolo de seguridad durante la sesión (para facilitadores)

Borrador **[VALIDAR completo con Arianna/Mauricio y la ruta local]**:

1. **Antes:** la sesión requiere permiso de dirección y aviso a las familias. El facilitador conoce la ruta local de derivación y quién es la persona de protección de la escuela.
2. **Si un niño se angustia:** pausar el juego y ofrecer una actividad tranquila o salir con un adulto de apoyo. No preguntar «¿qué te pasó?» delante del grupo.
3. **Si un niño empieza a contar algo personal en grupo:** interrumpir con suavidad y calidez: «Gracias por confiar. Eso es importante. Quiero escucharte bien: hablemos tú y yo en un momento.» Después se habla en privado, se escucha sin interrogar, no se culpa, no se promete guardar el secreto y se activa el protocolo. **[VALIDAR — crítico]**
4. **Nunca** se usa el juego como herramienta de detección, diagnóstico ni «prueba» de nada.
5. **Después:** el facilitador registra solo lo que exige el protocolo institucional, fuera del juego.

## 0.11 Mapa de episodios y dependencias

```
Ep1 Saludo (brújula del cuerpo, pedir permiso, decir no, cambiar de idea)
  └─> Ep2 Círculo de 3 (confianza por conductas; 3 personas grandes)
        └─> Ep3 Secreto que pesa o sorpresa (usa brújula; presenta la mochila de Tomi)
              └─> Ep4 A quién le cuento (usa círculo de 3 + globo de diálogo; resuelve la mochila de Tomi)
                    └─> Cierre: Fiesta del faro (integración de los cuatro acuerdos)
```

Cada episodio empieza con un recordatorio de 1–2 líneas del anterior, para aulas que retoman tras una semana.

---

# 1. Episodio 1 — «Saludo que puedo elegir» (llegada)

## 1.1 Ficha

| Campo | Contenido |
| --- | --- |
| **Habilidad observable** | El niño (a) elige un saludo entre varias opciones, incluida «no, gracias»; (b) pide permiso antes de saludar a otro personaje; (c) acepta la negativa de otro sin insistir; (d) indica que puede cambiar de idea. |
| **Objetivo de aprendizaje** | Reconocer que cada persona puede elegir cómo la saludan y cómo la tocan, que se puede decir que no o cambiar de idea, que eso también vale con personas grandes y conocidas, y que se respeta el «no» de los demás. Presentar la brújula del cuerpo. |
| **Situación segura** | Llegada a la isla: saludos entre amigos y con adultos de la comunidad en un día soleado. Hay juego de «choca esos cinco». No hay contacto que no sea saludo ni personajes desconocidos. |
| **Mecánica de minijuego** | 1) *Práctica de brújula*: girar o tocar la aguja en tres situaciones neutras; todas las respuestas son válidas. 2) *Rueda de saludos*: tarjetas grandes con icono (mano, cinco, puños, abrazo, de lejos y «no, gracias»); el personaje reacciona con la animación elegida. 3) *Choca cinco*: juego de toques rítmico con la opción «¡Para!» siempre visible. 4) *Tablas del puente*: colocar tres tarjetas-acuerdo; cualquier orden sirve. |
| **Props / NPC / escenario** | Capi, Tomi, Luna, Don Beto y Profe Clara. Props: mochila, brújula, globo de diálogo, tres tarjetas, pausa/sonido. Escenario: isla grande, puente (roto y luego reparado), camino, vallas, banco, palmera, nube, agua, faro (apagado, al fondo). |
| **Accesibilidad** | Ver 0.8. «Choca cinco» sin velocidad obligatoria. «¡Para!» es un botón grande fijo y en computadora también responde a la barra espaciadora. En 6–8 hay 5 tarjetas de saludo (sin puños) y en 9–12 hay 6. |
| **Datos guardados** | `ep01.started`, `ep01.completed`, `island.bridge_main`, `island.bench`, `mascot.star_01`. Las elecciones de saludo no se guardan. |
| **Criterio de éxito pedagógico** | En el debrief, al menos 3 de cada 4 niños (a) nombran dos formas de saludar sin abrazo, (b) responden que se puede decir «no, gracias» también a una persona grande, y (c) nombran algo que se hace cuando otro dice no. **[VALIDAR umbral e instrumento]**. En las pruebas con facilitadores se verifica que ningún niño salga sintiendo que abrazar es «malo». |
| **Límites: qué NO enseña** | No enseña a detectar abuso ni a identificar «personas peligrosas». No dice que los abrazos o besos sean malos ni que haya que rechazar el afecto familiar. No enseña a desobedecer a los adultos en general. No promete que decir no siempre funcione, y aclara que si no se pudo decir no, no es culpa del niño. No trata el contacto en zonas privadas (queda para una decisión de psicología, ver 8). |

## 1.2 Pre-juego (facilitador, 5–8 min)

1. Acuerdos del grupo: «Aquí nos escuchamos. Nadie se burla. Nadie tiene que contar cosas de su vida. Podemos pasar si no queremos responder.» **[VALIDAR]**
2. Calentamiento «saludos del mundo» sin contacto: se prueban saludos de lejos, con la mano, con una sonrisa o con una reverencia. Luego cada quien, *si quiere*, saluda a un compañero preguntando primero.
3. Palabra del día: **«Elijo»**.

## 1.3 Guion escena por escena

Los ids coinciden con `content/episodes/ep01-saludo.json`.

### Escena 1 — Llegada (`s01_llegada`)

*Escenario: puente grande con tablas sueltas, agua, palmera, nube y faro apagado al fondo. Capi espera en la orilla.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP01_S01_L001 | Capi | ¡Hola! Te doy la bienvenida a la Isla de los Acuerdos. | Saluda con la mano, alegre |
| EP01_S01_L002 | Capi | Yo soy Capi. Soy la guía de esta isla. | Se señala la estrella de la mochila |
| EP01_S01_L003 | Capi | Anoche sopló un viento travieso. ¡Desordenó caminos y puentes! | Mira alrededor, sorpresa leve; una nube se mueve |
| EP01_S01_L004 | Capi | Aquí arreglamos la isla con acuerdos. | Toca la mochila |
| EP01_S01_L005 | Capi | Un acuerdo es algo que decidimos para cuidarnos. | Sonrisa, asiente |
| EP01_S01_L006 | Capi | ¿Me ayudas a arreglar el primer puente? | Inclina la cabeza, pregunta |
| EP01_S01_C001 | *Elección* | «¡Sí, vamos!» · «Primero quiero mirar» | — |
| EP01_S01_L007 | Capi | ¡Genial! Vamos juntos. | Salta de alegría *(si «Sí»)* |
| EP01_S01_L008 | Capi | Claro. Mira todo lo que quieras. Toca la estrella cuando quieras seguir. | Se sienta en el banco, tranquila *(si «mirar»; cámara libre breve)* |

### Escena 2 — La brújula del cuerpo (`s02_brujula`)

*Escenario: banco junto al camino. Capi saca la brújula de la mochila.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP01_S02_L001 | Capi | Te regalo algo de mi mochila: una brújula del cuerpo. | Saca la brújula, se la ofrece |
| EP01_S02_L002 | Capi | No marca el norte. Marca cómo se siente tu cuerpo. | Brújula en primer plano |
| EP01_S02_L003 | Capi | Sol: todo tranquilo. | La aguja apunta al sol |
| EP01_S02_L004 | Capi | Nube: hmm, no estoy seguro. | La aguja apunta a la nube; Capi se rasca la cabeza |
| EP01_S02_L005 | Capi | Uh-oh: algo no se siente bien. | La aguja apunta a uh-oh; Capi hace cara de «uh» suave, no de miedo |
| EP01_S02_L006 | Capi | Uh-oh puede sentirse como cosquillas raras en la panza, calor en la cara o ganas de alejarte. **[VALIDAR]** | Se toca la panza y luego las mejillas |
| EP01_S02_L007 | Capi | ¡Probemos! ¿Qué marca tu brújula? | Invita con la mano |
| *Minijuego M1* | Tarjetas | (1) «Comer tu fruta favorita.» (2) «Un ruido fuerte de repente.» (3) «Cruzar un puente que se mueve.» | Tarjeta ilustrada y aguja tocable |
| EP01_S02_F001 | Capi | Tu cuerpo te avisa. Aquí no hay respuestas malas. **[VALIDAR]** | Asiente, cálida *(después de cada tarjeta, cualquier respuesta)* |
| EP01_S02_F002 | Capi | A veces dos personas sienten distinto. Las dos brújulas valen. | Sonrisa *(tras la tarjeta 2 o 3; variación)* |
| EP01_S02_L008 | Capi | Tu brújula es tuya. Escucharla te ayuda a elegir. | Guarda la brújula en el cinturón visual del HUD |

### Escena 3 — Saludo con Capi (`s03_saludo_capi`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP01_S03_L001 | Capi | En esta isla, cada quien elige cómo saludar. | Abre los brazos |
| EP01_S03_L002 | Capi | ¿Cómo quieres saludarme? | Pregunta; aparece la rueda de saludos |
| EP01_S03_C001 | *Elección* | Mano · Choca cinco · Puños *(9–12)* · Abrazo · De lejos con sonrisa · Hoy no, gracias | — |
| EP01_S03_R001 | Capi | ¡Hola, hola! | Saluda con la mano *(mano)* |
| EP01_S03_R002 | Capi | ¡Choca esos cinco! | Choca los cinco *(cinco)* |
| EP01_S03_R003 | Capi | ¡Pum! Choque de puños. | Choque de puños *(puños)* |
| EP01_S03_R004 | Capi | ¡Un abrazo! Gracias. | Abrazo corto *(abrazo)* |
| EP01_S03_R005 | Capi | ¡Hola desde aquí! | Sonríe y saluda de lejos *(de lejos)* |
| EP01_S03_R006 | Capi | Está bien. Hoy no saludamos. Igual somos amigos. | Sonríe y asiente, sin tristeza *(hoy no)* |
| EP01_S03_L003 | Capi | Cualquier saludo vale si tú lo eliges. | Estrella de la mochila brilla |
| EP01_S03_L004 | Capi | Y puedes cambiar de idea. Hasta ahora mismo. ¿Quieres cambiar tu saludo? | Pregunta |
| EP01_S03_C002 | *Elección* | «Sí, quiero cambiar» *(vuelve a C001)* · «Así está bien» | — |

### Escena 4 — Tomi aprende a preguntar (`s04_tomi`)

*Escenario: camino con vallas caídas. Tomi llega corriendo.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP01_S04_L001 | Tomi | ¡Hola! Soy Tomi. ¡Estoy explorando la isla! | Salta, muy entusiasta |
| EP01_S04_L002 | Tomi | ¡Yo abrazo a todos! ¡Ahí voy! | Corre con los brazos abiertos |
| EP01_S04_L003 | Capi | ¡Espera, Tomi! ¿Qué se hace antes de saludar? | Levanta la mano con suavidad; Tomi frena en seco (cómico) |
| EP01_S04_C001 | *Elección* | «Preguntar primero» · «Abrazar rápido» · «No sé» | — |
| EP01_S04_F001 | Capi | ¡Eso! Preguntar es una forma de cuidar. | Pulgar arriba *(preguntar)* |
| EP01_S04_F002 | Capi | A muchos les gustan los abrazos. A otros no. Por eso preguntamos primero. | Tranquila, explica *(abrazar)* |
| EP01_S04_F003 | Capi | Te ayudo: primero se pregunta. Así el otro puede elegir. | Cálida *(no sé)* |
| EP01_S04_L004 | Tomi | ¡Ah, verdad! ¿Cómo quieres que te salude? | Se rasca la cabeza y sonríe |
| EP01_S04_C002 | *Elección* | Mano · Choca cinco · Puños *(9–12)* · Abrazo · De lejos · No, gracias | — |
| EP01_S04_R001 | Tomi | ¡Listo! | Hace el saludo elegido *(cualquier saludo)* |
| EP01_S04_R002 | Tomi | ¡Está bien! Te saludo de lejos. | Saluda de lejos, sin molestarse *(no, gracias)* |
| EP01_S04_L005 | Tomi | ¿Jugamos a chocar las manos súper rápido? | Levanta las dos manos |
| EP01_S04_C003 | *Elección* | «¡Sí!» · «No, gracias» | — |
| *Minijuego M2* | — | *(si «Sí»)* Tres choques al ritmo. Luego Tomi acelera. Botón «¡Para!» siempre visible. | Tomi ríe y acelera |
| EP01_S04_L006 | Capi | ¿Sigues queriendo jugar? | Aparece en un globo pequeño tras el tercer choque |
| EP01_S04_C004 | *Elección* | «Un poco más» · «¡Para, ya no quiero!» | — |
| EP01_S04_R003 | Tomi | ¡Ok, paro! Gracias por avisarme. | Baja las manos al instante, sonríe *(para; también si se toca «¡Para!» en cualquier momento)* |
| EP01_S04_F004 | Capi | Dijiste que sí y después cambiaste de idea. Eso también se vale. **[VALIDAR]** | Asiente |
| EP01_S04_F005 | Capi | Muy bien. Si en algún momento ya no quieres, puedes decir «para». | Cálida *(un poco más; dos choques más y el juego termina solo)* |
| EP01_S04_R004 | Tomi | ¡Bueno, otro día! | Se encoge de hombros alegre *(no, gracias en C003)* |
| EP01_S04_F006 | Capi | Dijiste que no y Tomi te escuchó. Así se juega. | Sonríe |

### Escena 5 — Luna elige (`s05_luna`)

*Escenario: puente pequeño roto. Luna observa las tablas.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP01_S05_L001 | Luna | ¡Hola! Soy Luna. Estoy mirando este puente roto. | Saluda con la mano y gira la silla hacia la cámara |
| EP01_S05_L002 | Capi | Ahora te toca a ti. ¿Cómo saludas a Luna? | Invita |
| EP01_S05_C001 | *Elección* | «¿Cómo te gustaría saludar?» · «¿Chocamos puños?» · «¡Te doy un abrazo!» | — |
| EP01_S05_R001 | Luna | ¡Gracias por preguntar! Hoy prefiero chocar puños. ¡Pum! | Choque de puños, alegre *(preguntar)* |
| EP01_S05_R002 | Luna | ¡Sí! ¡Pum! | Choque de puños *(ofrecer puños)* |
| EP01_S05_F001 | Capi | Ofrecer un saludo y dejar que elija también es preguntar. | Asiente *(tras R002)* |
| EP01_S05_R003 | Luna | Mmm, hoy no quiero abrazos. Gracias. | Palma abierta suave, tono amable *(abrazo sin preguntar)* |
| EP01_S05_C002 | *Elección* | «Está bien. ¿Qué saludo prefieres?» · «¡Pero un abrazo es más bonito!» | — |
| EP01_S05_R004 | Luna | Chocar puños. ¡Pum! Gracias por entender. | Choque de puños *(está bien)* |
| EP01_S05_R005 | Luna | Te dije que no, gracias. | Calma firme, sin enojo *(insistir)* |
| EP01_S05_F002 | Capi | Cuando alguien dice no, paramos. Así también cuidarán tu no. ¿Probamos otra vez? | Cálida; vuelve a C002 sin marca de error |
| EP01_S05_L003 | Luna | Una cosa más: mi silla es parte de mi espacio. Pregúntame antes de empujarla. **[VALIDAR]** | Toca la rueda, segura |
| EP01_S05_C003 | *Elección* | «¡Entendido!» · «¿Te ayudo a cruzar?» | — |
| EP01_S05_R006 | Luna | ¡Genial! | Pulgar arriba *(entendido)* |
| EP01_S05_R007 | Luna | Gracias por preguntar. Hoy puedo sola. Si necesito, te aviso. | Sonríe, avanza *(te ayudo)* |
| EP01_S05_L004 | Capi | Pedir permiso y respetar la respuesta. ¡Eso es un acuerdo! | Salta; una tabla vuela al puente grande |

### Escena 6 — Don Beto y Profe Clara (`s06_adultos`)

*Escenario: extremo del puente grande. Don Beto está con su bolso de herramientas.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP01_S06_L001 | Don Beto | ¡Buenas, buenas! Soy Don Beto. Cuido los caminos de la isla. | Se quita la gorra, saluda |
| EP01_S06_L002 | Don Beto | ¡Qué alegría verte! ¿Me das un abrazo de bienvenida? | Brazos a medio abrir, sin acercarse |
| EP01_S06_C001 | *Elección* | Abrazo · Mano · Choca cinco · De lejos · No, gracias | — |
| EP01_S06_R001 | Don Beto | ¡Gracias! Bienvenida y bienvenido a todos. | Abrazo corto y lateral *(abrazo)* |
| EP01_S06_R002 | Don Beto | ¡Claro! Así entonces. | Hace el saludo elegido *(mano / cinco / de lejos)* |
| EP01_S06_R003 | Don Beto | Está bien. ¡Igual me alegra verte! | Se vuelve a poner la gorra, sonríe *(no, gracias)* |
| **Solo 9–12, si no eligió abrazo** | | | |
| EP01_S06_L003 | Don Beto | ¡Ándale, un abracito nomás! **[VALIDAR]** | Bromista, da un paso |
| EP01_S06_C002 | *Elección* | «Dije que no, gracias.» · «Me voy con Capi.» · «Voy a llamar a la profe.» · «Bueno…» | — |
| EP01_S06_R004 | Don Beto | Tienes razón. Perdón por insistir. | Retrocede y se lleva la mano al pecho *(dije que no)* |
| EP01_S06_F001 | Capi | Alejarte también es una forma de cuidarte. | Camina con el jugador unos pasos *(me voy)* |
| EP01_S06_R005 | Don Beto | ¡Tienes razón! Perdón. | Desde lejos *(tras F001)* |
| EP01_S06_R006 | Profe Clara | Beto, eligió no abrazar. Respetemos eso. | Llega, tono amable y firme *(llamar a la profe)* |
| EP01_S06_R007 | Don Beto | Tienes razón, profe. Perdón. | Asiente |
| EP01_S06_R008 | Don Beto | Espera… te veo dudando. Mejor un saludo con la mano. | Se detiene por su cuenta *(bueno…)* **[VALIDAR]** |
| EP01_S06_F002 | Capi | A veces cuesta decir no. Si no puedes, no es tu culpa. Y siempre lo puedes contar. **[VALIDAR — crítica]** | Se acerca, cálida *(tras R008)* |
| **Todos** | | | |
| EP01_S06_L004 | Profe Clara | Hola, soy la profe Clara. Vine a ver el puente. | Llega con el libro, saluda de lejos |
| EP01_S06_L005 | Profe Clara | Puedes ser amable y elegir tu saludo. **[VALIDAR]** | Se agacha a la altura de la cámara |
| EP01_S06_L006 | Profe Clara | Las personas grandes también respetamos tu elección. **[VALIDAR]** | Sonríe |

### Escena 7 — El puente vuelve (`s07_reconstruccion`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP01_S07_L001 | Capi | ¡Mira! Con lo que practicaste, podemos arreglar el puente. | Señala el puente |
| *Minijuego M3* | — | Colocar tres tarjetas-acuerdo como tablas; cualquier orden: «Yo elijo mi saludo.» · «Puedo cambiar de idea.» · «Respeto el no de los demás.» | Cada tabla encaja con un sonido suave |
| EP01_S07_L002 | Capi | Acuerdo de hoy: mi cuerpo es mío. Yo elijo mi saludo y respeto el de los demás. **[VALIDAR]** | El puente brilla; el banco se endereza |
| EP01_S07_L003 | Capi | Y si tu brújula marca uh-oh, lo puedes contar a una persona grande de confianza. **[VALIDAR]** | La brújula del HUD pulsa suave |
| EP01_S07_L004 | Capi | ¡Pronto vamos a buscar a esas personas! | Mira hacia el camino |
| *Recompensa* | — | Puente grande y banco restaurados; estrella nueva en la mochila de Capi | Todos los personajes cruzan y celebran |
| EP01_S07_L005 | Capi | Gracias por ayudarme. Ahora conversemos con tu profe o tu familia. | Saluda; pantalla de fin con icono de «conversar» |

## 1.4 Matriz de decisiones — Episodio 1

| Estado / escena | Situación | Opciones del jugador | Feedback inmediato | Consecuencia narrativa | Estado siguiente |
| --- | --- | --- | --- | --- | --- |
| S01 C001 | Capi pide ayuda | Sí, vamos / Primero quiero mirar | L007 alegría / L008 «Mira todo lo que quieras» | Con «mirar», cámara libre hasta tocar la estrella; no se pierde nada | S02 |
| S02 M1 (×3) | Brújula con 3 situaciones neutras | Sol / Nube / Uh-oh | F001 «Aquí no hay respuestas malas»; F002 «Las dos brújulas valen» | La brújula queda en el HUD | S02 L008 → S03 |
| S03 C001 | Capi pregunta cómo saludar | Mano / Cinco / Puños (9–12) / Abrazo / De lejos / Hoy no | R001–R006 (Capi hace ese saludo o acepta el no) | Refuerza que todas son válidas | S03 L003 → C002 |
| S03 C002 | ¿Cambiar el saludo? | Sí / Así está bien | — | Con «Sí» se repite el saludo y se valida cambiar de idea | S03 C001 / S04 |
| S04 C001 | Tomi va a abrazar sin preguntar | Preguntar / Abrazar rápido / No sé | F001 / F002 (explica sin reproche) / F003 (ayuda) | Tomi se detiene en todos los casos | S04 L004 |
| S04 C002 | Tomi pregunta cómo saludar | 5–6 saludos / No, gracias | R001 / R002 (acepta sin molestarse) | Tomi modela que aceptar el no no enoja | S04 L005 |
| S04 C003 | Juego de choque rápido | Sí / No, gracias | M2 / R004 + F006 | — | M2 → C004 / S05 |
| S04 C004 (o botón «¡Para!») | Tomi acelera | Un poco más / ¡Para! | F005 / R003 + F004 | Tomi para al instante | S05 |
| S05 C001 | Saludar a Luna | Preguntar / Ofrecer puños / Abrazo sin preguntar | R001 / R002 + F001 / R003 | Con abrazo, Luna dice «hoy no» con amabilidad | S05 L003 / C002 |
| S05 C002 | Luna dijo que no | Está bien, ¿qué prefieres? / Pero un abrazo es más bonito | R004 / R005 + F002 «¿Probamos otra vez?» | Insistir no bloquea: se vuelve a la misma elección. No hay contador de intentos | S05 L003 / S05 C002 |
| S05 C003 | Espacio de la silla | ¡Entendido! / ¿Te ayudo a cruzar? | R006 / R007 | Una tabla vuela al puente | S05 L004 → S06 |
| S06 C001 | Adulto conocido pide abrazo | Abrazo / Mano / Cinco / De lejos / No, gracias | R001 / R002 / R003 | Todos los caminos son válidos; el adulto acepta | 9–12 sin abrazo: S06 L003; resto: S06 L004 |
| S06 C002 (9–12) | El adulto insiste en broma | Dije que no / Me voy con Capi / Llamo a la profe / Bueno… | R004 / F001 + R005 / R006 + R007 / R008 + F002 (no culpa) | Beto siempre repara. Ninguna opción es «de perder»: «Bueno…» muestra que ceder no es culpa del niño y que se puede contar | S06 L004 |
| S07 M3 | Tablas del puente | Tres tarjetas en cualquier orden | Encaje suave, sin error posible | Puente y banco restaurados; estrella en la mochila | Fin → debrief. Flags: `ep01.completed` |

## 1.5 Debrief

### Aula (10–15 min)

Preguntas (se habla de los personajes, nunca de la vida personal):

1. ¿Qué formas de saludar vimos en la isla? ¿Cuál más se les ocurre?
2. ¿Qué hizo Tomi antes de saludar, después de que Capi lo detuvo? ¿Por qué sirve preguntar?
3. Luna dijo «hoy no quiero abrazos». ¿Qué se hace cuando alguien dice no?
4. ¿Una niña o un niño puede decirle «no, gracias» a un abrazo de una persona grande? ¿Cómo lo puede decir con amabilidad? **[VALIDAR]**
5. *(9–12)* Si alguien insiste aunque dijiste no, ¿qué más puedes hacer? (Irte, buscar a una persona grande, contarlo.)

**Actividad corta: «Mi cartel de saludos» (5 min).** Cada niño dibuja en una hoja tres saludos que le gustan, sin nombres ni fotos. Luego, en parejas: «¿Cómo te gustaría que te salude?», y cada quien respeta la respuesta. Los carteles pueden quedar en el aula como recordatorio o llevarse a casa; no se recogen como evaluación.

**Cierre del facilitador:** «Todos podemos elegir cómo nos saludan. Y si alguna vez algo se siente uh-oh, se lo pueden contar a una persona grande de confianza.» **[VALIDAR]**

### Familia (5–10 min)

- «¿Cómo te gusta saludar a la familia cuando llegan visitas?»
- «Si no tienes ganas de dar un beso o un abrazo, ¿qué otro saludo podrías hacer?»
- Acuerdo familiar opcional: elegir juntos dos o tres «saludos alternativos» que valgan en reuniones familiares.

## 1.6 Frases [VALIDAR] del episodio 1

- EP01_S02_L006: «Uh-oh puede sentirse como cosquillas raras en la panza, calor en la cara o ganas de alejarte.»
- EP01_S02_F001: «Tu cuerpo te avisa. Aquí no hay respuestas malas.»
- EP01_S04_F004: «Dijiste que sí y después cambiaste de idea. Eso también se vale.»
- EP01_S05_L003: «Mi silla es parte de mi espacio. Pregúntame antes de empujarla.»
- EP01_S06_L003: el adulto que insiste («¡Ándale, un abracito nomás!»), por pertinencia.
- EP01_S06_R008 y F002: «A veces cuesta decir no. Si no puedes, no es tu culpa. Y siempre lo puedes contar.» **(crítica)**
- EP01_S06_L005 y L006: «Puedes ser amable y elegir tu saludo.» / «Las personas grandes también respetamos tu elección.»
- EP01_S07_L002: «Mi cuerpo es mío.»
- EP01_S07_L003: «Si tu brújula marca uh-oh, lo puedes contar a una persona grande de confianza.»
- Debrief 4 y cierre del facilitador.

## 1.7 Riesgos específicos del episodio 1

| Riesgo | Mitigación |
| --- | --- |
| Conflicto cultural: en muchas familias bolivianas se espera que el niño salude con beso a familiares o visitas. El niño podría ser retado en casa. | Guía para familias con «saludos alternativos» y un mensaje de respeto a la cultura: no se prohíbe el beso, se ofrece elegir. El beso no aparece en pantalla. **[VALIDAR con docentes y familias]** |
| Interpretar que abrazar es malo o que los adultos cariñosos son sospechosos. | Todos los abrazos elegidos se muestran con alegría. Don Beto es querido y repara. El debrief insiste en «elegir», no en «rechazar». |
| Culpa si el niño alguna vez «no pudo decir no». | Opción «Bueno…» con F002 (no culpa). Frase de cierre del facilitador. |
| Representación de discapacidad reducida al tema «silla». | Luna tiene iniciativa propia en todos los episodios. La línea de la silla aparece una sola vez. Revisión con personas con discapacidad. |
| En aula por votación, burlas hacia quien elige «no, gracias». | Acuerdos del grupo en el pre-juego y facilitador atento. En 6–8, la elección colectiva la hace el facilitador para no exponer a nadie. |
| Adulto que insiste (9–12) percibido como amenazante. | Tono de broma, sin acercamiento físico prolongado y reparación inmediata. Psicología decide si se mantiene. |

---

# 2. Episodio 2 — «Mi círculo de 3»

## 2.1 Ficha

| Campo | Contenido |
| --- | --- |
| **Habilidad observable** | El niño (a) clasifica conductas de cuidado frente a conductas que no son cuidado; (b) explica que la confianza se reconoce por cómo alguien trata a los demás y no solo por quién es; (c) distingue entre un amigo o amiga que acompaña y una persona grande que puede ayudar a resolver; (d) piensa, fuera de la pantalla, en tres personas grandes de distintos lugares a quienes podría acudir. |
| **Objetivo de aprendizaje** | Construir la idea de una red de apoyo de al menos tres adultos, elegidos por sus conductas, de modo que si uno no está o no escucha haya otros. Entender que un hermano menor, un amigo o una mascota pueden acompañar, pero no reemplazan a una persona grande. |
| **Situación segura** | Tomi pierde su mapa y se siente desorientado camino a la casa. Nadie lo amenaza: solo necesita ayuda. Durante el camino se reconstruye el sendero de piedras con «fichas de confianza». |
| **Mecánica de minijuego** | 1) *Fichas de confianza*: fichas de puzzle con una conducta; se colocan en «Eso es cuidar» (círculo) o «Eso no es cuidar» (fuera). Con las fichas bien ubicadas se forma el camino. 2) *¿Quién puede ayudar?*: elegir entre Luna, Capi, Profe Clara, Don Beto o «Lo resuelvo solo». 3) *Mi círculo de 3*: tres siluetas con iconos de lugar (casa, escuela, comunidad) que se encienden cuando el niño toca «Ya pensé en alguien». No hay texto, voz ni foto. |
| **Props / NPC / escenario** | Capi, Tomi, Luna, Profe Clara y Don Beto. Props: mapa, círculo de tres, fichas de puzzle, corazón, brújula, brote, gota y botella. Escenario: caminos, rocas, vallas, árboles, arbusto, isla pequeña, puente pequeño, casa al fondo. |
| **Accesibilidad** | Fichas con icono y texto leído en voz alta al tocarlas. Colocación por toque. En 6–8 hay 6 fichas y en 9–12 hay 9. Si una ficha va a la zona que no corresponde, rebota suave con una pista. |
| **Datos guardados** | `ep02.started`, `ep02.completed`, `island.path_stones`, `island.garden`, `island.circle_plaza`. Nunca se guarda quién es el círculo ni cuántas personas «pensó» el niño. |
| **Criterio de éxito pedagógico** | En el debrief, la mayoría (a) menciona dos conductas de una persona de confianza, (b) responde que conviene tener más de una, (c) dice que un amigo puede acompañar a buscar a una persona grande. Con familias o docentes: el niño completa el dibujo del círculo en papel (si quiere). **[VALIDAR instrumento]** |
| **Límites: qué NO enseña** | No clasifica personas como buenas o malas. No enseña a «detectar abusadores». No afirma que la familia o los docentes siempre sean seguros ni que nunca lo sean. No exige tener tres personas: si el niño no encuentra tres, no falla. No reemplaza la acción adulta de asegurar esa red. |

## 2.2 Pre-juego (5–8 min)

1. Recordatorio del Ep1: «¿Qué acuerdo arreglamos? (Yo elijo mi saludo.)»
2. Dinámica «¿Quién ayuda en la isla?»: el facilitador muestra dibujos de oficios y lugares (profe, portero, enfermera, abuela, vecino) y conversan sobre *qué hace* cada uno para ayudar. **[VALIDAR — evitar sugerir que un oficio garantiza confianza]**
3. Palabra del día: **«Me cuida»**.

## 2.3 Guion escena por escena

### Escena 1 — Tomi perdió su mapa (`s01_mapa`)

*Escenario: cruce de caminos con piedras desordenadas. Tomi mira a todos lados.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP02_S01_L001 | Capi | ¡Volviste! El puente quedó precioso. | Salta; se ve el puente reparado |
| EP02_S01_L002 | Capi | ¿Te acuerdas? Tú eliges tu saludo. | Gesto de saludo |
| EP02_S01_L003 | Tomi | Capi… perdí mi mapa. No sé cómo llegar a la casa. | Hombros caídos, mira alrededor; preocupación leve |
| EP02_S01_L004 | Capi | ¿Qué marca tu brújula, Tomi? | Se agacha a su lado |
| EP02_S01_L005 | Tomi | Nube. Hmm… un poco de uh-oh. | La brújula oscila entre nube y uh-oh |
| EP02_S01_L006 | Capi | Gracias por decirlo. Cuando no sabemos qué hacer, pedimos ayuda. | Mano en el hombro de Tomi (animación suave) |
| EP02_S01_L007 | Luna | ¡Yo te acompaño! Pero el camino está todo desordenado. | Llega girando la silla, decidida |
| EP02_S01_L008 | Capi | Lo arreglamos con fichas de confianza. Cada ficha dice algo que hace una persona que nos cuida. | Saca fichas de puzzle de la mochila |

### Escena 2 — Fichas de confianza (`s02_fichas`)

*Minijuego M1. Hay dos zonas: el círculo iluminado («Eso es cuidar», icono de corazón) y el arbusto al lado («Eso no es cuidar», icono de nube gris). Hay una tercera zona «No sé, lo pregunto» (icono de globo de diálogo), siempre válida en 9–12.*

| Id | Ficha (texto leído en voz alta) | Zona esperada | Modo |
| --- | --- | --- | --- |
| EP02_S02_T001 | Te escucha cuando hablas. | Cuidar | Ambos |
| EP02_S02_T002 | Respeta cuando dices «no». | Cuidar | Ambos |
| EP02_S02_T003 | Te ayuda cuando tienes un problema. | Cuidar | Ambos |
| EP02_S02_T004 | No se burla de lo que sientes. | Cuidar | Ambos |
| EP02_S02_T005 | Te pide guardar un secreto que te hace sentir mal. **[VALIDAR]** | No es cuidar | Ambos |
| EP02_S02_T006 | Se enoja si dices que no quieres un abrazo. | No es cuidar | Ambos |
| EP02_S02_T007 | Te cree cuando le cuentas algo importante. **[VALIDAR]** | Cuidar | 9–12 |
| EP02_S02_T008 | Te da regalos para que no cuentes algo. **[VALIDAR]** | No es cuidar | 9–12 |
| EP02_S02_T009 | Es una persona grande. | «No sé, lo pregunto» o cualquier zona, con explicación | 9–12 |

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP02_S02_L001 | Capi | Toca una ficha. ¿Eso es cuidar? | Señala las zonas |
| EP02_S02_F001 | Capi | ¡Sí! Eso hace una persona que cuida. | La ficha se vuelve piedra del camino *(zona esperada, cuidar)* |
| EP02_S02_F002 | Capi | Tienes razón. Eso no es cuidar, aunque venga de alguien que conoces. **[VALIDAR]** | La ficha se vuelve una nube que se va volando *(zona esperada, no cuidar)* |
| EP02_S02_F003 | Capi | Hmm, mira otra vez. ¿Cómo se sentiría tu brújula con eso? | La ficha regresa suave a su lugar, sin sonido de error *(zona no esperada)* |
| EP02_S02_F004 | Capi | Pista: una persona que cuida *(o: que no cuida)* haría eso… ¿Dónde la pondrías? | Si se equivoca dos veces con la misma ficha; al tercer intento Capi la coloca y lo explica |
| EP02_S02_F005 | Capi | Ser grande no basta. Lo que importa es cómo te trata. **[VALIDAR]** | Para T009, en cualquier zona |
| EP02_S02_L002 | Luna | ¡El camino ya está listo! | Avanza por las piedras |

### Escena 3 — ¿Quién puede ayudar a Tomi? (`s03_quien`)

*Escenario: bifurcación. A la izquierda, Profe Clara lee en el banco. A la derecha, Don Beto repara una valla. Luna y Capi están junto a Tomi.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP02_S03_L001 | Tomi | ¿A quién le pido ayuda para llegar a la casa? | Mira al jugador |
| EP02_S03_C001 | *Elección* | Luna · Capi · Profe Clara · Don Beto · «Lo resuelvo solo» | — |
| EP02_S03_R001 | Luna | Yo te acompaño con gusto. Pero tampoco conozco el camino. ¡Busquemos a una persona grande juntos! | Decidida *(Luna)* |
| EP02_S03_F001 | Capi | Los amigos acompañan. Las personas grandes pueden ayudar a resolver. **[VALIDAR]** | Asiente; vuelve a C001 con las opciones de adultos resaltadas y sin quitar las demás |
| EP02_S03_R002 | Capi | ¡Yo te acompaño siempre! Pero soy una capibara: no puedo llamar a tu familia. Busquemos a una persona grande. **[VALIDAR]** | Se señala con humor *(Capi)* |
| EP02_S03_R003 | Tomi | Voy a intentarlo solo… | Camina, se detiene y regresa *(solo)* |
| EP02_S03_F002 | Capi | Intentarlo está bien. Y pedir ayuda también es de valientes. **[VALIDAR]** | Cálida; vuelve a C001 |
| EP02_S03_R004 | Profe Clara | ¡Hola, Tomi! Te escucho. ¿Qué necesitas? | Cierra el libro, se agacha *(Profe Clara)* |
| EP02_S03_R005 | Don Beto | ¡Tomi! Espera que dejo el martillo. Te escucho. | Deja la herramienta, se agacha *(Don Beto)* |
| EP02_S03_L002 | Tomi | Perdí mi mapa. No sé llegar a la casa. | Más tranquilo |
| EP02_S03_L003 | Profe Clara / Don Beto | Gracias por avisarme. Vamos juntos. Y hacemos un mapa nuevo. | Le entrega un mapa del bolso o del libro |
| EP02_S03_L004 | Capi | ¿Viste lo que hizo? Dejó lo que hacía, escuchó y ayudó. | Resalta con destellos las conductas: agacharse, escuchar, ayudar |

### Escena 4 — Mi círculo de 3 (`s04_circulo`)

*Escenario: plaza con el prop círculo de tres en el suelo, entre el huerto y la casa. Capi lo ilumina.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP02_S04_L001 | Capi | Tomi encontró ayuda. Tú también puedes tener tu círculo de 3. | Señala el círculo |
| EP02_S04_L002 | Capi | Son tres personas grandes que te cuidan: te escuchan, te creen y te ayudan. **[VALIDAR]** | Aparecen tres siluetas sin rostro |
| EP02_S04_L003 | Capi | ¿Por qué tres? Si una no está, o no te escucha, tienes otras. **[VALIDAR]** | Una silueta se atenúa y las otras dos brillan |
| EP02_S04_L004 | Capi | Pueden ser de tu casa, de tu escuela o de tu comunidad. **[VALIDAR — crítica; reforzada por aporte profesional de Arianna y su mentora, ver evidencia §9 y §13]** | Las siluetas muestran iconos de casa, libro y árbol |
| EP02_S04_L005 | Capi | No escribas sus nombres aquí. Solo piensa en ellas. Es tu secreto… ¡no! Es tu círculo. | Guiño humorístico **[VALIDAR — ¿el chiste confunde antes del Ep3? alternativa: «Solo piensa en ellas.»]** |
| *Minijuego M3* | — | Tres siluetas. Tocar una: «Ya pensé en alguien». Botón alternativo: «Todavía estoy pensando». | La silueta se ilumina con color cálido |
| EP02_S04_F001 | Capi | ¡Tu círculo brilla! | *(al iluminar las 3)* |
| EP02_S04_F002 | Capi | Está bien. A veces cuesta pensar. Tu profe o tu familia te pueden ayudar a encontrar más personas. **[VALIDAR — crítica]** | Cálida, sin tristeza; el círculo brilla igual *(todavía estoy pensando, en cualquier silueta)* |
| EP02_S04_L006 | Capi | Yo soy tu guía en la isla. Pero los secretos que pesan no me los cuentas a mí: se los cuentas a tu círculo. **[VALIDAR]** | Se señala, luego señala el círculo |

### Escena 5 — Reconstrucción (`s05_reconstruccion`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP02_S05_L001 | Luna | ¡Miren el huerto! | Brotes crecen; Tomi riega con la botella (prop gota/botella) |
| EP02_S05_L002 | Capi | Acuerdo de hoy: tengo personas que me cuidan, y las reconozco por cómo me tratan. **[VALIDAR]** | Camino, vallas y huerto restaurados |
| EP02_S05_L003 | Tomi | ¡Gracias por ayudarme a pedir ayuda! | Choca cinco con Luna (le pregunta antes: «¿Chocamos?») |
| EP02_S05_L004 | Capi | Ahora a conversar con tu profe o tu familia. ¡Lleven papel y colores! | Saluda |

## 2.4 Matriz de decisiones — Episodio 2

| Estado / escena | Situación | Opciones del jugador | Feedback inmediato | Consecuencia narrativa | Estado siguiente |
| --- | --- | --- | --- | --- | --- |
| S01 | Tomi desorientado | (Sin decisión; toque para avanzar) | — | Se presenta el problema sin angustia | S02 |
| S02 M1 (6 o 9 fichas) | Clasificar conductas | Cuidar / No es cuidar / No sé, lo pregunto (9–12) | F001 / F002 / F003 (primer desvío) / F004 (pista) / F005 (T009) | Cada ficha correcta se vuelve piedra. Al tercer intento, Capi coloca la ficha con explicación: nunca hay bloqueo | S03 cuando el camino está completo |
| S03 C001 | ¿A quién pedirle ayuda? | Luna | R001 + F001 | Luna se une para buscar a una persona grande | S03 C001 (vuelve) |
| S03 C001 | | Capi | R002 | Capi se une | S03 C001 |
| S03 C001 | | Lo resuelvo solo | R003 + F002 | Tomi regresa tranquilo | S03 C001 |
| S03 C001 | | Profe Clara / Don Beto | R004 o R005 → L002–L004 | Mapa nuevo; se resaltan conductas | S04 |
| S04 M3 | Pensar en 3 personas | Ya pensé (×3) / Todavía estoy pensando | F001 / F002 | El círculo se ilumina **en ambos casos** | S04 L006 → S05 |
| S05 | Recompensa | — | — | Camino, vallas, huerto y círculo en la plaza | Fin; `ep02.completed` |

## 2.5 Debrief

### Aula

1. ¿Qué hicieron Profe Clara o Don Beto cuando Tomi pidió ayuda?
2. ¿Cómo sabemos que una persona nos cuida? (Por lo que hace.)
3. ¿Por qué Capi dice que conviene tener tres personas y no solo una?
4. Luna quería ayudar a Tomi. ¿Qué pueden hacer los amigos cuando alguien necesita ayuda? (Acompañar a buscar a una persona grande.)
5. *(9–12)* ¿Alguien que es grande o que conocemos siempre cuida? ¿Qué miramos? **[VALIDAR — manejar con cuidado]**

**Actividad: «Mi mano de confianza» o «Mi círculo de 3» en papel (5–8 min).** Cada niño dibuja un círculo con tres espacios o la silueta de su mano, y dibuja o escribe *si quiere* a tres personas grandes (casa, escuela, comunidad). **El facilitador no recoge ni lee las hojas** salvo que el niño las muestre; se llevan a casa o se guardan en la carpeta personal. Se agrega un número o lugar de ayuda de la comunidad escolar, definido por la institución **[VALIDAR la ruta local]**.

> **Nota para el facilitador [VALIDAR — crítica]:** si un niño no puede nombrar a ningún adulto de confianza o se muestra afectado, no se le presiona ni se comenta en grupo. Se registra como información para seguir la ruta institucional de acompañamiento, no como diagnóstico.

### Familia

- «¿Quiénes son las personas grandes a las que puedes pedir ayuda? Pensemos una de casa, una de la escuela y una de la comunidad.»
- El adulto confirma: «Yo quiero estar en tu círculo. Puedes contarme cualquier cosa, aunque sea difícil.» **[VALIDAR]**
- Poner el dibujo en un lugar visible, si el niño quiere.

## 2.6 Frases [VALIDAR] del episodio 2

- T005 «Te pide guardar un secreto que te hace sentir mal.» · T007 «Te cree cuando le cuentas algo importante.» · T008 «Te da regalos para que no cuentes algo.»
- F002 «Eso no es cuidar, aunque venga de alguien que conoces.»
- F005 «Ser grande no basta. Lo que importa es cómo te trata.»
- S03 F001 «Los amigos acompañan. Las personas grandes pueden ayudar a resolver.»
- S03 R002 Capi no puede llamar a tu familia.
- S04 L002–L004 definición del círculo de 3, el «porqué tres» y «de tu casa, de tu escuela o de tu comunidad» **(crítica: no todos los niños tienen un adulto seguro en casa)**.
- S04 F002 «Tu profe o tu familia te pueden ayudar a encontrar más personas» **(crítica)**.
- S04 L006 Capi no recibe secretos.
- Frase de la familia «Puedes contarme cualquier cosa».

## 2.7 Riesgos específicos del episodio 2

| Riesgo | Mitigación |
| --- | --- |
| Un niño cuyo agresor está en casa o en la escuela se ve empujado a elegirlo. | Se usan las conductas como criterio, hay 3 lugares posibles, no se exige elegir de casa y la frase F002 no juzga. Nota para el facilitador. **[VALIDAR]** |
| Mensaje «confía en tu profe» usado por un adulto que no cuida. | Las fichas enseñan que la credencial o el hecho de ser grande no bastan. Profe Clara y Don Beto se validan por lo que hacen en escena. |
| Angustia en niños sin red (abandono, institucionalización). | «Todavía estoy pensando» ilumina igual. El facilitador ayuda a identificar adultos disponibles de la escuela. |
| Fichas «no es cuidar» leídas como acusaciones a personas concretas. | Las fichas son conductas sin personaje. El debrief no pide ejemplos personales. |
| Recoger los dibujos del círculo como dato. | Prohibido en la guía. Si la institución necesita saber si el niño tiene red, se hace por el protocolo profesional, no con el juego. |

---

# 3. Episodio 3 — «Secreto que pesa o sorpresa»

## 3.1 Ficha

| Campo | Contenido |
| --- | --- |
| **Habilidad observable** | El niño (a) clasifica ejemplos como sorpresa o secreto que pesa usando tres preguntas guía; (b) explica que una sorpresa es alegre y dura poco, y que un secreto que pesa se cuenta a una persona grande de confianza; (c) *(9–12)* distingue lo privado (propio y sin daño) de un secreto que pesa; (d) dice que contar un secreto que pesa no es portarse mal, aunque se haya prometido. |
| **Objetivo de aprendizaje** | Diferenciar sorpresa, secreto que pesa y privacidad con ejemplos seguros. Reconocer señales de presión (miedo, amenaza de consecuencias, regalos a cambio, «solo entre nosotros», «no le digas a tu familia») como motivo para contar, sin exponer contenido del secreto. |
| **Situación segura** | Preparar una fiesta sorpresa de cumpleaños para Profe Clara en la casa. En paralelo, Tomi llega con la mochila muy pesada porque «le dijeron que no cuente algo». **El contenido del secreto de Tomi nunca se muestra ni se sugiere.** |
| **Mecánica de minijuego** | 1) *Mochila liviana o pesada*: tarjetas con situaciones; tocar «Sorpresa» (regalo) o «Secreto que pesa» (roca), y en 9–12 también «Privado» (casa con puerta). Una roca en la mochila de Capi la hace caminar más lento (feedback físico y cómico, no angustiante) hasta que se toca «Contarlo a mi círculo» y la roca sale volando convertida en brote. 2) *Las tres preguntas*: para ayudarse, el jugador puede abrir la brújula y ver las preguntas guía. 3) *Envolver el regalo*: minijuego alegre de cierre. |
| **Props / NPC / escenario** | Capi, Tomi, Luna y Profe Clara. Props: regalo, sobre, mochila, rocas (del escenario, como peso), corazón, brújula, círculo de tres, brote. Escenario: casa (ventanas rotas y luego reparadas), huerto, árboles, escalera de la casa, banco. |
| **Accesibilidad** | Tarjetas leídas en voz alta; iconos grandes y distintos (regalo, roca, puerta). La lentitud de Capi es visual y no afecta la jugabilidad. En 6–8 hay 6 tarjetas y 2 categorías; en 9–12 hay 9 tarjetas y 3 categorías. |
| **Datos guardados** | `ep03.started`, `ep03.completed`, `island.house`, `island.flowers`. |
| **Criterio de éxito pedagógico** | La mayoría clasifica correctamente un ejemplo nuevo en el debrief y enuncia una diferencia («la sorpresa alegra y todos se enteran pronto; el secreto que pesa da uh-oh y se cuenta»). *(9–12)* Nombra un ejemplo de algo privado. **[VALIDAR]** |
| **Límites: qué NO enseña** | No muestra ni describe el secreto de Tomi. No pide al jugador que piense en sus propios secretos. No dice que todo secreto sea malo ni que haya que contar todo lo privado. No promete que contar resuelva todo de inmediato. No enseña a identificar abuso por conductas específicas de un adulto. |

## 3.2 Pre-juego (5–8 min)

1. Recordatorio del Ep2: dibujar el círculo de 3 en el aire con el dedo.
2. Juego «¿Adivinas mi sorpresa?»: el facilitador trae una caja cerrada con algo divertido y la abre al final de la sesión (así se vive una sorpresa real).
3. Palabra del día: **«Pesa»**.

## 3.3 Guion escena por escena

### Escena 1 — La fiesta sorpresa (`s01_sorpresa`)

*Escenario: casa con ventanas rotas por el viento. Luna tiene un regalo; Tomi aún no llegó.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP03_S01_L001 | Capi | ¡Hola otra vez! ¿Te acuerdas de tu círculo de 3? | Hace un círculo con las manos |
| EP03_S01_L002 | Luna | ¡Shh! El viernes es el cumpleaños de la profe Clara. | Susurra divertida, mira a los lados |
| EP03_S01_L003 | Luna | Le preparamos una fiesta sorpresa. ¡No le digas hasta el viernes! | Muestra el regalo y el sobre con la tarjeta |
| EP03_S01_L004 | Capi | ¿Qué marca tu brújula con esta sorpresa? | Brújula en pantalla |
| EP03_S01_C001 | *Elección* | Sol · Nube · Uh-oh | — |
| EP03_S01_F001 | Capi | ¡Sol! Las sorpresas nos ponen contentos. | *(sol)* |
| EP03_S01_F002 | Capi | Está bien sentir nervios por guardar una sorpresa. ¡Falta poquito! | *(nube o uh-oh; valida sin corregir)* |
| EP03_S01_L005 | Capi | Una sorpresa alegra, dura poco y al final todos se enteran. **[VALIDAR]** | Aparece el icono del regalo |

### Escena 2 — Llega Tomi con la mochila pesada (`s02_tomi`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP03_S02_L001 | Tomi | Hola… | Camina lento, la mochila azul se ve enorme; tristeza leve, no llanto |
| EP03_S02_L002 | Luna | Tomi, ¿qué pasa? Tu mochila parece llena de piedras. | Se acerca, preocupada |
| EP03_S02_L003 | Tomi | Me dijeron que no cuente algo. Y me pesa mucho. | Mira al suelo **[VALIDAR]** |
| EP03_S02_L004 | Capi | Gracias por decirnos cómo te sientes, Tomi. No necesitas contarnos qué es. **[VALIDAR — crítica]** | Se agacha; tono suave |
| EP03_S02_L005 | Capi | ¿Nos ayudas a aprender la diferencia entre una sorpresa y un secreto que pesa? | Mira a Tomi y al jugador |
| EP03_S02_L006 | Tomi | Bueno… | Deja la mochila en el banco; sigue presente |

### Escena 3 — Mochila liviana, mochila pesada (`s03_mochila`)

*Minijuego M1. Capi explica las tres preguntas de la brújula.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP03_S03_L001 | Capi | Tres preguntas para saber: | Brújula grande con tres iconos |
| EP03_S03_L002 | Capi | Uno: ¿me hace sentir sol o uh-oh? | Icono sol/uh-oh |
| EP03_S03_L003 | Capi | Dos: ¿se va a saber pronto y con alegría? | Icono de reloj con regalo |
| EP03_S03_L004 | Capi | Tres: ¿alguien me dijo que no cuente nunca, o me asustó para que no cuente? **[VALIDAR]** | Icono de candado con nube |
| EP03_S03_L005 | Capi | Si es uh-oh, si no se va a saber o si te asustaron: es un secreto que pesa. Y se cuenta a tu círculo. **[VALIDAR — crítica]** | Una roca aparece y va hacia el círculo de 3 |

**Tarjetas (situaciones ilustradas en 2D con personajes genéricos):**

| Id | Tarjeta | Categoría | Modo | Feedback específico de Capi |
| --- | --- | --- | --- | --- |
| EP03_S03_T001 | Tu hermana esconde el regalo del Día de la Madre hasta el domingo. | Sorpresa | Ambos | «Se sabrá pronto y hará feliz a alguien. ¡Sorpresa!» |
| EP03_S03_T002 | Hacemos un dibujo para la abuela y se lo damos en su cumpleaños. | Sorpresa | Ambos | «¡Sorpresa! Todos se enteran con alegría.» |
| EP03_S03_T003 | Un chico mayor te quita la merienda y te dice: «Si cuentas, ya no juegas con nosotros». | Pesa | Ambos | «Te asustaron para que no cuentes. Eso pesa. Se cuenta.» **[VALIDAR]** |
| EP03_S03_T004 | Alguien te dice que un juego es solo entre ustedes dos y que tu familia no puede saberlo. | Pesa | Ambos | «Cuando alguien dice que tu familia no puede saber, eso pesa. Se cuenta a tu círculo.» **[VALIDAR — crítica]** |
| EP03_S03_T005 | Alguien te da un regalo y te dice: «Es nuestro secreto, no le digas a nadie». | Pesa | Ambos | «Un regalo no sirve para guardar secretos que pesan. Se cuenta.» **[VALIDAR — crítica]** |
| EP03_S03_T006 | Algo te dio uh-oh y te dijeron: «Si cuentas, te vas a meter en problemas». | Pesa | Ambos | «Contar un secreto que pesa no te mete en problemas. Se cuenta.» **[VALIDAR — crítica]** |
| EP03_S03_T007 | Preparamos una fiesta sorpresa para la profe Clara. | Sorpresa | 9–12 | «¡Nuestra sorpresa! Dura poco y alegra.» |
| EP03_S03_T008 | Ir al baño o cambiarte de ropa con la puerta cerrada. | Privado | 9–12 | «Es privado: es tuyo y no le hace daño a nadie. Privado no es lo mismo que secreto.» **[VALIDAR]** |
| EP03_S03_T009 | Lo que escribes o dibujas en tu cuaderno de cuentos, si no quieres mostrarlo. | Privado | 9–12 | «Es tuyo. Si algún día te pesa, igual lo puedes contar.» **[VALIDAR]** |

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP03_S03_F001 | Capi | *(feedback específico de la tarjeta)* | Regalo: confeti suave. Roca: entra a la mochila de Capi, que camina lento y sonríe «¡Uf!» |
| EP03_S03_F002 | Capi | ¡Uf, qué pesada! ¿Qué hacemos con este secreto? | Tras la primera roca: aparece el botón grande «Contarlo a mi círculo» |
| EP03_S03_F003 | Capi | ¡Ahhh, más liviana! Contar a una persona grande de confianza ayuda a cargar. **[VALIDAR]** | La roca sale y se vuelve un brote en el huerto |
| EP03_S03_F004 | Capi | Hmm, pensemos con las tres preguntas. ¿Esa tarjeta te da sol o uh-oh? | La tarjeta vuelve, con las tres preguntas resaltadas; sin error sonoro *(categoría no esperada)* |
| EP03_S03_F005 | Capi | Esta es difícil. Es un secreto que pesa porque… *(explicación)*. | Tras dos intentos, Capi la coloca y la explica |

### Escena 4 — La mochila de Tomi (`s04_tomi_decide`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP03_S04_L001 | Tomi | Entonces… lo mío es un secreto que pesa. | Mira su mochila |
| EP03_S04_L002 | Tomi | Pero prometí no contar. | Duda |
| EP03_S04_L003 | Capi | ¿Qué le dirías a Tomi? | Mira al jugador |
| EP03_S04_C001 | *Elección* | «Aunque prometiste, un secreto que pesa se cuenta.» · «Cuéntalo a alguien de tu círculo.» · «No sé qué decirle.» | — |
| EP03_S04_R001 | Capi | Es verdad. Contar un secreto que pesa no es portarse mal. Aunque lo hayas prometido. **[VALIDAR — crítica]** | Asiente *(primera o segunda opción)* |
| EP03_S04_R002 | Capi | Está bien no saber. Yo le diría: «Aunque prometiste, un secreto que pesa se cuenta». **[VALIDAR]** | Cálida *(no sé)* |
| EP03_S04_L004 | Tomi | Me da miedo. | Se abraza a sí mismo |
| EP03_S04_L005 | Luna | Es normal tener miedo. Yo te acompaño a contarlo. | Se acerca con la silla, a su lado |
| EP03_S04_L006 | Capi | Y no es tu culpa, Tomi. **[VALIDAR — crítica]** | Tono firme y cálido |
| EP03_S04_L007 | Tomi | Mañana busco a alguien de mi círculo. ¿Me ayudan? | Se levanta un poco más derecho |
| EP03_S04_L008 | Capi | ¡Claro! Lo practicamos en la próxima aventura. | Sonríe; gancho al Ep4 |

> **Nota de diseño:** Tomi no cuenta el secreto en este episodio. Se deja la tensión abierta con suavidad y se resuelve en el Ep4. Si psicología considera que dejarlo abierta una semana genera ansiedad, la alternativa es cerrar aquí con L007b: «Voy a contarlo hoy a la profe Clara» (en off) y usar el Ep4 como práctica con otro personaje. **[VALIDAR]**

### Escena 5 — ¡Sorpresa! (`s05_fiesta`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP03_S05_L001 | Capi | Llegó el viernes. ¡Ayúdanos a envolver el regalo! | *Minijuego M3*: tocar lazo, papel y tarjeta |
| EP03_S05_L002 | Todos | ¡Sorpresa! | Profe Clara entra y se alegra; confeti |
| EP03_S05_L003 | Profe Clara | ¡Qué alegría! Gracias, chicos. | Abre el sobre, se ríe |
| EP03_S05_L004 | Luna | ¿Ves? La sorpresa duró poco y ahora todos estamos felices. | Guiña |
| EP03_S05_L005 | Capi | Acuerdo de hoy: las sorpresas alegran; los secretos que pesan se cuentan. **[VALIDAR]** | Ventanas y flores de la casa restauradas |
| EP03_S05_L006 | Capi | Hora de conversar con tu profe o tu familia. | Saluda |

## 3.4 Matriz de decisiones — Episodio 3

| Estado / escena | Situación | Opciones del jugador | Feedback inmediato | Consecuencia narrativa | Estado siguiente |
| --- | --- | --- | --- | --- | --- |
| S01 C001 | Brújula ante la sorpresa | Sol / Nube / Uh-oh | F001 / F002 (valida nervios) | Se define la sorpresa | S02 |
| S02 | Tomi con mochila pesada | (Toque para avanzar) | — | Capi no pregunta el contenido | S03 |
| S03 M1 (6 o 9 tarjetas) | Clasificar | Sorpresa / Pesa / Privado (9–12) | Específico de la tarjeta / F004 si no coincide / F005 al segundo intento | Con una roca, Capi va lento; «Contarlo a mi círculo» la vuelve brote | S04 |
| S03 botón | Roca en la mochila | Contarlo a mi círculo / Seguir clasificando | F003 / Capi sigue lento con humor | La isla gana brotes | S03 (continúa) |
| S04 C001 | Tomi prometió no contar | Aunque prometiste, se cuenta / Cuéntalo a tu círculo / No sé | R001 / R001 / R002 | Luna ofrece acompañar; «no es tu culpa» | S05 |
| S05 M3 | Envolver regalo | Tocar piezas en cualquier orden | Confeti | Fiesta; casa restaurada | Fin; `ep03.completed` |

## 3.5 Debrief

### Aula

1. ¿Qué diferencia hay entre la sorpresa de la profe Clara y lo que le pasaba a Tomi?
2. ¿Qué tres preguntas nos ayudan a saber si un secreto pesa?
3. Tomi había prometido no contar. ¿Está bien que lo cuente? ¿Por qué?
4. ¿Qué hizo Luna cuando Tomi dijo que tenía miedo?
5. *(9–12)* ¿Qué es algo privado? ¿En qué se diferencia de un secreto que pesa? **[VALIDAR]**

**Actividad: «Sorpresa o pesa» con el cuerpo (5 min).** El facilitador lee situaciones nuevas y seguras (inventadas y aprobadas; ninguna la aporta el grupo). Si es sorpresa, los niños levantan los brazos como regalo; si pesa, se agachan como cargando una mochila y luego «la entregan» a un círculo dibujado en la pizarra. **[VALIDAR el banco de situaciones]**

> **Nota [VALIDAR — crítica]:** no se hace una ronda de «cuéntennos un secreto que pesa». Si un niño lo ofrece espontáneamente, se aplica el protocolo 0.10.

### Familia

- «En nuestra familia hacemos sorpresas, pero no guardamos secretos que pesan. Si alguien te pide uno, me lo puedes contar y no te voy a retar.» **[VALIDAR — crítica]**
- Revisar juntos: ¿qué sorpresas planeamos en la familia? (cumpleaños, regalos).
- Los adultos evitan pedir a los niños «no le digas a tu papá/mamá» incluso en cosas pequeñas. **[VALIDAR]**

## 3.6 Frases [VALIDAR] del episodio 3

- S01 L005 definición de sorpresa.
- S02 L003 «Me dijeron que no cuente algo. Y me pesa mucho.»
- S02 L004 «No necesitas contarnos qué es.» **(crítica)**
- S03 L004–L005 las tres preguntas y la regla «es un secreto que pesa y se cuenta» **(crítica)**.
- T003–T006: amenaza de exclusión, «tu familia no puede saber», regalo a cambio de silencio y «te vas a meter en problemas» **(críticas)**.
- T008–T009 la categoría privado.
- F003 «Contar a una persona grande de confianza ayuda a cargar.»
- S04 R001 «Contar un secreto que pesa no es portarse mal. Aunque lo hayas prometido.» **(crítica)**
- S04 L006 «Y no es tu culpa, Tomi.» **(crítica)**
- Frase familiar «no te voy a retar».

## 3.7 Riesgos específicos del episodio 3

| Riesgo | Mitigación |
| --- | --- |
| El jugador proyecta un contenido grave en el secreto de Tomi y se activa un recuerdo. | Tomi no da detalles; tono leve; pausa siempre disponible; facilitador atento; la escena cierra con apoyo (Luna, no culpa). |
| T004 y T005 describen dinámicas de grooming; pueden inquietar a familias o a niños pequeños. | Frases abstractas («un juego», «un regalo») sin adulto específico. Revisión de psicología sobre si en 6–8 se mantienen. **[VALIDAR]** |
| Confundir privacidad con secreto dañino, o enseñar que «todo se cuenta» y dañar la intimidad. | Categoría «privado» en 9–12, con la cláusula «si algún día te pesa, igual lo puedes contar». |
| Dejar la tensión de Tomi abierta una semana. | Alternativa L007b documentada. |
| Que el niño crea que contar traerá castigo en casa. | Guía familiar explícita sobre no retar. |

---

# 4. Episodio 4 — «A quién le cuento»

## 4.1 Ficha

| Campo | Contenido |
| --- | --- |
| **Habilidad observable** | El niño (a) elige a una persona grande de confianza para pedir ayuda; (b) arma una frase breve para pedir atención («Necesito contarte algo importante»); (c) cuando la primera persona no escucha, elige insistir o buscar a otra persona del círculo; (d) enuncia «No – Me alejo – Lo cuento» y que nunca es tarde para contar. |
| **Objetivo de aprendizaje** | Practicar el proceso de pedir ayuda, persistir si no hay respuesta y reconocer cómo es una buena respuesta de un adulto (escucha, cree, agradece, no culpa, busca ayuda y no promete silencio absoluto). |
| **Situación segura** | Tomi decide contar su «secreto que pesa». Don Beto está ocupado y no escucha a la primera. Profe Clara (o Don Beto al segundo intento) escucha bien. **El contenido del secreto nunca se dice en pantalla**: la conversación se muestra desde lejos, sin audio de la revelación, con la mochila volviéndose liviana. |
| **Mecánica de minijuego** | 1) *Repaso «No – Me alejo – Lo cuento»*: tres gestos con tres botones grandes. 2) *Globo de diálogo*: armar una frase con 2–3 bloques (todas las combinaciones sirven; hay bloques «extra» para 9–12). 3) *¿A quién primero?*: elegir del círculo. 4) *La primera vez no escucharon*: decidir qué hacer. 5) *El faro*: subir la escalera y encender el faro. |
| **Props / NPC / escenario** | Capi, Tomi, Luna, Don Beto y Profe Clara. Props: globo de diálogo, círculo de tres, mochila, brújula, corazón, rocas (peso), mapa. Escenario: muelle y puente, banco, escalera, faro, agua, nube. |
| **Accesibilidad** | Bloques de frase leídos en voz alta; en 6–8 la frase se arma tocando dos bloques con iconos. No hay escritura libre. El «no escuchó» se muestra con Beto de espaldas trabajando y ruido de martillo moderado con subtítulo «(martilla)». |
| **Datos guardados** | `ep04.started`, `ep04.completed`, `island.stairs`, `island.lighthouse`. |
| **Criterio de éxito pedagógico** | La mayoría responde en el debrief qué hacer si una persona grande no escucha (decirlo otra vez o buscar a otra persona del círculo) y nombra al menos dos cosas que hace un adulto que escucha bien. **[VALIDAR]** |
| **Límites: qué NO enseña** | No enseña a denunciar por su cuenta ni a llamar a la policía sin un adulto. No promete que el adulto siempre reaccione bien ni que todo se arregle rápido. No enseña técnicas de revelación de abuso ni pide al niño que ensaye la suya. No simula al adulto profesional de la ruta (DNA, psicología). |

## 4.2 Pre-juego (5–8 min)

1. Recordatorio del Ep3: «¿Qué se hace con un secreto que pesa?»
2. Juego «Teléfono de ayuda» sin teléfono: por parejas, uno dice «Necesito ayuda» con voz bajita y el otro practica dejar lo que hace, mirar y decir «Te escucho». Luego se cambian los roles. **[VALIDAR]**
3. Palabra del día: **«Otra vez»**.

## 4.3 Guion escena por escena

### Escena 1 — Repaso: No, me alejo, lo cuento (`s01_repaso`)

*Escenario: banco junto al muelle. Tomi con la mochila pesada, Luna y Capi.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S01_L001 | Capi | ¡Hola! Hoy Tomi quiere contar su secreto que pesa. | Mira a Tomi con ánimo |
| EP04_S01_L002 | Tomi | Sí. Pero no sé cómo empezar. | Aún con la mochila grande |
| EP04_S01_L003 | Capi | Primero, recordemos qué hacer cuando la brújula marca uh-oh. | Brújula en uh-oh |
| EP04_S01_L004 | Capi | Uno: digo «no», si puedo. | Botón con globo «¡No!» *(el jugador toca; Capi hace el gesto de palma)* |
| EP04_S01_L005 | Capi | Dos: me alejo, si puedo. | Botón con pies; Capi da dos pasos |
| EP04_S01_L006 | Capi | Tres: lo cuento a mi círculo de 3. | Botón con círculo; brilla |
| EP04_S01_L007 | Capi | Y si no pudiste decir no, o alejarte, igual lo puedes contar. No es tu culpa. **[VALIDAR — crítica]** | Se acerca a cámara; tono muy cálido |
| EP04_S01_L008 | Luna | Y nunca es tarde para contar. **[VALIDAR — crítica]** | Asiente |

### Escena 2 — Las palabras para pedir ayuda (`s02_palabras`)

*Minijuego M2: globo de diálogo.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S02_L001 | Capi | Ayudemos a Tomi a preparar sus palabras. Toca los bloques. | Aparece el globo vacío |

Bloques disponibles:

| Grupo | 6–8 | 9–12 (adicionales) |
| --- | --- | --- |
| Llamar la atención | «Necesito ayuda.» · «¿Me escuchas?» | «¿Tienes un momento? Es importante.» |
| Decir qué pasa (sin detalles) | «Tengo un secreto que pesa.» · «Me siento uh-oh.» | «Me pasó algo que no me gustó.» **[VALIDAR]** |
| Pedir | — | «Quiero que me ayudes.» |

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S02_F001 | Capi | ¡Esas palabras sirven! No hace falta decirlo perfecto. **[VALIDAR]** | Tras cualquier combinación de al menos un bloque |
| EP04_S02_L002 | Capi | También puedes escribirlo o dibujarlo si te cuesta hablar. **[VALIDAR]** | Muestra el sobre (prop) como idea; no hay entrada de texto |
| EP04_S02_L003 | Tomi | «Necesito ayuda. Tengo un secreto que pesa.» ¡Listo! | Tomi practica y se ve más seguro |

### Escena 3 — ¿A quién primero? (`s03_quien`)

*Escenario: Don Beto repara el muelle cerca; el faro con Profe Clara se ve más lejos, al final de la escalera.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S03_L001 | Tomi | ¿A quién le cuento primero? | Mira el círculo de 3 que flota: Don Beto, Profe Clara y una silueta «mi familia» |
| EP04_S03_C001 | *Elección* | Don Beto (está cerca) · Profe Clara (en el faro) · Luna · Capi | — |
| EP04_S03_R001 | Luna | Gracias por confiar en mí, Tomi. Esto es para una persona grande. ¡Vamos juntos! **[VALIDAR]** | Se pone a su lado *(Luna)*; vuelve a C001 sin Luna |
| EP04_S03_R002 | Capi | Yo te acompaño hasta la puerta. Pero el secreto se lo cuentas a una persona grande. | *(Capi)*; vuelve a C001 sin Capi |
| → Don Beto | | | Escena 4A |
| → Profe Clara | | | Escena 4B (práctica completa de buena escucha). En 6–8, **después** Capi propone: «¿Y si Don Beto hubiera estado ocupado? Probemos», y se juega 4A como práctica **[VALIDAR]**. En 9–12 se juega 4A-bis: Profe Clara está en una reunión y dice «Seguro no es nada». |

### Escena 4A — La primera vez no escucharon (`s04a_beto_ocupado`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S04A_L001 | Tomi | Don Beto… necesito ayuda. Tengo un secreto que pesa. | Voz bajita |
| EP04_S04A_L002 | Don Beto | *(martilla)* Ahora no, Tomi, estoy ocupado. Después. | De espaldas, trabajando; distraído, no enojado |
| EP04_S04A_L003 | Tomi | … No me escuchó. | Hombros caídos; la brújula marca nube |
| EP04_S04A_L004 | Capi | A veces las personas grandes no escuchan a la primera. No es porque tú hiciste algo mal. **[VALIDAR — crítica]** | Se acerca |
| EP04_S04A_L005 | Capi | ¿Qué puede hacer Tomi? | Mira al jugador |
| EP04_S04A_C001 | *Elección* | «Decirlo otra vez, más fuerte» · «Buscar a otra persona del círculo» · «Mejor no digo nada» | — |
| EP04_S04A_R001 | Tomi | Don Beto, es importante. Necesito que me escuches ahora. | Se para derecho, voz clara |
| EP04_S04A_R002 | Don Beto | *(deja el martillo)* Tienes razón, Tomi. Perdón. Te escucho. | Se da vuelta, se agacha → **Escena 5 con Don Beto** |
| EP04_S04A_R003 | Capi | ¡Buena idea! Tu círculo tiene más personas. Vamos al faro. | → **Escena 4B** con Profe Clara |
| EP04_S04A_R004 | Tomi | Mejor no digo nada… | Se sienta en el banco; la mochila pesa |
| EP04_S04A_F001 | Capi | Es normal sentirse así. Descansemos un momento. | Se sienta al lado, respira (animación de respiración lenta) |
| EP04_S04A_F002 | Capi | La mochila sigue pesada. Tu círculo tiene tres personas. ¿Probamos con otra, o lo decimos otra vez? **[VALIDAR]** | Vuelve a C001 sin quitar opciones |

### Escena 4A-bis (solo 9–12) — Una persona grande que minimiza (`s04a2_minimiza`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S04B2_L001 | Profe Clara | *(mirando papeles)* Ay, Tomi, seguro no es nada. Anda a jugar. **[VALIDAR — ¿se usa a Clara o un personaje sin modelo?]** | Distraída, sin mala intención |
| EP04_S04B2_L002 | Capi | A veces una persona grande no entiende a la primera. Tú sí sabes que te pesa. **[VALIDAR — crítica]** | Firme y cálida |
| EP04_S04B2_C001 | *Elección* | «Decir: "Sí es importante. Me pesa."» · «Buscar a otra persona del círculo» | — |
| EP04_S04B2_R001 | Profe Clara | *(deja los papeles)* Tienes razón. Perdón, Tomi. Cuéntame. | → Escena 5 con Clara |
| EP04_S04B2_R002 | Capi | Vamos con Don Beto. | → Escena 5 con Beto (Beto escucha a la primera) |

### Escena 4B / 5 — Una persona grande que escucha bien (`s05_escucha`)

*Se usa con quien corresponda (Clara o Beto). Líneas con Clara; Beto dice las mismas en su voz.*

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S05_L001 | Tomi | Necesito ayuda. Tengo un secreto que pesa. | Frase practicada |
| EP04_S05_L002 | Profe Clara | Gracias por venir, Tomi. Te escucho. | Deja el libro, se agacha a su altura, lo mira |
| *Transición* | — | La cámara se aleja. Se ve a Tomi hablar y a Clara escuchar asintiendo. **Sin audio de la conversación**: solo música suave y el subtítulo «(Tomi cuenta. Clara escucha.)». La mochila de Tomi se encoge. | Plano abierto con mar y faro |
| EP04_S05_L003 | Profe Clara | Gracias por contármelo. Hiciste muy bien en contarlo. **[VALIDAR — crítica]** | Voz tranquila |
| EP04_S05_L004 | Profe Clara | Te creo. Y no es tu culpa. **[VALIDAR — crítica]** | Mano en el corazón (prop corazón brilla) |
| EP04_S05_L005 | Tomi | ¿No le vas a decir a nadie? | Preocupado |
| EP04_S05_L006 | Profe Clara | Voy a cuidar lo que me contaste. Para ayudarte, quizá hable con personas que saben ayudar a niños. Te voy a avisar antes. **[VALIDAR — crítica]** | Honesta, sin prometer silencio |
| EP04_S05_L007 | Profe Clara | No estás solo. Vamos a buscar ayuda juntos. **[VALIDAR]** | Se pone de pie y le ofrece caminar a su lado (sin tomarlo de la mano sin preguntar) |
| EP04_S05_L008 | Tomi | ¡Mi mochila ya no pesa tanto! | Se endereza, sonríe |
| EP04_S05_L009 | Capi | ¿Viste lo que hizo la profe? | Destellos sobre: escuchar, agradecer, creer, «no es tu culpa», buscar ayuda |
| EP04_S05_C001 | *Elección (repaso, 9–12)* | Tocar las conductas que viste: «Escuchó» · «Le creyó» · «Dijo que no es su culpa» · «Prometió no contar a nadie» | Las tres primeras brillan. La cuarta: «Ella no prometió eso. Dijo que buscaría ayuda y le avisaría. Así se cuida.» **[VALIDAR]** |

### Escena 6 — El faro (`s06_faro`)

| Id | Hablante | Línea | Animación / emoción |
| --- | --- | --- | --- |
| EP04_S06_L001 | Capi | ¡Subamos al faro! | *Minijuego M5*: tocar peldaños de la escalera (sin tiempo). Luna sube por la rampa lateral que se construye junto a la escalera **[PROPUESTA: añadir rampa al kit de escenario]** |
| EP04_S06_L002 | Capi | Contar no siempre arregla todo de inmediato. Pero ya no lo cargas solo. **[VALIDAR — crítica]** | Mirando el mar |
| EP04_S06_L003 | Luna | Y si una persona no escucha… | Levanta un dedo |
| EP04_S06_L004 | Tomi | … ¡lo digo otra vez o busco a otra persona! | Levanta dos dedos, alegre |
| EP04_S06_L005 | Capi | Acuerdo de hoy: si no me escuchan, lo digo otra vez o busco a otra persona de mi círculo. **[VALIDAR]** | Toca la estrella; el faro se enciende |
| *Recompensa* | — | Escalera restaurada; faro encendido; la luz recorre la isla | Todos celebran |
| EP04_S06_L006 | Capi | ¡La isla ya casi está lista! Ahora, a conversar con tu profe o tu familia. | Saluda |

## 4.4 Matriz de decisiones — Episodio 4

| Estado / escena | Situación | Opciones del jugador | Feedback inmediato | Consecuencia narrativa | Estado siguiente |
| --- | --- | --- | --- | --- | --- |
| S01 | Repaso No–Me alejo–Lo cuento | Tocar los tres botones (cualquier orden) | Gesto de Capi por botón | Cláusula de no culpa y «nunca es tarde» | S02 |
| S02 M2 | Armar frase | Cualquier combinación de 1–3 bloques | F001 «No hace falta decirlo perfecto» | Tomi practica la frase | S03 |
| S03 C001 | ¿A quién primero? | Luna | R001 | Luna acompaña; se retira como opción | S03 C001 |
| S03 C001 | | Capi | R002 | Capi acompaña; se retira como opción | S03 C001 |
| S03 C001 | | Don Beto | — | — | S04A |
| S03 C001 | | Profe Clara | — | Buena escucha a la primera | S05 (Clara) → 6–8: práctica S04A · 9–12: S04A-bis |
| S04A C001 | Beto no escucha | Decirlo otra vez | R001 + R002 | Beto repara y escucha | S05 (Beto) |
| S04A C001 | | Otra persona del círculo | R003 | Van al faro | S05 (Clara) |
| S04A C001 | | Mejor no digo nada | R004 + F001 + F002 | Pausa de respiración; ninguna opción desaparece; no hay límite de intentos | S04A C001 |
| S04A-bis C001 (9–12) | Adulto minimiza | «Sí es importante» / Otra persona | R001 / R002 | Reparación o cambio de adulto | S05 |
| S05 | Buena escucha | (Toque) | L003–L007 | No promete silencio; mochila liviana | S05 C001 (9–12) / S06 |
| S05 C001 (9–12) | Repaso de conductas | Tres conductas correctas / «Prometió no contar» | Brillo / aclaración amable | — | S06 |
| S06 M5 | Subir al faro | Peldaños | — | Faro encendido | Fin; `ep04.completed` |

> Si en 6–8 el jugador ya pasó por S04A en la práctica y eligió la misma persona, la escena S05 no se repite completa: Capi resume con una línea («¡Y así se escucha bien!»).

## 4.5 Debrief

### Aula

1. ¿Qué palabras usó Tomi para pedir ayuda? ¿Qué otras podrían servir?
2. Don Beto no escuchó a la primera. ¿Qué podía hacer Tomi? ¿Y si la segunda persona tampoco escucha? (Seguir buscando: tu círculo tiene tres personas y hay más en la escuela.) **[VALIDAR]**
3. ¿Qué hizo la profe Clara que ayudó a Tomi?
4. ¿Por qué la profe no prometió guardar el secreto? **[VALIDAR]**
5. ¿Se puede contar algo aunque haya pasado hace mucho? (Nunca es tarde.) **[VALIDAR]**

**Actividad: «La cadena de ayuda» (5–8 min).** En grupos de tres, con tarjetas de roles *inventados* (un personaje de la isla pide ayuda por algo seguro, como «perdí mi mochila» o «alguien me quita la merienda»; otro es un adulto ocupado; otro, un adulto que escucha), practican la secuencia: pedir, no ser escuchado, insistir o buscar a otra persona y escuchar bien. **Nunca se usan situaciones reales ni se dramatiza un secreto grave.** **[VALIDAR]**

Cierre del facilitador: presentar a las personas concretas de la escuela a quienes se puede acudir (según la institución) y decir: «Si alguna vez necesitan contar algo, pueden venir conmigo. Les voy a escuchar.» **Solo si el facilitador está preparado para actuar según el protocolo.** **[VALIDAR — crítica]**

### Familia

- «Si algún día me cuentas algo y yo estoy ocupado o no te escucho bien, dímelo otra vez: "Es importante". Y si no te escucho, busca a otra persona de tu círculo.» **[VALIDAR]**
- Acordar una «palabra clave» familiar para decir «necesito hablar ahora en serio» (p. ej., «faro»). **[VALIDAR]**

## 4.6 Frases [VALIDAR] del episodio 4

- S01 L007 «Si no pudiste decir no, o alejarte, igual lo puedes contar. No es tu culpa.» **(crítica)**
- S01 L008 «Nunca es tarde para contar.» **(crítica)**
- S02 bloque «Me pasó algo que no me gustó» · F001 «No hace falta decirlo perfecto» · L002 «escribirlo o dibujarlo».
- S03 R001 Luna redirige a una persona grande.
- S04A L004 «A veces las personas grandes no escuchan a la primera. No es porque tú hiciste algo mal.» **(crítica)**
- S04A F002 reintento.
- S04A-bis: adulto que minimiza («seguro no es nada») y L002 «Tú sí sabes que te pesa» **(crítica)**.
- S05 L003–L007: «Gracias por contármelo», «Te creo», «No es tu culpa», **«Quizá hable con personas que saben ayudar a niños. Te voy a avisar antes»** **(crítica: compatibilidad con la ruta y la obligación de denuncia)**, «No estás solo».
- S06 L002 «Contar no siempre arregla todo de inmediato. Pero ya no lo cargas solo.» **(crítica)**
- Cierre del facilitador «pueden venir conmigo».

## 4.7 Riesgos específicos del episodio 4

| Riesgo | Mitigación |
| --- | --- |
| Precipitar revelaciones en el aula sin un adulto preparado. | El facilitador debe estar capacitado en el protocolo antes del Ep4 (requisito de implementación, no opcional). Cierre condicionado. |
| Frase «te voy a avisar antes» imposible de cumplir en ciertos casos por la ruta legal. | Revisar con psicología y protección. Alternativa: «Te voy a explicar lo que va a pasar». **[VALIDAR]** |
| Mostrar a Profe Clara minimizando daña la confianza en docentes. | Es opcional (9–12) y hay alternativa de personaje sin modelo; Clara repara de inmediato. |
| El niño cree que si el adulto no le cree, es culpa suya. | L004 de S04A y L002 de S04A-bis explícitas. Debrief pregunta 2. |
| Que «nunca es tarde» genere revelación inmediata. | Protocolo 0.10 y guía familiar de respuesta. |
| Rampa de Luna ausente en el kit 3D actual. | Marcada como PROPUESTA; mientras no exista, Luna espera abajo y la luz del faro «baja» hasta ella: no se la deja fuera. |

---

# 5. Cierre e integración — «Fiesta del faro»

## 5.1 Ficha breve

| Campo | Contenido |
| --- | --- |
| **Habilidad observable** | Aplicar los cuatro acuerdos a tres situaciones nuevas y seguras, eligiendo acciones combinadas (brújula → decir no / alejarse → contar → insistir). |
| **Situación segura** | Preparativos de la fiesta de la isla completa. Tres «estaciones» con tarjetas 2D. |
| **Mecánica** | Tres estaciones en el mapa, con opciones múltiples válidas. Al final, escena de fiesta con todos los personajes y la isla completa. **Sin puntaje, porcentaje ni diploma con nota.** Opción de imprimir, desde el menú adulto, un «Pasaporte de la isla» sin nombre con los cuatro acuerdos. |
| **Datos** | `ep05.completed`, `island.complete`. |
| **Duración** | 8–12 min de juego y 15 min de debrief de integración. |
| **Límites** | No es un examen ni una evaluación de riesgo. No introduce temas nuevos. |

## 5.2 Estaciones

| Estación | Tarjeta | Opciones válidas | Feedback |
| --- | --- | --- | --- |
| 1. Muelle (Ep1+Ep4) | En una fiesta familiar, un primo te hace cosquillas. Dices «para» y sigue. **[VALIDAR]** | Decir «¡Para!» otra vez · Alejarme · Contarlo a una persona grande · *(todas)* | «Tu no importa. Si no te escuchan, te alejas y lo cuentas.» **[VALIDAR]** |
| 2. Huerto (Ep2) | Luna se lastimó la rueda de la silla y no puede volver a casa. | Buscar a Don Beto · Buscar a Profe Clara · Acompañarla y buscar a una persona grande | «Así funciona un círculo.» |
| 3. Casa (Ep3) | *(6–8)* Alguien te dice: «No le digas a tu mamá que te di dulces». **[VALIDAR]** · *(9–12)* En un juego de la tablet, alguien que no conoces bien te escribe: «No le cuentes a nadie que hablamos». **[VALIDAR — crítica]** | Es un secreto que pesa → contarlo a mi círculo · (en 9–12) además: no responder y mostrarle la pantalla a una persona grande | «Cuando te piden no contar a tu familia, se cuenta.» |
| Fiesta | Todos los personajes; cada uno pregunta al jugador cómo quiere que lo salude. | Cualquier saludo | Capi: «La isla está completa porque aprendimos a cuidarnos juntos. Estos acuerdos te acompañan fuera de la isla.» **[VALIDAR]** |

**Líneas finales:**

| Id | Hablante | Línea |
| --- | --- | --- |
| EP05_S04_L001 | Capi | Mi brújula, mi círculo de 3, mis sorpresas y mis palabras para pedir ayuda. |
| EP05_S04_L002 | Luna | Y si no me escuchan… |
| EP05_S04_L003 | Tomi | … ¡lo digo otra vez o busco a otra persona! |
| EP05_S04_L004 | Profe Clara | Las personas grandes estamos para escucharte y cuidarte. **[VALIDAR]** |
| EP05_S04_L005 | Don Beto | ¡Y para respetar tu saludo! |
| EP05_S04_L006 | Capi | Gracias por arreglar la isla conmigo. Aquí te esperamos cuando quieras volver. |

## 5.3 Debrief de integración (aula)

1. ¿Cuál acuerdo de la isla les parece más importante? ¿Por qué? (Sin respuestas personales.)
2. Con un cartel de 4 columnas (Saludo · Círculo · Sorpresa o pesa · Pedir ayuda), el grupo dibuja un ejemplo inventado para cada una.
3. El facilitador reparte a cada niño una tarjeta con los cuatro acuerdos y el lugar o persona de ayuda de la escuela (definido por la institución). **[VALIDAR]**

---

# 6. Puente para adultos

> Borrador para facilitadores y familias. El formato final (guía impresa, video corto, sesión, quiz) está pendiente; ver [Plataforma preventiva ASI](../project/plataforma-preventiva-asi.md). **Todo este apartado es [VALIDAR]** con Arianna/Mauricio, con la ruta local (espacio seguro → padres → Defensoría, según la wiki) y con la normativa boliviana que investigan otros agentes.

## 6.1 Mensajes clave para todas las personas adultas

1. **El objetivo es prevenir y abrir conversación**, no detectar ni diagnosticar. El juego no sustituye la protección que dan los adultos.
2. **La responsabilidad de proteger es siempre de los adultos**, nunca del niño. Un niño que no dijo «no» o no contó no tiene la culpa.
3. **La mayoría de las situaciones de abuso sexual infantil las cometen personas que el niño conoce** (familiares, conocidos, personas de la comunidad o de instituciones), no desconocidos. **[VALIDAR con evidencia y cifra si existe; no inventar números]**. Por eso el juego enseña a mirar **conductas** y no apariencias.
4. **Señales de conductas de adultos que conviene notar** (no prueban nada por sí solas): pedir secretos a un niño, dar regalos o privilegios especiales a cambio de silencio, buscar estar a solas con un niño de forma insistente, no respetar el «no» de un niño. **[VALIDAR]**
5. **Lenguaje común:** brújula del cuerpo (sol, nube, uh-oh), círculo de 3, sorpresa o secreto que pesa, «No – Me alejo – Lo cuento», «lo digo otra vez».

## 6.2 Si un niño o niña te cuenta algo [VALIDAR — crítica]

| Sí | No |
| --- | --- |
| Mantener la calma (aunque sientas mucho) | Mostrar horror, enojo o incredulidad delante del niño |
| Escuchar y dejarlo hablar a su ritmo | Interrogar, pedir detalles, preguntar «¿estás seguro?» o hacerlo repetir |
| Decir: «Gracias por contármelo. Te creo. No es tu culpa.» | Culpar: «¿Por qué no me dijiste antes?», «¿Qué hacías ahí?» |
| Decir la verdad: «Voy a buscar ayuda para cuidarte.» | Prometer «no se lo diré a nadie» |
| Proteger: asegurar que el niño esté seguro ahora | Confrontar a la persona señalada por tu cuenta |
| Registrar solo lo que dijo, con sus palabras, fecha y hora, si el protocolo lo pide | Grabar al niño, publicar en redes o comentarlo en grupos |
| Activar la ruta: en la escuela, la persona de protección o dirección; en la comunidad, la Defensoría de la Niñez y Adolescencia (DNA) del municipio u otras instancias que defina la ruta local **[VALIDAR instancias, teléfonos y orden]** | Esperar a «estar seguro» o resolverlo en familia |

> **Punto a resolver con psicología [VALIDAR — crítica]:** la wiki registra la ruta de Arianna como «espacio seguro → padres → Defensoría». Hay que precisar qué hacer cuando la persona señalada está en el hogar, para que informar a la familia no ponga al niño en riesgo.

## 6.3 Guía por episodio

| Episodio | Qué aprendió | Frase para usar en casa o aula | Qué hacer | Qué evitar |
| --- | --- | --- | --- | --- |
| **1. Saludo** | Puede elegir cómo saludar, cambiar de idea y respetar el no de otros. Brújula del cuerpo. | «¿Cómo quieres saludar a la tía? Puede ser con la mano.» **[VALIDAR]** | Ofrecer alternativas al beso o abrazo; respetar el «no» del niño delante de otros; pedir permiso para cosquillas y jugar a «para» y parar de verdad. | Obligar a besar o abrazar «por educación»; burlarse («qué malcriado»); seguir con cosquillas cuando dice «para». |
| **2. Círculo de 3** | Las personas de confianza se reconocen por sus conductas. Conviene tener tres, de lugares distintos. | «Quiero estar en tu círculo. Y está bien que tengas otras personas más.» | Ayudar a identificar adultos de confianza en la escuela y la comunidad; ser una persona que escucha sin burlarse. | Decir «solo me puedes contar a mí»; ponerse celoso por las otras personas del círculo; imponer quién debe estar. |
| **3. Secreto o sorpresa** | Diferencia entre sorpresa (alegre, dura poco) y secreto que pesa (uh-oh, miedo, promesas, regalos). Privado ≠ secreto. | «En esta casa hacemos sorpresas, no secretos que pesan.» **[VALIDAR]** | Usar la palabra «sorpresa» para regalos; decir claramente que contar un secreto que pesa no trae castigo. | Pedir al niño «no le digas a tu papá o mamá»; castigar cuando cuenta algo que «rompió una promesa». |
| **4. A quién le cuento** | Cómo pedir ayuda, insistir si no escuchan y buscar a otra persona. Cómo responde bien un adulto. | «Si estoy ocupado y es importante, dímelo otra vez: "¡Es importante!"» | Dejar lo que se hace y mirar al niño cuando pide hablar; acordar una palabra clave familiar; conocer la ruta local de ayuda. | Responder «ahora no» sin volver después; minimizar («seguro no es nada»); reaccionar con enojo ante lo que cuenta. |
| **Cierre** | Integración de los cuatro acuerdos. | «¿Qué acuerdo de la isla te gustó más?» | Repetir los acuerdos en la vida cotidiana, sin convertirlos en examen. | Usar el juego como amenaza («si no te portas bien…») o como interrogatorio. |

## 6.4 Checklist del facilitador antes de implementar

- [ ] Permiso de dirección y aviso o consentimiento de las familias **[VALIDAR tipo de consentimiento]**.
- [ ] Capacitación en el protocolo de protección y conocimiento de la ruta local.
- [ ] Persona de apoyo identificada en la escuela durante las sesiones.
- [ ] Modo de edad configurado; audio probado; pantalla visible para todos.
- [ ] Hojas de actividad impresas (opcional) y acuerdos del grupo listos.
- [ ] Saber que **el juego no guarda elecciones** y no se usa como evaluación de riesgo.

---

# 7. Esquema de contenido versionable (JSON)

## 7.1 Principios del contrato

- **Contenido separado de la lógica:** PlayCanvas carga un JSON por episodio (`content/episodes/epXX-*.json`). El código solo interpreta tipos de nodo; no hay texto de diálogo en scripts.
- **Localización separada:** cada línea referencia un `locId`. Los textos van en `localization.<locale>` dentro del mismo archivo para el prototipo. Luego pueden migrar a `content/locales/<locale>/epXX.json` sin cambiar nodos.
- **Revisión profesional:** cada nodo sensible lleva `"review": "VALIDAR"` y opcionalmente `"reviewNote"`. Una herramienta de CI puede listar todos los nodos con `review` pendiente y bloquear el paso a producción.
- **Privacidad por contrato:** `privacy.persistChoices` es `false`. Las variables de sesión (`sessionVars`) viven solo en memoria. Solo los `progressFlags` con `"persist": true` se guardan.
- **Versionado:** `schemaVersion` (formato del contrato, semver) y `contentVersion` (texto y ramas, semver + estado). Cambiar una línea sube el *patch*; cambiar ramas sube el *minor*.

## 7.2 Tipos de nodo

| `type` | Campos | Comportamiento |
| --- | --- | --- |
| `line` | `speaker`, `locId`, `anim`, `emotion`, `audio`, `next` | Muestra y reproduce una línea; avanza con toque. |
| `choice` | `promptLocId?`, `options[]` → `{id, locId, icon, ageModes?, setSession?, next}` | Muestra opciones; opcionalmente guarda una variable de sesión (no persistente). |
| `minigame` | `minigameId`, `config`, `feedback`, `next` | Delega en un componente de minijuego; el contenido de tarjetas y feedback va en `config`. |
| `branch` | `conditions[]` → `{if, next}`, `else` | Ramifica por `ageMode` o `sessionVars`. Expresiones simples tipo `{"all":[{"var":"ageMode","eq":"9-12"}]}`. |
| `reward` | `restore[]`, `setFlags[]`, `next` | Activa piezas de la isla y marca flags persistentes. |
| `sceneChange` | `scene` | Carga otra escena del episodio. |
| `end` | `debriefLocId`, `setFlags[]` | Cierra el episodio y muestra la pantalla para conversar. |

## 7.3 Estructura de alto nivel

```json
{
  "schemaVersion": "0.1.0",
  "contentVersion": "0.1.0-draft",
  "episodeId": "ep01",
  "status": "draft-not-validated",
  "defaultLocale": "es-BO",
  "ageModes": ["6-8", "9-12"],
  "privacy": { "persistChoices": false, "persistFlagsOnly": true },
  "cast": { "capi": { "model": "mascot/v005" } },
  "progressFlags": [{ "id": "ep01.completed", "persist": true }],
  "sessionVars": [{ "id": "greetBeto", "persist": false }],
  "entryScene": "s01_llegada",
  "scenes": [
    {
      "id": "s01_llegada",
      "environment": ["bridge_main_broken"],
      "entryNode": "n001",
      "nodes": [
        { "id": "n001", "type": "line", "speaker": "capi", "locId": "EP01_S01_L001", "anim": "wave", "emotion": "happy", "next": "n002" }
      ]
    }
  ],
  "localization": { "es-BO": { "EP01_S01_L001": "¡Hola! Te doy la bienvenida a la Isla de los Acuerdos." } }
}
```

El ejemplo completo y válido del Episodio 1 está en **`content/episodes/ep01-saludo.json`**. Sus escenas, ids y textos coinciden con el guion 1.3.

---

# 8. Preguntas abiertas para psicología y equipo

1. ¿Se aborda en algún episodio la idea de «partes privadas del cuerpo» con nombres correctos? Muchos programas lo incluyen. Aquí se dejó fuera a la espera de validación y de consulta con familias y escuelas bolivianas. **[VALIDAR — decisión crítica de alcance]**
2. ¿Mantener a Don Beto y a Profe Clara en roles de adulto que se equivoca, o usar personajes sin modelo?
3. ¿Dejar abierto el secreto de Tomi entre el Ep3 y el Ep4?
4. ¿Qué frase exacta usa un adulto sobre la confidencialidad (S05 L006 del Ep4) compatible con la obligación de denuncia en Bolivia?
5. ¿Incluir la situación digital en el cierre para 9–12? ¿Y en 6–8?
6. ¿Orden de episodios fijo o libre desde el mapa?
7. ¿Cuántas sesiones y con qué frecuencia? ¿Se puede jugar el Ep1 aislado (vertical slice) sin dejar un mensaje incompleto? *(Hipótesis: sí, porque cierra con «lo puedes contar a una persona grande».)*
8. ¿Qué ruta de ayuda concreta aparece en la tarjeta final para niños y quién la mantiene actualizada?
9. ¿Nombre del juego para niños? ¿Nombres de mascota y NPC?
10. ¿Cómo se prueba la comprensión sin convertirla en examen de riesgo (ver Línea B)?

## See also

- [Plan de continuidad](../project/plan-continuidad-historia-negocio.md)
- [No hacer](../project/no-hacer.md)
- [Plataforma preventiva ASI](../project/plataforma-preventiva-asi.md)
- [Problema](../project/problema.md)
- [Cadena técnica web 3D](../project/toolchain-web-3d.md)
- [Producción 3D](../../PRODUCCION-3D.md)
