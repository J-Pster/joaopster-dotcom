---
aliases:
  - "pipe do EventBridge"
  - "pipes do EventBridge"
tags:
  - glossario
  - servico
---
# EventBridge Pipes

O EventBridge Pipes conecta uma fonte (como SQS, DynamoDB Streams, Kinesis ou MSK) a um destino, com filtro e enriquecimento opcionais no meio. Existe para eliminar a Lambda de cola que só lê de um lugar e escreve em outro. Você paga apenas pelos eventos que passam do filtro, e o enriquecimento pode usar Lambda, API Gateway, API destination ou Step Functions.

> [!example] Exemplo
> Um pipe lê a fila SQS de pedidos, filtra os de valor alto e inicia uma state machine do Step Functions para cada um.

Veja também: [[Event Bus]], [[EventBridge]], [[SQS]], [[Step Functions]]

## Onde aparece

- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
