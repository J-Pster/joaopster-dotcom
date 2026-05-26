---
title: 'Migré de Cursor a Claude Code y ahorré $400'
description: 'Mi opinión honesta después de una semana con Claude Code, OMC y Serena. El setup completo con MCPs, workflows y lo que realmente funciona.'
pubDate: 'May 25 2026'
tags: ['IA', 'Claude Code', 'Mi opinión', 'Setup']
---

## Mi opinión

Fue una de las mejores cosas que hice.

Antes usaba Cursor, solo Cursor y algunos MCPs, confiaba en cómo gestionaba los tokens, comprimía el contexto, manejaba los agentes y todo lo demás. Pero el mes pasado gasté $600 dólares en tokens en Cursor, y sinceramente la calidad del código no era de las mejores, porque en Cursor siempre usaba el modo Auto, que probablemente usa la mayor parte del tiempo su modelo "Composer".

## La migración

Cuando me pasé a Claude Code, primero me topé con un problema obvio: Claude Code no soporta workspaces multi-repo, al menos no todavía. Eso me decepcionó un poco, pero encontré la vuelta. Usando el Claude Code CLI (que me pareció mucho mejor que la UI, porque como corro decenas de subagentes en simultáneo, las UIs empiezan a trabarse) creé una carpeta padre y metí mis sub-repos dentro. Eso resolvió el problema, y por increíble que parezca, Claude lo maneja bien.

Pero a Claude le faltaban algunas cosas: un orquestador de agentes y workflows. Los workflows son flujos de trabajo. Por ejemplo, siempre me gusta pedirle a la IA que trace un plan de cómo resolver la tarea y recién después implementarlo por partes. Ahí fue cuando me crucé con un tal Ruflo.

## La trampa de Ruflo

A primera vista, promete todo. Pero después de usarlo unas horas, empecé a notar que las cosas no funcionaban como "en la propaganda". Hasta que cloné el repositorio y empecé a encontrar varios huecos: funciones sin conexión, features que eran solo mocks.

Ahí decidí investigar, y mira lo que encontré: [Ruflo / Claude-Flow: 300+ MCP Tools Exposed, 99% Theater, 1% Real, 5x Token Waste](https://www.reddit.com/r/ClaudeAI/comments/1tgwn1c/ruflo_claudeflow_300_mcp_tools_exposed_99_theater/), y roman-rr había llegado a la misma conclusión a la que yo había llegado minutos antes.

En ese momento me di cuenta de cuánta gente que no entiende nada de IA te vende IA como si fuera un martillo de oro que resuelve todos tus problemas sin que sepas nada. Si yo no fuera un desarrollador "de verdad", no lo habría notado.

## El setup que realmente funciona

Entonces decidí meterme de lleno y descubrir cómo mejorar de verdad mi Claude Code. Investigando bastante llegué a lo siguiente:

**Claude Code CLI**: por rendimiento de la UI cuando se corren muchos agentes.

**Un orquestador de agentes de verdad: [OH MY CLAUDE CODE](https://github.com/oh-my-claude-code/oh-my-claude-code)**: workflows reales, comandos que funcionan, sin teatro.

**Plugins (MCPs):**
- `context7`: documentación actualizada de cualquier lib directo en el contexto
- `exa`: búsqueda web de verdad
- `filesystem`: acceso al sistema de archivos
- `memory` + `qdrant-memory`: memoria persistente entre sesiones
- **`serena`**: la frutilla del postre (análisis semántico de código, navegación por símbolos, refactorización segura)
- `aws-api`, `aws-docs`: para quienes trabajan con AWS

**Comandos:** OMC trae varios comandos de workflow como `/team`, `/ralph`, `/ralplan`, `/ultrawork` y muchos más para correr tareas específicas de maneras específicas.

## El resultado después de 1 semana

Pagué $200 por el plan Max 20X, usé Sonnet 4.6, usé Opus 4.7, pero lo usé con todo:

> wk: 64%, lo usé mucho más de lo que usaba en Cursor, y ni siquiera llegué a usar el 100% de mi límite semanal.

**¡VIVA CLAUDE CODE, y OMC, y SERENA!**

## Conclusión

Si estás pagando caro en Cursor y no estás conforme con la calidad, vale mucho la pena probar Claude Code con este setup. La curva de aprendizaje existe, pero el retorno es proporcional.

Si quieren que explique en detalle qué hacen Serena, OMC, qdrant-memory y memory, pídanmelo en los comentarios y hago un post dedicado.

---

*Post publicado originalmente en [r/brdev](https://www.reddit.com/r/brdev/comments/1tkrone/eu_migrei_do_cursor_para_o_claude_code_e/).*
