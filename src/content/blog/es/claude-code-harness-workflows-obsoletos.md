---
title: 'El harness de Claude Code dejó obsoleto mi workflow (y la mayoría de los demás)'
description: 'Creé un workflow con 20 comandos y 45 agentes. Hoy Claude Code hace casi todo eso solo. Qué cambió en el harness y qué sigo usando por fuera.'
pubDate: 'Nov 26 2026'
tags: ['IA', 'Claude Code', 'Mi opinión', 'Setup']
---

En marzo publiqué la versión 1.0 de [Pster's AI Workflow](https://github.com/J-Pster/Psters_AI_Workflow), un plugin con 20 comandos, 45 agentes, 17 skills, 4 hooks y 8 rules para organizar cómo trabaja la IA en un proyecto. En mayo, en el [post sobre mi migración de Cursor a Claude Code](/es/blog/migrei-cursor-para-claude-code/), terminé escribiendo "viva OMC", el orquestador de agentes que había instalado encima de Claude Code.

Hoy no uso ninguno de los dos, y siguen funcionando. Lo que cambió fue el propio Claude Code, su harness evolucionó tanto que pasó a hacer solo casi todo lo que hacían esos workflows, y en algunos casos lo hace mejor. En mi opinión, esto vale para la mayoría de los workflows que instalábamos encima de él. El mío es solo el ejemplo que mejor conozco.

## ¿Qué es el harness de Claude Code?

El harness es todo lo que corre alrededor del modelo. El modelo (Opus, Sonnet) es el que piensa. El harness le da las herramientas para actuar, como leer y editar archivos, ejecutar comandos, lanzar otros agentes, manejar el contexto y recordar cosas entre una conversación y otra.

Una analogía que ayuda es pensar que el modelo es el motor y el harness es el resto del auto. Un buen motor en un mal auto no llega lejos.

Durante mucho tiempo el motor fue mejor que el auto. El modelo ya podía hacer mucho, pero el harness no le daba estructura para organizarse en tareas grandes. Ese hueco es el que vinieron a tapar los workflows.

## Qué hacía mi workflow (y por qué tenía sentido)

Pster's AI Workflow nació para Cursor y tenía un flujo fijo:

```text
/pwf-brainstorm      → define alcance y decisiones
/pwf-plan            → divide la feature en fases
/pwf-checklist, /pwf-clarify, /pwf-analyze   → quality gates opcionales
/pwf-work-plan       → implementa una fase a la vez, hasta terminar
/pwf-review          → revisión con varios agentes
/pwf-commit-changes  → commits estructurados
```

Se apoyaba en dos ideas. La primera era la **previsibilidad**, el propio README decía que los comandos no eligen el camino solos y que el que elige el siguiente paso es el desarrollador. La segunda era la **documentación como memoria**, los comandos leían la documentación del proyecto antes de implementar y la actualizaban al final, porque la IA se olvidaba de todo de una sesión a otra.

Cuando pasé a Claude Code faltaba otra pieza, que era correr varios agentes al mismo tiempo. Para eso instalé OMC ([oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)), que traía comandos como `/team`, `/ralph` y `/ultrawork` para orquestar agentes en paralelo.

El modelo no se organizaba bien solo en tareas largas, así que yo le ponía los rieles.

## Qué hace Claude Code solo hoy

Esta es la comparación con lo que yo había armado:

| Lo que necesitaba | Cómo lo resolvía antes | Cómo es hoy |
|---|---|---|
| Planificar antes de implementar | `/pwf-brainstorm` + `/pwf-plan` | Claude planifica solo cuando la tarea lo pide |
| Ejecutar por partes | `/pwf-work-plan`, una fase a la vez | Divide el trabajo y lanza subagentes |
| Varios agentes en paralelo | OMC (`/team`, `/ultrawork`) | `/workflow` |
| Revisión con varios agentes | `/pwf-review` | `/code-review` |
| Instrucciones que repito | Rules y skills del plugin | Skills y plugins nativos |
| Memoria del proyecto | Docs mantenidos por el workflow | Memoria de Claude (todavía débil) + ai-memory |

### La orquestación de agentes ahora es nativa

Un **subagente** es un agente que Claude lanza para hacer una parte del trabajo. Corre con su propio contexto y devuelve solo el resultado, sin llenar la conversación principal. **Orquestar** es coordinar varios de ellos al mismo tiempo.

Con `/workflow`, Claude Code arma un flujo que lanza varios subagentes y junta lo que producen. Antes eso solo era posible con OMC. Hoy viene de fábrica, y las orquestaciones que arma ya van más allá de las que tenía el OMC de antes.

### Las sesiones son más flexibles

`/btw` te deja hacer una pregunta paralela sin interrumpir la tarea que está corriendo. También se puede abrir un subchat desde la sesión en la que estás.

Y lo que me parece lo mejor es que ahora un chat puede hablar con otro. Una sesión le manda una tarea a otra, la otra responde, y no hace falta copiar y pegar entre ellas.

### Claude se gestiona solo

La secuencia de brainstorm, plan y ejecución por fases, que yo forzaba con comandos, ahora la hace sin que se lo pida. Decide cuándo vale la pena planificar, cuándo dividir el trabajo y cuándo llamar a un subagente.

Con eso, la idea central de mi workflow perdió sentido. Yo elegía cada paso porque el modelo no sabía elegir bien, y hoy sí sabe.

### Los projects reemplazaron mi workspace

Mi workflow tenía un comando solo para crear un workspace con todos los repositorios del proyecto y mantener juntos el plan y la documentación. Los projects de Claude Code lo hacen de forma nativa, con una sesión central que orquesta subsesiones, llamadas tópicos.

## Lo que todavía le falta al harness

### Serena, para buscar y editar código

Claude Code todavía trabaja con herramientas básicas de archivos, que solo leen, editan y buscan texto, como lo hace el sistema operativo. Funciona, pero es tosco. Para cambiar una función, tiene que leer el archivo, encontrar el fragmento y editar el texto.

[Serena](https://github.com/oraios/serena) le da a Claude herramientas que entienden el código, como `find_symbol` para encontrar una función o clase, `find_referencing_symbols` para ver quién la usa y `replace_symbol_body` para cambiar su cuerpo sin leer el archivo entero. Así gasta menos contexto y se equivoca menos. Creo que algo así va a terminar entrando en el harness, pero todavía no entró.

### ai-memory, para recordar las cosas

La memoria de Claude está empezando a mejorar, pero todavía no es muy buena. Por eso uso [ai-memory](https://github.com/akitaonrails/ai-memory), de Akita.

Guarda la memoria como archivos markdown en un servidor que ejecutas tú mismo, versionados en git, y funciona entre agentes y entre máquinas. Puedes salir de Claude Code en medio de una tarea, abrir otro agente en la misma carpeta y seguir sin explicar la arquitectura de nuevo.

## Mi setup hoy

Es mucho más pequeño que el del post de mayo:

- Claude Code, con su harness
- Serena
- ai-memory
- mis skills

Todo lo demás lo desinstalé o lo dejé de usar.

## Si lo explicaste dos veces, conviértelo en una skill

El consejo que le daría a quien usa Claude Code hoy es convertir en skill todo lo que tienes que explicar dos veces.

Una **skill** es un paquete de instrucciones que Claude carga cuando la tarea lo pide. Escribes una vez cómo hacer algo y él lo sigue cada vez que aparece el tema. Yo tengo skills para hacer deploy, para mi convención de commits y para escribir a mi manera.

Este post es un ejemplo. En la primera versión, Claude usó una skill que yo había hecho para mensajes de chat, y el texto salió demasiado corto para un blog. En lugar de explicarle de nuevo cómo quería el post, le pedí que creara una skill solo para posts, con estructura, SEO y las reglas de mi sitio. Este texto se escribió con ella.

Y las skills siguen creciendo. Ahora se están juntando con los connectors, que son las integraciones con servicios externos, en una sola cosa, los **plugins**. Antes una skill era un archivo `.md`. Hoy un plugin puede tener varias skills, varios `.md`, scripts, comandos, connectors y otros archivos de apoyo. Es lo que intenté armar a mano en Pster's AI Workflow, solo que ahora es un formato nativo.

Si tienes un workflow instalado encima de Claude Code, mi consejo es probar unas semanas sin él. Fíjate qué te hace falta y vuelve a agregar solo eso, mejor como skill. Cuéntame en los comentarios qué quedó en tu setup.
