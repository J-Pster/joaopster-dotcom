---
aliases:
  - "AWS SAM"
  - "SAM CLI"
  - "Serverless Application Model"
tags:
  - glossario
  - servico
---
# SAM

O AWS SAM (Serverless Application Model) é um framework de código aberto para definir aplicações serverless como infraestrutura como código. Ele estende o CloudFormation com uma sintaxe abreviada para funções, APIs e tabelas, e vem com a SAM CLI para testar localmente, empacotar e implantar. Na implantação, o template SAM é transformado em CloudFormation.

> [!example] Exemplo
> Um template SAM de poucas linhas declara uma função Lambda, uma API HTTP e uma tabela DynamoDB, e o comando de deploy cria a pilha do CloudFormation correspondente.

Veja também: [[API Gateway]], [[CloudFormation]], [[Lambda]], [[Serverless Application Repository]]

## Onde aparece

- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
