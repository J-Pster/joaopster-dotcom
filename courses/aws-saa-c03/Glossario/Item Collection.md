---
aliases:
  - "item collection"
  - "item collections"
tags:
  - glossario
  - conceito
---
# Item Collection

Conjunto de todos os itens de uma tabela DynamoDB (e dos seus LSIs) que têm o mesmo valor de partition key. Em tabelas com LSI, cada item collection não pode passar de 10 GB, ou as escritas naquela chave falham.

> [!example] Exemplo
> Um cliente com 5 milhões de pedidos em uma tabela com LSI pode estourar os 10 GB e parar de gravar.

Veja também: [[DynamoDB]], [[LSI]], [[Partition Key]]

## Onde aparece

- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
