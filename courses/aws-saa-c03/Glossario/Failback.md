---
aliases:
  - "failback"
  - "retorno à Região original"
tags:
  - glossario
  - conceito
---
# Failback

O failback é a volta da operação à Região ou ao ambiente original depois de um failover, com os dados reconciliados. Costuma ser mais difícil que o failover, porque é preciso sincronizar o que mudou no ambiente de recuperação, e por isso é a etapa mais esquecida nos planos de DR.

> [!example] Exemplo
> Depois de operar um mês na Região B, o time replica os dados de volta para a Região A e migra o tráfego.

Veja também: [[Elastic Disaster Recovery]], [[Failover]], [[Game Day]]

## Onde aparece

- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
