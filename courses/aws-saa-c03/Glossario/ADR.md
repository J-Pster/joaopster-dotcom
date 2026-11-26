---
aliases:
  - "Architecture Decision Record"
  - "registro de decisão de arquitetura"
tags:
  - glossario
  - conceito
---
# ADR

Registro curto de uma decisão de arquitetura: o contexto, a decisão tomada, as alternativas descartadas e as consequências aceitas. Existe porque, meses depois, ninguém lembra por que o banco é Multi-AZ e não Aurora Global, e sem esse histórico a decisão é refeita ou desfeita por engano. Poucas linhas bastam, desde que registrem o motivo e o custo assumido.

> [!example] Exemplo
> ADR do PropDesk: escolhemos pilot light para o DR (RPO de 15 minutos, RTO de 1 hora) em vez de warm standby, porque o custo extra de cerca de 20% do orçamento não se justifica para o tier 1 com a tolerância atual.

Veja também: [[Arquitetura de Referencia]], [[Trade-off]], [[RPO]], [[RTO]]

## Onde aparece

- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
