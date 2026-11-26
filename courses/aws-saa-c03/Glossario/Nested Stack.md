---
aliases:
  - "nested stack"
  - "nested stacks"
  - "stack aninhada"
tags:
  - glossario
  - conceito
---
# Nested Stack

Nested stack é uma stack criada por outra stack, usando o tipo AWS::CloudFormation::Stack. Existe para reaproveitar componentes padrão e dividir templates grandes, contornando o limite de 500 recursos por template.

> [!example] Exemplo
> O template pai chama o template filho de rede e o template filho de banco.

Veja também: [[CloudFormation]], [[Stack]]

## Onde aparece

- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
