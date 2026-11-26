---
aliases:
  - "adaptive capacity"
  - "capacidade adaptativa"
tags:
  - glossario
  - conceito
---
# Adaptive Capacity

Recurso do DynamoDB, ligado por padrão e sem custo extra, que redistribui capacidade para partições mais acessadas e pode isolar um item muito quente em uma partição própria. Ajuda em desequilíbrios moderados, mas não ultrapassa o teto por partição.

> [!example] Exemplo
> Uma partição recebe o dobro do tráfego das outras; a adaptive capacity lhe dá mais da capacidade da tabela, evitando throttling.

Veja também: [[DynamoDB]], [[Hot Partition]], [[RCU]], [[WCU]]

## Onde aparece

- **Módulo 14:** [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]]
