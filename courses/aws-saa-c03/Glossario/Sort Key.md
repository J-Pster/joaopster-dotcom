---
aliases:
  - "Chave de ordenação"
  - "Range key"
tags:
  - glossario
  - dados
---
# Sort Key

Segundo atributo opcional da chave primária do DynamoDB. Dentro de uma mesma chave de partição, os itens ficam ordenados por ela, o que permite buscar faixas (por exemplo, os pedidos de um cliente em um intervalo de datas).

> [!example] Exemplo
> A chave de partição é o ID do cliente e a chave de ordenação é a data do pedido.

Veja também: [[DynamoDB]], [[GSI]], [[LSI]], [[Partition Key]]

## Onde aparece

- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]]
- **Módulo 22:** [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
