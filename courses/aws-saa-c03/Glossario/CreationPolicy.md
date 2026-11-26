---
aliases:
  - "cfn-init"
  - "cfn-signal"
tags:
  - glossario
  - conceito
---
# CreationPolicy

CreationPolicy é um atributo do CloudFormation que faz um recurso só ser considerado criado depois de receber o número esperado de sinais de sucesso, enviados pelo script cfn-signal. Existe para garantir que a aplicação realmente subiu, e não apenas que a instância existe. Vale para instâncias EC2, grupos de Auto Scaling e wait conditions.

> [!example] Exemplo
> A stack só termina quando a instância envia cfn-signal depois de instalar a aplicação.

Veja também: [[CloudFormation]], [[Stack]]

## Onde aparece

- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
