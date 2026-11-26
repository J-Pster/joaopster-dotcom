---
aliases:
  - "Stream do DynamoDB"
  - "Streams do DynamoDB"
  - "stream do DynamoDB"
tags:
  - glossario
  - servico
---
# DynamoDB Streams

O DynamoDB Streams é o recurso que registra, em ordem, as alterações (inserção, atualização, exclusão) feitas nos itens de uma tabela do DynamoDB por 24 horas. Existe para que outras aplicações reajam às mudanças em tempo quase real, por exemplo com uma função Lambda, sem varrer a tabela. A prova o associa a replicação, auditoria e atualização de índices ou cópias derivadas.

> [!example] Exemplo
> Cada alteração em um pedido no DynamoDB dispara uma função Lambda que atualiza o índice de busca.

Veja também: [[DynamoDB]], [[DynamoDB TTL]], [[Global Tables]], [[Kinesis Data Streams]], [[Lambda]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
