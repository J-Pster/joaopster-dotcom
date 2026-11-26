---
aliases:
  - "OAuth"
  - "OAuth2"
tags:
  - glossario
  - seguranca
---
# OAuth 2.0

O OAuth 2.0 é um protocolo de autorização em que um cliente obtém um access token com escopos limitados para chamar uma API em nome de um usuário ou de si mesmo, sem receber a senha do usuário. Existe para delegar acesso de forma restrita e revogável. O OIDC é uma camada de identidade construída sobre ele.

> [!example] Exemplo
> Um app pede o escopo 'leitura de fotos'; o servidor de autorização emite um access token só com esse escopo e a API rejeita qualquer outra operação com ele.

Veja também: [[JWT]], [[OIDC]], [[User Pool]]

## Onde aparece

- **Módulo 5:** [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
