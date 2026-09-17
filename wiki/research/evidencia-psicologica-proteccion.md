---
title: Evidencia psicológica y de protección infantil (Línea B)
type: research
updated: 2026-09-17
status: draft
---

# Evidencia psicológica y de protección infantil

Continúa la **Línea B** del [Plan de continuidad](../project/plan-continuidad-historia-negocio.md): una tabla de evidencia, no una colección de consejos, para validar (o poner en tensión) las decisiones de diseño de [La Isla de los Acuerdos](../narrative/isla-de-los-acuerdos-guiones.md). No sustituye la revisión de un profesional en psicología infantil ni de protección; **señala qué dice la literatura pública y dónde el guion actual coincide, se acerca o entra en tensión con ella.**

Contexto interno: [Plan de continuidad](../project/plan-continuidad-historia-negocio.md) · [Guiones — La Isla de los Acuerdos](../narrative/isla-de-los-acuerdos-guiones.md) · [Problema](../project/problema.md) · [Salud mental](../project/salud-mental.md) · [No hacer](../project/no-hacer.md) · [002 — Eje salud mental, ASI](../decisions/002-eje-salud-mental-asi.md).

**Etiquetas usadas** (mismas que en [Canvas B — mercado y negocio](canvas-b-mercado-negocio.md)):

- **[EVIDENCIA]**: dato o hallazgo con fuente pública citada.
- **[EVIDENCIA débil]**: la fuente es real pero es secundaria (un resumen de buscador, una nota de prensa, un artículo sin acceso al texto completo), no el estudio primario verificado línea por línea.
- **[HIPÓTESIS]**: lectura o aplicación de la evidencia al proyecto, todavía no validada por un profesional.
- **[POR VALIDAR]**: pregunta concreta que falta responder, con quién o cómo validarla.

> Nota de método: varias cifras de esta página vienen de resúmenes de motor de búsqueda sobre metaanálisis, no de la lectura directa del PDF o paper original. Se marcan como [EVIDENCIA débil] cuando no se pudo verificar el número exacto en la fuente primaria. Antes de citar un número en un pitch o en un documento oficial, alguien debe abrir el estudio original.

---

## 1. Resumen ejecutivo

1. **Los programas escolares de prevención de ASI sí funcionan para conocimiento y actitudes, con tamaños de efecto grandes, y casi no producen ansiedad medible.** Un metaanálisis 2024 (PRISMA, 26 estudios, N = 13.669) reportó tamaños de efecto de 0,796 (conocimiento) y 0,759 (actitudes/conducta) [EVIDENCIA débil, número de resumen de buscador]. Otra revisión indica que los efectos negativos (más ansiedad) son «muy raros» [EVIDENCIA débil].
2. **La dosis importa: se recomiendan 4–5 sesiones o más, con participación física del niño (juego de roles), no una charla única.** Esto **valida** la estructura de 4 episodios + cierre del guion actual, aunque cada episodio dura 20–40 min y no está claro si eso equivale a una «sesión» completa en el sentido de los estudios [HIPÓTESIS, POR VALIDAR].
3. **El modelo "peligro es un extraño" está desactualizado y puede ser contraproducente.** Entre el 85 % y el 93 % de los abusos los comete alguien que el niño ya conoce [EVIDENCIA]. El guion actual ya evita esto (Don Beto y Profe Clara son adultos conocidos, no desconocidos) — **el diseño va en la dirección correcta**, pero es también el punto más delicado del documento y debe revisarlo un profesional antes de implementarse (ver §12).
4. **"Secreto bueno / secreto malo" tiene una crítica seria: puede confundir a niños que asocian "secreto" con algo divertido (una fiesta sorpresa), y quien ya aprendió a guardar secretos puede ser más fácil de convencer de guardar uno dañino.** Una alternativa citada es «sorpresas vs. secretos» en lugar de «secretos buenos vs. malos» [EVIDENCIA débil]. El guion ya usa esa distinción («secreto que pesa» vs. «sorpresa») — **coincide con la alternativa recomendada**, no con el modelo criticado.
5. **Niños con discapacidad tienen un riesgo de abuso sexual entre 4 y 10 veces mayor que sus pares sin discapacidad** [EVIDENCIA débil, rango citado por fuentes secundarias]. Esto no es un dato decorativo para justificar que Luna exista: es una razón directa para que el episodio de Luna sea tan riguroso como los demás, y para que "mi silla es parte de mi espacio" no sea la única línea sobre su seguridad corporal.
6. **Bolivia sí tiene una ruta legal e institucional específica, con obligación de denunciar para docentes y directores (Ley 548, Art. 159).** La Defensoría de la Niñez y Adolescencia (DNA) es la puerta de entrada gratuita y municipal; de ahí el caso puede ir a FELCV o al Ministerio Público. Hay líneas gratuitas: **156** (emergencias PAIF), **800-10-4100**, y **Familia Segura 800-11-30-40** / WhatsApp 77797667 [EVIDENCIA, POR VALIDAR con la fuente primaria de cada línea]. El guion para adultos (sección 6) debería nombrar al menos una de estas rutas de forma explícita — hoy dice «DNA, FELCV, líneas de ayuda» de forma genérica.
7. **El marco de Mauricio Rojas (promoción / prevención primaria / secundaria-terciaria / adhesión), ya documentado en [Salud mental](../project/salud-mental.md), coincide con la clasificación internacional (OMS / IOM, basada en Gordon).** No es una improvisación de la clase: es el estándar del campo. Esto **refuerza**, no cambia, la decisión ya cerrada en [002](../decisions/002-eje-salud-mental-asi.md).
8. **La privacidad de diseño que ya se declaró (sin chat, sin diario, sin relatos, solo flags de progreso) coincide con las mejores prácticas de COPPA/GDPR-K y con la Ley 1636 de Bolivia (2025) sobre integridad sexual digital de NNA.** El archivo [`content/episodes/ep01-saludo.json`](../../content/episodes/ep01-saludo.json) ya implementa `"persistChoices": false, "persistFlagsOnly": true` — coincide con la evidencia, no hace falta cambiarlo.
9. **Medir sin diagnosticar tiene un camino conocido: evaluación formativa, no tamizaje clínico.** El tamizaje sirve para decidir si alguien necesita revisión profesional, no para etiquetar. La recomendación aplicable es: contar finalización y comprensión agregada del grupo, no perfiles de riesgo por niño.

---

## 2. Prevención primaria de ASI y educación sobre límites apropiada por edad

