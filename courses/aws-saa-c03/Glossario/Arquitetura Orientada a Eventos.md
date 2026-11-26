---
aliases:
  - "EDA"
  - "arquitetura dirigida a eventos"
  - "arquitetura orientada a eventos"
  - "event-driven architecture"
tags:
  - glossario
  - conceito
---
# Arquitetura Orientada a Eventos

Na arquitetura orientada a eventos, os componentes se comunicam emitindo e reagindo a eventos (fatos que já aconteceram), em vez de chamarem uns aos outros diretamente. Existe para reduzir o acoplamento e permitir que cada parte escale e falhe de forma independente. Na AWS, SNS, EventBridge e SQS são as peças típicas, e o Step Functions entra quando é preciso orquestrar passos.

> [!example] Exemplo
> Quando um objeto chega ao S3, um evento aciona uma Lambda de validação e outra de indexação, sem que o S3 conheça nenhuma delas.

Veja também: [[Coreografia]], [[Event Bus]], [[EventBridge]], [[SNS]]

## Onde aparece

- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
