---
aliases:
  - "acesso federado"
  - "federação"
  - "identidade federada"
  - "usuário federado"
tags:
  - glossario
  - seguranca
---
# Federacao

Modelo em que a identidade do usuário é mantida em um provedor externo (diretório corporativo, SAML, OIDC), e a AWS apenas confia nele para entregar uma role com credenciais temporárias. Evita duplicar usuários no IAM e mantém admissão e desligamento no provedor. O IAM Identity Center é a forma recomendada para acesso de pessoas.

> [!example] Exemplo
> Funcionários entram com o login da empresa e assumem a role de desenvolvedor, sem ter usuário IAM.

Veja também: [[IAM Identity Center]], [[IAM Role]], [[OIDC]], [[SAML]], [[STS]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 7:** [[07.05 - Site-to-Site VPN e Client VPN|7.5]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.04 - Simulado 1|27.4]]
