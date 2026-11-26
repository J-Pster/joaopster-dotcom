---
aliases:
  - "Cognito Identity"
  - "identity pools"
  - "pool de identidades"
tags:
  - glossario
  - servico
---
# Identity Pool

O identity pool do Amazon Cognito troca um token confiável (de um user pool, de um provedor social ou de um IdP OIDC ou SAML) por credenciais AWS temporárias, obtidas via STS, associadas a uma role do IAM para usuários autenticados e, opcionalmente, outra para convidados. Pode usar atributos do usuário como tags de sessão para controle de acesso por atributo. Existe porque um aplicativo precisa de credenciais AWS para falar direto com S3 ou DynamoDB sem embutir chaves fixas.

> [!example] Exemplo
> Um app móvel autentica o usuário no user pool, envia o token ao identity pool e recebe credenciais temporárias que só permitem gravar no prefixo do usuário no S3.

Veja também: [[Cognito]], [[IAM Role]], [[JWT]], [[STS]], [[User Pool]]

## Onde aparece

- **Módulo 4:** [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.05 - IAM Identity Center|5.5]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
