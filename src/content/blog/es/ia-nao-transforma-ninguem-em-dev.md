---
slug: la-ia-no-convierte-a-nadie-en-desarrollador
title: 'La IA no convierte a nadie en desarrollador'
description: 'Vi en LinkedIn que un chico de 15 años con Claude Code hace lo que a un dev le llevaba años aprender, y no estoy de acuerdo, porque la IA escribe el código pero solo multiplica lo que ya sabes'
pubDate: '2026-11-27T18:10:29-03:00'
tags: ['ai', 'career', 'opinion']
---

Sí, usé IA para escribir este post. Y dudo que encuentres aquí el texto genérico, lleno de "en el panorama actual" y de frases de efecto, que sale cuando alguien le pide a ChatGPT "escribe un artículo sobre la IA y el futuro de los devs". Este post salió de una [skill que escribí yo mismo](https://github.com/J-Pster/joaopster-dotcom/tree/master/.claude/skills/escrever-post-blog), que me entrevistó en dos rondas antes de escribir una línea, buscó las fuentes, y después pasó el texto por un control contra los vicios de escritura de la IA. Todo lo que está aquí lo dije yo, la IA solo lo ordenó, y esa forma de usar la herramienta es justo el tema del post.

Hace unos días vi un post en LinkedIn que decía que hoy un chico de 15 años con Claude Code hace lo que a un desarrollador le llevaba años de experiencia. No me acuerdo de quién era, y da igual, porque veo esa frase en todos lados, con variaciones. Y no estoy de acuerdo, porque confunde escribir código con hacer el trabajo de un desarrollador.

Para que sepas desde dónde hablo, programo hace seis años. Hice [Trybe](https://www.tecmundo.com.br/mercado/236790-trybe-vale-pena-8-pontos-olho.htm), un bootcamp brasileño de más de 1.500 horas, casi un año entero de curso, y aun así la mayor parte de lo que sé lo aprendí solo, porque soy autodidacta y obsesionado con la productividad, y cuando quiero algo no lo suelto. Hoy tengo una startup que todavía no puedo nombrar, con 10 meses de vida y más de 500 usuarios, y escribí más o menos el 87% de su código, cerca de 2 millones de líneas, sin contar tests, migraciones ni archivos generados (lo conté con un script, no es a ojo). Toda la arquitectura y toda la infraestructura, desde el día cero, fueron decisiones mías. Y el 100% de ese código pasa por IA, hace rato que no escribo una línea de código a mano.

Así que no, no estoy en contra de la IA. Uso IA para programar hace tres años, y me cayó la ficha la primera vez que la usé.

## La puerta de entrada a la programación se vino abajo

En una cosa el post de LinkedIn tiene razón. Hoy cualquiera escribe código. La puerta de entrada a la programación no está solo abierta, la tiraron abajo, ya no hay puerta. Abres Lovable, Bolt o el propio Claude Code, describes lo que quieres y sale una pantalla funcionando.

El nombre se popularizó en febrero de 2025, cuando Andrej Karpathy [lo llamó "vibe coding"](https://simonwillison.net/2025/Feb/6/andrej-karpathy/), una forma de programar en la que "te olvidas de que el código existe". Pero mucha gente se olvidó de la otra mitad del tweet, donde él mismo dice que eso está "not too bad for throwaway weekend projects", proyectos de fin de semana para tirar, y hay gente usándolo para guardar datos de clientes.

Escribir código nunca fue la parte difícil. Lo difícil es hacer un software que dure, que se pueda mantener, que aguante crecer, que escale, con una infraestructura que no se caiga y no te arruine a fin de mes. Eso la IA no te lo da gratis, porque para pedir lo correcto tienes que saber qué es lo correcto.

## Escribir código se volvió fácil, lo demás sigue siendo difícil

Pregúntale a quien se hizo "dev" en siete días qué es un design pattern. Qué cambia entre un monolito y microservicios, y cuándo conviene cada uno. Cómo funciona una arquitectura en capas, o una separada por dominio. La mayoría de las veces no sabe, y no sabe porque nunca lo estudió. Sabe pedirle código a la IA, y cuando el sistema crece y empiezan los problemas de arquitectura, no tiene ni el vocabulario para entender qué está mal.

Con la infraestructura es peor. Hay mucha gente que se presenta como desarrollador y nunca abrió la consola de AWS, nunca entró a Azure y no sabe qué significa GCP. En su lugar usa Supabase y Firebase, y cree que está haciendo infraestructura.

No tengo nada contra Supabase en sí. Por debajo es un Postgres, con autenticación, storage y una API REST generada encima, es open source, el servicio gestionado [corre en AWS](https://supabase.com/docs/guides/platform/regions) y lo puedes hospedar tú mismo. Lo que me molesta es quien lo usa sin tener idea de nada de eso. No sabe que hay un Postgres abajo, no sabe que la seguridad depende de algo llamado RLS (Row Level Security, las reglas que dicen qué usuario puede leer qué fila de la base) y no sabe que, si no lo configura, cualquiera con la clave pública del frontend lee la base entera.

En 2025 un investigador analizó 1.645 apps hechas con Lovable y encontró 170 exponiendo datos por RLS mal configurada, con emails, teléfonos, datos de pago y claves de API filtrándose, y eso se convirtió en la [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757). En febrero de 2026 Wiz encontró [la base entera de Moltbook abierta](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) por el mismo motivo, con cerca de 1,5 millones de tokens expuestos, y el fundador había dicho en público que no escribió una línea de código. Yo mismo encontré claves expuestas analizando SaaS por ahí, y en YouTube hay un montón de videos de gente mostrando lo fácil que es explotar estas apps.

### Firebase no es "la base de datos"

He visto a mucha gente llamar a Firebase base de datos, y peor, creer de verdad que es la base adecuada para un sistema grande en producción, guardando datos de usuarios, porque "es más rápido para empezar". Firebase es una plataforma, y las bases que tiene adentro son [Firestore y Realtime Database](https://firebase.google.com/docs/database/rtdb-vs-firestore). Cuando un dev dice "base de datos", casi todos piensan en un Postgres o un MySQL, una base relacional, con SQL. Firestore es una base de documentos, NoSQL. Y ahí es donde cae el junior.

Una base NoSQL no es mala, Amazon guarda muchas cosas en DynamoDB. El error es agarrar un dato relacional, que necesita join, transacción e integridad, y meterlo en una base de documentos sin modelar nada.

Conozco el dolor de cabeza porque trabajé en un proyecto así, con algunos cientos de miles de usuarios, la base en Firestore y el backend en un montón de Cloud Functions. El costo era altísimo. Necesitábamos relaciones entre los datos y no podíamos hacerlas bien, porque la base no es relacional. No había un estándar de reglas de seguridad, así que prácticamente cualquier cosa podía cambiar cualquier documento. Muchos datos no tenían estructura ninguna, un documento era de una forma y el de al lado de otra. Y migrar aquello era un sufrimiento.

### Lovable no es una herramienta de dev

Para hacer un prototipo y validar una idea, Lovable es buenísimo y no tengo nada contra él. Lo que me indigna es la gente tan convencida de que se volvió desarrollador que cree que Lovable es la herramienta de un dev, sin tener idea de cómo es el setup de IA de quien programa de verdad.

El mío, por ejemplo, es Claude Code con algunas decenas de skills que escribí, un montón de hooks y miles de reglas de lint y de Stylelint para obligar al código a salir con el estándar que quiero. En la startup tenemos decenas de miles de tests unitarios, un hook que corre antes de cada push, un hook al hacer deploy, un pipeline de CI/CD enorme y un sanity check que simula un usuario real después de cada deploy. En el día a día tengo de seis a ocho chats de IA abiertos, cada uno con decenas de subagentes. Quien cree que un dev con IA es escribir un prompt y darle enter nunca oyó hablar de tests unitarios ni de reglas de lint, y si oyó, no sabe usarlos.

Y si crees que exagero con la productividad, mi [WakaTime](https://wakatime.com/@JoaoPster) es público, y arriba en mi sitio está el total de horas que programé.

## Quién vende el atajo

Busca "curso de desarrollador" o "crea tu SaaS sin saber programar" y vas a encontrar un montón de gente prometiendo convertirte en dev en siete días. Está en todos lados, y todo el mundo lo sabe. Nunca compré uno de esos y no lo voy a hacer, porque para mí es una estafa.

Explotan algo que todo ser humano tiene, las ganas de conseguir las cosas rápido, que hoy, con tanta dopamina barata, están más fuertes que nunca. Es el viejo "dinero rápido y fácil", ahora disfrazado de IA.

Lo que más me molesta es que perjudica a los demás, y si hay algo que detesto en la vida es perjudicar al prójimo. Pero el estafador va más allá de perjudicar. Engaña a la persona, le saca la plata y encima la deja atrás, creyendo que aprendió, con una app insegura en producción y sin la base para darse cuenta del tamaño del problema. Yo hice un curso de un año y más de 1.500 horas y sé cuánto me faltaba todavía cuando terminé. Siete días es un chiste.

## La IA multiplica lo que ya eres

La IA es una herramienta, y como toda herramienta aumenta la productividad de quien la usa, pero no hace bueno un código malo y no convierte en desarrollador a quien no lo es.

- Un buen dev con IA sigue siendo un buen dev, solo que entrega diez veces más.
- Un mal dev con IA sigue siendo malo, y entrega diez veces más código malo.
- Quien no es dev sigue sin serlo, y entrega código roto y lleno de fallas de seguridad diez veces más rápido.

He visto devs contratados entregando código con bugs, aleatorio, sin ningún sentido, generado por IA, en más de una empresa. Y es la queja que más veo en internet. En la encuesta de 2025 de Stack Overflow, la frustración número uno de quienes usan IA para programar fue justamente el código ["casi correcto, pero no del todo"](https://survey.stackoverflow.co/2025/ai), que citó el 66% de los devs. Quien no sabe programar no puede ni ver dónde está el "casi".

### La IA como muleta

Hay otro tipo que me molesta, el que usa la IA como muleta. No tiene paciencia, ni perseverancia, ni disciplina para usar la IA para aprender antes de usarla para hacer, y entonces pide todo hecho y sigue adelante sin entender nada.

Sé cómo es porque ya lo hice. Al principio, ya sabía tests unitarios pero no sabía hacer tests de integración, y fui lo bastante soberbio para pedirle a la IA que los hiciera sin entender cómo funcionaban. Salió mal. Me quedé atrapado en un loop, la cosa se rompía, le pedía a la IA que la arreglara, se rompía de nuevo, y no tenía idea de por qué, porque no sabía qué estaba pasando ahí. Cuando me cayó la ficha pensé que había sido muy idiota, bastaba con aprender primero y pedir después.

En enero de 2026 la propia Anthropic publicó un [estudio con 52 ingenieros aprendiendo una biblioteca nueva](https://www.anthropic.com/research/AI-assistance-coding-skills). Los que aprendieron con la IA haciendo el trabajo por ellos sacaron en promedio un 17% menos en una prueba de comprensión que los que escribieron el código a mano, y la mayor diferencia fue en debugging. Y los que usaron la IA para pedir explicaciones y resolver dudas conceptuales aprendieron más. La IA enseña bien, si le pides que te enseñe.

## ¿La IA va a acabar con los desarrolladores?

Con el desarrollador tal como es hoy, creo que sí. El dev va a dejar de escribir código y va a ser la persona que define la arquitectura, la infraestructura, cómo tienen que funcionar las cosas y qué estructura usar. Yo ya trabajo así, la IA escribe y yo decido.

En marzo de 2025 Dario Amodei, CEO de Anthropic, [dijo](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic) que en tres a seis meses la IA iba a escribir el 90% del código. En la misma charla dijo que el programador todavía iba a tener que definir el diseño y la seguridad del sistema, y esa segunda parte casi nadie la repite. Y el puesto de junior sí está más difícil, un [estudio de Stanford](https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine) con datos de nómina muestra que la contratación de personas de 22 a 25 años en los trabajos más expuestos a la IA cayó bastante por debajo de la tendencia, pero los propios autores dicen que no se puede afirmar que la IA sea la causa.

Para mí la carrera de dev no se terminó. Lo que cambió es lo que hay que estudiar. Lo que antes aprendías recién cuando llegabas a senior, hoy el junior lo tiene que aprender desde el principio, porque el código ya lo escribe la IA.

## Lo que estudiaría si empezara hoy

Primero, aprender a aprender. Suena tonto, pero necesitas saber cómo aprendes tú, y Fabio Akita, un dev brasileño muy conocido, tiene [un video de 2020 sobre eso](https://www.youtube.com/watch?v=oUPaJxk6TZ0) (en portugués) que recomiendo, donde resume aprender a aprender como arreglárselas de verdad por cuenta propia. Yo uso IA para armar los cursos con los que estudio, y muestro todo el proceso en la página de [cómo creo mis cursos](/es/cursos/como-los-creo/).

Después, la base. Los conceptos, cómo funciona internet, qué pasa entre el navegador y el servidor. Y escribir código, mucho código. El junior tiene que escribir código, porque escribiéndolo es como entiendes lo que la IA te está entregando.

Y después, mucho antes de lo que aprendíamos antes, las cosas de senior. Arquitectura, de todos los tipos. Infraestructura. Modelado de software, que en [el otro video de Akita](https://www.youtube.com/watch?v=SmYQcaP1Jgw) es representar el mundo real en el código, y para eso necesitas entender el negocio y no solo el lenguaje. Design patterns. Y hasta aprender a emprender.

Dentro de un tiempo voy a escribir otro post mostrando cómo controlo la calidad del código con IA, con un throughput alto y sin tener que revisar cada PR a mano. Ahí se va a ver en la práctica la diferencia entre pedirle código a la IA y programar con ella.