| # | Afirmación | Fuente | Población / edad | Intervención | Resultado | Limitación | Aplicación al proyecto | Riesgo si se ignora |
|---|---|---|---|---|---|---|---|---|
| 2.1 | Los programas escolares de prevención de ASI mejoran conocimiento y conducta protectora, con tamaño de efecto grande | Metaanálisis 2024, PRISMA, 26 estudios, N=13.669 ([Journal of Prevention, Springer](https://link.springer.com/article/10.1007/s10935-025-00885-4); ver también [PMC9355675](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9355675/)) | Primaria, variado | Currículo escolar de prevención de ASI | ES conocimiento 0,796; ES actitud/conducta 0,759 [EVIDENCIA débil] | Cifra de resumen de buscador, no verificada en el PDF original; heterogeneidad alta entre estudios | Justifica seguir con un producto de prevención con contenido estructurado, no solo una charla | Sin esto, no hay base para afirmar que "jugar" cambia algo medible |
| 2.2 | Programas de 4+ sesiones con participación física dan los mayores tamaños de efecto | Mismo metaanálisis 2024; revisión sistemática ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S266637402400030X)) | Primaria | Múltiples sesiones, juego de rol físico | "4 or more sessions... produced the highest effect sizes" [EVIDENCIA débil] | No define "físico" con precisión (¿juego de mesa cuenta? ¿un avatar en pantalla?) | El diseño de 4 episodios + cierre encaja en el rango recomendado | Un solo episodio-demo (vertical slice) no basta como producto terminado; sirve solo para probar el flujo |
| 2.3 | Se recomiendan **al menos 4–5 sesiones** de duración | Revisión (citada vía [ScienceDirect 2024](https://www.sciencedirect.com/science/article/pii/S266637402400030X)) | Primaria | — | "should be at least four to five sessions long" [EVIDENCIA débil] | — | Los 4 episodios + cierre = 5 unidades; encaja, pero cada sesión de aula real probablemente cubre más de un episodio o menos, según el tiempo de clase | [POR VALIDAR] cuántos episodios caben en una sesión de aula boliviana real (20–40 min declarados en el guion) |
| 2.4 | Las intervenciones con **sesiones de refuerzo (booster)** repetidas después de la primera vez sostienen mejor el aprendizaje | [Búsqueda sobre dosis óptima](https://www.tandfonline.com/doi/abs/10.1207/S15374424jccp2902_11) | Primaria | Booster a los 2 años, o versiones breves por grado | Mejor retención con refuerzo que con una sola exposición | No hay dato de cuánto decae el aprendizaje sin refuerzo en este dominio específico | El diseño actual no tiene un plan de refuerzo anual — es un hueco de diseño, no solo de negocio | [POR VALIDAR] con Arianna/Mauricio: ¿se repite el ciclo cada año escolar? |
| 2.5 | El modelo **"peligro es un extraño" es engañoso**: 85–93 % de los abusos los comete alguien conocido | [RAINN / DOJ, vía búsqueda](https://firstwitness.org/news/the-truth-about-stranger-danger-debunking-common-myths-about-child-sexual-abuse/); [ScienceDaily 2012](https://www.sciencedaily.com/releases/2012/04/120413100854.htm) | General | — | 93 % conocido / 7 % desconocido (cifra de EE. UU., no boliviana) [EVIDENCIA débil, sin cifra local] | Cifra de EE. UU.; Bolivia no publicó (hasta donde se buscó) el desglose conocido/desconocido de sus denuncias | El guion ya centra el riesgo en adultos conocidos (Don Beto) en vez de un desconocido — **coincide con la evidencia**, pero es la parte más delicada del documento | Si se revierte a "cuidado con los extraños" como mensaje central, se estaría contradiciendo la evidencia y protegiendo peor |
| 2.6 | "Secreto bueno / secreto malo" tiene una crítica documentada; alternativas prefieren distinguir **sorpresa (temporal, alegre) de secreto (con presión o miedo)** | [NCMEC "Surprises vs. Secrets"](https://www.teacherspayteachers.com/Product/Surprises-Vs-Secrets-Grades-K-2-4056496); [Saprea, Good Secrets & Bad Secrets](https://saprea.org/blog/good-secrets-bad-secrets/) | K-2, primaria | Vocabulario del currículo | Confusión reportada cuando "secreto" se asocia con algo positivo (fiesta sorpresa) [EVIDENCIA débil] | No hay un estudio controlado que compare directamente ambos vocabularios | El episodio 3 del guion (**"Secreto que pesa o sorpresa"**) ya usa el vocabulario alternativo recomendado, no "secreto bueno/malo" | Si se cambiara al vocabulario "bueno/malo" sin saberlo, se estaría retrocediendo frente a la crítica ya conocida |
| 2.7 | El concepto de **red o círculo de adultos de confianza** (no un solo adulto) es común a varios currículos evaluados | [KidSafe Foundation, Circle of Safe Adults](https://bekidsafe.org/wp-content/uploads/2024/07/Stay-KidSafe-Circle-of-Safe-Adults-Sample-Watermark.pdf); [Trusted Adult Network](https://www.kidshubms.com/resource-library/building-a-trusted-adult-network) | Primaria | Identificar 3–5 adultos de confianza | Los programas varían entre 3 y 5 adultos sugeridos; no hay un número "mágico" validado | Es una práctica extendida, no necesariamente probada como superior a un número distinto | "Mi círculo de 3" (episodio 2) usa un número dentro del rango común, pero **"3" no tiene respaldo específico frente a "4" o "5"**; es una decisión de diseño, no un hallazgo | [POR VALIDAR] si "3" se eligió por facilidad narrativa (mochila, puente) y no por evidencia — está bien si se declara así, mal si se presenta como número validado |
| 2.8 | Las intervenciones que combinan **conocimiento + habilidades conductuales practicadas** (behavioral skills training) superan a las que solo dan información | Revisión de programas con discapacidad ([Journal of Child & Adolescent Trauma](https://link.springer.com/article/10.1007/s40653-026-00962-8)) | Con y sin discapacidad | BST: modelar, practicar, retroalimentar | Mejores resultados que solo charla informativa [EVIDENCIA débil] | Estudios pequeños, mayoría en EE. UU. | El formato de juego con feedback inmediato del guion ya se acerca a BST informal | — |

---

## 3. Desarrollo cognitivo, emocional y lingüístico: 6–8 vs. 9–12 años

| # | Afirmación | Fuente | Aplicación al proyecto |
|---|---|---|---|
| 3.1 | 6–8 años: pensamiento operacional concreto, entiende causa-efecto, distingue pasado/presente/futuro incipiente, pero razona sobre lo concreto, no lo abstracto | [Study.com / CDC Unit 6](https://archive.cdc.gov/www_cdc_gov/healthyschools/bam/child-development/middle-childhood.htm); [Scholastic](https://www.scholastic.com/parents/family-life/creativity-and-critical-thinking/development-milestones/cognitive-development-8-10-year-olds.html) [EVIDENCIA] | El vocabulario "persona grande" (vs. "adulto") para 6–8 años que ya usa el guion es coherente con pensamiento concreto; evitar categorías abstractas ("persona de confianza" sin ejemplos concretos) en ese rango |
| 3.2 | 9–12 años: entiende puntos de vista opuestos, atención más larga, razonamiento menos concreto, más capacidad de resolver problemas y cooperar; también aparece presión de pares y mayor conciencia social | [CDC](https://archive.cdc.gov/www_cdc_gov/healthyschools/bam/child-development/middle-childhood.htm); [Newport Academy](https://www.newportacademy.com/resources/well-being/teenage-developmental-milestones-middle-childhood/) [EVIDENCIA] | Justifica que 9–12 pueda manejar matices que 6–8 no (p. ej. "un adulto querido también puede equivocarse", presente en Don Beto) — pero esto es justo lo que el guion marca como [VALIDAR — crítica] y esta evidencia no lo resuelve, solo explica por qué el guion ya separa el contenido por edad |
| 3.3 | El desarrollo de funciones ejecutivas "frías" (planeación, memoria de trabajo) y "calientes" (regulación emocional bajo motivación/afecto) continúa entre los 6 y 12 años, con trayectorias distintas | [Revisión sistemática, PMC8385409](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8385409/) [EVIDENCIA] | Las decisiones "calientes" (con carga emocional, como responder a un adulto que insiste) son más difíciles de regular que las "frías" (elegir un color) — apoya diseñar el momento de decisión de Don Beto con más apoyo/andamiaje (pausa, pistas) que una decisión neutra como elegir un saludo |
| 3.4 | Separar contenido en dos modos de edad (6–8 y 9–12) es una práctica común en currículos de seguridad corporal revisados | [Body safety curricula, varios](https://myfirstbook.us/blogs/busy-book-blogs/parents-teach-consent-body-safety-through-age-appropriate-activities) [EVIDENCIA débil] | Confirma que la variante por edad ya declarada en el guion (`ageModes: ["6-8","9-12"]` en el JSON) sigue una práctica estándar, no es una complicación innecesaria |

---

## 4. Aprendizaje socioemocional (SEL) y práctica de habilidades de ayuda

- **Durlak et al. (2011), el metaanálisis fundacional de CASEL:** 213 programas SEL universales en la escuela, 270.034 estudiantes de kínder a secundaria. Resultado: mejoras significativas en habilidades sociales/emocionales, actitudes, conducta y rendimiento académico, con una ganancia de **11 puntos percentiles** en logro académico frente a control ([Wiley/Child Development, 2011](https://onlinelibrary.wiley.com/doi/10.1111/j.1467-8624.2010.01564.x); resumen en [Edutopia](https://www.edutopia.org/blog/social-emotional-learning-learning-boosts-academic-outcomes-joseph-durlak)) [EVIDENCIA]. El tamaño de efecto exacto (g) no se pudo verificar en el texto completo desde la búsqueda; **no citar un número de efecto específico sin abrir el paper**.
- **Metaanálisis más recientes muestran efectos más modestos:** 0,15–0,18 en vez de los valores más altos de 2011 ([búsqueda sobre SEL 2024–2025](https://link.springer.com/article/10.1007/s10964-024-01942-7)) [EVIDENCIA débil]. **Contradicción que se registra, no se resuelve aquí:** el campo tiene consenso de que SEL "funciona", pero el tamaño del efecto se redujo con estudios más grandes y recientes — es razonable comunicar el beneficio esperado con cautela, no como garantía.
- **Componentes que sí funcionaron en un metaanálisis reciente:** capacitar a los adultos que facilitan (docentes) y reducir la carga puramente cognitiva/teórica del currículo. **Componentes que NO mostraron efecto claro:** actividades pedagógicas genéricas, "apoyo de clima escolar" y **participación de la familia** ([Journal of Youth and Adolescence, 2024](https://link.springer.com/article/10.1007/s10964-024-01942-7)) [EVIDENCIA débil].
  - [HIPÓTESIS] Esto no significa "no involucrar a las familias" — el protocolo de derivación exige a la familia. Significa que el material para padres no debería tratarse como el componente que más mueve el aprendizaje del niño; el diseño ya prioriza correctamente la capacitación del facilitador/docente sobre el material familiar.
- **Debrief facilitado después de la práctica es un componente necesario, no decorativo:** la retroalimentación reflexiva ayuda a consolidar el aprendizaje, y funciona mejor si es continua durante la actividad, no solo al final ([guía de debrief para aula](https://acf.gov/sites/default/files/documents/opre/Debriefing-Tip-Sheet.pdf); [supportREALteachers.org](https://www.supportrealteachers.org/strategies-for-asking-questions.html)) [EVIDENCIA débil]. El guion ya incluye debrief por episodio — **coincide**, pero conviene revisar si además conviene un micro-debrief dentro de cada escena difícil (p. ej. después de la escena de Don Beto), no solo al cierre del episodio. [POR VALIDAR con Arianna/Mauricio]

---

## 5. Diseño informado por trauma, sin recrear el daño

- Los cuatro dominios de diseño informado por trauma para entornos que usan niños son: **seguridad y protección, elección y control, entornos enriquecidos, y conexión social** ([resumen de literatura sobre diseño para la niñez](https://architectureau.com/articles/trauma-informed-architecture-with-children-in-mind/)) [EVIDENCIA débil]. Aplicados a un juego (no a un edificio):
  - *Seguridad:* nada de música tensa, oscuridad o sustos — el guion ya lo declara en 0.2 Tono.
  - *Elección y control:* el jugador siempre puede reintentar sin castigo, y puede "cambiar de opinión" (episodio 1) — el guion ya lo tiene.
  - *Entornos enriquecidos:* la isla se reconstruye con cada episodio, refuerzo visual positivo — ya está en el diseño (tabla de recompensas cosméticas).
  - *Conexión social:* el debrief conecta lo jugado con el aula/familia — ya está.
  - [HIPÓTESIS] El guion ya cumple los cuatro dominios sin haber citado esta literatura explícitamente; esta sección sirve como **verificación retroactiva**, no como cambio de diseño.
- El contenido no debe "recrear el daño": la literatura de contenido informado por trauma recomienda evitar detalle explícito y dar control sobre la exposición (avisos, poder saltar una escena) cuando el tema es sensible ([Content Design London](https://contentdesign.london/blog/using-trauma-informed-principles-with-content-design)) [EVIDENCIA débil].
  - [POR VALIDAR] El guion actual no usa avisos de contenido explícitos dentro del juego (dirigido a niños de 6–12, que no leerían un aviso técnico) — la responsabilidad de avisar recae en el facilitador antes de la sesión (ya está en "Pre-juego"). Confirmar con Arianna/Mauricio si eso basta o si se necesita una salida rápida visible dentro de la escena misma.

---

## 6. Lenguaje recomendado para escuchar y responder a una revelación sin culpar

| Principio | Ejemplo de frase citada por las fuentes | Fuente |
|---|---|---|
| Creer al niño de inmediato; las denuncias falsas de niños son "extremadamente raras" | "I believe you", "It's not your fault", "You did the right thing by telling me" | [Prevent Child Abuse Utah](https://pcautah.org/2025/03/03/how-to-respond-when-a-child-discloses-abuse/); [WOAR](https://www.woar.org/responding-to-a-childs-disclosure/) [EVIDENCIA débil] |
| Mantener la calma; el niño puede interpretar la reacción del adulto como enojo hacia él/ella | "Remain calm and listen. If you show your anger, shock, or distress, the child may think you are upset at them" | [safekidsthrive.org](https://safekidsthrive.org/prevention-topics/reporting/responding-to-direct-disclosures/) [EVIDENCIA débil] |
| No preguntar "¿por qué no me dijiste antes?" — es una pregunta que culpa | "Questions like 'Why didn't you tell me?' are not helpful" | [Dawson Place](https://www.dawsonplace.org/what-to-do-when-a-child-discloses-abuse/) [EVIDENCIA débil] |
| Confirmar seguridad y ausencia de castigo | "Let them know that they've done the right thing by telling you, and that they are not in trouble" | [Early Open Often](https://www.earlyopenoften.org/be-ready-to-respond/responding-to-disclosure/) [EVIDENCIA débil] |
| No investigar ni interrogar (eso es trabajo de la entrevista forense única, no del docente/familiar) | Coincide con el principio de la Cámara Gesell boliviana: **una sola declaración formal**, grabada, para no repetir el relato | [eju.tv, sept. 2025](https://eju.tv/2025/09/defensoria-de-la-ninez-inaugura-camara-gesell-amigable-para-evitar-revictimizacion-de-menores/) [EVIDENCIA débil] |

**Aplicación directa:** el "Puente para adultos" del guion (sección 6.2, `[VALIDAR — crítica]`) ya usa un enfoque parecido a "escuchar, creer, no interrogar, derivar". Esta tabla da respaldo público a ese enfoque y aporta la razón detrás de **por qué no interrogar**: para no contaminar una futura entrevista forense única. Falta que el guion mencione explícitamente **una** ruta boliviana concreta (ver §8) en vez de solo nombrar instituciones en general.

---

## 7. Promoción, prevención (primaria/secundaria/terciaria) y atención clínica

El marco que ya usa el equipo, documentado en [Salud mental](../project/salud-mental.md) a partir de la clase de Mauricio Rojas, **coincide con el marco internacional**:

| Nivel | Definición internacional (OMS / modelo Gordon-IOM) | Fuente | Coincidencia con lo ya documentado |
|---|---|---|---|
| Promoción | Fortalecer aspectos positivos (autoestima, afrontamiento) antes de cualquier condición | [Frontiers in Psychiatry, 2022](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.898009/full) [EVIDENCIA] | Coincide con la nota de Mauricio: "lo menos entendido", antes de "prevenir una enfermedad" |
| Prevención universal | Toda la población, sin importar el riesgo individual | [NAP.edu, Reducing Risks for Mental Disorders](https://www.nationalacademies.org/read/2139/chapter/3) [EVIDENCIA] | Corresponde a "prevención primaria" en la nota de la clase — el producto se dirige a **todo** un curso, no solo a niños identificados en riesgo |
| Prevención selectiva | Subgrupo con mayor riesgo que la población general | Mismo marco IOM/Gordon [EVIDENCIA] | No aplica hoy: el producto no segmenta niños por riesgo individual (correcto, evita estigma — ver §11) |
| Prevención indicada | Personas con factores de riesgo ya establecidos | Mismo marco [EVIDENCIA] | Corresponde a la "prevención secundaria/terciaria" que Mauricio marcó como "más cerca del consultorio" — **fuera de alcance**, como ya está decidido |

**Conclusión:** no hay contradicción que registrar aquí. El marco ya adoptado (decisión [002](../decisions/002-eje-salud-mental-asi.md)) es el estándar del campo, así que esta sección confirma la base y no exige ningún cambio.

---

## 8. Protocolos de derivación y salvaguarda aplicables en Bolivia / Santa Cruz

### 8.1 Marco legal

- **Ley 548, Código Niña, Niño y Adolescente (17-07-2014).** Artículo 159: **directores y docentes** que detecten cualquier indicio de maltrato, violencia, explotación o abuso están **obligados a comunicarlo de inmediato** a los padres/tutores y a la Defensoría de la Niñez y Adolescencia de su jurisdicción [EVIDENCIA débil, vía resumen de buscador — **falta verificar el número exacto de artículo contra el texto oficial** ([texto en coordinadoradelamujer.org.bo](https://www.coordinadoradelamujer.org.bo/observatorio/archivos/marco/l548_389.pdf))]. Artículo 106: deber general de denunciar a la autoridad competente; quien denuncia **no puede alegar secreto profesional** y queda **exento de responsabilidad penal o civil** salvo mala fe [EVIDENCIA débil, misma limitación].
- **Ley 1636 (10-09-2025), Ley de Protección de la Integridad Sexual de Niñas, Niños y Adolescentes en Entornos Digitales.** Prohíbe difundir imágenes o datos personales de víctimas de abuso sexual digital en redes, foros o mensajería ([lexivox.org](https://www.lexivox.org/norms/BO-L-N1636.xhtml); [Ratio Legis](https://www.ratio-legis.com.bo/2025/10/06/ley-de-proteccion-de-la-integridad-sexual-de-ninas-ninos-y-adolescentes-en-entornos-digitales-en-bolivia/)) [EVIDENCIA débil]. No aplica directamente al producto (no es una app de redes ni de chat), pero **confirma que la ausencia de chat, fotos o relatos de niños en el diseño es la dirección correcta**, no solo una precaución de negocio.
- **Anteproyecto de Ley de Protección de Datos Personales** (AGETIC, 2024–2025): todavía **no es ley vigente** en Bolivia [POR VALIDAR, confirmar estado actual]. No hay hoy una ley general de protección de datos personales en Bolivia equivalente al GDPR; lo específico a NNA está en la Ley 548 y la Ley 1636.

### 8.2 Ruta institucional (para el "puente para adultos")

1. **Defensoría de la Niñez y Adolescencia (DNA):** servicio **municipal y gratuito**, primera puerta de entrada según la ley. Un equipo multidisciplinario elabora un informe psicológico y social preliminar.
2. Con ese informe, se presenta la **denuncia formal** (verbal o escrita) ante la **FELCV** (Fuerza Especial de Lucha Contra la Violencia) o ante el **Ministerio Público** (Fiscalía), que abre la investigación penal.
3. **Cámara Gesell:** entrevista única, grabada, en un espacio amigable, para evitar que el niño repita su relato varias veces. La Defensoría de la Niñez inauguró una nueva "Casa de la Niñez" con Cámara Gesell en septiembre de 2025, financiada por **ChildFund y Visión Mundial** — los mismos aliados ya identificados en la [investigación de mercado](canvas-b-mercado-negocio.md) ([eju.tv, 09-2025](https://eju.tv/2025/09/defensoria-de-la-ninez-inaugura-camara-gesell-amigable-para-evitar-revictimizacion-de-menores/)) [EVIDENCIA débil].

Fuente conjunta de la ruta: [artículo Unifranz](https://unifranz.edu.bo/blog/denunciar-la-violencia-infantil-y-adolescente-todo-lo-que-necesitas-saber/); [Educo, Cartilla 2 — Rutas de actuación y denuncia en unidades educativas](https://bo.educo.org/wp-content/uploads/2024/08/CARTILLA-2-RUTAS-DE-ACTUACIO%CC%81N-Y-DENUNCIA-DE-CASOS-DE-VIOLENCIA-EN-UNIDADES-EDUCATIVAS.pdf) (2024, dirigida a personal de unidades educativas) [EVIDENCIA débil — el PDF no se pudo leer con precisión de cita textual, solo su estructura general].

### 8.3 Líneas gratuitas para nombrar en el material de adultos

| Línea | Qué es | Fuente |
|---|---|---|
| **156** | Emergencias de la Plataforma de Atención Integral a la Familia (PAIF), incluye NNA víctimas de violencia | [GAM La Paz](https://lapaz.bo/paif-de-emergencia-linea-156/) [EVIDENCIA débil, verificar si es solo La Paz o nacional] |
| **800-10-4100** | Plataforma de Atención Integral a la Familia | [GAM La Paz](https://lapaz.bo/plataforma-de-atencion-integral-a-la-familia-linea-de-emergencia-156/) [EVIDENCIA débil] |
| **800-11-30-40** / WhatsApp 77797667 | *Familia Segura*, apoyo psicoemocional gratuito y confidencial, 6:00–24:00, todo el país | [UNICEF Bolivia](https://www.unicef.org/bolivia/historias/en-bolivia-una-l%C3%ADnea-gratuita-busca-prevenir-la-violencia-en-tiempos-de-pandemia) [EVIDENCIA débil] |
| **800-10-8004** | Defensoría del Pueblo, denuncias de vulneración de derechos en general | [Defensoría del Pueblo](https://www.defensoria.gob.bo/noticias/la-defensoria-del-pueblo-habilita-33-lineas-telefonicas-para-atender-denuncias-de-vulneracion-de-derechos-durante-las-inscripciones-a-nivel-nacional) [EVIDENCIA débil] |

[POR VALIDAR] Confirmar con la DNA de Santa Cruz de la Sierra (no solo La Paz) cuál de estas líneas opera localmente y sigue activa en 2026, antes de imprimir cualquier material para familias. **No poner un número en un material impreso sin verificarlo ese mismo mes.**

### 8.4 Confidencialidad profesional

El Colegio de Psicólogos de Bolivia (fundado 1980) sostiene secreto profesional salvo cuando hay riesgo de daño a terceros; con menores, la autorización para compartir información la dan los padres o tutores, y el psicólogo debe informar los límites del secreto profesional desde el inicio [EVIDENCIA débil, fuente secundaria] ([contexto regional, Colegios de Psicólogos](https://ojs.colegiodepsicologos.org.gt/index.php/revista/article/download/85/78)). Relevante si el proyecto contrata revisión psicológica formal: el profesional que revise el contenido **no puede prometer confidencialidad absoluta** frente a una revelación real durante un piloto.

---

## 9. Participación segura de niños, consentimiento de familias y pruebas con escuelas

- **UNICEF distingue consentimiento (de un adulto responsable) de asentimiento (del niño mismo).** El asentimiento es el compromiso del niño con la actividad, explicado a su nivel de comprensión, incluso cuando legalmente no puede dar consentimiento pleno. Ambos son necesarios: permiso del padre/tutor **y** asentimiento del niño, de forma voluntaria y explicable ([UNICEF Procedure on Ethical Standards](https://www.unicef.org/evaluation/media/1786/file/UNICEF%20Procedure%20on%20Ethical%20Standards%20in%20Research,%20Evaluation,%20Data%20Collection%20and%20Analysis.pdf); [International Ethical Guidelines, Guideline 17](https://www.ncbi.nlm.nih.gov/books/NBK614432/)) [EVIDENCIA].
- **Los modelos de consentimiento para programas escolares de prevención de ASI varían entre "permiso implícito" (folleto informativo, sin firma) y "opt-out por escrito"** según el distrito/país; no hay un estándar único ([revisión de implementación, PMC10668535](https://pmc.ncbi.nlm.nih.gov/articles/PMC10668535/)) [EVIDENCIA débil]. No se encontró el estándar específico que usan los colegios de Santa Cruz para programas de este tipo [POR VALIDAR con un colegio piloto].
- **La participación de padres es difícil de traducir en acción concreta**, incluso cuando su conocimiento y actitudes mejoran con la intervención ([revisión sistemática de 4 décadas, PMC10666487](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10666487/)) [EVIDENCIA débil]. Esto es consistente con el hallazgo de la §4 sobre SEL: el material para padres es necesario por goberanza/consentimiento y por si hay una revelación en casa, pero **no debería ser el componente del que se espera el mayor cambio de conducta del niño**.

**[2026-09-17] Aporte profesional — Arianna y su mentora (psicóloga):** en la reunión de equipo, Arianna reportó que su mentora (licenciada en psicología) señaló que el agresor suele ser del **entorno familiar cercano** (padre, hermano, tío), no un desconocido — coincide con §2.5 (85–93 % de los casos son de alguien conocido). Esto tiene una consecuencia directa sobre el modelo de consentimiento que quedaba abierto en este apartado: **un permiso individual firmado por cada familia le da poder de veto a un agresor potencial** sobre el acceso de su propio hijo o hija a la herramienta — sin que nadie lo note, porque un permiso no firmado se ve igual que un padre ocupado que no llegó a leerlo. [HIPÓTESIS, con respaldo profesional] La opción por defecto debería ser **consentimiento institucional del colegio, con aviso previo a las familias y opción de opt-out**, no un permiso firmado caso por caso — es el mismo patrón "permiso implícito / opt-out" ya identificado en el punto anterior, ahora con una razón concreta de protección y no solo de fricción operativa. Sigue **[POR VALIDAR]** formalmente con asesoría legal y con la dirección de un colegio piloto antes de fijarlo como política.

**Aplicación:** el "Plan de continuidad" y el guion ya asumen consentimiento/aviso a las familias antes de cada ciclo (sección "Relaciones" del [Canvas B de mercado](canvas-b-mercado-negocio.md#3-mapa-de-segmentos-usuario-cliente-pagador-y-aliado)). Con el aporte de arriba, la dirección recomendada ya no es una hoja en blanco: **consentimiento institucional del colegio (aviso + opt-out)** en vez de permiso individual — pero sigue pendiente de validación legal y de un colegio piloto antes de convertirse en decisión formal.

---

## 10. Accesibilidad e inclusión, incluida la representación de discapacidad

- **Los niños con discapacidad intelectual y/o del desarrollo tienen un riesgo de abuso sexual entre 4 y 10 veces mayor** que sus pares sin discapacidad, en parte porque los adultos dudan en darles educación sexual/corporal, y porque dependen de otros para tareas íntimas (higiene, cuidado) sin tener siempre el vocabulario para distinguir un cuidado apropiado de uno que no lo es ([resumen de revisiones, tandfonline / PMC13109981](https://pmc.ncbi.nlm.nih.gov/articles/PMC13109981/); [cirinc.org fact sheet](https://cirinc.org/file_download/284a5f31-04d4-4b3d-97d9-84fa73862bea)) [EVIDENCIA débil, rango citado por fuentes secundarias].
  - [HIPÓTESIS fuerte] Esto cambia cómo debería leerse el personaje de Luna: no es solo "representación positiva" — es el personaje que, según la evidencia, más necesita que el contenido de seguridad corporal le llegue bien. La línea actual del guion ("mi silla es parte de mi espacio, pregúntame antes de empujarla") es necesaria pero no suficiente; el episodio de Luna debería cubrir el mismo contenido de límites corporales que los demás, no solo el límite sobre su silla.
- **Las intervenciones más efectivas para niños con discapacidad son estructuradas, breves, interactivas y con apoyo visual y familiar** (behavioral skills training: modelar, practicar, retroalimentar) en vez de charlas largas o generales ([Journal of Child & Adolescent Trauma](https://link.springer.com/article/10.1007/s40653-026-00962-8)) [EVIDENCIA débil].
- **La comunicación con niños con discapacidad debe combinar métodos** (palabras + gestos + imágenes), no depender de un solo canal ([Stop It Now](https://www.stopitnow.org/faq/child-sexual-abuse-prevention-tools-for-children-with-disabilities)) [EVIDENCIA débil]. Aplica directo al modo de accesibilidad ya declarado (texto + audio + control táctil).
- **Guías de accesibilidad para juegos** (WCAG 2.2 como referencia): subtítulos personalizables, contraste mínimo 4,5:1 para texto normal, tamaño de fuente escalable hasta 200 %, controles remapeables, reducción de carga cognitiva (interfaz simple, pocos elementos por pantalla) ([resumen WCAG 2.2 aplicado a juegos](https://www.abratabia.com/game-accessibility/accessibility-guidelines.php)) [EVIDENCIA débil]. El guion ya declara accesibilidad como principio transversal (0.8); esta lista da criterios concretos y verificables para cuando se implemente en PlayCanvas.
- **Representación en medios infantiles:** solo ~4 % de los libros infantiles tienen protagonistas con discapacidad ([Cooperative Children's Book Center, vía búsqueda](https://jonslifka.com/post/the-importance-of-disability-representation-in-childrens-media)) [EVIDENCIA débil]. Buenas prácticas: poner a la niña primero, no la discapacidad ("niña que usa silla de ruedas", no "niña en silla de ruedas" como identidad); incluir personas con discapacidad en la revisión del guion cuando exista un personaje con discapacidad ([Disability Belongs / Equal Entry](https://equalentry.com/disability-representation-media/)) [EVIDENCIA débil]. El guion ya evita convertir la silla en el "tema" del personaje — coincide con la práctica recomendada, pero **no hay todavía a nadie con experiencia vivida de discapacidad revisando el episodio de Luna** [POR VALIDAR — hueco de revisión, no solo de contenido].

---

## 11. Privacidad infantil: minimización, no diarios, no chat, no relatos

- **COPPA (EE. UU.) y GDPR-K (UE) coinciden en minimización de datos**: recolectar solo lo necesario, evitar identificadores únicos de dispositivo ligados al niño, preferir almacenamiento local, evitar publicidad dirigida y poner cualquier compra detrás de un "portón parental" ([resumen legal, thisisglance.com](https://thisisglance.com/learning-centre/what-privacy-laws-apply-when-my-app-collects-kids-data); [Pandectes](https://pandectes.io/blog/childrens-online-privacy-rules-around-coppa-gdpr-k-and-age-verification/)) [EVIDENCIA débil]. Ninguna de estas leyes aplica directamente en Bolivia, pero son la referencia de facto para cualquier producto digital para niños, y el UNICEF Venture Fund (fuente de financiamiento ya identificada en el Canvas B de negocio) exigiría cumplir un estándar equivalente.
- **El chat que conecta niños con desconocidos es explícitamente señalado como una característica de alto riesgo a evitar o evaluar con extremo cuidado** ([Countly, data privacy kids apps](https://countly.com/blog/data-privacy-kids-apps)) [EVIDENCIA débil]. El diseño ya excluido de chat (decisión ya cerrada en [no-hacer](../project/no-hacer.md)) coincide con esta evidencia.
- **Bolivia, Ley 1636 (2025):** prohíbe difundir imágenes o datos de menores víctimas de abuso sexual digital — refuerza, desde la ley boliviana, la misma dirección de diseño (ver §8.1).
- **Aplicación ya implementada:** el esquema `content/episodes/ep01-saludo.json` declara `"persistChoices": false` y `"persistFlagsOnly": true`, es decir, **no guarda las decisiones del niño, solo si completó el episodio.** Esto ya coincide con el principio de minimización — no hace falta ningún cambio de diseño en este punto, solo mantenerlo cuando se implementen los episodios 2–4.

---

## 12. Cómo medir aprendizaje sin convertirlo en diagnóstico ni examen de riesgo

- **Evaluación formativa** (recoger información sobre qué sabe y puede hacer el niño para ajustar la enseñanza) es distinta de **tamizaje** (screening, para decidir si alguien necesita revisión profesional) y de **diagnóstico** (evaluación clínica formal). El tamizaje **no debe usarse para etiquetar** a un niño ([NAEYC, Observing/Documenting/Assessing](https://www.naeyc.org/resources/position-statements/dap/assessing-development)) [EVIDENCIA].
- **El tamizaje universal en la escuela puede aumentar el estigma según el contexto y la frecuencia con que se aplique** ([Child and Adolescent Psychiatry and Mental Health, 2024](https://link.springer.com/article/10.1186/s13034-024-00854-5)) [EVIDENCIA débil]. Un instrumento de tamizaje debería aplicarse más de una vez y en un contexto que no señale a un niño frente al grupo, para reducir falsos positivos ([mismo campo, revisión general](https://www.naeyc.org/resources/pubs/books/excerpt-from-spotlight-observation-assessment)) [EVIDENCIA débil].
- **Aplicación directa:** el proyecto no debería medir "qué niño está en riesgo" (eso es tamizaje/diagnóstico, fuera del alcance declarado en [no-hacer](../project/no-hacer.md) y en [002](../decisions/002-eje-salud-mental-asi.md)). Lo medible sin cruzar esa línea:
  - **Finalización agregada:** cuántos niños/aulas completaron cada episodio (ya es lo único que persiste el JSON de ep01).
  - **Comprensión agregada, no individual:** por ejemplo, porcentaje de respuestas correctas en la pregunta de debrief de un aula completa, nunca por nombre de niño.
  - **Autopercepción del facilitador/docente**, no del niño: si el docente reporta que el grupo entendió el concepto.
  - [POR VALIDAR] Cómo se recoge esa comprensión agregada sin convertirla en una prueba con "aprobado/reprobado" — el guion ya evita puntajes y rankings (ver reglas de escritura), así que la métrica tendría que vivir **fuera** del juego (encuesta al docente, no al niño).

---

## 13. Cómo esta evidencia se conecta con los `[VALIDAR]` del guion (sin resolverlos)

Esta tabla no cierra ninguna decisión — cada fila sigue necesitando el visto bueno de un profesional en psicología infantil y protección (Arianna/Mauricio, según el plan). Lo que hace es indicar **qué evidencia pública toca cada pregunta abierta**, para que esa revisión parta de algo y no de cero.

| `[VALIDAR]` del guion | Evidencia relevante encontrada aquí | ¿Resuelto? |
|---|---|---|
| Don Beto insiste con un abrazo / no escucha a la primera, y luego se corrige | §2.5 (el riesgo real viene de adultos conocidos, no desconocidos); §6 (modelar reparación sin culpar) | **No.** Sigue siendo la decisión más delicada del documento; la evidencia explica *por qué* el enfoque de "adulto conocido que se equivoca y repara" tiene lógica preventiva, pero no dice si es seguro *mostrarlo* a niños de 6–8 sin riesgo de confundir o asustar. Requiere psicología clínica infantil, no solo literatura de prevención. |
| ¿Se nombran "partes privadas del cuerpo" con nombres correctos? | §2 general: los currículos evaluados (BST, SUBS) sí suelen incluir nombres anatómicos correctos como parte del contenido esperado | **No.** La evidencia muestra que es una práctica común en otros currículos, no que sea obligatoria ni que encaje con las normas culturales/familiares bolivianas. Sigue siendo decisión de alcance del equipo. |
| Duración y número de sesiones (3–4 declaradas en el plan vs. 4–5 recomendadas en la literatura) | §2.2, §2.3 | **Parcialmente.** El rango encaja si se cuentan los 4 episodios + cierre; falta decidir si cada episodio de 20–40 min equivale a una "sesión" en el sentido de los estudios citados, o si hace falta más de una sesión de aula por episodio. |
| "Mi círculo de 3" — ¿por qué 3? | §2.7 | **No es un hallazgo, es una convención de diseño.** Otros currículos usan 3–5; no hay evidencia de que 3 sea superior. Está bien mantenerlo si se declara como elección narrativa, no como cifra validada. |
| Ruta de ayuda para adultos (DNA, FELCV, líneas) | §8 completa | **Parcialmente.** Ya hay nombres y números concretos que antes no estaban en la wiki. Falta verificar vigencia local (Santa Cruz, 2026) antes de imprimir cualquier material. |
| Módulo de Luna y su silla | §10 | **No.** La evidencia justifica por qué el episodio de Luna importa tanto como los demás, pero no reemplaza una revisión por alguien con experiencia vivida de discapacidad. |
| `EP02_S04_L004` — "pueden ser de tu casa, de tu escuela o de tu comunidad" | §2.5 y actualización de §9 (Arianna y su mentora, 17-09-2026) | **Reforzado, no cerrado.** Ahora hay una razón concreta para no limitar el círculo de confianza a la familia: si el agresor es del entorno familiar, esa sería la única red que le fallaría al niño. Sigue sin la revisión clínica formal de si mostrarlo así a 6–8 años es seguro. |
| Modelo de consentimiento de familias | Actualización de §9 (Arianna y su mentora, 17-09-2026) | **Con dirección recomendada, no cerrado.** Consentimiento institucional del colegio (aviso + opt-out) en vez de permiso individual firmado — porque un permiso caso por caso le daría a un posible agresor del entorno cercano el poder de bloquear el acceso. Falta validación legal y de un colegio piloto. |

---

## 14. Datos que no se encontraron (no inventar)

- Tamaño de efecto exacto y verificado en el texto primario del metaanálisis 2024 de prevención de ASI (solo se tiene el resumen de buscador).
- Cifra boliviana de qué porcentaje de abusos son cometidos por alguien conocido vs. desconocido (la cifra 85–93 % es de EE. UU.).
- Modelo de consentimiento (opt-in/opt-out) que usan colegios de Santa Cruz para programas de prevención de este tipo.
- Confirmación de que las líneas 156 / 800-10-4100 / Familia Segura siguen activas en 2026 y si operan en Santa Cruz de la Sierra específicamente (la mayoría de las fuentes encontradas son de La Paz).
- Texto verificado línea por línea del Art. 159 de la Ley 548 (se citó desde un resumen, no desde el PDF oficial abierto y leído completo).
- Estado actual del anteproyecto de Ley de Protección de Datos Personales de Bolivia (si ya se convirtió en ley o sigue en anteproyecto a la fecha de lectura).
- Cualquier estudio de eficacia de un producto de prevención de ASI **en Bolivia** específicamente (no se encontró ninguno).

---

## 15. Bibliografía

**Prevención de ASI: eficacia y diseño de programas**

- Journal of Prevention (Springer, 2025). *School-Based Prevention Programmes for Sexual Abuse: A Meta-Analysis Study.* https://link.springer.com/article/10.1007/s10935-025-00885-4
- PMC (2022). *Effectiveness of school-based child sexual abuse intervention among school children in the new millennium era: Systematic review and meta-analyses.* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9355675/
- ScienceDirect (2024). *The effectiveness of school-based child sexual abuse prevention programmes among primary school-aged children: A systematic review.* https://www.sciencedirect.com/science/article/pii/S266637402400030X
- ScienceDirect (2024). *Effectiveness of school-based interventions on child sexual abuse knowledge in children with disabilities: Systematic review and meta-analysis.* https://www.sciencedirect.com/science/article/abs/pii/S0882596324002525
- Tandfonline. *Child Sexual Abuse Prevention Programs: A Meta-Analysis.* https://www.tandfonline.com/doi/abs/10.1207/S15374424jccp2902_11
- First Witness Child Advocacy Center. *The Truth About Stranger Danger.* https://firstwitness.org/news/the-truth-about-stranger-danger-debunking-common-myths-about-child-sexual-abuse/
- ScienceDaily (2012). *In child sexual abuse, strangers aren't the greatest danger, experts say.* https://www.sciencedaily.com/releases/2012/04/120413100854.htm
- Saprea. *Good Secrets & Bad Secrets.* https://saprea.org/blog/good-secrets-bad-secrets/
- KidSafe Foundation. *Circle of Safe Adults.* https://bekidsafe.org/wp-content/uploads/2024/07/Stay-KidSafe-Circle-of-Safe-Adults-Sample-Watermark.pdf
- Kids Hub Child Advocacy Center. *Building a Trusted Adult Network.* https://www.kidshubms.com/resource-library/building-a-trusted-adult-network

**Desarrollo infantil y aprendizaje socioemocional**

- CDC (archivo). *Unit 6: Child Development, Middle Childhood (9–11 years of age).* https://archive.cdc.gov/www_cdc_gov/healthyschools/bam/child-development/middle-childhood.htm
- Scholastic. *Cognitive Development in 8- to 10-Year-Olds.* https://www.scholastic.com/parents/family-life/creativity-and-critical-thinking/development-milestones/cognitive-development-8-10-year-olds.html
- PMC (2021). *Neuropsychological Development of Cool and Hot Executive Functions Between 6 and 12 Years of Age: A Systematic Review.* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8385409/
- Wiley / Child Development (2011). Durlak, J. A., et al. *The Impact of Enhancing Students' Social and Emotional Learning: A Meta-Analysis of School-Based Universal Interventions.* https://onlinelibrary.wiley.com/doi/10.1111/j.1467-8624.2010.01564.x
- Edutopia. *Promoting Students' Personal and Social Development Boosts Academic Outcomes* (guest blog, J. Durlak). https://www.edutopia.org/blog/social-emotional-learning-learning-boosts-academic-outcomes-joseph-durlak
- Journal of Youth and Adolescence (2024). *Effective Components of Social Emotional Learning Programs: A Meta-analysis.* https://link.springer.com/article/10.1007/s10964-024-01942-7
- ACF / OPRE. *Tip Sheet: Strategies for Debriefing in the Classroom.* https://acf.gov/sites/default/files/documents/opre/Debriefing-Tip-Sheet.pdf

**Diseño informado por trauma y lenguaje de respuesta**

- ArchitectureAU. *Trauma-informed architecture with children in mind.* https://architectureau.com/articles/trauma-informed-architecture-with-children-in-mind/
- Content Design London. *Using trauma informed principles in content design.* https://contentdesign.london/blog/using-trauma-informed-principles-with-content-design
- Prevent Child Abuse Utah (2025). *How To Respond When A Child Discloses Abuse.* https://pcautah.org/2025/03/03/how-to-respond-when-a-child-discloses-abuse/
- WOAR. *Responding to a Child's Disclosure.* https://www.woar.org/responding-to-a-childs-disclosure/
- Safe Kids Thrive. *How to Respond to a Child Disclosing Abuse.* https://safekidsthrive.org/prevention-topics/reporting/responding-to-direct-disclosures/
- Dawson Place. *What To Do When A Child Discloses Abuse.* https://www.dawsonplace.org/what-to-do-when-a-child-discloses-abuse/

**Marco de promoción/prevención**

- Frontiers in Psychiatry (2022). *Mental Health Prevention and Promotion — A Narrative Review.* https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.898009/full
- National Academies Press. *Reducing Risks for Mental Disorders: Frontiers for Preventive Intervention Research.* https://www.nationalacademies.org/read/2139/chapter/3

**Marco legal y ruta de protección en Bolivia**

- Coordinadora de la Mujer. *Ley N.º 548, Código Niña, Niño y Adolescente (texto).* https://www.coordinadoradelamujer.org.bo/observatorio/archivos/marco/l548_389.pdf
- CEMSE. *Cartilla: La ley N.º 548, Código Niña, Niño y Adolescente.* https://cemse.edu.bo/wp-content/uploads/cartillas/CARTILLA_LEY_548.pdf
- Educo Bolivia (2024). *Cartilla 2 — Rutas de actuación y denuncia de casos de violencia en unidades educativas.* https://bo.educo.org/wp-content/uploads/2024/08/CARTILLA-2-RUTAS-DE-ACTUACIO%CC%81N-Y-DENUNCIA-DE-CASOS-DE-VIOLENCIA-EN-UNIDADES-EDUCATIVAS.pdf
- Unifranz. *Denunciar la violencia infantil y adolescente: todo lo que necesitas saber.* https://unifranz.edu.bo/blog/denunciar-la-violencia-infantil-y-adolescente-todo-lo-que-necesitas-saber/
- Defensoría del Pueblo Bolivia. *Guía para la atención de niñas, niños y adolescentes víctimas de violencia sexual.* https://www.defensoria.gob.bo/uploads/files/guia-para-la-atencio%CC%81n-de-nin%CC%83as,-nin%CC%83os-y-adolescentes-vi%CC%81ctimas-de-violencia-sexual.pdf
- Fiscalía General del Estado / CMLV. *Protocolo interinstitucional.* https://www.cmlv-bolivia.org/documents/PROTOCOLO%20INTERINSTITUCIONAL-%20FISCALIA%20GENERAL.pdf
- eju.tv (09-2025). *Defensoría de la Niñez inaugura Cámara Gesell "amigable" para evitar revictimización de menores.* https://eju.tv/2025/09/defensoria-de-la-ninez-inaugura-camara-gesell-amigable-para-evitar-revictimizacion-de-menores/
- Gobierno Autónomo Municipal de La Paz. *PAIF de emergencia, línea 156.* https://lapaz.bo/paif-de-emergencia-linea-156/
- UNICEF Bolivia. *En Bolivia, una línea gratuita busca prevenir la violencia en tiempos de pandemia (Familia Segura).* https://www.unicef.org/bolivia/historias/en-bolivia-una-l%C3%ADnea-gratuita-busca-prevenir-la-violencia-en-tiempos-de-pandemia
- Lexivox. *Ley N.º 1636, 10 de septiembre de 2025.* https://www.lexivox.org/norms/BO-L-N1636.xhtml
- Ratio Legis (10-2025). *Ley de Protección de la Integridad Sexual de Niñas, Niños y Adolescentes en Entornos Digitales en Bolivia.* https://www.ratio-legis.com.bo/2025/10/06/ley-de-proteccion-de-la-integridad-sexual-de-ninas-ninos-y-adolescentes-en-entornos-digitales-en-bolivia/
- AGETIC. *Anteproyecto de Ley de Protección de Datos Personales (presentación 2024).* https://agetic.gob.bo/sites/default/files/2025-06/DATOS-PERSONALES-PRESENTACION-ANTEPROYECTO-DE-LEY-2024-firmado.pdf

**Ética de investigación con niños**

- UNICEF Innocenti (2013). *Ethical Research Involving Children — compendium.* https://www.unicef.org/innocenti/media/9181/file/Ethical-Research-Involving-Children-compendium-2013-EN.pdf.pdf
- UNICEF. *Procedure on Ethical Standards in Research, Evaluation, Data Collection and Analysis.* https://www.unicef.org/evaluation/media/1786/file/UNICEF%20Procedure%20on%20Ethical%20Standards%20in%20Research,%20Evaluation,%20Data%20Collection%20and%20Analysis.pdf
- NCBI Bookshelf. *Guideline 17: Research Involving Children and Adolescents — International Ethical Guidelines for Health-related Research Involving Humans.* https://www.ncbi.nlm.nih.gov/books/NBK614432/
- PMC (2023). *Parental Involvement in Programs to Prevent Child Sexual Abuse: A Systematic Review of Four Decades of Research.* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10666487/
- PMC (2023). *Implementation of a Universal School-Based Child Sexual Abuse Prevention Program: A Longitudinal Cohort Study.* https://pmc.ncbi.nlm.nih.gov/articles/PMC10668535/

**Discapacidad, accesibilidad e inclusión**

- PMC. *Reimagining Sexual Abuse Prevention for Adolescents with Intellectual Disabilities: A Scoping Review.* https://pmc.ncbi.nlm.nih.gov/articles/PMC13109981/
- Journal of Child & Adolescent Trauma (Springer). *A Family-Inclusive, Visually Supported Sexual Abuse Prevention Intervention for Children with Moderate Intellectual Disabilities.* https://link.springer.com/article/10.1007/s40653-026-00962-8
- CIR Inc. *Children with Disabilities & Sexual Abuse Fact Sheet.* https://cirinc.org/file_download/284a5f31-04d4-4b3d-97d9-84fa73862bea
- Stop It Now. *Child Sexual Abuse Prevention Tools for Children with Disabilities.* https://www.stopitnow.org/faq/child-sexual-abuse-prevention-tools-for-children-with-disabilities
- Equal Entry. *The Dos and Don'ts of Disability Representation in Media.* https://equalentry.com/disability-representation-media/
- Abratabia. *Game Accessibility Guidelines and Standards: WCAG, XAGs, and Legal Requirements.* https://www.abratabia.com/game-accessibility/accessibility-guidelines.php

**Privacidad infantil y datos**

- Pandectes. *Understanding Children's Online Privacy Rules Around COPPA, GDPR-K, and Age Verification.* https://pandectes.io/blog/childrens-online-privacy-rules-around-coppa-gdpr-k-and-age-verification/
- Countly. *Everything to Know about Data Privacy for Kids Apps.* https://countly.com/blog/data-privacy-kids-apps
- This Is Glance. *What Privacy Laws Apply When My App Collects Kids' Data?* https://thisisglance.com/learning-centre/what-privacy-laws-apply-when-my-app-collects-kids-data

**Medición sin diagnóstico**

- NAEYC. *DAP: Observing, Documenting, and Assessing Children's Development and Learning.* https://www.naeyc.org/resources/position-statements/dap/assessing-development
- Child and Adolescent Psychiatry and Mental Health (2024). *The impact of universal mental health screening on stigma in primary schools.* https://link.springer.com/article/10.1186/s13034-024-00854-5

## See also

- [Plan de continuidad — historia, diseño y modelo de negocio](../project/plan-continuidad-historia-negocio.md)
- [Guiones — La Isla de los Acuerdos](../narrative/isla-de-los-acuerdos-guiones.md)
- [Canvas B — mercado y modelo de negocio](canvas-b-mercado-negocio.md)
- [Salud mental](../project/salud-mental.md)
- [Problema](../project/problema.md)
- [No hacer](../project/no-hacer.md)
- [002 — Eje salud mental, prevención ASI](../decisions/002-eje-salud-mental-asi.md)
