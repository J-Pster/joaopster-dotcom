---
aliases:
  - "custom resource"
  - "recurso personalizado"
tags:
  - glossario
  - conceito
---
# Custom Resource

Custom resource permite executar lógica própria, normalmente uma função Lambda, durante a criação, atualização e exclusão de uma stack. Existe para recursos ou etapas que o CloudFormation não suporta nativamente. A função deve responder ao CloudFormation, ou a stack espera até estourar o tempo.

> [!example] Exemplo
> Um custom resource consulta uma API externa e devolve um valor para o restante da stack.

Veja também: [[CloudFormation]], [[Stack]]

## Onde aparece

- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
