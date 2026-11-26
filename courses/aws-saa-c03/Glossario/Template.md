---
aliases:
  - "template"
  - "template do CloudFormation"
  - "templates"
tags:
  - glossario
  - conceito
---
# Template

Template do CloudFormation é o arquivo JSON ou YAML que declara os recursos desejados. Só a seção Resources é obrigatória; Parameters, Mappings, Conditions e Outputs são opcionais. É a fonte de verdade a partir da qual as stacks são criadas.

> [!example] Exemplo
> Um template declara uma fila SQS e um tópico SNS, e o CloudFormation os cria na ordem certa.

Veja também: [[Change Set]], [[CloudFormation]], [[Stack]]

## Onde aparece

- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
