---
aliases:
  - "política de exclusão"
tags:
  - glossario
  - conceito
---
# DeletionPolicy

DeletionPolicy é um atributo do CloudFormation que define o que acontece com um recurso quando ele é removido do template ou a stack é apagada: Delete (padrão), Retain, Snapshot ou RetainExceptOnCreate. Existe para proteger recursos com dados.

> [!example] Exemplo
> Um volume EBS com DeletionPolicy igual a Snapshot gera um snapshot antes de ser apagado.

Veja também: [[Stack]], [[Termination Protection]], [[UpdateReplacePolicy]]

## Onde aparece

- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
