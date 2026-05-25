---
title: 'Eu migrei do Cursor para o Claude Code e economizei $400'
description: 'Minha opinião honesta depois de uma semana com Claude Code, OMC e Serena. Setup completo com MCPs, workflows e o que realmente funciona.'
pubDate: 'May 25 2026'
tags: ['AI', 'Claude Code', 'My Opinion', 'Setup']
---

## Minha opinião

Foi uma das melhores coisas que eu fiz.

Antes eu usava o Cursor, só ele e alguns MCPs, confiava em como ele gerenciava os tokens, fazia compressão de contexto, gerenciava agentes e tudo mais. Mas mês passado eu gastei $600 dólares em tokens no Cursor, e sinceramente a qualidade do código não era das melhores, pois no Cursor eu sempre usava o modo Auto, que usa provavelmente na maior parte do tempo o modelo "Composer" deles.

## A migração

Quando eu fui para o Claude Code, primeiro percebi um problema óbvio: Claude Code não suporta multi repo workspace, pelo menos não ainda. Isso me decepcionou um pouco, mas eu dei um jeito. Usando o Claude Code CLI (que achei bem melhor que a UI, pois como eu rodo dezenas de sub agentes em simultâneo, UIs começam a travar) eu criei uma pasta pai e coloquei meus sub repos dentro dela. Isso resolveu o problema, e por mais incrível que pareça o Claude lida bem com isso.

Mas faltavam algumas coisas no Claude: um orquestrador de agentes e workflows. Workflows são fluxos de trabalho, por exemplo, eu gosto sempre de pedir para a IA traçar um plano de como resolver a task e só depois implementar ele em partes. Foi aí que eu encontrei um tal de Ruflo.

## A cilada do Ruflo

À primeira vista, promete tudo. Mas depois de usar por algumas horas, comecei a perceber que as coisas não funcionavam como "na propaganda". Até que clonei o repositório e comecei a achar várias brechas: funções sem ligação, features que eram só mock.

Foi aí que decidi pesquisar, e veja o que eu achei: [Ruflo / Claude-Flow: 300+ MCP Tools Exposed, 99% Theater, 1% Real, 5x Token Waste](https://www.reddit.com/r/ClaudeAI/comments/1tgwn1c/ruflo_claudeflow_300_mcp_tools_exposed_99_theater/), e o roman-rr tinha chegado à conclusão que eu acabara de chegar minutos antes.

Neste momento percebi o quanto tem gente que não entende nada de IA vendendo IA para você como se fosse um martelo de ouro, que resolve todos os seus problemas sem você saber nada. Se eu não fosse um desenvolvedor "de verdade" eu não teria notado.

## O setup que realmente funciona

Foi então que decidi entrar de cabeça, descobrir como melhorar de verdade o meu Claude Code. Pesquisando bastante eu cheguei ao seguinte:

**Claude Code CLI**: por questão de desempenho de UI quando se roda muitos agentes.

**Um orquestrador de agentes de verdade: [OH MY CLAUDE CODE](https://github.com/oh-my-claude-code/oh-my-claude-code)**: workflows reais, comandos que funcionam, sem teatro.

**Plugins (MCPs):**
- `context7`: documentação atualizada de qualquer lib direto no contexto
- `exa`: busca web de verdade
- `filesystem`: acesso ao sistema de arquivos
- `memory` + `qdrant-memory`: memória persistente entre sessões
- **`serena`**: a cereja do bolo (análise semântica de código, navegação por símbolos, refatoração segura)
- `aws-api`, `aws-docs`: para quem trabalha com AWS

**Comandos:** o OMC fornece vários comandos de workflow como `/team`, `/ralph`, `/ralplan`, `/ultrawork` e muito mais para rodar tarefas específicas de jeitos específicos.

## O resultado depois de 1 semana

Paguei $200 no plano Max 20X, usei Sonnet 4.6, usei Opus 4.7, mas usei com força mesmo:

> wk: 64%, usei muito mais do que usava no Cursor, e nem sequer consegui usar 100% do meu limite semanal.

**VIVA O CLAUDE CODE, e o OMC e o SERENA!**

## Conclusão

Se você está pagando caro no Cursor e não está satisfeito com a qualidade, vale muito tentar o Claude Code com esse setup. A curva de aprendizado existe, mas o retorno é proporcional.

Se quiserem que eu explique em detalhes o que Serena, OMC, qdrant-memory e memory fazem, me peçam nos comentários e eu faço um post dedicado.

---

*Post originalmente publicado no [r/brdev](https://www.reddit.com/r/brdev/comments/1tkrone/eu_migrei_do_cursor_para_o_claude_code_e/).*
