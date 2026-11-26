---
aliases:
  - "Lambda authorizer"
  - "authorizer do Lambda"
  - "autorizador Lambda"
  - "custom authorizer"
tags:
  - glossario
  - seguranca
---
# Lambda Authorizer

O Lambda authorizer é um autorizador do API Gateway implementado por uma função Lambda sua: o gateway envia o token ou os cabeçalhos da requisição para a função, que valida a credencial e devolve uma política IAM permitindo ou negando o acesso. É a opção mais flexível, para tokens de terceiros ou regras próprias, mas exige código e adiciona uma invocação por requisição (com cache opcional do resultado).

> [!example] Exemplo
> Uma API aceita tokens emitidos por um provedor de identidade corporativo sem suporte nativo; uma função Lambda authorizer valida a assinatura do token e devolve a política para o gateway.

Veja também: [[API Gateway]], [[Cognito]], [[IAM Policy]], [[Lambda]]

## Onde aparece

- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
