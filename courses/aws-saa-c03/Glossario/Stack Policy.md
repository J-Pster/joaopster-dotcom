---
aliases:
  - "política de stack"
  - "stack policy"
tags:
  - glossario
  - conceito
---
# Stack Policy

Stack policy é um documento JSON que define quais recursos de uma stack podem ser atualizados e como (Update:Modify, Update:Replace, Update:Delete). Depois de definida, todos os recursos ficam protegidos até receberem um Allow explícito, e ela vale para todos os usuários.

> [!example] Exemplo
> Uma stack policy nega qualquer atualização do banco de dados de produção.

Veja também: [[Rollback Trigger]], [[Stack]], [[Termination Protection]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
