---
title: Canvas B — investigación de mercado y modelo de negocio
type: research
updated: 2026-09-17
status: draft
---

# Canvas B — investigación de mercado y modelo de negocio

Producto analizado: **La Isla de los Acuerdos**, experiencia web 3D (PlayCanvas, navegador/teléfono) con minijuegos de **prevención primaria** de abuso sexual infantil (ASI) para primaria (6–12 años), usada en aula con docente o facilitador, más material para familias y escuela. No diagnostica, no tiene chat y no guarda relatos de menores.

Contexto interno: [Plan de continuidad, línea D](../project/plan-continuidad-historia-negocio.md) · [Canvas B (plantilla)](../project/canvas-b.md) · [Canvas YAIS-RED (versión hackatón, Roblox)](../project/canvas-yais-red.md) · [Triple impacto](../project/triple-impacto.md) · [Propuesta de valor](../project/propuesta-valor.md) · [No hacer](../project/no-hacer.md).

**Etiquetas usadas**

- **[EVIDENCIA]**: dato con fuente pública citada.
- **[HIPÓTESIS]**: supuesto de diseño o de negocio que todavía no se probó.
- **[POR VALIDAR]**: pregunta concreta que hay que responder con entrevistas o con un piloto.
- **(estimación)**: número calculado por el equipo, no publicado por nadie.

