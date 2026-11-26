---
aliases:
  - "Switchovers"
  - "failover planejado gerenciado"
  - "managed planned failover"
  - "switchover"
  - "switchover do Aurora"
  - "troca planejada"
tags:
  - glossario
  - conceito
---
# Switchover

Switchover é a troca planejada de papéis entre a instância ou Região primária e uma secundária, sem perda de dados. Serve para manutenção e para ensaiar o plano de recuperação de desastres. No Aurora Global Database, o switchover espera os secundários sincronizarem antes de promover, o que dá RPO zero e tipicamente menos de 30 segundos de indisponibilidade em versões qualificadas; já o failover, usado em interrupções não planejadas, pode perder poucos segundos de dados.

> [!example] Exemplo
> Uma equipe faz o switchover do Aurora Global Database de us-east-1 para eu-west-1 durante uma manutenção, sem perder nenhuma transação.

Veja também: [[Aurora Global Database]], [[Failover]], [[RPO]]

## Onde aparece

- **Módulo 13:** [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
