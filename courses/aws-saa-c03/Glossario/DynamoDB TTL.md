---
aliases:
  - "TTL do DynamoDB"
  - "Time to Live do DynamoDB"
tags:
  - glossario
  - servico
---
# DynamoDB TTL

Recurso do DynamoDB que apaga itens sozinho quando chega o horário gravado em um atributo escolhido, sem consumir capacidade de escrita. Serve para expirar sessões, tokens e dados temporários. A exclusão não é instantânea no segundo exato.

> [!example] Exemplo
> Cada sessão de login é gravada com um atributo de expiração, e o DynamoDB a remove depois que o prazo passa.

Veja também: [[DynamoDB]], [[DynamoDB Streams]], [[TTL de Cache]]

## Onde aparece

- **Módulo 14:** [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
