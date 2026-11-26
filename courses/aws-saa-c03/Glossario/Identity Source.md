---
aliases:
  - "fonte de identidade"
  - "fontes de identidade"
  - "identity source"
tags:
  - glossario
  - seguranca
---
# Identity Source

De onde o IAM Identity Center obtém usuários e grupos: o diretório do próprio Identity Center, o Active Directory ou um provedor de identidade externo. Cada organização tem uma fonte de identidade ativa de cada vez. Trocar de fonte tem regras sobre o que é mantido ou removido.

> [!example] Exemplo
> A empresa configura o Okta como identity source e usa o SCIM para manter os usuários sincronizados.

Veja também: [[IAM Identity Center]], [[Identity Provider]], [[SCIM]]

## Onde aparece

- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
