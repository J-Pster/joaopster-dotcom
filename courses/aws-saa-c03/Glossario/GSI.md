---
aliases:
  - "Global Secondary Index"
  - "Índice secundário global"
tags:
  - glossario
  - dados
---
# GSI

Índice secundário do DynamoDB com chaves de partição e ordenação próprias, diferentes das da tabela. Pode ser criado depois, tem capacidade própria e as leituras são eventualmente consistentes. Permite consultar por outro padrão de acesso.

> [!example] Exemplo
> A tabela é consultada por ID do cliente, e um GSI por e-mail permite buscar o cliente pelo e-mail.

Veja também: [[DynamoDB]], [[LSI]], [[Partition Key]], [[Sort Key]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
