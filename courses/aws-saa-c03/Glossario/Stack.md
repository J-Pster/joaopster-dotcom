---
aliases:
  - "stack"
  - "stack do CloudFormation"
  - "stacks"
tags:
  - glossario
  - conceito
---
# Stack

Stack é a instância de um template do CloudFormation: o conjunto de recursos criados, atualizados e apagados juntos como uma unidade. Existe para gerenciar o ciclo de vida da infraestrutura por inteiro. Se a criação falha, o padrão é fazer rollback.

> [!example] Exemplo
> Apagar a stack de homologação remove todos os recursos que ela criou.

Veja também: [[Change Set]], [[CloudFormation]], [[Template]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
