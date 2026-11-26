---
aliases:
  - "Local Secondary Index"
  - "Índice secundário local"
tags:
  - glossario
  - dados
---
# LSI

Índice secundário do DynamoDB que mantém a mesma chave de partição da tabela e muda só a chave de ordenação. Precisa ser criado junto com a tabela e permite leitura fortemente consistente.

> [!example] Exemplo
> Uma tabela por cliente e data de pedido ganha um LSI para ordenar os pedidos do mesmo cliente por valor.

Veja também: [[DynamoDB]], [[GSI]], [[Partition Key]], [[Sort Key]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
