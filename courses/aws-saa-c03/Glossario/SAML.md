---
aliases:
  - "AssumeRoleWithSAML"
  - "SAML 2.0"
tags:
  - glossario
  - seguranca
---
# SAML

Padrão de federação baseado em XML em que um provedor de identidade corporativo (como o Active Directory Federation Services) emite uma asserção que o STS troca por credenciais temporárias (AssumeRoleWithSAML). É a base do login único de funcionários e do IAM Identity Center com provedores externos.

> [!example] Exemplo
> O provedor de identidade da empresa envia a asserção SAML e a AWS devolve credenciais da role de analista.

Veja também: [[Federacao]], [[IAM Identity Center]], [[OIDC]], [[STS]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 7:** [[07.05 - Site-to-Site VPN e Client VPN|7.5]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 22:** [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
