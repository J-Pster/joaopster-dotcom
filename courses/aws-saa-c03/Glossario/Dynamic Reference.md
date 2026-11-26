---
aliases:
  - "dynamic reference"
  - "referência dinâmica"
  - "resolve:ssm"
tags:
  - glossario
  - conceito
---
# Dynamic Reference

Referência dinâmica é uma sintaxe do CloudFormation que busca um valor do Parameter Store ou do Secrets Manager no momento da operação. Existe para que segredos nunca apareçam em texto no template. O formato é {{resolve:ssm:nome}} ou {{resolve:secretsmanager:...}}.

> [!example] Exemplo
> A senha do banco vem do Secrets Manager por referência dinâmica, sem constar no template.

Veja também: [[CloudFormation]], [[Parameter Store]], [[Secrets Manager]]

## Onde aparece

- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
