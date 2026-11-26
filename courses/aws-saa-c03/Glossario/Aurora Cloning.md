---
aliases:
  - "Aurora clone"
  - "clonagem de cluster"
  - "clonagem do Aurora"
  - "clone do Aurora"
  - "clones do Aurora"
tags:
  - glossario
  - servico
---
# Aurora Cloning

A clonagem do Aurora cria um novo cluster que compartilha as páginas de dados da origem, usando copy-on-write. A criação é rápida mesmo para bancos grandes e só gera custo de armazenamento para o que mudar depois. O clone fica na mesma Região e pode ter até 15 por origem.

> [!example] Exemplo
> A equipe clona um cluster de 5 TB em minutos para testar uma migração de schema com dados reais.

Veja também: [[Aurora]], [[Backtrack]], [[DB Snapshot]]

## Onde aparece

- **Módulo 13:** [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
