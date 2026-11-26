---
aliases:
  - "Cache write-through"
  - "Escrita direta no cache"
tags:
  - glossario
  - conceito
---
# Write-Through

Estratégia de cache em que toda escrita vai ao banco e ao cache ao mesmo tempo. Mantém o cache sempre atualizado, ao custo de escrever em dois lugares e de guardar dados que talvez nunca sejam lidos.

> [!example] Exemplo
> Ao alterar o preço de um produto, a aplicação grava no banco e no cache na mesma operação.

Veja também: [[Cache]], [[ElastiCache]], [[Lazy Loading]], [[TTL de Cache]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.06 - Estrategias de Cache e DAX|14.6]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