**Tipo de cambio usado:** Bs 9,83 por USD, tipo de cambio oficial del BCB al 17-09-2026 ([BCB](https://www.bcb.gob.bo/librerias/indicadores/otras/ultimo.php)). El mercado paralelo o USDT rondaba Bs 10,9–11,9 en la misma semana ([La Patria](https://lapatria.bo/tipo-de-cambio-bolivia/); [dolarbolivia.net](https://dolarbolivia.net/)). Los precios en USD pagados desde Bolivia pueden costar entre 10 % y 20 % más de lo que dice la conversión oficial.

> Este documento se enfoca en mercado y modelo de negocio. La evidencia psicológica y el marco legal los trabajan otros análisis y aquí solo se mencionan cuando tocan el negocio.

---

## 1. Resumen ejecutivo

1. **El problema tiene tamaño y está presupuestado de forma dispersa, pero nadie tiene una partida clara para comprar "juegos de prevención".** En 2025 la Fiscalía registró 10.816 denuncias por delitos contra la libertad sexual. De ellas, 2.313 fueron por violación de infante, niña, niño o adolescente ([Correo del Sur, 10-08-2026](https://correodelsur.com/seguridad/20260810/bolivia-registra-965-casos-de-violencia-sexual-contra-ninos.html)). Santa Cruz concentra la mayor cantidad: 499 de 1.499 denuncias entre enero y agosto de 2025 ([Opinión, 16-09-2025](https://www.opinion.com.bo/articulo/policial/bolivia-registra-mas-180-violaciones-infantiles-cada-mes/20250916000005980003.html)). Quienes tienen mandato y algo de dinero (municipios y DNA, ONG, cooperación, RSE) lo gastan hoy en talleres presenciales, campañas y fortalecimiento de redes, no en software.
2. **Mercado accesible inicial.** En 2024 el departamento de Santa Cruz tenía **405,7 mil estudiantes de primaria**: 360,4 mil en dependencia pública y 45,3 mil en privada. Tenía además **3.097 unidades educativas** de todos los niveles ([INE, Anuario 2024, cuadros 3.02.02.01 y 3.02.02.06](https://anuario.ine.gob.bo/2024/paginas/cap03.html)). En todo el país había 1,37 millones de estudiantes de primaria.
3. **Los referentes internacionales se sostienen casi siempre porque alguien distinto del usuario paga.** Hay dos grupos:
   - **Gratis para la escuela, financiado por Estado o donantes:** NSPCC *Speak out Stay safe*, MBF Child Safety Matters y Safer Smarter Schools en Florida, AMAZE, *Escuadrón de la Protección* de Save the Children Perú.
   - **Licencia o taller pagado:** Second Step (Committee for Children), Kidpower y Darkness to Light.

   El único referente grande que vive sobre todo de ventas es Committee for Children, con US$ 37,7 M en ingresos por servicios en 2023 ([InfluenceWatch](https://www.influencewatch.org/non-profit/committee-for-children/)). Aun así gastó más de lo que ingresó en 2023–2025.
4. **Referencia de costo real.** Un análisis de costos de *Safe Touches* (EE.UU., 14.235 estudiantes) calculó **US$ 43 por estudiante y US$ 859 por aula**. El 72 % del costo era personal ([Shipe et al., 2022, *Prevention Science*](https://pmc.ncbi.nlm.nih.gov/articles/PMC11318369/)). La tecnología no elimina ese costo, pero puede bajar la parte del facilitador externo.
5. **Recomendación (HIPÓTESIS, pendiente de validar):** un **modelo híbrido con subsidio cruzado**:
   - licencia anual por aula para colegios privados de Santa Cruz, con capacitación incluida;
   - contratos de programa con ONG que ya trabajan en escuelas públicas (CEMSE/ChildFund, Visión Mundial, Save the Children, Educo);
   - acceso gratuito para escuelas fiscales cubierto por RSE o subvenciones;
   - subvenciones (UNICEF Venture Fund, Global Innovation Fund, concursos locales) **solo** para desarrollo y evaluación, no para operar.

   **No hay ningún pagador confirmado.**
6. **Contacto cercano más prometedor.** CEMSE, ChildFund Bolivia, Esperanza Bolivia y Safe Online ejecutan en Santa Cruz (2026–2027) el proyecto *Escuelas Seguras y Comunidades Protectoras para la Niñez*, junto con el Gobierno Municipal ([CEMSE, 29-06-2026](https://cemse.edu.bo/santa-cruz-fortalece-la-prevencion-de-la-violencia-digital-con-el-proyecto-escuelas-seguras-y-comunidades-protectoras-para-la-ninez/)). CEMSE/ChildFund y Visión Mundial Youth Ready también co-convocan HACKBIZ ([hackbiz-2026](../project/hackbiz-2026.md)). Es la mejor puerta para un piloto con aliado.
7. **Ambiental.** Las métricas propuestas no dicen "paperless". Son tres:
   - impresos evitados contra una línea base contada;
   - peso de descarga por sesión convertido a energía y CO₂e con el Sustainable Web Design Model y la intensidad de la red boliviana (341 gCO₂e/kWh, [Low-Carbon Power](https://lowcarbonpower.org/region/Bolivia));
   - dispositivos nuevos comprados, con meta de cero.

   Se explican sus límites en la sección 7.

---

## 2. Análisis de mercado

### 2.1 Bolivia

**Magnitud del problema (contexto de demanda)**

| Dato | Cifra | Fuente y año |
| --- | --- | --- |
| Denuncias por delitos contra la libertad sexual | 10.816 | Ministerio Público y Defensoría, gestión 2025 ([Correo del Sur, 2026](https://correodelsur.com/seguridad/20260810/bolivia-registra-965-casos-de-violencia-sexual-contra-ninos.html)) |
| Denuncias por violación de infante, niña, niño o adolescente | 2.313 | Mismo informe, 2025 |
| Promedio mensual de casos de violación contra NNA | ~187 | [Opinión, 2025](https://www.opinion.com.bo/articulo/policial/bolivia-registra-mas-180-violaciones-infantiles-cada-mes/20250916000005980003.html) |
| Denuncias ene–ago 2025 por departamento | Santa Cruz 499; Cochabamba 278; La Paz 228 (total 1.499) | Opinión, 2025 |
| Denuncias de violación infantil en el 1.er semestre 2026 | 965 | [La Razón, 09-08-2026](https://larazon.bo/sociedad/2026/08/09/bolivia-suma-965-denuncias-por-violencia-sexual-infantil-en-el-primer-trimestre/) |

Estas cifras son **denuncias**, no prevalencia. El subregistro es probable. La Defensoría del Pueblo señala que los hechos suelen ocurrir en entornos familiares o cercanos (Correo del Sur, 2026). Eso respalda un enfoque en red de adultos de confianza, no solo en "extraños".

**Tamaño del sistema educativo** [EVIDENCIA]

| Indicador (2024) | Bolivia | Depto. Santa Cruz |
| --- | --- | --- |
| Estudiantes de educación regular | 2.940,5 mil | 831,3 mil |
| Estudiantes de primaria | 1.372,8 mil | 405,7 mil |
| — dependencia pública | 1.235,0 mil | 360,4 mil |
| — dependencia privada | 137,8 mil | 45,3 mil |
| Unidades educativas, todos los niveles | 16.099 | 3.097 |
| Locales educativos | 14.407 | 2.535 |

Fuente: INE, Anuario Estadístico 2024, cuadros 3.02.02.01 y 3.02.02.06, con datos del SIE del Ministerio de Educación ([anuario.ine.gob.bo](https://anuario.ine.gob.bo/2024/paginas/cap03.html)).
[POR VALIDAR] El INE agrupa como "público" lo fiscal y, probablemente, lo de convenio. No se encontró el desglose de unidades educativas privadas y de convenio en Santa Cruz; hay que pedirlo a la Dirección Departamental de Educación (DDE) o consultarlo en [reportes.sie.gob.bo](https://reportes.sie.gob.bo/).

**Tamaño direccionable (estimación, no dato)**

- Aulas de primaria privadas en Santa Cruz: 45.300 ÷ ~25 estudiantes por aula ≈ **1.800 aulas** (estimación; el tamaño de aula es un supuesto).
- Aulas de primaria públicas en Santa Cruz: 360.400 ÷ ~28 ≈ **12.900 aulas** (estimación).
- Si solo se consideran 4.º a 6.º de primaria (edades de 9 a 12, donde el producto es más fácil de facilitar), el número es cerca de la mitad (estimación).

**Capacidad de pago de colegios privados** [EVIDENCIA, fuente débil]

- Las pensiones mensuales de primaria en Santa Cruz de la Sierra van de **Bs 500 a Bs 4.000** (2026), según el agregador [Skooly](https://skooly.io/en/bo/institutions/city/santa-cruz/costos). No es fuente oficial ni muestra de cuántos colegios; sirve solo como orden de magnitud.
- El Ministerio de Educación **congeló las pensiones** durante la inscripción 2026 con la RM 0001/2026. ANDECOP pide que cada colegio analice su caso ([El Deber, 2026](https://eldeber.com.bo/pais/incremento-pensiones-andecop-dice-cada-colegio-debe-analizar-costo-educativo_1767974347)). **Implicación:** un colegio no puede trasladar fácilmente a los padres un costo nuevo, así que YAIS-RED compite con el presupuesto operativo ya existente [HIPÓTESIS].

**Conectividad y dispositivos (condición de uso)**

- El programa *Aula Conectada* anunció más de 5.000 antenas Starlink para unidades educativas rurales y periurbanas, empezando por La Paz, Cochabamba y Santa Cruz ([La Razón, 06-08-2026](https://larazon.bo/sociedad/2026/08/06/paz-anuncia-el-programa-aula-conectada-con-la-instalacion-de-mas-de-5-000-antenas-de-starlink/)). Un primer lote de 1.000 antenas llega a 86 municipios ([El Diario, 20-08-2026](https://www.eldiario.net/portal/2026/08/20/instalaran-1-000-antenas-starlink-en-colegios-de-86-municipios/)).
- [POR VALIDAR] No se encontró un porcentaje oficial y verificable de unidades educativas con internet y laboratorio operativo en Santa Cruz. La experiencia web 3D **debe funcionar con un solo dispositivo proyectado** (modo aula) y con poco ancho de banda.

**Presupuesto público de protección**

- Las DNA reciben en promedio apenas **0,48 %** del presupuesto municipal y en general no superan el 1 % ([UNICEF Bolivia, *La niñez y la adolescencia en el ámbito departamental y municipal*](https://www.unicef.org/bolivia/media/3181/file/La%20ni%C3%B1ez%20y%20la%20adolescencia%20en%20el%20%C3%A1mbito%20departamental%20y%20municipal%20en%20Bolivia.pdf); año del dato no verificado).
- El presupuesto 2026 del GAM de Santa Cruz de la Sierra es de **Bs 4.790 millones**, con 30 % para sueldos ([El Deber, 08-09-2025](https://eldeber.com.bo/santa-cruz/el-presupuesto-municipal-alcanza-4790-millones-y-el-30-va-al-pago-de-sueldos_529308/)). Otra nota menciona un POA de Bs 4.508 millones ([Asuntos Centrales](https://asuntoscentrales.com/alcaldia-crucena-aprueba-un-poa-de-bs-4-508-millones-y-concentra-recursos-en-salud-y-educacion/)).
- [POR VALIDAR] No se encontró la partida específica de la DNA ni de prevención de violencia en el POA 2026. Hay que pedirla a la Secretaría Municipal de Desarrollo Humano o revisar la [Rendición Pública de Cuentas Inicial 2026](https://www.gmsantacruz.gob.bo/Publicaciones-Municipales/RENDICION_PUBLICA_%20DE_CUENTAS_INICIAL_2026.pdf).
- **Ciclo:** el POA del año siguiente se arma entre agosto y septiembre del año anterior (el de 2026 se aprobó en septiembre de 2025, según El Deber). Para vender a un municipio en 2027 había que estar en la conversación **ahora** [HIPÓTESIS sobre el ciclo; POR VALIDAR con la Secretaría].

**Actores con presencia y programas afines en Bolivia** [EVIDENCIA]

| Actor | Qué hace (relevante) | Fuente |
| --- | --- | --- |
| CEMSE + ChildFund Bolivia + Esperanza Bolivia (apoyo Safe Online) | *Escuelas Seguras y Comunidades Protectoras para la Niñez*, Santa Cruz 2026–2027, con el GAM, FELCV y Defensoría | [CEMSE, 2026](https://cemse.edu.bo/santa-cruz-fortalece-la-prevencion-de-la-violencia-digital-con-el-proyecto-escuelas-seguras-y-comunidades-protectoras-para-la-ninez/) |
| Visión Mundial Bolivia | 50 gobiernos municipales, más de 1.300 comunidades, más de 100.000 NNA directos, 8 departamentos; en 2024, 124.826 personas en espacios protectores y educativos | [worldvision.bo](https://www.worldvision.bo/) |
| Save the Children Bolivia | Incidencia en la ley de matrimonio infantil y en la ley de protección de la integridad sexual de NNA en entornos digitales (2025); protocolo interinstitucional de Santa Cruz | [Save the Children Bolivia, 2025](https://www.savethechildren.org.bo/save-the-children-bolivia-principales-logros-y-avances-estrategicos-en-2025/) |
| UNICEF Bolivia + Educo | *Escuelas constructoras de paz y bienestar*: 118 unidades educativas en 13 municipios (Cochabamba, Pando, La Paz, Santa Cruz). El programa madre *Escuelas Amigas y Seguras* lo financian Canadá, KOICA y Suecia | [UNICEF Bolivia](https://www.unicef.org/bolivia/comunicados-prensa/unicef-y-educo-bolivia-firman-un-acuerdo-para-prevenir-la-violencia-y-promover) (año no verificado) |
| Educo Bolivia | 86 escuelas; 16.921 NNA y 10.526 adultos en 7 municipios | [Educo](https://www.educo.org/donde-actuamos/america/bolivia) (año no verificado) |
| IJM Bolivia | Más de 1.000 docentes capacitados para identificar y reportar, con alcance a más de 25.000 estudiantes; proyecto PROBOS transferido al Ministerio de Justicia | [IJM](https://www.ijm.org/locations/bolivia) |
| Aldeas Infantiles SOS Bolivia | Más de 23.000 NNA; reconocimiento del Pacto Global en diciembre de 2025 | [Aldeas SOS Bolivia](https://www.aldeasinfantiles.org.bo/noticias/2025/diciembre/pacto-global-aldeas-infantiles-sos) |
| Plan International Bolivia | Proyecto *Conocer, prevenir y actuar* (derechos sexuales y protección) | [Plan Bolivia](https://plan-international.org/bolivia/estrategia/proyecto-conocer-prevenir-y-actuar/) (detalle no accesible) |
| Tigo Bolivia (RSE) | *Conéctate Segur@* 2025: 32.000 personas (26.000 estudiantes, 4.500 padres, 1.500 docentes), 42 unidades educativas, talleres gratuitos | [El Deber, 2025](https://eldeber.com.bo/economia/2025-112-000-personas-fortalecieron-habilidades-digitales-programas-tigo-bolivia_1765849416) |
| Fundación VIVA | Internet gratis a 316 unidades educativas públicas (acumulado a 2023) | [InfoRSE, 2023](https://www.inforse.com.bo/2023/08/31/fundacion-viva-cumple-15-anos-impactando-positivamente-en-la-sociedad-boliviana/) |
| Entel | Se suma a la Teletón UNICEF Bolivia 2026 | [InfoRSE, 2026](https://www.inforse.com.bo/2026/08/21/tiempo-de-actuar-entel-se-suma-a-la-teleton-unicef-bolivia/) |
| CBN | RSE en educación, salud y deporte; financia una unidad educativa hace 42 años | [CBN](https://www.cbn.bo/responsabilidad-social/comunidad/) |

**Cooperación bilateral y multilateral**

- **Unión Europea:** hace convocatorias locales para organizaciones de la sociedad civil (OSC). La última encontrada cerró el 27-01-2025 ([EEAS](https://www.eeas.europa.eu/delegations/bolivia/convocatoria-local-%E2%80%93-bolivia-europeaid182461ddact-programa-tematico-organizaciones-de-sociedad-civil_es)). Exige una organización con personería y trayectoria, así que YAIS-RED solo podría entrar **como socio** de una ONG [HIPÓTESIS].
- **KOICA:** financió con UNFPA un proyecto de derechos sexuales y reproductivos de adolescentes que cerró el 30-07-2025 ([UNFPA Bolivia](https://bolivia.unfpa.org/es/news/unfpa-y-koica-culminan-proyecto-destacando-el-rol-de-adolescentes-en-el-ejercicio-de-sus)). También co-financia *Escuelas Amigas y Seguras* de UNICEF.
- **AECID:** tiene una línea contra la trata y la explotación sexual de mujeres, niñas y niños ([AECID Bolivia](https://www.aecid.es/aecid-en-bolivia)).
- **JICA y GIZ:** no se encontraron programas vigentes de protección infantil en Bolivia [POR VALIDAR].
- **EE.UU./USAID:** Bolivia expulsó a USAID en 2013 ([Al Jazeera, 2013](https://www.aljazeera.com/news/2013/5/2/bolivia-president-expels-us-aid-agency)). Las relaciones se restablecieron a nivel de embajador en noviembre de 2025 y en 2026 hubo cooperación militar y agrícola ([Infobae, 2026](https://www.infobae.com/america/america-latina/2026/05/01/bolivia-y-estados-unidos-reanudaron-la-cooperacion-militar-tras-20-anos-de-ruptura/)). No se encontró cooperación de EE.UU. en niñez en Bolivia, y en 2025 USAID fue reestructurada dentro del gobierno de EE.UU. [POR VERIFICAR con fuente oficial]. **No hay que contar con esta fuente.**
- **Educo, convocatoria FULLIVING-DAPHNE:** co-financiada por la UE, pero **solo para España** ([Educo](https://infancialibredeviolencia.educo.org/solicita-financiacion/)). No aplica.

**Fondos y concursos para startups sociales**

| Fuente | Monto / forma | Encaje | Fuente |
| --- | --- | --- | --- |
| HACKBIZ 2026 | Bs 12.000 / 10.000 / 8.000 de capital semilla, en especie | Alto, inmediato | [wiki hackbiz-2026](../project/hackbiz-2026.md) |
| IncubaUnión Tecnológico | Bs 48.000 por startup (5 ganadoras en 2025) | Medio (bootcamp tech) | [Visión 360, 2025](https://www.vision360.bo/noticias/2025/07/09/28130-cinco-startups-ganan-capital-semilla-en-el-primer-torneo-nacional-de-incuba-union-tecnologico) |
| Premios Verdes 2026 | Reconocimiento; exige resultados verificables | Bajo (lo ambiental es débil) | [Bolivia Emprende](https://boliviaemprende.com/concursos/premios-verdes-busca-proyectos-con-impacto-real) |
| UNICEF Venture Fund | Hasta US$ 100.000 sin ceder capital; exige empresa con fines de lucro registrada en un país programa, prototipo funcionando y **código abierto** | Alto si se acepta el código abierto y se constituye empresa | [UNICEF Innovation](https://www.unicef.org/innovation/open-call-applications); [unicefventurefund.org](https://www.unicefventurefund.org/funding-support) |
| Global Innovation Fund | Piloto hasta US$ 230.000; prueba y transición hasta US$ 2,3 M | Medio-bajo hoy (requiere capacidad institucional) | [GIF](https://www.globalinnovation.fund/funding-stages) |
| Safe Online (End Violence) | Más de US$ 100 M en más de 180 proyectos; en 2026, US$ 8 M para 30 proyectos centrados en IA | Bajo directo (su foco es lo online y la IA); alto como aliado vía CEMSE/ChildFund | [Safe Online, 2026](https://safeonline.global/new-safe-online-grantees-2026/) |
| BID Lab | Capital de US$ 200.000 a 5 M para startups con tracción | No aplica hoy | [BID Lab](https://www.iadb.org/en/how-we-can-work-together/calls-proposals) |
| Fondo Emprender | Programa colombiano (SENA) | No aplica a Bolivia | — |
| HolonIQ | Firma de inteligencia de mercado; no se encontró convocatoria de financiamiento aplicable | No aplica | — |

### 2.2 Latinoamérica

| Iniciativa | País | Modelo | Fuente |
| --- | --- | --- | --- |
| *Escuadrón de la Protección* (Save the Children Perú) | Perú | App (Play Store) y web con 4 minijuegos para niños de 7 a 12 años, incluidos "Mis personas de confianza" y "Me conozco, me empodero". **Gratis**, financiada por USAID/BHA (2021) | [Save the Children Perú](https://www.savethechildren.org.pe/noticias/presentamos-escuadron-de-la-proteccion-el-videojuego-que-fomenta-la-integracion-cultural-y-previene-el-abuso-infantil/) |
| NoABS | Colombia, Perú, Argentina, Chile | Videojuego para 6–12 años diseñado por psicólogos y psiquiatras de U. de Flores, CECAR y U. César Vallejo. Origen académico; no se encontró precio ni licencia | [Agencia UNQ](https://agencia.unq.edu.ar/?p=10446); [SEDICI-UNLP](http://sedici.unlp.edu.ar/handle/10915/185424) |
| Fundación para la Confianza | Chile | Programa *La Confianza en tu Sala*: intervención en todo el sistema escolar. ONG financiada por donaciones y alianzas; creó con la UC el Centro CUIDA | [paralaconfianza.org](https://www.paralaconfianza.org/); [UC](https://www.uc.cl/noticias/uc-y-fundacion-para-la-confianza-crean-el-centro-cuida-para-prevenir-el-abuso-y-la-adversidad-temprana/) |
| Childhood Brasil | Brasil | Parte de World Childhood Foundation. 19 programas propios y apoyo a 66 proyectos; más de 1,3 M de personas beneficiadas. Serie *Que Corpo É Esse?* con UNICEF y Canal Futura | [childhood.org.br](https://www.childhood.org.br/) |
| Committee for Children en México | México | Subvención 2024 para llegar a más de 1.500 educadores y más de 40.000 estudiantes | [InfluenceWatch](https://www.influencewatch.org/non-profit/committee-for-children/) |
| *Elena y Toñito* | Ecuador | App móvil adaptada de un juego de mesa | [El Universo](https://www.eluniverso.com/larevista/orientacion/el-juego-de-elena-y-tonito-aplicacion-para-moviles-que-busca-prevenir-el-abuso-sexual-a-ninos-nota/) |
| UNICEF *Darlo Todo Cuesta* | Rep. Dominicana | Juego de ciudadanía y seguridad digital | [UNICEF RD](https://www.unicef.org/dominicanrepublic/darlotodocuesta) |

**Lectura:** en LatAm casi todo lo lúdico sobre ASI es **gratuito y financiado por un donante o por la academia**. Eso le pone techo de precio al software solo. Lo que sí se paga es **implementación, capacitación y programa**, y eso lo pagan ONG y cooperación [HIPÓTESIS basada en el patrón observado].
No se encontró una edtech boliviana de prevención de ASI con modelo comercial [POR VALIDAR con búsqueda local y entrevistas].

### 2.3 Mundo

- **Tamaño del mercado de aprendizaje socioemocional (SEL).** Las estimaciones 2025 varían mucho según la metodología: US$ 4,46 mil millones a US$ 9,25 mil millones. MarketsandMarkets proyecta US$ 4,93 mil millones en 2025 y US$ 18,46 mil millones en 2032 ([PR Newswire](https://www.prnewswire.com/news-releases/social-and-emotional-learning-market-worth-18-46-billion-by-2032--report-by-marketsandmarkets-302861625.html)). Son informes comerciales con fuerte peso de EE.UU. **No sirven para dimensionar Bolivia.**
- **Committee for Children (Second Step).** Ingresos de US$ 38,7 M (2023), 37,4 M (2024) y 35,8 M (2025), con gastos mayores cada año ([InfluenceWatch](https://www.influencewatch.org/non-profit/committee-for-children/)). Hasta el líder del mercado pagado tiene márgenes frágiles.
- **Protección infantil con financiamiento público.** MBF y Lauren's Kids son gratis para escuelas públicas de Florida gracias a asignaciones estatales. A Lauren's Kids la prensa la cuestionó por conflicto de interés en esas asignaciones ([Florida Bulldog](https://www.floridabulldog.org/2019/05/legislative-sprinkle-extra-half-million-dollars-to-state-senators-nonprofit/)). Lección de riesgo: **la dependencia de una sola fuente política es frágil y afecta la reputación.**

### 2.4 Tabla de competidores y referentes

| Referente | Qué es | Modelo de ingresos | Precio público | Quién paga | Alcance | Financiamiento |
| --- | --- | --- | --- | --- | --- | --- |
| **Second Step** (Committee for Children, EE.UU.) | Currículo SEL K-12 con unidad de protección infantil | Licencia por escuela según matrícula y duración (1, 3 o 5 años) | Paquete Elementary K-5 **US$ 2.359** (el resultado de búsqueda lo fecha en 2023; tienda con acceso bloqueado, **no verificado para 2026**). Child Protection Unit K-5 **US$ 1.319** (resultado de búsqueda, no verificado) | Distrito o escuela | La organización dice más de 45.000 escuelas y 26,9 M de niños por año (dato de búsqueda, no verificado) | Venta de programas (US$ 37,7 M en 2023) + donaciones |
| **Safer, Smarter Schools** (Lauren's Kids) | Currículo de seguridad personal Pre-K a 12 | Gratis en Florida; apoyo estatal | Gratis para escuelas públicas y chárter de Florida | Legislatura de Florida | Dice más de 1 M de niños por año | US$ 19,69 M en subvenciones estatales desde 2011 (Florida Bulldog) |
| **MBF Child Safety Matters** (Monique Burr Foundation) | Currículo K-5 sobre abuso, bullying y peligros digitales | Gratis en Florida; venta "a costo razonable" fuera de Florida, con 1 año de actualizaciones y capacitación | Sin precio público fuera de Florida | Fiscalía General de Florida / escuelas fuera de Florida | Más de 11 M de estudiantes, 39 estados, 6 países | Asignación de la Fiscalía de Florida + ventas |
| **Kidpower / Safetypowers** | Talleres de seguridad personal presenciales y en línea | Tarifa por taller (sin subsidio del gobierno) | Taller con aula **desde US$ 950**; desarrollo profesional **desde US$ 1.900**; formación de practicantes US$ 3.300–4.300 | Escuela, familia, becas | Internacional | Tarifas + donaciones + subvenciones para escuelas con pocos recursos ([kidpower.org/schools](https://www.kidpower.org/schools/)) |
| **Darkness to Light – Stewards of Children** | Capacitación para **adultos** | Por participante, con facilitadores autorizados | **US$ 10 por persona** (más honorarios que el facilitador puede cobrar) | Organizaciones, adultos, subvenciones | EE.UU. e internacional | Tarifas + donaciones ([d2l.org](https://www.d2l.org/training-catalog/stewards-of-children/)) |
| **NSPCC *Speak out Stay safe* + PANTS** (Reino Unido) | Asambleas virtuales y presenciales + talleres para 5–11 años | Gratis | Gratis | Donantes de NSPCC | 4,7 M de niños; 90 % de las primarias del Reino Unido | Donaciones ([NSPCC](https://learning.nspcc.org.uk/services/speak-out-stay-safe)) |
| **AMAZE** (EE.UU.) | Videos animados de educación sexual para niños y adolescentes | Gratis | Gratis | Fundaciones | Global | WestWind Foundation, IPPF y otras ([AMAZE](https://amaze.org/what-is-amaze/)) |
| **Orbit** (U. Sunshine Coast, Australia) | Juego serio de prevención de ASI | Gratis, académico | Gratis | Universidad y financiadores de investigación | — | Evaluación publicada en *Child Abuse & Neglect* 2020 ([PubMed](https://pubmed.ncbi.nlm.nih.gov/32535338/)) |
| **Safe Touches** (EE.UU.) | Taller en aula con facilitador externo (2.º grado) | Programa financiado | Costo analizado: **US$ 43 por estudiante, US$ 859 por aula** | Subvenciones | 14.235 estudiantes, 718 aulas | [Shipe et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC11318369/) |
| **Escuadrón de la Protección** (Save the Children Perú) | App/web con 4 minijuegos para 7–12 años | Gratis | Gratis | USAID/BHA | Niñez peruana y venezolana | Donante bilateral |
| **NoABS** | Videojuego para 6–12 años | Académico | Sin dato | Universidades | CO, PE, AR, CL | Académico |
| **Childhood Brasil** | Programas y financiamiento a proyectos | ONG donante e implementadora | — | Donantes corporativos y privados | Más de 1,3 M de personas | Donaciones |
| **Fundación para la Confianza** (Chile) | Programas escolares, ayuda y formación | ONG | Sin dato público | Donantes y alianzas | Chile | Donaciones |
| **Fundación ANAR** (España) | Línea de ayuda + prevención en colegios (*Buentrato*) | ONG | Sin dato | Donantes y convenios | España | Donaciones (sello Fundación Lealtad) |
| **Tigo *Conéctate Segur@*** (Bolivia) | Talleres gratuitos de seguridad digital | RSE | Gratis | Tigo | 32.000 personas y 42 unidades educativas (2025) | Presupuesto de RSE |
| **Protect Young Eyes / Safe Kids** | Educación sobre seguridad digital para familias y escuelas (EE.UU.) | Charlas y cursos pagados | No se verificaron precios en esta investigación | Escuelas y familias | EE.UU. | [POR VALIDAR] |

**Posicionamiento posible [HIPÓTESIS]:** YAIS-RED no compite contra Second Step, que en Bolivia no está en español local, cuesta en USD y no está contextualizado. Compite contra dos cosas: **la inacción** y los **talleres gratuitos de ONG y RSE**. La diferencia tendría que ser:

1. práctica jugable y repetible, en lugar de una charla única;
2. contexto boliviano (lenguaje, DNA, rutas de derivación locales);
3. un kit que el docente puede repetir sin un tallerista externo;
4. diseño sin datos de menores.

---

## 3. Mapa de segmentos: usuario, cliente, pagador y aliado

| Rol | Quién | Qué necesita | Estado |
| --- | --- | --- | --- |
| **Beneficiario / usuario final** | Niñas y niños de 6 a 12 años en aula | Practicar límites y red de confianza sin miedo ni revictimización | Nunca paga ni entrega datos |
| **Usuario operador** | Docente de primaria, orientador o psicólogo escolar, facilitador de ONG | Guion de 20–40 min, debrief, qué hacer si alguien revela algo | [POR VALIDAR] tiempo disponible y confianza |
| **Usuario secundario** | Madres, padres, cuidadores | Cómo escuchar sin culpar, a dónde derivar | [POR VALIDAR] canal (WhatsApp, reunión, impreso) |
| **Cliente decisor** (colegio privado) | Director o propietario, coordinación de primaria, departamento psicopedagógico | Cumplir su deber de protección, diferenciarse ante las familias, bajo costo operativo | [HIPÓTESIS] firma el director o el dueño; influyen psicología y la junta de padres |
| **Pagador** (colegio privado) | Administración del colegio | Precio anual predecible, sin cobro extra a los padres por el congelamiento de pensiones | [HIPÓTESIS] |
| **Cliente / pagador** (ONG) | Coordinación de protección o educación de CEMSE/ChildFund, Visión Mundial, Save the Children, Educo, Aldeas SOS | Herramienta alineada al marco lógico de su proyecto, que pueda reportar indicadores y reutilizar | [HIPÓTESIS] compra con fondos de proyecto; ciclo ligado a la propuesta al donante |
| **Pagador** (RSE) | Tigo, Fundación VIVA/Entel, bancos, CBN, agroindustria cruceña | Impacto visible y medible, reputación, voluntariado; sin exponer a los niños | [HIPÓTESIS] modelo "patrocina una escuela o un distrito" |
| **Cliente B2G** | GAM Santa Cruz (Secretaría de Desarrollo Humano, DNA), Gobernación, DDE y direcciones distritales | Cumplir su mandato de prevención con un costo por niño bajo | [POR VALIDAR] partida en el POA; compra pública bajo normas SABS (umbrales no verificados) |
| **Aliado de legitimidad** | DNA, Defensoría del Pueblo, Colegio de Psicólogos, UAGRM (FH/FICCT), UNICEF | Rutas de derivación, aval técnico, marco de protección | No son pagadores iniciales |
| **Proveedor de infraestructura** | PlayCanvas, CDN, escuela (dispositivos, internet) | — | "Tubería", no socio de misión |

---

## 4. Análisis de costos

### 4.1 Tabla de costos (rangos, fuentes y fechas)

| Rubro | Rango | Base / fuente | Tipo |
| --- | --- | --- | --- |
| **Salario de desarrollador junior** (Santa Cruz) | Bs 4.000–7.000/mes (US$ 407–712) | Glassdoor, 8 reportes, hasta mayo 2026 ([Glassdoor](https://www.glassdoor.com.mx/Sueldos/santa-cruz-desarrollador-software-sueldo-SRCH_IL.0,10_IM1260_KO11,33.htm)); muestra muy pequeña | [EVIDENCIA débil] |
| **Salario mínimo nacional 2026** | Bs 3.300/mes (US$ 336) | DS 5516, retroactivo al 01-01-2026 ([Oxígeno](https://oxigeno.bo/el-salario-minimo-de-bs-3-300-rige-desde-el-1-de-enero-de-2026-que-establece-el-reglamento/)) | [EVIDENCIA] |
| **Cargas sociales del empleador** | Aprox. 16–17 % sobre el salario bruto | (estimación) [POR VERIFICAR con contador] | Estimación |
| **Equipo mínimo a medio tiempo** (2 dev + 1 pedagogía/contenido + 1 operación/ventas, 50 %) | Bs 8.000–14.000/mes → **Bs 96.000–168.000/año** (US$ 9.800–17.100) | 4 × 50 % × Bs 4.000–7.000 (estimación) | [HIPÓTESIS] |
| **Honorarios de psicólogo** (referencia) | Bs 150–300 por hora de consulta particular (US$ 15–31) | [Junisse Montaño, 02-09-2026](https://www.junissemontano.com/blog/entiende-los-costos-de-psicoterapia-virtual-y-los-precios-de-la-psicologia-online-en-bolivia) (fuente privada, no es arancel oficial) | [EVIDENCIA débil] |
| **Revisión psicológica del contenido** | 40–80 h/año × Bs 150–300 = **Bs 6.000–24.000/año** (US$ 610–2.440) | (estimación) Una revisión de un especialista en ASI infantil puede costar más | [HIPÓTESIS] |
| **Supervisión clínica o protocolo de revelaciones** (por piloto) | Bs 2.000–6.000 | (estimación) | [HIPÓTESIS] |
| **PlayCanvas Editor** | Free US$ 0 (**solo proyectos públicos**); Personal US$ 15/mes; Organization US$ 50/usuario/mes. Todos incluyen hosting gratis de la app | [playcanvas.com/plans](https://playcanvas.com/plans), consultado el 17-09-2026 | [EVIDENCIA] |
| **PlayCanvas, escenario realista** | 2 Organization = US$ 1.200/año (Bs 11.800), o 1 Personal = US$ 180/año (Bs 1.770) | Cálculo | [EVIDENCIA + cálculo] |
| **Dominio, CDN o hosting alternativo** | Bs 200–2.000/año | (estimación); no se verificaron precios de CDN | [HIPÓTESIS] |
| **Doblaje o locución en español latino** | US$ 2–5 por minuto terminado (tarifa objetivo de plataforma freelance) hasta US$ 50–150 por minuto (locución profesional LatAm) | [Voquent](https://www.voquent.com/careers/trabajos-de-artista-de-doblaje/); [Baldo Locuciones](https://baldo-locuciones.com/tarifas-locucion-minuto/) | [EVIDENCIA] |
| **Audio para 1 episodio** (~15 min de líneas) | US$ 30–75 (freelance) hasta US$ 750–2.250 (profesional) | Cálculo | Estimación |
| **Voces en guaraní, quechua o aimara** | Sin dato público | Presupuestar Bs 3.000–10.000 por lengua y episodio, incluida validación cultural (estimación) | [POR VALIDAR] |
| **Ilustración y arte 2D/3D** | Sin dato local verificado | Bs 5.000–25.000 por episodio (estimación); parte lo hace el equipo | [POR VALIDAR] |
| **Impresión de material para familias** | Volante full color 1/4 carta, 1.000 unidades: Bs 180–360 (promoción de imprenta en SCZ) → **Bs 0,18–0,36 por unidad** | [SANTACRUZ.GROUP](http://imprentasantacruz.weebly.com/ofertas-con-descuentos.html) (fecha no verificada) | [EVIDENCIA débil] |
| **Guía impresa para docentes** (20–30 pág.) | Bs 10–30 por unidad | (estimación) | [POR VALIDAR] con 3 cotizaciones |
| **Capacitación de facilitadores** (4 h, 20 docentes) | Bs 1.500–4.000 por sesión (tiempo del equipo + psicólogo + materiales) | (estimación). Referencia: Kidpower cobra desde US$ 1.900 por desarrollo profesional | [HIPÓTESIS] |
| **Accesibilidad** (subtítulos, contraste, audio, modo sin 3D) | 10–20 % extra del tiempo de desarrollo | (estimación) | [HIPÓTESIS] |
| **Legal** (constitución de empresa o asociación, términos, política de datos, contratos) | Bs 5.000–15.000 el primer año | (estimación); no se encontró arancel vigente | [POR VALIDAR] |
| **Seguro de responsabilidad civil o ciber** | Sin cotización encontrada | [POR VALIDAR] con aseguradoras locales | — |
| **Dispositivos** | Bs 0 si se usan los de la escuela; 1 proyector + laptop por aula piloto si no hay: Bs 4.000–8.000 (estimación) | Supuesto de diseño: modo proyectado | [HIPÓTESIS] |
| **Transporte y logística del piloto** | Bs 500–2.000 por piloto | (estimación) | [HIPÓTESIS] |

**Referencia externa de estructura de costos:** en *Safe Touches* el costo por sitio promedió US$ 154.243. De eso, US$ 110.608 era personal, US$ 7.763 capacitación, US$ 4.521 materiales, US$ 3.189 viajes, US$ 3.961 equipos y US$ 24.717 indirectos ([Shipe et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC11318369/)). **El costo dominante es el personal que facilita.** Un modelo donde facilita el docente del aula, con software y capacitación, atacaría justamente ese rubro [HIPÓTESIS].

### 4.2 Presupuesto anual ilustrativo, año 1 (HIPÓTESIS)

| Escenario | Fijos anuales | Supuestos |
| --- | --- | --- |
| **Voluntario / estudiantil** | Bs 25.000–45.000 (US$ 2.500–4.600) | Equipo sin sueldo; se pagan revisión psicológica, PlayCanvas, audio básico, legal mínimo e impresión piloto |
| **Lean pagado** | Bs 140.000–230.000 (US$ 14.200–23.400) | Equipo al 50 % con Bs 4.000–7.000 + cargas + psicólogo + herramientas + legal + contenido de 2 episodios |

---

## 5. Opciones de ingresos

### 5.1 Tabla comparativa

| Modelo | Quién paga | Pros | Contras / riesgos | Dependencia de donaciones | Encaje año 1 |
| --- | --- | --- | --- | --- | --- |
| **A. Licencia anual por aula** (colegio privado), con capacitación y guía | Colegio privado | Ingreso recurrente, fácil de explicar, escala con el tamaño del colegio | Mercado chico (~1.800 aulas de primaria privadas en SCZ, estimación); pensiones congeladas; ciclo atado al calendario escolar (se decide entre nov. y feb.) | Baja | **Alto** para validar disposición a pagar |
| **B. Licencia por escuela** (tarifa plana por tramos de matrícula), como Second Step | Colegio | Menos fricción administrativa | Precio difícil de fijar sin datos; colegios pequeños pagan de más | Baja | Medio |
| **C. Por alumno** | Colegio o padres | Proporcional | Se siente como cobro a las familias; incompatible con el congelamiento de pensiones; los niños no deben ser "unidad de cobro" visible | Baja | **Bajo** |
| **D. Freemium institucional**: núcleo gratis para escuelas fiscales; pago por capacitación, reportes agregados, episodios extra y soporte | Privados, ONG | Inclusión; embudo de adopción; alineado con la misión | Lo gratis puede canibalizar lo pagado; el soporte a lo gratis cuesta | Media | **Alto** como marco general |
| **E. Capacitación e implementación** (talleres a docentes y familias) | Colegio, ONG, RSE | Es lo que el mercado ya paga (Kidpower, D2L); margen sobre tiempo experto | Escala con horas-persona; requiere un psicólogo en el equipo | Baja-media | **Alto** |
| **F. Contrato de programa con ONG** (licencia multi-escuela + capacitación + reporte) | ONG con fondos de donante | Tickets más grandes; acceso a escuelas públicas; legitimidad | Ciclos de proyecto de 1–3 años; exige reporte y salvaguarda formales; posible pedido de exclusividad | **Alta indirecta** (depende del donante de la ONG) | **Alto** como vía a lo público |
| **G. RSE "patrocina una escuela o un distrito"** | Empresa | Financia gratuidad; visibilidad positiva | Tema sensible (ASI) que algunas marcas evitan; la empresa puede pedir datos o fotos de niños (se rechaza) | Alta (discrecional) | Medio |
| **H. B2G municipal o departamental** | GAM, Gobernación | Escala; mandato legal (DNA) | Compra pública lenta; POA anual; rotación política; pagos atrasados | Baja en donaciones, alta en riesgo político | **Bajo en año 1**, alto en año 2–3 |
| **I. Subvenciones y premios** | UNICEF VF, GIF, HACKBIZ, IncubaUnión | Financian I+D y evaluación sin ceder capital | Puntuales; pueden desviar el roadmap; UNICEF VF exige código abierto y empresa con fines de lucro | **Total** | Alto para arrancar; **no para operar** |
| **J. Subsidio cruzado 1+1** (cada aula privada paga financia un aula fiscal) | Privados + RSE | Narrativa fuerte; mezcla misión y caja | Hay que auditarlo con transparencia; el costo marginal del aula fiscal no es cero (capacitación) | Media | Alto como política de precio |

### 5.2 Unit economics (HIPÓTESIS, con supuestos explícitos)

**Supuestos**

1. Aula = 25 estudiantes; 1 docente capacitado por aula.
2. Costo variable por aula por año (estimación):
   - capacitación prorrateada: Bs 150 (sesión de 4 h compartida por ~15 docentes);
   - soporte y onboarding del equipo: 4 h × Bs 40/h = Bs 160;
   - supervisión psicológica prorrateada: 1 h × Bs 200 = Bs 200;
   - guía impresa del docente: Bs 20;
   - volantes para familias: 25 × Bs 0,30 ≈ Bs 8;
   - hosting marginal: ≈ Bs 0–10;
   - **Total ≈ Bs 540, redondeado a Bs 550.**
3. Fijos anuales, escenario lean: **Bs 180.000** (punto medio de la tabla 4.2).
4. Precios de prueba para colegio privado: **Bs 1.500 / 2.500 / 3.500 por aula por año** (US$ 153 / 254 / 356).
   - Referencias: Safe Touches costó US$ 859 por aula en EE.UU.; Kidpower cobra desde US$ 950 por taller con aula.
   - Con pensión de Bs 800/mes, un aula de 25 genera ~Bs 200.000/año al colegio (10 pensiones). Bs 2.500 sería ~1,25 % de eso (estimación).

**Punto de equilibrio (solo aulas privadas)**

| Precio por aula | Margen de contribución | Aulas para cubrir Bs 180.000 | Equivalente |
| --- | --- | --- | --- |
| Bs 1.500 | Bs 950 | **190 aulas** | ~10,5 % de las aulas de primaria privadas de SCZ (estimación) |
| Bs 2.500 | Bs 1.950 | **93 aulas** | ~5 % |
| Bs 3.500 | Bs 2.950 | **62 aulas** | ~3,4 % |

**Escenario mixto año 2 (HIPÓTESIS)**

- 40 aulas privadas × Bs 2.500 = Bs 100.000.
- 1 contrato con ONG por 60 aulas fiscales × Bs 1.200 = Bs 72.000.
- 1 patrocinio RSE de Bs 30.000.
- **Ingresos: Bs 202.000.**
- Costos: fijos Bs 180.000 + variables de 100 aulas × Bs 550 = Bs 235.000.
- **Déficit de ~Bs 33.000, cubierto con una subvención.**

La autosostenibilidad sin subvenciones exige unas **100–130 aulas pagadas** a precios medios, o bajar los fijos.

**Subsidio cruzado 1+1:** con precio Bs 2.500 y costo variable Bs 550, cada aula privada deja Bs 1.950. Eso cubre el variable de ~3,5 aulas fiscales antes de pagar fijos. Un compromiso "1 privada = 1 fiscal gratuita" es financiable **si** los fijos los cubren otras fuentes (estimación).

**Lo que haría caer estos números:** que los colegios solo paguen menos de Bs 1.000; que la capacitación requiera más de una sesión por docente; que la supervisión psicológica por revelación sea más cara; que el docente no pueda facilitar sin alguien del equipo en el aula, lo que haría que el costo variable se acerque al modelo *Safe Touches*.

### 5.3 Recomendación razonada (HIPÓTESIS)

1. **Qué vender:** un **programa acompañado** (kit jugable + guía de facilitación + capacitación + material para familias + protocolo de derivación), no "software suelto". En la región el software de ASI suele ser gratuito; lo que se paga es implementación con garantías.
2. **Primer mercado:** colegios privados y de convenio de Santa Cruz, para **validar disposición a pagar**, más **un piloto con ONG aliada** (CEMSE/ChildFund o Visión Mundial) en escuelas fiscales, para validar uso real y conseguir referencia.
3. **Política de precios:** gratis para fiscales vía subsidio cruzado, RSE o ONG. Licencia por aula por año para privados, con descuento por colegio completo. Nunca cobrar a familias ni a niños.
4. **Subvenciones:** solo para construir episodios y **financiar la evaluación independiente**. Regla propuesta: que no pasen del 50 % de los ingresos anuales desde el año 3.
5. **B2G:** preparar desde ahora la conversación con la Secretaría Municipal de Desarrollo Humano para el POA 2028, con resultados de piloto en la mano.

---

## 6. CANVAS B completo (12 bloques)

> Orden de trabajo: problema → propósito → valor → segmentos → relaciones → cadena de valor → actividades → recursos → canales → costos → métricas → ingresos.

### 1) Problema identificado (una frase)

Niñas y niños de 6 a 12 años en Santa Cruz no tienen, antes del daño, un lenguaje simple para reconocer situaciones de riesgo de abuso sexual ni una red de adultos de confianza que sepa escuchar y derivar; la escuela y las familias suelen llegar tarde o sin herramientas.

- [EVIDENCIA] 2.313 denuncias de violación de NNA en Bolivia en 2025; Santa Cruz es el departamento con más denuncias (Fiscalía vía Correo del Sur y Opinión).
- [EVIDENCIA] La Defensoría del Pueblo indica que los hechos ocurren con frecuencia en entornos familiares o cercanos.
- [POR VALIDAR] Que docentes y direcciones reconozcan la falta de un "kit seguro" como problema propio y prioritario (entrevistas).

### 2) Propósito

Que cada aula salga de sus sesiones con límites corporales claros, práctica de pedir ayuda y una red de adultos de confianza identificada, sin revictimizar, sin recolectar relatos y sin que una máquina reemplace a una persona adulta.

- [HIPÓTESIS] Propósito compartido con ONG de protección, DNA y colegios.

### 3) Propuesta de valor

**Para el docente o facilitador:** un kit listo para usar en 3–4 sesiones de 20–40 minutos, con experiencia 3D en navegador o proyector, guion, debrief y protocolo claro de qué hacer ante una revelación, que puede repetir sin tallerista externo.
**Para la niña o el niño:** practicar jugando saludos que se pueden rechazar, secretos que no se guardan y a quién pedir ayuda, en un mundo cerrado sin chat ni extraños.
**Para familias:** guía breve para escuchar sin culpar y a dónde derivar (DNA, FELCV, líneas de ayuda).
**Para la institución (colegio, ONG, municipio):** cumplir su deber de prevención con un costo por aula bajo y predecible, indicadores agregados sin datos personales y material contextualizado a Bolivia.

- [EVIDENCIA] El costo dominante de los programas en aula es el personal que facilita (Safe Touches: 72 % personal).
- [HIPÓTESIS] Un docente capacitado puede facilitar con fidelidad aceptable.
- [POR VALIDAR] Qué valora más la dirección: cumplimiento, reputación ante padres, bienestar o costo.
- **No es:** diagnóstico, detección automática, chat, consultorio ni diario de relatos ([no-hacer](../project/no-hacer.md)).

### 4) Segmentos

| Segmento | Rol | Prioridad | Etiqueta |
| --- | --- | --- | --- |
| Colegios privados y de convenio de primaria, Santa Cruz de la Sierra (45,3 mil estudiantes de primaria privada en el depto., 2024) | Cliente-pagador | 1 | [EVIDENCIA] tamaño; [POR VALIDAR] disposición a pagar |
| ONG con programas escolares en SCZ (CEMSE/ChildFund, Visión Mundial, Save the Children, Educo, Aldeas SOS, IJM) | Cliente-pagador-aliado | 1 | [EVIDENCIA] presencia; [POR VALIDAR] presupuesto |
| Escuelas fiscales de primaria (360,4 mil estudiantes en SCZ, 2024) | Beneficiario con acceso gratuito vía terceros | 1 (impacto) | [EVIDENCIA] tamaño |
| Empresas con RSE en educación y niñez (Tigo, Fundación VIVA/Entel, bancos, CBN, agroindustria) | Pagador patrocinador | 2 | [HIPÓTESIS] |
| GAM Santa Cruz (Desarrollo Humano y DNA), Gobernación, DDE | Cliente B2G | 3 (año 2–3) | [POR VALIDAR] |
| Docentes, psicólogos escolares, facilitadores | Usuario operador | Transversal | [POR VALIDAR] |
| Niñas y niños de 6 a 12 años | Beneficiario | Transversal | No paga, no deja datos |
| Familias | Usuario secundario | Transversal | [POR VALIDAR] canal |

### 5) Relaciones

- **Niño:** juego guiado por NPC, sin chat, sin cuenta, sin registro individual. La relación es **a través del docente**.
- **Docente:** capacitación inicial + comunidad de práctica (grupo moderado de docentes, no de niños) + soporte por canal institucional. Revisión después de cada ciclo.
- **Dirección y psicología del colegio:** acuerdo de implementación, protocolo de salvaguarda firmado, informe agregado al cierre de ciclo.
- **Familias:** reunión o nota informativa previa (consentimiento y aviso) + guía corta. No hay vigilancia ni seguimiento individual.
- **ONG y municipio:** relación de programa con plan de trabajo, indicadores y reuniones de seguimiento.
- **Ante una revelación:** protocolo humano de la institución (espacio seguro → responsable de protección del colegio → familia no implicada → DNA o Fiscalía según la ley). YAIS-RED **no recibe ni custodia** la información.
- [HIPÓTESIS] Relación de "socio de implementación", no de proveedor de software.
- [POR VALIDAR] Cuánto soporte humano espera un colegio por el precio.

### 6) Cadena de valor (socios y stakeholders con propósito compartido)

| Socio | Aporte | Qué recibe | Etiqueta |
| --- | --- | --- | --- |
| Humanidades UAGRM (Arianna) + psicólogo(a) especialista externo | Pedagogía, revisión de contenido, protocolo | Aplicación de su método, horas pagadas, co-autoría | [HIPÓTESIS] |
| FICCT UAGRM (Diego, Gabriel, Mauricio) | Desarrollo web 3D, operación técnica | Proyecto real, portafolio | [EVIDENCIA] equipo existente |
| CEMSE / ChildFund Bolivia (proyecto *Escuelas Seguras*, SCZ 2026–27) | Acceso a escuelas, legitimidad, articulación con el GAM | Herramienta lúdica complementaria a su foco digital | [POR VALIDAR] interés |
| Visión Mundial Bolivia (Youth Ready) | Red de facilitadores jóvenes, municipios | Kit para sus espacios protectores | [POR VALIDAR] |
| DNA y Defensoría del Pueblo | Rutas de derivación oficiales, validación del protocolo | Prevención que baja carga futura; materiales | [POR VALIDAR] |
| Colegios privados piloto | Aulas, docentes, retroalimentación | Programa a precio piloto | [POR VALIDAR] |
| HACKBIZ, FTE, incubadoras | Mentoría, capital semilla en especie | Caso de éxito | [EVIDENCIA] HACKBIZ existente |
| Empresas RSE | Financiamiento de gratuidad en escuelas fiscales | Impacto reportable (agregado) | [HIPÓTESIS] |
| PlayCanvas y proveedor de hosting | Infraestructura | Suscripción | Proveedor, no socio de misión |
| Actores de voz o locutores bolivianos, traductores de lenguas originarias | Audio contextualizado | Honorarios | [HIPÓTESIS] |

### 7) Actividades clave

1. Diseño pedagógico y **revisión psicológica** de cada episodio: guion, estados, feedback, debrief.
2. Desarrollo y mantenimiento de la experiencia web 3D **ligera** (modo proyector, bajo ancho de banda, accesible).
3. Redacción de guía del docente, material para familias y protocolo de derivación contextualizado a Bolivia.
4. Capacitación de facilitadores y acompañamiento del primer ciclo.
5. Evaluación de resultados **sin datos personales** (instrumentos agregados, aprobados éticamente).
6. Ventas institucionales y alianzas (colegios, ONG, RSE, municipio).
7. Cumplimiento: política de privacidad, términos, protección de datos, salvaguarda infantil del equipo (código de conducta, verificación de antecedentes).

- [HIPÓTESIS] Las actividades 4 y 6 consumirán más tiempo que el desarrollo.

### 8) Recursos clave

- **Humanos:** 2 desarrolladores web 3D, 1 responsable pedagógico y de contenido, 1 responsable de alianzas y operación, psicólogo(a) especialista en infancia (externo, por horas).
- **Intelectuales:** episodios, guías, protocolo, marca, evidencia del piloto. [POR VALIDAR] licencia (el UNICEF Venture Fund exige código abierto; evaluar código abierto con contenido bajo licencia).
- **Tecnológicos:** PlayCanvas (plan con proyectos privados si no se abre el código), hosting o CDN, repositorio.
- **Institucionales:** cartas de aval (ONG, DNA, UAGRM), acuerdos con colegios.
- **Financieros:** capital semilla (HACKBIZ, IncubaUnión), primera subvención para evaluación.
- **Infraestructura del cliente:** proyector o PC y conexión de la escuela. [EVIDENCIA] *Aula Conectada* amplía la conectividad, con cobertura desigual.

### 9) Canales (minimizando impacto ambiental)

- **Entrega del producto:** web progresiva ligera desde el navegador, sin instalador; **modo aula con un dispositivo proyectado** para no requerir 1 dispositivo por niño ni compra de hardware; caché local para repetir sesiones sin volver a descargar.
- **Venta:** reuniones con redes de colegios (ANDECOP regional, asociaciones de colegios católicos o de convenio), presentación en espacios de ONG y mesas municipales de protección; demo en línea.
- **Capacitación:** híbrida. Sesiones virtuales para teoría; presencial solo para práctica, **agrupando docentes de varios colegios** en una sede para reducir viajes.
- **Familias:** mensaje digital corto enviado por el colegio (PDF liviano o enlace) + **impresión solo bajo demanda** para familias sin acceso.
- **Difusión:** alianzas con ONG y RSE que ya tienen canales; no pauta masiva.
- [HIPÓTESIS] El modo proyectado reduce la barrera de dispositivos y la huella.
- [POR VALIDAR] Qué fracción de aulas tiene proyector o TV operativo.

### 10) Estructura de costos

| Tipo | Rubros | Rango año 1 (ver secc. 4) |
| --- | --- | --- |
| Fijos | Equipo (medio tiempo), herramientas (PlayCanvas US$ 180–1.200/año), legal, revisión psicológica base, contenido (arte y audio) | Bs 25.000 (voluntario) a Bs 230.000 (lean pagado) |
| Variables por aula | Capacitación prorrateada, soporte, supervisión, impresos | ~Bs 550 por aula por año (estimación) |
| Por nuevo episodio | Guion + revisión + desarrollo + audio + pruebas | Bs 15.000–50.000 (estimación) [POR VALIDAR] |
| Evaluación | Diseño ético, aplicación, análisis | Bs 10.000–40.000 por estudio (estimación); se financia con subvención |

- [EVIDENCIA] PlayCanvas y salario mínimo. [HIPÓTESIS] el resto.
- Principio: **el personal es el costo dominante** (Safe Touches); diseñar para que el docente facilite.

### 11) Métricas de impacto (resumen; tabla completa en la sección 7)

- **Social:** aulas y estudiantes alcanzados (IRIS+ PI4060/PI1945), docentes capacitados, fidelidad de implementación, % que identifica correctamente situaciones de riesgo y adultos de confianza (medición agregada, pre y post), % de aulas con debrief a familias, protocolos de derivación activados según registro **institucional agregado**, sin detalles.
- **Económico:** costo por aula y por estudiante, tiempo de facilitación, renovación institucional, % de ingresos no dependientes de subvenciones.
- **Ambiental:** impresos evitados contra línea base contada, MB por sesión y CO₂e estimado, dispositivos nuevos comprados (meta: 0), viajes de capacitación evitados.

### 12) Fuentes de ingresos

| Fuente | Rol | Etiqueta |
| --- | --- | --- |
| Licencia anual por aula para colegios privados (programa acompañado); precio de prueba Bs 1.500–3.500 | Principal a validar | [HIPÓTESIS] |
| Capacitación e implementación (talleres a docentes y familias) | Complementaria | [HIPÓTESIS] |
| Contratos de programa con ONG para escuelas fiscales | Principal para impacto en lo público | [POR VALIDAR] |
| Patrocinio RSE "patrocina una escuela o un distrito" | Financia gratuidad | [HIPÓTESIS] |
| Subvenciones y premios (HACKBIZ, IncubaUnión, UNICEF Venture Fund, GIF) | Solo I+D y evaluación | [EVIDENCIA] existencia; [POR VALIDAR] elegibilidad |
| B2G municipal (POA) | Año 2–3 | [POR VALIDAR] |
| **Excluido:** cobro a niñas, niños o familias; publicidad; venta o uso de datos de menores; microtransacciones | — | Principio |

---

## 7. Métricas de impacto

Principios: separar **salida, resultado e impacto**; **no recolectar relatos**, nombres ni datos identificables de niñas y niños; instrumentos anónimos y agregados por aula; consentimiento institucional y aviso a familias; revisión ética antes de medir resultados.

| # | Indicador | Tipo | Nivel | Método de medición (sin relatos) | Frecuencia | Alineación |
| --- | --- | --- | --- | --- | --- | --- |
| S1 | Estudiantes alcanzados (únicos) y desagregados por edad y sexo agregados | Social | Salida | Lista de matrícula del aula reportada por el colegio (solo conteo) | Por ciclo | IRIS+ PI4060, PI1945; ODS 4.7, 16.2 |
| S2 | Aulas y unidades educativas activas (fiscales vs privadas) | Social | Salida | Registro de licencias y sesiones (sin datos de niños) | Trimestral | ODS 4.a; equidad |
| S3 | Docentes y facilitadores capacitados | Social | Salida | Lista de asistencia de capacitación (adultos, con consentimiento) | Por capacitación | ODS 4.c |
| S4 | Fidelidad de implementación (% de sesiones completas con debrief) | Social | Proceso | Checklist del docente al cierre de cada sesión | Por sesión | Calidad |
| S5 | % de estudiantes que identifican correctamente situaciones seguras o inseguras (viñetas) | Social | Resultado | Cuestionario anónimo pre y post por aula (tarjetas o votación agregada), validado por psicología | Pre/post por ciclo; seguimiento a 3–6 meses | ODS 16.2 |
| S6 | % de estudiantes que nombran al menos 3 adultos de confianza **válidos** (sin registrar nombres) | Social | Resultado | Actividad en papel que se queda con el niño; el docente registra solo "cumple o no cumple" agregado | Post por ciclo | ODS 16.2; ODS 5.2 |
| S7 | Confianza del docente para responder a una revelación (escala 1–5) | Social | Resultado | Encuesta anónima a docentes, pre y post capacitación | Pre/post | ODS 4.c |
| S8 | % de colegios con protocolo de derivación documentado y conocido | Social | Resultado institucional | Revisión documental con la dirección | Anual | ODS 16.2 |
| S9 | Derivaciones acompañadas según protocolo | Social | Resultado (sensible) | **Solo conteo agregado anual** reportado por la institución, sin detalles, casos ni fechas; interpretar con cuidado (un aumento puede ser buena señal) | Anual | ODS 16.2 |
| S10 | Familias que recibieron la guía (alcance, no comprensión individual) | Social | Salida | Conteo de envíos o impresos entregados por el colegio | Por ciclo | ODS 5.2 |
| E1 | Costo total por aula y por estudiante | Económico | Eficiencia | Contabilidad de costos imputados por ciclo (método ingredientes, como Shipe et al.) | Semestral | IRIS+ (costos operativos) |
| E2 | Tiempo de facilitación y de preparación por docente | Económico | Proceso | Registro autoinformado del docente | Por ciclo | — |
| E3 | Tasa de renovación institucional | Económico | Resultado | Contratos renovados / contratos a vencer | Anual | Sostenibilidad |
| E4 | % de ingresos por ventas y contratos vs subvenciones | Económico | Sostenibilidad | Estados financieros | Anual | Riesgo de dependencia |
| E5 | Aulas fiscales gratuitas financiadas por cada aula pagada | Económico-social | Equidad | Registro de subsidio cruzado auditado | Anual | ODS 4.5 |
| A1 | Impresos evitados | Ambiental | Resultado | **Línea base:** contar con el colegio las hojas o cartillas que usaría un taller equivalente (p. ej. cuadernillo del niño + guía). Evitados = línea base − impresos efectivamente usados (incluida la impresión bajo demanda) | Por ciclo | ODS 12.5 |
| A2 | Peso de descarga por sesión (MB) y CO₂e operativo estimado | Ambiental | Proceso | Medir la transferencia real (DevTools o logs de CDN). CO₂e ≈ GB × 0,194 kWh/GB (SWDM v4, operativo: centros de datos 0,055 + redes 0,059 + dispositivos 0,080) × 341 gCO₂e/kWh (Bolivia) | Por release | ODS 12, 13 |
| A3 | Dispositivos nuevos comprados para usar el producto | Ambiental | Resultado | Registro por implementación; meta = 0 (uso de dispositivos existentes o modo proyectado) | Por implementación | ODS 12.5 |
| A4 | Km de viaje evitados en capacitación | Ambiental | Resultado | Km de un modelo de tallerista por escuela − km reales del modelo híbrido agrupado; convertir con factor por vehículo [POR VALIDAR factor local] | Por ciclo | ODS 13 |

**Ejemplo ilustrativo de A2 (estimación, no medición):** si un episodio pesa 60 MB y se descarga una vez por aula en modo proyectado (0,06 GB):

- 0,06 GB × 0,194 kWh/GB = 0,0116 kWh;
- 0,0116 kWh × 341 g/kWh ≈ **4 gCO₂e por aula-descarga**.

Si en cambio cada uno de 25 niños lo descarga en su propio dispositivo: ≈ 99 gCO₂e.

Fuentes:

- [Sustainable Web Design, *Estimating Digital Emissions*](https://sustainablewebdesign.org/estimating-digital-emissions/). Los coeficientes por segmento vienen del resumen de búsqueda y hay que confirmarlos en la página.
- Intensidad de la red boliviana: [Low-Carbon Power](https://lowcarbonpower.org/region/Bolivia), periodo jun 2025 – may 2026.

**Limitaciones honestas de las métricas ambientales**

- Las cifras de A2 son **muy pequeñas**. El beneficio ambiental del producto es modesto, y presentarlo como gran impacto sería greenwashing. Lo que sí se puede sostener es: diseño ligero, cero hardware nuevo y menos impresos y viajes.
- SWDM es un modelo de promedios. Aplicar la intensidad boliviana a los centros de datos (que probablemente están fuera de Bolivia) es una simplificación, y no incluye la **huella incorporada** de fabricar los dispositivos, que suele ser la mayor.
- A1 depende de una línea base contrafactual: sin YAIS-RED, muchos colegios **no harían nada**, y entonces no hay papel "evitado". Solo se reporta cuando existe un taller o material real que se reemplaza.
- Efecto rebote: si el producto impulsa compras de tablets, la huella sube. Por eso A3 es la métrica más importante.
- A4 requiere un factor de emisión vehicular local que no se verificó.

**Limitaciones de las métricas sociales:** el conocimiento autoinformado no equivale a menos abuso. El impacto real (reducción de victimización) **no es medible** por un equipo pequeño y necesitaría estudios controlados con aval ético. No se debe prometer "reducir casos".

---

## 8. Riesgos de negocio

| Riesgo | Prob. | Impacto | Mitigación |
| --- | --- | --- | --- |
| **Ningún actor tiene partida para "juego de prevención"**; todos esperan gratuidad (patrón LatAm: NSPCC, Save the Children, Tigo) | Alta | Alto | Vender programa acompañado y capacitación; validar precio con entrevistas y cartas de intención antes de construir más |
| **Mercado privado pequeño y con pensiones congeladas** | Media | Alto | Precio por aula bajo en relación a la pensión; paquetes por colegio; sumar el canal ONG |
| **Dependencia de subvenciones** | Alta | Alto | Tope de % de ingresos por subvención; usarlas solo para I+D y evaluación |
| **Daño reputacional o revictimización** por error de contenido o mal manejo de una revelación | Media | Muy alto | Revisión psicológica obligatoria; protocolo; capacitación previa obligatoria; no vender sin capacitación |
| **Recolección indebida de datos de menores** (presión de clientes o RSE por "evidencia") | Media | Muy alto | Arquitectura sin datos personales; contratos que prohíben fotos o videos de niños; métricas agregadas |
| **Incumplimiento normativo** (ley de protección de NNA en entornos digitales 2025, protección de datos) | Media | Alto | Revisión legal (otro análisis del equipo); política de privacidad y términos antes del piloto |
| **Capacidad del equipo** (estudiantes, rotación, tiempo) | Alta | Alto | Alcance mínimo (1 episodio vertical); roles claros; documentación; acuerdo de socios y propiedad intelectual |
| **Brecha de conectividad y dispositivos** | Media | Medio | Modo proyectado, caché, bajo peso; alternativa imprimible mínima |
| **Competencia gratuita** de ONG, RSE u organismos internacionales | Media | Medio | Posicionarse como socio de implementación de esas ONG, no como rival |
| **Riesgo de plataforma** (cambio de precios de PlayCanvas; plan gratis con proyectos públicos) | Media | Medio | Presupuestar plan pago o decidir código abierto a propósito; exportar build autohospedable |
| **Ciclos de compra largos** (POA municipal, proyectos de ONG, calendario escolar) | Alta | Medio | Pipeline temprano; pilotos gratuitos con acuerdo de evaluación; fechas de decisión mapeadas |
| **Rotación política** en municipio o gobierno | Media | Medio | Diversificar pagadores; no depender de un solo funcionario |
| **Tipo de cambio y costos en USD** (brecha oficial vs paralelo) | Media | Bajo-medio | Minimizar costos en USD; precios en Bs con revisión anual |
| **Promesa excesiva de impacto** | Media | Alto | Comunicar como "prevención primaria educativa", con métricas de resultado intermedio; nunca "reduce casos" |

---

## 9. Plan de validación

### 9.1 Entrevistas (6–8 semanas)

| Segmento | Cuántas | A quién | Preguntas clave |
| --- | --- | --- | --- |
| Dirección de colegios privados y de convenio (SCZ) | **10–12** | Director(a), coordinación de primaria, administrador(a); mezclar pensiones bajas, medias y altas | ¿Qué hacen hoy en prevención de ASI y quién lo lidera? ¿Qué pasó la última vez que hubo una sospecha? ¿Tienen presupuesto para bienestar o protección y de qué partida sale? ¿Quién decide y firma? ¿En qué mes se decide el presupuesto del año? ¿Qué evidencia pedirían antes de pagar? ¿Cuánto pagaron por el último taller externo? Precio (Van Westendorp): ¿a qué precio por aula por año sería barato, caro o inaceptable? ¿Firmarían una carta de intención para un piloto? |
| Psicólogos u orientadores escolares | **6–8** | Departamentos psicopedagógicos de colegios, psicólogos de DNA | ¿Qué contenidos o enfoques consideran seguros o riesgosos? ¿Cómo manejan hoy una revelación? ¿Qué necesitarían para avalar el material? ¿Cuánto cobrarían por revisar y supervisar? |
| Docentes de primaria (fiscal y privado) | **10** | 4.º a 6.º de primaria | ¿Cuánto tiempo real tienen en el horario (orientación, valores)? ¿Qué equipos funcionan en su aula? ¿Qué les da miedo de facilitar este tema? ¿Qué capacitación necesitan? |
| ONG con programas escolares | **5–6** | CEMSE/ChildFund, Visión Mundial (Youth Ready), Save the Children, Educo, Aldeas SOS, IJM | ¿Qué herramientas usan hoy? ¿Cómo compran (presupuesto de proyecto, donante, licitación)? ¿Qué indicadores reportan a su donante? ¿Qué exigirían de salvaguarda y datos? ¿Harían un piloto conjunto en 2026–2027? |
| Sector público | **3–4** | Secretaría Municipal de Desarrollo Humano / DNA SCZ; DDE Santa Cruz o dirección distrital | ¿Hay partida de prevención en el POA? ¿Cuándo se formula el POA 2027–2028? ¿Qué modalidad de contratación aplicaría? ¿Qué aval del Ministerio de Educación se necesita para entrar a escuelas fiscales? |
| RSE | **3–4** | Tigo (*Conéctate Segur@*), Fundación VIVA, un banco, una empresa agroindustrial | ¿Financiarían gratuidad en escuelas fiscales? ¿Qué reporte esperan? ¿Aceptan no recibir fotos ni datos de niños? ¿Montos típicos por proyecto? |
| Familias | **8–10** | Padres y madres de primaria, fiscal y privado | ¿Cómo prefieren recibir información? ¿Qué les preocupa de que la escuela aborde el tema? ¿Qué harían con la guía? |

**Total: ~45–54 entrevistas.** Reglas: no pedir casos ni historias; guion revisado por psicología; registro en notas sin datos identificables de terceros.

**Criterios de éxito para seguir (HIPÓTESIS):**

- al menos 3 colegios privados indican un precio aceptable ≥ Bs 1.500 por aula por año;
- al menos 2 firman una carta de intención;
- al menos 1 ONG acepta un piloto conjunto;
- al menos 2 psicólogos aceptan revisar.

### 9.2 Experimento piloto (después de las entrevistas y de la revisión psicológica)

- **Diseño:** 1 episodio vertical + guía + capacitación de 4 h; **3–4 aulas** (2 privadas, 1–2 fiscales vía ONG); 4.º a 6.º de primaria; 3 sesiones por aula.
- **Previo:** aprobación de la dirección, aviso y consentimiento de familias según el colegio, protocolo de derivación validado con la DNA, revisión ética (buscar aval de comité UAGRM u ONG), capacitación de docentes.
- **Qué se mide:** S3–S7 y E1–E2 (tabla sección 7); A1–A3; satisfacción del docente; incidentes técnicos.
- **Prueba de pago:** a los colegios privados, ofrecer el piloto con **precio simbólico o depósito reembolsable** (p. ej. Bs 300–500) para medir compromiso real, no solo interés.
- **Criterios de decisión (HIPÓTESIS):**
  - fidelidad ≥ 80 % de sesiones completas;
  - mejora pre/post en S5 y S6 en la dirección esperada;
  - 0 incidentes de salvaguarda mal manejados;
  - al menos 2 de 3 docentes dicen que lo repetirían sin el equipo presente;
  - al menos 1 colegio acepta pagar el precio de lista el año siguiente.

### 9.3 Evidencia mínima que pediría un colegio u ONG antes de pagar

1. **Aval profesional:** carta de revisión de un psicólogo o psicóloga con experiencia en infancia y ASI, y de preferencia de una ONG reconocida.
2. **Protocolo de salvaguarda y derivación** escrito, alineado con la normativa boliviana y la DNA.
3. **Política de datos:** declaración verificable de que no se recolectan datos personales ni relatos de menores; términos de uso.
4. **Demo** navegable y guía del docente completa.
5. **Resultados de piloto** (aunque sean pequeños): fidelidad, satisfacción docente, cambio pre/post agregado.
6. **Alineación curricular:** qué objetivos del currículo boliviano o del plan de convivencia apoya [POR VALIDAR con la DDE].
7. **Referencias:** 1–2 instituciones que lo usaron.
8. **Costo total claro** (precio, qué incluye, soporte) y **entidad legal** que factura.
9. Para ONG: **indicadores compatibles** con su marco lógico y capacidad de reporte agregado; política de salvaguarda del equipo (código de conducta, antecedentes).

---

## 10. Datos que no se encontraron (no inventar)

- Número de unidades educativas privadas y de convenio en Santa Cruz (solo total por departamento).
- Pensión promedio verificada por fuente oficial.
- Partida de la DNA o de prevención en el POA 2026 del GAM Santa Cruz.
- Precio 2026 verificado de Second Step (tienda con acceso bloqueado) y precio de MBF fuera de Florida.
- Arancel oficial vigente del Colegio de Psicólogos de Bolivia o de Santa Cruz.
- Tarifas locales de ilustración, doblaje en lenguas originarias, seguros y abogados.
- Porcentaje verificado de escuelas conectadas con laboratorio operativo en Santa Cruz.
- Umbrales vigentes de contratación menor (SABS) para compras municipales.
- Modelo de licencia de NoABS.
- Programas vigentes de JICA y GIZ en protección infantil en Bolivia.

---

## 11. Bibliografía

**Bolivia: problema, educación y economía**

- Correo del Sur (10-08-2026). *Bolivia registra 965 casos de violencia sexual contra niños.* https://correodelsur.com/seguridad/20260810/bolivia-registra-965-casos-de-violencia-sexual-contra-ninos.html
- La Razón (09-08-2026). *Bolivia suma 965 denuncias por violencia sexual infantil...* https://larazon.bo/sociedad/2026/08/09/bolivia-suma-965-denuncias-por-violencia-sexual-infantil-en-el-primer-trimestre/
- Opinión (16-09-2025). *Bolivia registra más de 180 violaciones infantiles cada mes.* https://www.opinion.com.bo/articulo/policial/bolivia-registra-mas-180-violaciones-infantiles-cada-mes/20250916000005980003.html
- INE. *Anuario Estadístico 2024, cap. 3 (cuadros 3.02.02.01 y 3.02.02.06).* https://anuario.ine.gob.bo/2024/paginas/cap03.html
- Ministerio de Educación, SIE. *Reportes de matrícula.* https://reportes.sie.gob.bo/
- El Deber (2026). *Incremento de pensiones: Andecop dice que cada colegio debe analizar el costo educativo.* https://eldeber.com.bo/pais/incremento-pensiones-andecop-dice-cada-colegio-debe-analizar-costo-educativo_1767974347
- Skooly (2026). *¿Cuánto cuesta un colegio en Santa Cruz de la Sierra?* https://skooly.io/en/bo/institutions/city/santa-cruz/costos
- La Razón (06-08-2026). *Paz anuncia el programa Aula Conectada...* https://larazon.bo/sociedad/2026/08/06/paz-anuncia-el-programa-aula-conectada-con-la-instalacion-de-mas-de-5-000-antenas-de-starlink/
- El Diario (20-08-2026). *Instalarán 1.000 antenas Starlink en colegios de 86 municipios.* https://www.eldiario.net/portal/2026/08/20/instalaran-1-000-antenas-starlink-en-colegios-de-86-municipios/
- UNICEF Bolivia. *La niñez y la adolescencia en el ámbito departamental y municipal en Bolivia.* https://www.unicef.org/bolivia/media/3181/file/La%20ni%C3%B1ez%20y%20la%20adolescencia%20en%20el%20%C3%A1mbito%20departamental%20y%20municipal%20en%20Bolivia.pdf
- El Deber (08-09-2025). *El presupuesto municipal alcanza 4.790 millones...* https://eldeber.com.bo/santa-cruz/el-presupuesto-municipal-alcanza-4790-millones-y-el-30-va-al-pago-de-sueldos_529308/
- Asuntos Centrales. *Alcaldía cruceña aprueba un POA de Bs 4.508 millones.* https://asuntoscentrales.com/alcaldia-crucena-aprueba-un-poa-de-bs-4-508-millones-y-concentra-recursos-en-salud-y-educacion/
- GAM Santa Cruz. *Rendición Pública de Cuentas Inicial 2026.* https://www.gmsantacruz.gob.bo/Publicaciones-Municipales/RENDICION_PUBLICA_%20DE_CUENTAS_INICIAL_2026.pdf
- Banco Central de Bolivia (17-09-2026). *Tabla de cotizaciones.* https://www.bcb.gob.bo/librerias/indicadores/otras/ultimo.php
- La Patria (17-09-2026). *Tipo de cambio Bolivia.* https://lapatria.bo/tipo-de-cambio-bolivia/
- Oxígeno Digital (2026). *El salario mínimo de Bs 3.300 rige desde el 1 de enero de 2026.* https://oxigeno.bo/el-salario-minimo-de-bs-3-300-rige-desde-el-1-de-enero-de-2026-que-establece-el-reglamento/
- Glassdoor (2026). *Sueldo: Desarrollador Software en Santa Cruz de la Sierra.* https://www.glassdoor.com.mx/Sueldos/santa-cruz-desarrollador-software-sueldo-SRCH_IL.0,10_IM1260_KO11,33.htm
- Junisse Montaño (02-09-2026). *¿Cuánto cuesta un psicólogo en Bolivia?* https://www.junissemontano.com/blog/entiende-los-costos-de-psicoterapia-virtual-y-los-precios-de-la-psicologia-online-en-bolivia
- SANTACRUZ.GROUP. *Ofertas de impresión.* http://imprentasantacruz.weebly.com/ofertas-con-descuentos.html

**Bolivia: actores, cooperación y fondos**

- CEMSE (29-06-2026). *Santa Cruz fortalece la prevención de la violencia digital con el proyecto "Escuelas Seguras y Comunidades Protectoras para la Niñez".* https://cemse.edu.bo/santa-cruz-fortalece-la-prevencion-de-la-violencia-digital-con-el-proyecto-escuelas-seguras-y-comunidades-protectoras-para-la-ninez/
- World Vision Bolivia. https://www.worldvision.bo/
- Save the Children Bolivia (2025). *Principales logros y avances estratégicos en 2025.* https://www.savethechildren.org.bo/save-the-children-bolivia-principales-logros-y-avances-estrategicos-en-2025/
- UNICEF Bolivia. *UNICEF y Educo Bolivia firman un acuerdo...* https://www.unicef.org/bolivia/comunicados-prensa/unicef-y-educo-bolivia-firman-un-acuerdo-para-prevenir-la-violencia-y-promover
- Educo. *Bolivia.* https://www.educo.org/donde-actuamos/america/bolivia
- Educo. *Solicita financiación (FULLIVING-DAPHNE).* https://infancialibredeviolencia.educo.org/solicita-financiacion/
- IJM. *Bolivia.* https://www.ijm.org/locations/bolivia
- Aldeas Infantiles SOS Bolivia (12-2025). https://www.aldeasinfantiles.org.bo/noticias/2025/diciembre/pacto-global-aldeas-infantiles-sos
- Plan International Bolivia. *Proyecto Conocer, prevenir y actuar.* https://plan-international.org/bolivia/estrategia/proyecto-conocer-prevenir-y-actuar/
- El Deber (2025). *En 2025 más de 112.000 personas fortalecieron sus habilidades digitales con programas de Tigo.* https://eldeber.com.bo/economia/2025-112-000-personas-fortalecieron-habilidades-digitales-programas-tigo-bolivia_1765849416
- InfoRSE (31-08-2023). *Fundación VIVA cumple 15 años.* https://www.inforse.com.bo/2023/08/31/fundacion-viva-cumple-15-anos-impactando-positivamente-en-la-sociedad-boliviana/
- InfoRSE (21-08-2026). *Entel se suma a la Teletón Unicef Bolivia.* https://www.inforse.com.bo/2026/08/21/tiempo-de-actuar-entel-se-suma-a-la-teleton-unicef-bolivia/
- CBN. *Responsabilidad social — Comunidad.* https://www.cbn.bo/responsabilidad-social/comunidad/
- EEAS. *Convocatoria local Bolivia EuropeAid/182461.* https://www.eeas.europa.eu/delegations/bolivia/convocatoria-local-%E2%80%93-bolivia-europeaid182461ddact-programa-tematico-organizaciones-de-sociedad-civil_es
- UNFPA Bolivia (2025). *UNFPA y KOICA culminan proyecto...* https://bolivia.unfpa.org/es/news/unfpa-y-koica-culminan-proyecto-destacando-el-rol-de-adolescentes-en-el-ejercicio-de-sus
- AECID. *AECID en Bolivia.* https://www.aecid.es/aecid-en-bolivia
- Al Jazeera (02-05-2013). *Bolivia president expels US aid agency.* https://www.aljazeera.com/news/2013/5/2/bolivia-president-expels-us-aid-agency
- Infobae (01-05-2026). *Bolivia y Estados Unidos reanudaron la cooperación militar...* https://www.infobae.com/america/america-latina/2026/05/01/bolivia-y-estados-unidos-reanudaron-la-cooperacion-militar-tras-20-anos-de-ruptura/
- Visión 360 (09-07-2025). *Cinco startups ganan capital semilla en el primer Torneo Nacional de Incuba Unión Tecnológico.* https://www.vision360.bo/noticias/2025/07/09/28130-cinco-startups-ganan-capital-semilla-en-el-primer-torneo-nacional-de-incuba-union-tecnologico
- Bolivia Emprende. *Premios Verdes busca proyectos con impacto real.* https://boliviaemprende.com/concursos/premios-verdes-busca-proyectos-con-impacto-real
- UNICEF Office of Innovation. *Open Call for Applications.* https://www.unicef.org/innovation/open-call-applications
- UNICEF Venture Fund. *Funding & Support.* https://www.unicefventurefund.org/funding-support
- Global Innovation Fund. *Funding stages.* https://www.globalinnovation.fund/funding-stages
- Safe Online (2026). *New Safe Online Grantees 2026.* https://safeonline.global/new-safe-online-grantees-2026/
- BID. *Convocatorias.* https://www.iadb.org/en/how-we-can-work-together/calls-proposals

**Referentes internacionales y LatAm**

- Second Step — tienda Elementary. https://store.secondstep.org/purchase/products/elementary/ (acceso bloqueado al consultar)
- Second Step — Child Protection Unit. https://store.secondstep.org/purchase/product/second-step-child-protection-unit-early-learning-grade-5-bundle/
- InfluenceWatch. *Committee for Children.* https://www.influencewatch.org/non-profit/committee-for-children/
- Lauren's Kids. *Safer Smarter Schools.* https://laurenskids.org/resources/safer-smarter-schools/
- Florida Bulldog (2019). *Legislative 'sprinkle' adds extra half-million...* https://www.floridabulldog.org/2019/05/legislative-sprinkle-extra-half-million-dollars-to-state-senators-nonprofit/
- Monique Burr Foundation. *MBF Child Safety Matters.* https://mbfpreventioneducation.org/why-use-our-programs/mbf-child-safety-matters/
- Monique Burr Foundation. *FAQ.* https://mbfpreventioneducation.org/why-use-our-programs/frequently-asked-questions/
- Kidpower International. *School Resources & Services.* https://www.kidpower.org/schools/
- Kidpower. *Training of Practitioners.* https://kidpower.org/what-we-do/core-program-training
- Darkness to Light. *Stewards of Children.* https://www.d2l.org/training-catalog/stewards-of-children/
- Children's Advocacy Project. *Stewards of Children* (precio por persona). https://www.childrensadvocacyproject.org/resources/stewards-of-children
- NSPCC Learning. *Speak out Stay safe.* https://learning.nspcc.org.uk/services/speak-out-stay-safe
- NSPCC. *Supporting Speak out Stay safe.* https://nspcc-supporter.shorthandstories.com/supporting-speak-out-stay-safe/index.html
- NSPCC Learning. *PANTS resources.* https://learning.nspcc.org.uk/safeguarding-child-protection-schools/pants
- AMAZE. *What is AMAZE?* https://amaze.org/what-is-amaze/
- Shipe, S. L., et al. (2022). *Taking a School-Based Child Sexual Abuse Prevention Program to Scale: a Cost Analysis.* Prevention Science 23(8). https://pmc.ncbi.nlm.nih.gov/articles/PMC11318369/
- *A serious-game for child sexual abuse prevention: An evaluation of Orbit* (2020). https://pubmed.ncbi.nlm.nih.gov/32535338/
- Save the Children Perú (04-06-2021). *Escuadrón de la protección.* https://www.savethechildren.org.pe/noticias/presentamos-escuadron-de-la-proteccion-el-videojuego-que-fomenta-la-integracion-cultural-y-previene-el-abuso-infantil/
- Agencia UNQ. *NoABS.* https://agencia.unq.edu.ar/?p=10446
- SEDICI-UNLP. *Diseño y desarrollo de un videojuego para la prevención del ASI en Argentina.* http://sedici.unlp.edu.ar/handle/10915/185424
- Fundación para la Confianza. https://www.paralaconfianza.org/
- UC Chile. *Centro CUIDA.* https://www.uc.cl/noticias/uc-y-fundacion-para-la-confianza-crean-el-centro-cuida-para-prevenir-el-abuso-y-la-adversidad-temprana/
- Childhood Brasil. https://www.childhood.org.br/
- Fundación ANAR. *Colegios e institutos.* https://www.anar.org/en/que-hacemos/colegios-e-institutos/
- El Universo. *El juego de Elena y Toñito.* https://www.eluniverso.com/larevista/orientacion/el-juego-de-elena-y-tonito-aplicacion-para-moviles-que-busca-prevenir-el-abuso-sexual-a-ninos-nota/
- UNICEF República Dominicana. *Darlo Todo Cuesta.* https://www.unicef.org/dominicanrepublic/darlotodocuesta
- PR Newswire / MarketsandMarkets. *Social and Emotional Learning Market worth $18.46 billion by 2032.* https://www.prnewswire.com/news-releases/social-and-emotional-learning-market-worth-18-46-billion-by-2032--report-by-marketsandmarkets-302861625.html

**Costos técnicos, audio y métricas**

- PlayCanvas. *Plans* (consultado el 17-09-2026). https://playcanvas.com/plans
- Voquent. *Trabajos de artista de doblaje (español latino).* https://www.voquent.com/careers/trabajos-de-artista-de-doblaje/
- Baldo Locuciones. *Tarifas de locución por minuto.* https://baldo-locuciones.com/tarifas-locucion-minuto/
- Sustainable Web Design. *Estimating Digital Emissions.* https://sustainablewebdesign.org/estimating-digital-emissions/
- Low-Carbon Power. *Bolivia.* https://lowcarbonpower.org/region/Bolivia
- GIIN IRIS+. *Client Individuals: Total (PI4060).* https://iris.thegiin.org/metric/5.3/pi4060/
- GIIN IRIS+. *Client Individuals: Children/Adolescents (PI1945).* https://iris.thegiin.org/metric/5.1/pi1945/
