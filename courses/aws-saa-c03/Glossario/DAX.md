---
aliases:
  - "Amazon DAX"
  - "DynamoDB Accelerator"
tags:
  - glossario
  - servico
---
# DAX

Cache em memória gerenciado, feito só para o DynamoDB e compatível com a sua API. Entrega leituras em microssegundos para dados lidos repetidamente, sem exigir que você escreva a lógica de cache. Leituras fortemente consistentes passam direto ao DynamoDB.

> [!example] Exemplo
> Um catálogo lido milhões de vezes por segundo passa pelo DAX, e a aplicação só troca o cliente do DynamoDB pelo cliente do DAX.

Veja também: [[Cache]], [[DynamoDB]], [[ElastiCache]], [[RCU]]

## Onde aparece

- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
