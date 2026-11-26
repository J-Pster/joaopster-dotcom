---
aliases:
  - "AssumeRoleWithWebIdentity"
  - "OpenID Connect"
  - "web identity"
tags:
  - glossario
  - seguranca
---
# OIDC

Camada de identidade sobre o OAuth 2.0 que entrega um token JWT assinado pelo provedor. Na AWS, o STS troca esse token por credenciais temporárias (AssumeRoleWithWebIdentity). É usado em apps de consumidores, no Cognito e em pipelines de CI/CD, que assumem roles sem guardar chaves.

> [!example] Exemplo
> Um workflow do GitHub Actions se autentica por OIDC e assume uma role de deploy, sem nenhuma chave de acesso guardada.

Veja também: [[Cognito]], [[Federacao]], [[SAML]], [[STS]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
