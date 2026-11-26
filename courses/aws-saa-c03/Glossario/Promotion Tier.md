---
aliases:
  - "nível de prioridade de promoção"
  - "prioridade de promoção"
  - "promotion tier"
  - "promotion tiers"
tags:
  - glossario
  - conceito
---
# Promotion Tier

O promotion tier é a prioridade, de 0 a 15, que define qual Aurora Replica é promovida a writer em um failover. A menor numeração vence, e em empate vence a instância de maior classe. Uma réplica criada pelo Aurora Auto Scaling nasce no tier 15.

> [!example] Exemplo
> Duas réplicas nos tiers 1 e 5: a do tier 1 é promovida.

Veja também: [[Aurora Replica]], [[Failover]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]]
