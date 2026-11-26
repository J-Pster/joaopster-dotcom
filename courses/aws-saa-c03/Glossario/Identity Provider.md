---
aliases:
  - "IdP"
  - "IdPs"
  - "provedor de identidade"
  - "provedores de identidade"
tags:
  - glossario
  - seguranca
---
# Identity Provider

Sistema que autentica pessoas ou cargas de trabalho e afirma a identidade a outro sistema, por meio de SAML ou OIDC. Exemplos são Okta, Microsoft Entra ID, Active Directory Federation Services e o GitHub. Na AWS, o IAM cadastra o provedor para que roles confiem nele.

> [!example] Exemplo
> O Okta autentica o funcionário e envia à AWS uma asserção SAML dizendo qual role ele pode assumir.

Veja também: [[Federacao]], [[IAM Identity Center]], [[OIDC]], [[SAML]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 7:** [[07.05 - Site-to-Site VPN e Client VPN|7.5]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
