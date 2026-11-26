---
title: 'El harness de Claude Code dejó obsoleto mi workflow'
description: 'Creé un workflow con 20 comandos y 45 agentes y hoy Claude Code hace casi todo eso solo, aquí cuento qué cambió en el harness y qué sigo usando por fuera'
pubDate: 'Nov 26 2026'
tags: ['IA', 'Claude Code', 'Mi opinión', 'Setup']
---

En marzo cerré la versión 1.0 de [Pster's AI Workflow](https://github.com/J-Pster/Psters_AI_Workflow), un plugin que hice para organizar cómo trabaja la IA en mis proyectos, con 20 comandos, 45 agentes, 17 skills, 4 hooks y 8 rules. En mayo, en el [post donde conté mi migración de Cursor a Claude Code](/es/blog/migrei-cursor-para-claude-code/), hasta terminé escribiendo "viva OMC", que era el orquestador de agentes que había instalado encima de Claude Code.

Hoy no uso ninguno de los dos.

Y los dos siguen funcionando, lo que cambió fue el propio Claude Code. Su harness mejoró tanto en estos meses que pasó a hacer solo casi todo lo que yo había armado, y en algunos casos lo hace mejor que mi workflow. Creo que eso vale para la mayoría de los workflows que instalábamos encima de él, el mío es solo el que conozco por dentro.

## ¿Qué es el harness de Claude Code?

El harness es todo lo que corre alrededor del modelo. El modelo, que es Opus o Sonnet, es el que piensa, y el harness es lo que le da las herramientas para actuar, como leer y editar archivos, ejecutar comandos, lanzar otros agentes, manejar el contexto y recordar cosas de una conversación a otra. A mí me gusta pensar que el modelo es el motor y el harness es el resto del auto, y un buen motor en un mal auto no llega a ningún lado.

Durante mucho tiempo el motor fue mejor que el auto. El modelo ya podía con mucho, pero el harness no le daba estructura para organizarse en una tarea grande, y ese hueco es el que vinieron a tapar los workflows, incluido el mío.

## Qué hacía mi workflow

Pster's AI Workflow nació en Cursor y tenía un flujo fijo, que yo corría comando por comando:

```text
/pwf-brainstorm      → define alcance y decisiones
/pwf-plan            → divide la feature en fases
/pwf-checklist, /pwf-clarify, /pwf-analyze   → quality gates opcionales
/pwf-work-plan       → implementa una fase a la vez, hasta terminar
/pwf-review          → revisión con varios agentes
/pwf-commit-changes  → commits estructurados
```

Tenía dos ideas detrás. La primera era la previsibilidad, el propio README decía que los comandos no eligen el camino solos y que el que decide el siguiente paso es el desarrollador. La segunda era usar la documentación como memoria, los comandos leían los docs del proyecto antes de tocar nada y los actualizaban al final, porque la IA se olvidaba de todo de una sesión a otra.

Cuando me pasé a Claude Code todavía faltaba una pieza, que era correr varios agentes al mismo tiempo, y ahí instalé OMC ([oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)), que traía comandos como `/team`, `/ralph` y `/ultrawork` para orquestar agentes en paralelo. Tenía sentido. El modelo no se organizaba bien solo en tareas largas, así que yo le ponía los rieles.

## Qué hace Claude Code solo hoy

Para ver la diferencia yo mismo, armé esta tabla con lo que necesitaba, cómo lo resolvía y cómo está hoy:

| Lo que necesitaba | Cómo lo resolvía antes | Cómo está hoy |
|---|---|---|
| Planificar antes de implementar | `/pwf-brainstorm` + `/pwf-plan` | Claude planifica solo cuando la tarea lo pide |
| Ejecutar por partes | `/pwf-work-plan`, una fase a la vez | Divide el trabajo y lanza subagentes |
| Varios agentes en paralelo | OMC (`/team`, `/ultrawork`) | `/workflow` |
| Revisión con varios agentes | `/pwf-review` | `/code-review` |
| Instrucciones que repito | Rules y skills del plugin | Skills y plugins nativos |
| Memoria del proyecto | Docs mantenidos por el workflow | Memoria de Claude (todavía débil) + ai-memory |

Lo que más me sorprendió fue la orquestación de agentes. Un subagente es un agente que Claude lanza para hacer una parte del trabajo, corre con su propio contexto y devuelve solo el resultado, sin llenar la conversación principal. Con `/workflow` Claude Code arma un flujo que lanza varios de esos y junta lo que producen, algo que antes yo solo lograba con OMC, y las orquestaciones que arma hoy ya van más allá de lo que hacía el OMC de antes.

La sesión también se volvió mucho más flexible. Puedo hacer una pregunta paralela con `/btw` sin interrumpir la tarea que está corriendo, puedo abrir un subchat desde la sesión, y lo que me parece lo mejor es que ahora un chat puede hablar con otro. Una sesión le manda una tarea a otra, la otra responde, y ya no tengo que copiar y pegar entre ellas.

Y Claude empezó a gestionarse solo. Esa secuencia de brainstorm, plan y ejecución por fases, que yo forzaba a punta de comandos, ahora la hace sin que se lo pida, decide cuándo vale la pena planificar, cuándo dividir el trabajo y cuándo llamar a un subagente. Eso mató la idea central de mi workflow. Yo elegía cada paso porque el modelo no sabía elegir, y hoy sí sabe.

Hasta el comando que tenía para armar un workspace con todos los repositorios del proyecto perdió sentido, porque los projects de Claude Code lo hacen de forma nativa, con una sesión central que orquesta subsesiones que ellos llaman tópicos.

## Lo que sigo usando por fuera

Lo primero es [Serena](https://github.com/oraios/serena). Claude Code todavía trabaja con el código usando herramientas básicas de archivos, que solo leen, editan y buscan texto, como lo hace el sistema operativo. Funciona, pero es tosco, para cambiar una función tiene que leer el archivo, encontrar el fragmento y reemplazar el texto. Serena le da a Claude herramientas que entienden el código, como `find_symbol` para encontrar una función o clase, `find_referencing_symbols` para ver quién la usa y `replace_symbol_body` para cambiar su cuerpo sin leer el archivo entero. Gasta menos contexto y se equivoca menos. Creo que algo así va a terminar entrando en el harness, pero todavía no entró.

Lo otro es la memoria. La de Claude está empezando a mejorar pero todavía no es buena, así que uso [ai-memory](https://github.com/akitaonrails/ai-memory) de Akita, que guarda la memoria como archivos markdown versionados en git en un servidor que ejecutas tú mismo, y funciona entre agentes y entre máquinas. Puedo salir de Claude Code en medio de una tarea, abrir otro agente en la misma carpeta y seguir sin explicar la arquitectura de nuevo.

Al final mi setup quedó mucho más pequeño que el del post de mayo:

- Claude Code, con su harness
- Serena
- ai-memory
- mis skills

Todo lo demás lo desinstalé o lo dejé de usar.

## Si lo explicaste dos veces, conviértelo en una skill

El consejo que le daría a quien usa Claude Code hoy es convertir en skill todo lo que tienes que explicar dos veces. Una skill es un paquete de instrucciones que Claude carga cuando la tarea lo pide, escribes una vez cómo hacer algo y él lo sigue cada vez que aparece el tema. Yo tengo skills para hacer deploy, para mi convención de commits y para escribir a mi manera.

Este post es un ejemplo. En la primera versión Claude usó una skill que yo había hecho para mensajes de chat y el texto salió demasiado corto para un blog, así que en lugar de explicarle de nuevo cómo quería el post le pedí que creara una skill solo para posts, con estructura, SEO, las reglas de mi sitio y una lista larga de vicios de texto de IA para evitar. Este texto se reescribió con ella.

Y las skills siguen creciendo. Se están juntando con los connectors, que son las integraciones con servicios externos, en una sola cosa, los plugins. Antes una skill era un archivo `.md`, hoy un plugin puede tener varias skills, varios `.md`, scripts, comandos, connectors y otros archivos de apoyo, que es más o menos lo que intenté armar a mano en Pster's AI Workflow, solo que ahora es nativo.

Si tienes un workflow instalado encima de Claude Code, prueba unas semanas sin él, fíjate qué te hace falta y vuelve a agregar solo eso, mejor como skill. Y cuéntame en los comentarios qué quedó en tu setup.
