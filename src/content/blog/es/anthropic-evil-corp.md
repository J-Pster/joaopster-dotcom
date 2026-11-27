---
slug: anthropic-es-evil-corp
title: '¿Anthropic es o no es la Evil Corp?'
description: 'Un artículo en LinkedIn dice que Anthropic usa Claude Code para copiar tu software, así que revisé cada fuente para separar los hechos del terrorismo'
pubDate: 'Nov 26 2026'
tags: ['ai', 'claude-code', 'opinion']
---

Quien vio Mr. Robot se acuerda de E Corp, el conglomerado más grande del mundo en la serie, al que Elliot solo llama [Evil Corp](https://en.wikipedia.org/wiki/Mr._Robot). Pues un artículo que apareció en LinkedIn este mes prácticamente pinta a Anthropic así, una empresa que usa Claude Code para meterse en tu repositorio, copiar tu negocio y desecharte después.

Encontré este artículo de una forma curiosa. Publiqué en LinkedIn mi [post sobre cómo el harness de Claude Code dejó obsoleto mi workflow](/es/blog/harness-claude-code-workflow-obsoleto/), y el autor de este artículo lo comentó. Fui a leerlo, y el título ya dice el tono, ["Se você usa Claude Code, está lascado"](https://www.linkedin.com/pulse/se-voc%C3%AA-usa-claude-code-est%C3%A1-lascado-por-que-sua-de-com-maia-favero-9pqcf/) ("Si usas Claude Code, estás frito"), publicado el 3 de noviembre de 2026.

Antes que nada quiero dejar algo claro. No soy inversionista de Anthropic, no trabajo ahí, no soy fan de ninguna empresa de IA y tampoco estoy en contra de ninguna. Estoy a favor de que cada uno use lo que mejor le sirva, con seguridad, y algo que detesto es la opinión disfrazada de hecho, que es justo lo que hace este artículo, y lo que veo en muchos textos sobre IA por ahí. Toman media verdad, la mezclan con mucho sensacionalismo y entregan un terrorismo digital del tipo "no uses IA, vuelve a la edad de piedra".

Así que hice lo que el artículo no hizo. Fui detrás de cada afirmación, leí el documento de la salida a bolsa de Anthropic, las noticias de la época, los términos de uso y las políticas de datos, y puse el link de todo aquí para que no tengas que creerme ni a mí, ni a él.

## Quién lo escribió y por qué importa

El artículo es de Edilson Maia Favero, y la crítica aquí es al artículo, no a la persona. Él tiene proyectos open source, tiene empresa, hace cosas buenas, pero hay un detalle que el artículo no cuenta.

Todo el artículo gira alrededor del conflicto de interés, Anthropic tendría interés en quedarse con tus datos y atraparte. Solo que el propio autor tiene un conflicto de interés gigante en el tema. El título de su perfil de LinkedIn dice literalmente "Tú como el único dueño de tus datos | Transformo la dependencia de la nube en autonomía tecnológica a través de eficiencia extrema y conversión de OPEX en CAPEX". En la parte de consultoría, escribe que su foco es "eliminar la dependencia sistémica de proveedores de Big Techs". Su empresa, Costafavero, anuncia en su sitio el [Vault-Code, un "servidor de agentes de IA" con "infraestructura propia"](https://costafavero.com.br), y mantiene en GitHub [Autoreflex, un servidor local de memoria para agentes](https://github.com/edilsonmaia/Autoreflex).

Ahora fíjate en la "arquitectura de supervivencia" que recomienda al final del artículo. Harness propio, memoria local bajo tu dominio, nada de agente cerrado de proveedor. Es, punto por punto, lo que él vende.

Eso no vuelve falso el artículo automáticamente, y hasta creo que acierta en algunas cosas, que te voy a mostrar, pero quien acusa a los demás de esconder interés comercial debería mostrar el suyo.

## Lo que yo defiendo

Para que entiendas desde dónde hablo, esta es mi posición.

Uso Claude Code todos los días. En mi empresa uso un plan Ultra, llegué a usar dos al mismo tiempo, y la opción de entrenamiento está apagada. Creo que eso tiene que ser una decisión consciente de cada uno, y yo decidí dejarla apagada.

Estoy a favor de la memoria local, de las reglas de `deny`, de los hooks y de cualquier otro candado que impida que la IA llegue a donde no quieres, y si tengo que elegir la mejor opción de todas, elijo un modelo open source corriendo en tu propio hardware, porque eso es independencia de verdad, independencia incluso del proveedor de hardware en la nube. Solo que hoy eso todavía es caro, y hablo más de eso al final.

Así que no, no estoy aquí para defender a Anthropic. Estoy aquí para separar los hechos de la opinión.

## Mecanismo 1, la "confesión" en el documento de la salida a bolsa

El artículo dice que el análisis del S-1 hecho por NYU Stern (traducido del portugués) "puso el último clavo en el ataúd de las ilusiones", y que el documento deja claro "con todas sus letras" que Claude Code es un arma para

> invadir las empresas por la puerta trasera (vía programadores individuales), mapear el uso interno, encerrar toda la operación corporativa en el ecosistema cerrado Claude for Enterprise y exterminar a todas las empresas intermediarias de software

**Lo que está escrito de verdad.** Fui directo al documento. El S-1 existe, Anthropic lo entregó a la SEC el [26 de octubre de 2026](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm), y la salida a bolsa fue el 18 de noviembre a US$ 83 por acción, según el [prospecto final](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm). Leí los fragmentos, y lo que dice el documento es esto.

> These users provide strategic value as a top-of-funnel engine for our enterprise business— individuals who utilize Claude for their personal work and then champion it inside their organizations.

> By the time our direct teams engage a customer, Claude is often already in use.

Traduciendo como yo lo entendí, Anthropic cuenta con que el dev que usa Claude en su trabajo personal lo lleve adentro de la empresa, y cuando llega el equipo de ventas, Claude ya está ahí, y eso es todo, no hay "invadir", no hay "mapear el uso interno", no hay "exterminar intermediarios". Busqué en el prospecto final algún factor de riesgo o frase sobre competir con sus propios clientes y no encontré nada. Lo que dice el documento es lo contrario, que clientes como Legora y Salesforce construyen productos sobre Claude, y que uno de los riesgos es que el cliente desarrolle su propia IA y deje de comprar.

**¿Y eso es normal?** Por lo que investigué, es lo más común que hay. Se llama product-led growth, o crecimiento de abajo hacia arriba, y es justo lo que dice el [propio análisis de NYU Stern](https://bhr.stern.nyu.edu/quick-take/enterprise-ai-with-a-consumer-funnel-what-anthropics-s-1-reveals-about-the-ai-ipo-era/), que Anthropic está aplicando "a well-worn marketing strategy to the AI era". La crítica de NYU Stern, por cierto, es otra, sobre el riesgo para los consumidores y la salud mental, no sobre robar empresas. Fui a ver lo que otras empresas escribieron en sus documentos de salida a bolsa, mira esto:

- **Dropbox, 2018.** "Our 500 million registered users are our best salespeople. They've spread Dropbox to their friends and brought us into their offices" ([S-1](https://www.sec.gov/Archives/edgar/data/1467623/000119312518055809/d451946ds1.htm)).
- **Atlassian, dueña de Jira, 2015.** "We rely on word-of-mouth and low-touch demand generation to drive trial, adoption and expansion of our products within customers" ([F-1](https://www.sec.gov/Archives/edgar/data/1650372/000104746915008450/a2226437zf-1.htm)).
- **Slack, 2019.** "self-service users become leads for our salespeople" ([S-1](https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm)).
- **Zoom, 2019.** "Our sales model allows us to efficiently turn a single non-paying user into a full enterprise deployment" ([S-1/A](https://www.sec.gov/Archives/edgar/data/1585521/000119312519107178/d642624ds1a.htm)).
- **Figma, 2025.** "approximately 70% of new Organization and Enterprise plan customers included at least one user who was previously a member of a Professional plan" ([S-1](https://www.sec.gov/Archives/edgar/data/1579878/000162828025033742/figma-sx1.htm)).

Canva todavía no sale a bolsa, así que no tiene un documento de estos, pero la propia empresa habla de sus ["product-led roots"](https://www.canva.com/newsroom/news/one-year-canva-enterprise/). Nadie le dice Evil Corp a Dropbox porque lo llevaste al trabajo.

El número que más me asustó fue la retención neta de ingresos de cerca de 900%, o sea, en promedio los clientes empresariales gastan nueve veces más que un año antes, pero el propio prospecto explica que ese número excluye a quien paga Pro, Max y Ultra. Mide empresas que compraron más, no devs que fueron "capturados".

**Mi veredicto.** Lo del "top of funnel" es real y está escrito, lo demás es interpretación del autor presentada como si fuera texto del documento.

## Mecanismo 2, el caso Windsurf

El artículo lo llama "Telemetría como espionaje industrial y corte de suministro". La tesis es que Windsurf prácticamente inventó el agente de código moderno, que Anthropic lo vio todo a través de la API, lo copió descaradamente para crear Claude Code y después le cortó el acceso a Windsurf para robarle sus clientes.

**Lo que es verdad.** Lo revisé, y Windsurf de hecho procesaba más de 100 millones de tokens por minuto en la API de Anthropic, eso está en el [caso de cliente que la propia Anthropic publica](https://claude.com/customers/windsurf), y el corte sí pasó. El 3 de junio de 2025 el CEO de Windsurf, Varun Mohan, dijo que Anthropic cortó casi toda la capacidad directa de los modelos Claude 3.x "with less than five days of notice" ([TechCrunch](https://techcrunch.com/2025/06/03/windsurf-says-anthropic-is-limiting-its-direct-access-to-claude-ai-models/)). Fue duro, y creo que Anthropic se equivocó en la forma.

**Lo que el artículo no cuenta.** El motivo declarado. Dos días después, el cofundador Jared Kaplan dijo que la decisión vino de las noticias de que OpenAI iba a comprar Windsurf, "I think it would be odd for us to be selling Claude to OpenAI" ([TechCrunch](https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai/)). Puedes pensar que el motivo es malo, pero no es "robar la base de devs", y Claude 4 siguió disponible en Windsurf con la API key del propio usuario.

El final de la historia también quedó fuera. La compra por parte de OpenAI no se dio, Google contrató al CEO y pagó US$ 2.400 millones en licencias ([The Verge](https://www.theverge.com/openai/705999/google-windsurf-ceo-openai), [Reuters](https://www.reuters.com/business/google-hires-windsurf-ceo-researchers-advance-ai-ambitions-2025-07-11/)), y Cognition, que compró el resto de Windsurf el 14 de julio de 2025, anunció la IDE "now with full access to the latest Claude models" ([Cognition](https://cognition.com/blog/windsurf)). Anthropic volvió a venderles.

**¿Y la copia?** Para mí la cronología no cuadra. Boris Cherny empezó el prototipo de lo que se convirtió en Claude Code en septiembre de 2024, y ya se usaba dentro de Anthropic en noviembre de 2024 ([The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built)), el mismo mes en que Windsurf lanzó Cascade, el [13 de noviembre de 2024](https://devin.ai/blog/windsurf-launch). El lanzamiento público de Claude Code fue el [24 de febrero de 2025](https://www.anthropic.com/news/claude-3-7-sonnet), cuatro meses antes del corte, y Windsurf tampoco inventó el agente de código. [Aider](https://github.com/Aider-AI/aider/releases/tag/v0.5.0) ya existía en 2023, [Devin](https://cognition.com/blog/introducing-devin) se anunció en marzo de 2024 y [Cline](https://github.com/cline/cline/releases/tag/v2.0.0) empezó como Claude Dev en julio de 2024. Sobre "chupar de la telemetría", no encontré ninguna evidencia, y los [términos comerciales de Anthropic](https://www.anthropic.com/legal/commercial-terms) dicen "Anthropic may not train models on Customer Content from Services". Puedes desconfiar del contrato, claro, pero para eso hace falta una prueba, y el artículo no trae ninguna.

**Mi veredicto.** El corte con menos de cinco días es real y fue feo. El "espionaje industrial" es una acusación sin pruebas, y el orden de los hechos juega en su contra.

## Mecanismo 3, la detección de harness

El nombre que le puso fue "Inspección silenciosa y sabotaje de harnesses". El artículo dice que en un escándalo llamado "Anthropic Billing Controversy", en mayo de 2026, descubrieron que Anthropic escaneaba prompts, cabeceras y peticiones para encontrar harnesses de la competencia, y cuando los encontraba cambiaba el cobro, bloqueaba el uso en el plan o tumbaba `claude -p`.

Este es el que tiene más verdad.

**Lo que pasó.** El 25 de abril de 2026 un usuario abrió el [issue #53262 en el GitHub de Claude Code](https://github.com/anthropics/claude-code/issues/53262) mostrando que el string `HERMES.md` en un mensaje de commit hacía que Claude Code mandara las peticiones al cobro extra en lugar del plan. Gastó US$ 200,98 de uso extra con solo el 13% del límite semanal del Max 20x consumido, y soporte le respondió que no reembolsaba "technical errors that result in incorrect billing routing". Theo Browne lo reprodujo con un repositorio vacío y la palabra OpenClaw en un JSON ([GIGAZINE](https://gigazine.net/gsc_news/en/20260501-claude-code-ban-openclaw/)). Boris Cherny cerró el issue diciendo que era "an overactive anti-abuse system", y Thariq, del equipo de Claude Code, admitió que era un bug "with the 3rd party harness detection and how we pull git status into the system prompt", con reembolso y un mes más de crédito ([GIGAZINE](https://gigazine.net/gsc_news/en/20260430-hermes-claude-code/), [Hacker News](https://news.ycombinator.com/item?id=47952722)). Solo que el dinero volvió únicamente después de que el caso explotó en Hacker News.

O sea, Anthropic sí buscaba nombres de harnesses de la competencia en el `git status` que el propio Claude Code mete en el prompt, le cobró mal a gente que ni usaba esos harnesses, y soporte negó el reembolso hasta que se volvió escándalo. Eso es grave, y no lo voy a justificar.

**Lo que el artículo distorsiona.** El trasfondo es una regla de precio, no de independencia. Desde el 4 de abril de 2026 la suscripción, que tiene precio fijo, dejó de cubrir harnesses de terceros como OpenClaw. Boris Cherny escribió que se podía seguir usando esas herramientas "via extra usage bundles (now available at a discount), or with a Claude API key" ([The Verge](https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban)). Los [términos de consumidor](https://www.anthropic.com/legal/consumer-terms) ya prohibían el acceso automatizado fuera de la API key, y según [The Register](https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748) esa regla es de febrero de 2024, solo que no se aplicaba.

`claude -p` nunca se tumbó. En mayo Anthropic anunció que el uso programático iba a tener un saldo separado a partir del 15 de junio, y el 16 de junio [dio marcha atrás](https://the-decoder.com/anthropic-backs-off-unpopular-billing-overhaul-as-price-war-with-openai-looms/). Y lo más importante, tener un harness propio que llame a Claude por la API y pague por token nunca estuvo prohibido. El artículo dice que Anthropic sabotea a quien quiere independencia, pero lo que hizo fue impedir que el precio fijo de la suscripción se usara fuera de sus herramientas.

**Mi veredicto.** La detección por palabra clave y la negativa de reembolso son reales y merecían el ruido que hicieron. Lo demás, fechas, "cabeceras", `claude -p` tumbado y "el harness propio es saboteado", no coincide con las fuentes.

## Mecanismo 4, el "sucking up alpha"

El título de este fue "succionando el alma operativa de las empresas". La tesis es que el joint venture de Anthropic con fondos de Wall Street mete ingenieros dentro de las empresas para mapear el secreto del negocio y entrenar agentes que después se venden a la competencia, y que Bridgewater dejó los laboratorios comerciales justamente para que no la succionaran.

**Lo que es verdad.** El joint venture existe, leí el anuncio. El 4 de mayo de 2026 Anthropic anunció con Blackstone, Hellman & Friedman y Goldman Sachs una empresa de servicios de IA para empresas medianas, con ingenieros de Anthropic trabajando junto a ellas ([Anthropic](https://www.anthropic.com/news/enterprise-ai-services-company)). El monto de US$ 1.500 millones es del Wall Street Journal, con cerca de US$ 300 millones de Anthropic, Blackstone y H&F y unos US$ 150 millones de Goldman ([Reuters](https://www.reuters.com/legal/transactional/anthropic-nears-15-billion-ai-joint-venture-with-wall-street-firms-wsj-reports-2026-05-04/)), y el estudio de Bridgewater también existe. Ajustaron Qwen3-235B y pasaron de 78,2% a 84,7% de acierto en tareas de triaje financiero, con un costo 13,8 veces menor ([Bridgewater AIA Labs](https://www.bridgewater.com/aia-labs/learning-to-replicate-expert-judgment-in-financial-tasks)).

**Lo que el artículo inventa.** La expresión "sucking up alpha" no salió de "informes de mercado". Viene de Alex Karp, CEO de Palantir, que dijo en CNBC en julio que los laboratorios están "stealing the weights and alpha of my business" ([Mediaite](https://www.mediaite.com/media/tv/you-sound-pretty-angry-cnbc-anchor-left-stunned-as-palantir-ceo-blows-his-stack-during-wild-interview/), [Forbes](https://www.forbes.com/sites/josipamajic/2026/07/02/karp-says-frontier-ai-labs-are-stealing-enterprise-value-and-vcs-are-listening/)), y Palantir vende justamente la alternativa "soberana". Conflicto de interés otra vez.

Bridgewater no dijo en ningún lado que hizo esto para impedir que Anthropic le succionara la inteligencia. El motivo que dan es otro, que el juicio de un especialista no cabe en un prompt, "the judgments that matter most are often the hardest to articulate", y que eligieron Qwen3-235B porque su fine-tuning está bien estudiado, y no encontré ninguna evidencia de que un ingeniero de Anthropic entrene agentes con el secreto de un cliente para vendérselos a la competencia. El contrato comercial dice lo contrario.

Y aquí va mi opinión, aunque eso fuera verdad. Si dejas que un desarrollador de afuera entre a tu empresa y lea tu código sin un contrato como se debe, la culpa es tuya. En Estados Unidos eso tiene nombre, NDA, el acuerdo de confidencialidad, y muchas empresas le suman una cláusula de propiedad intelectual y una de no competencia, el non-compete, que ni siquiera vale en todos los estados (en California está prohibido en la mayoría de los casos), pero el NDA sí vale. Es lo mismo que dejar entrar a tu casa a un desconocido que tocó a tu puerta, no lo harías. Puede estar mal que Anthropic haga eso, está bien, solo que vivimos en el capitalismo, toda empresa existe para dar ganancias, y quien dejó entrar sin protegerse no hizo la tarea. No puedes llamar Evil Corp a nadie por eso, todo el mundo en todas partes hace lo mismo.

**Mi veredicto.** Los hechos existen, la historia que los une es un montaje del autor.

## Mecanismo 5, la cláusula de producto competidor

A este lo llamó "La guillotina jurídica en los Términos de Servicio". La tesis es que los términos prohíben usar la API para construir un producto competidor, y cuando Anthropic lanza algo igual a tu producto, te vuelves infractor y te corta.

**Lo que es verdad.** La cláusula existe. Los [términos comerciales](https://www.anthropic.com/legal/commercial-terms), en la sección D.4, dicen que el cliente no puede "access the Services to build a competing product or service, including to train competing AI models", y [Brookings publicó el 12 de marzo de 2026](https://www.brookings.edu/articles/what-happens-when-ai-companies-compete-with-their-customers/) un análisis de Mark MacCarthy que dice que Anthropic podría usar esa cláusula contra Cursor o cualquier app de código, y que la ley antimonopolio estadounidense difícilmente protege a quien depende del proveedor. Este es el argumento más serio del artículo, y estoy de acuerdo en que el riesgo existe.

**Lo que el artículo esconde.** La misma Brookings dice que "Each of the major AI model providers has an explicit policy allowing them to disconnect competing AI app developers". O sea, OpenAI y Google tienen la misma cláusula, no es cosa de Anthropic, y el paso a paso del artículo, tú construyes, ella copia y te corta, es una hipótesis. No encontré ningún caso de un cliente cortado porque Anthropic lanzó algo parecido. El único corte conocido es el de Windsurf, con el motivo declarado de la compra por parte de OpenAI, y no encontré ninguna noticia de un corte a Cursor, que compite directo con Claude Code.

Y voy más allá. Si yo fuera dueño de Anthropic, o de cualquier empresa de IA, también tendría esa cláusula, porque es la forma de protegerte de un competidor que usa tu propia herramienta. Las demás tienen algo parecido. Los términos de OpenAI prohíben "Use Output to develop models that compete with OpenAI" ([OpenAI](https://openai.com/policies/terms-of-use/)), y los de Gemini dicen "You may not use the Services to develop models that compete with the Services" ([Google](https://ai.google.dev/gemini-api/terms)). La de Anthropic es más amplia, habla de producto o servicio y no solo de modelo, eso es verdad, pero la lógica es la misma.

Y Anthropic ya usó esa cláusula justo para eso. En agosto de 2025 le cortó el acceso a Claude a la propia OpenAI, porque sus ingenieros estaban usando Claude Code antes del lanzamiento de GPT-5 ([TechCrunch](https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/)). Fíjate que es el mecanismo 4 al revés, un competidor entrando por la herramienta, y quien hizo la tarea y se protegió fue Anthropic.

**Mi veredicto.** Riesgo real, hipótesis sin caso concreto, y aplica a cualquier proveedor de modelos.

## Lo que Anthropic guarda de tu código, de verdad

Ahora la parte que el artículo debió explicar y no explicó. Sí, Anthropic recibe y guarda el código que pasa por Claude. No puede ser de otra forma, el modelo necesita ver el código para trabajar en él.

Pero no barre tu repositorio. Por lo que leí en la [documentación de Claude Code](https://code.claude.com/docs/en/data-usage), Claude Code local manda lo que escribes, lo que Claude responde y lo que las herramientas traen a la conversación, o sea, los archivos que abre y la salida de los comandos que corre. El archivo que nunca abrió se queda en tu máquina. La excepción es Claude Code en la web, que clona el repositorio en una máquina de Anthropic.

Y cuánto guarda, por lo que leí en el Privacy Center, depende de tu plan y de la opción de entrenamiento ([Privacy Center](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data)):

| Qué | ¿Va a Anthropic? | Entrenamiento apagado | Entrenamiento encendido |
|---|---|---|---|
| Tus prompts y las respuestas | sí | 30 días, sin entrenamiento | hasta 5 años, con entrenamiento |
| Archivos que Claude abre | sí | 30 días, sin entrenamiento | hasta 5 años, con entrenamiento |
| Salida de comandos | sí | 30 días, sin entrenamiento | hasta 5 años, con entrenamiento |
| Archivos que nunca abrió (local) | no | no aplica | no aplica |
| Repositorio entero (Claude Code en la web) | sí | 30 días, sin entrenamiento | hasta 5 años, con entrenamiento |
| Pulgar arriba y `/feedback` | sí | 5 años | 5 años |
| Chat incógnito | sí | sin entrenamiento | sin entrenamiento |
| Conversación marcada por infracción | sí | hasta 2 años | hasta 2 años |
| Plan comercial (Team, Enterprise, API) | sí | 30 días, sin entrenamiento | no aplica |

Hay dos cosas que me parecen importantes ahí. Apagar la opción no le esconde nada a Anthropic, sigue recibiendo todo y lo guarda 30 días, solo no entrena, y el pulgar arriba y el `/feedback` se saltan la opción, la conversación entera se va y se queda cinco años. Eso sí es el tipo de cosa que todo dev debería saber, y no está en el artículo.

## Tu empresa no es solo tu código

Aun con todo esto, hay algo que quiero decir que es opinión mía, y dejo claro que es opinión.

Tu empresa no está hecha solo de tu código. El código es muy importante, diría que es el motor de la empresa, pero todavía está el resto del cuerpo. Está la infraestructura, están las personas, está la relación con tus clientes, están los propios clientes, está todo lo que construiste alrededor. Si alguien se llevara tu código mañana, no se llevaría con él los contratos, la confianza, el soporte, lo que sabe tu equipo sobre el negocio y los años de relación con cada cliente.

El artículo trata el código como si fuera la empresa entera, y eso es lo que hace que el miedo parezca tan grande.

Y hay otra cosa. Hoy ni siquiera hace falta que Anthropic lea tu código para copiar tu proyecto. En agosto de 2026 un dev indie, FindTheNeedleDev, lanzó la demo de Find the Needle en Steam, un juego de encontrar la aguja en el pajar. El juego se volvió viral, y antes de que saliera la versión final ya había decenas de clones en Roblox y Fortnite, algunos con decenas de miles de jugadores y facturando bien ([Plagiarism Today](https://www.plagiarismtoday.com/2026/09/17/the-attack-of-the-roblox-clones/)). Nadie necesitó su código, bastó con ver el video, y la IA hace este tipo de copia todavía más rápida ([How To Market A Game](https://howtomarketagame.com/2026/10/28/ai-cloners-are-here-are-indie-devs-cooked/)).

Existe gente codiciosa e interesada, y mucha gente se hizo rica exactamente así. Es brutal, pero el mundo de los negocios es así, punto. Tu protección es lo que construyes alrededor del código.

## Cómo me protejo hoy

Estoy en contra del terrorismo y aun así me cuido. Tengo varios candados, y ninguno depende de confiar en Anthropic:

- Opción de entrenamiento apagada en mi plan Ultra.
- Nada de contraseñas de base de datos en mi máquina. A la base de datos se accede con un perfil IAM de AWS, que me pide autenticarme cada vez. La IA no tiene mi contraseña, no puede abrir el navegador e iniciar sesión por mí, y sus propios candados le impiden intentarlo.
- IAM de AWS en todos lados, que es lo que más me ayuda a proteger el código y la infraestructura.
- Reglas de `deny` en la configuración de Claude Code, para que no entre a algunos lugares.
- Un script de deploy que obliga a correr todos los tests, así la IA no puede hacer deploy sin tests, ni aunque quiera.

Nada de esto es exótico, las reglas de `deny` y los hooks son configuración del propio Claude Code, y lo demás es AWS. Si usas otra herramienta, las mismas ideas aplican.

## El futuro que defiendo es el modelo en tu hardware

Si tengo que elegir la solución que más me gusta, es correr un modelo open source en tu propio hardware. Así no dependes de ninguna empresa, ni de la nube, ni de la política de datos de nadie. Solo que hoy eso todavía es caro y todavía queda detrás de los modelos cerrados.

Tengo 96 GB de RAM y nunca corrí un modelo local en mi máquina, pero ya alquilé GPU para probar algunos y hacer benchmarks, y sigo mucho las pruebas de [Akita on Rails](https://akitaonrails.com/2026/10/27/llm-benchmark-melhores-llms-open-source-hardware-caseiro/) sobre esto. En la última, gastó más de US$ 6 mil alquilando GPU y llegó a un modelo abierto, Qwen3.8 Flash-Next, que corre en una RTX 5090 y sacó 91 en su prueba de programación, contra 92,5 de los mejores modelos abiertos corriendo en GPU de datacenter.

Los números generales apuntan al mismo lado. Epoch AI midió que el precio para llegar a un mismo nivel de desempeño cae de [9 a 900 veces por año](https://epoch.ai/data-insights/llm-inference-price-trends), según la prueba, y que una sola RTX 5090 corre modelos del nivel que era lo más alto [de 6 a 12 meses antes](https://epoch.ai/data-insights/consumer-gpu-model-gap), pero la distancia con lo más alto todavía es grande. En el índice de Artificial Analysis de octubre de 2026, el mejor modelo abierto con pesos publicados queda [26 puntos detrás del líder](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5). Todavía es caro, todavía queda atrás, pero se está abaratando, y creo que el futuro es cada uno con su hardware corriendo su IA.

## Entonces, ¿es o no es la Evil Corp?

Antes de responder, haz un ejercicio conmigo. Imagina que eres el dueño de Anthropic y piensa como empresario, sin hacerte la víctima.

¿No querrías que el dev que usa tu producto en casa lo llevara al trabajo, como hicieron Dropbox, Slack y Jira? ¿No pondrías en el contrato una cláusula para que nadie use tu herramienta para armar a tu competidor? Y si tu mayor rival estuviera comprando a uno de tus clientes, ¿seguirías vendiéndole capacidad como si nada? Creo que la mayoría de la gente que se queja haría exactamente lo mismo, y tal vez algo peor.

Así que no, no es la Evil Corp. Anthropic es una empresa privada, que ahora cotiza en bolsa y necesita crecer, y juega duro. Cortó a Windsurf con menos de cinco días de aviso, le cobró mal a gente por una palabra en un commit y solo devolvió el dinero después del escándalo, y tiene una cláusula que deja vulnerable a quien construye sobre ella. Todo eso es real y merece crítica, pero la misma lógica aplica a OpenAI, a Google y a cualquier empresa de ese tamaño. Eso tiene nombre, y el nombre es capitalismo.

Lo que no acepto es tomar esos hechos, mezclarlos con cosas que no pasaron y vender pánico, más todavía cuando quien escribe vende el remedio para el miedo que él mismo creó. El artículo acierta en el riesgo de depender de un solo proveedor, y se equivoca feo cuando dice que Anthropic lee tu código para copiar tu negocio.

Si usas Claude, o cualquier otra IA, lo que te recomiendo es mucho menos dramático. Apaga la opción de entrenamiento si no quieres que tu código vaya a entrenamiento, pon el código de la empresa en un plan comercial, no mandes secretos a la conversación, usa `deny`, hooks e IAM, mantén tu producto capaz de cambiar de modelo, y no le quites el ojo al modelo local, porque ya viene.

Y sí, usé Claude para investigar y armar este post, y dejé todas las fuentes enlazadas arriba justamente para que no tengas que confiar ni en mí, ni en él, ni en Claude.
