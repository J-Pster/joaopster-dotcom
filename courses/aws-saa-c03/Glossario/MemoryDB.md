---
aliases:
  - "Amazon MemoryDB"
  - "MemoryDB for Redis"
tags:
  - glossario
  - servico
---
# MemoryDB

Banco de dados em memória durável e compatível com Redis. Guarda os dados em memória para velocidade e grava as escritas em um log transacional em várias AZs, o que permite usá-lo como banco principal, não só como cache.

> [!example] Exemplo
> Um sistema de recomendações em tempo real usa o MemoryDB como armazenamento principal, com leituras em microssegundos.

Veja também: [[DynamoDB]], [[ElastiCache]], [[Redis]], [[Valkey]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 25:** [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]]
