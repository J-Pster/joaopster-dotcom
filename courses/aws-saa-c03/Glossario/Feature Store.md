---
aliases:
  - "SageMaker Feature Store"
tags:
  - glossario
  - servico
---
# Feature Store

O SageMaker Feature Store é um repositório central de features (as variáveis de entrada de um modelo) e metadados, com uma loja online de baixa latência para inferência em tempo real e uma loja offline para treino e inferência em lote. Existe para que times descubram e reutilizem features em vez de recalculá-las.

> [!example] Exemplo
> Dois times usam a mesma feature 'compras nos últimos 30 dias' lida da loja online na inferência e da offline no treino.

Veja também: [[Model Registry]], [[SageMaker AI]]

## Onde aparece

- **Módulo 24:** [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
