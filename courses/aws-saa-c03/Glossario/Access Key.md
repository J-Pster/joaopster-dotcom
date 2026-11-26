---
aliases:
  - "access key ID"
  - "access keys"
  - "chave de acesso"
  - "chaves de acesso"
tags:
  - glossario
  - seguranca
---
# Access Key

Par de credenciais de longo prazo (ID da chave e chave secreta) de um usuário IAM ou do root, usado para assinar chamadas à API e à CLI. Um usuário pode ter até duas, e elas não expiram sozinhas, o que as torna o vetor de vazamento mais comum. A AWS recomenda substituí-las por roles com credenciais temporárias.

> [!example] Exemplo
> Uma chave de acesso esquecida em um repositório público é encontrada por robôs em minutos e usada para minerar criptomoeda.

Veja também: [[Credencial Temporaria]], [[Credential Report]], [[IAM User]], [[MFA]]

## Onde aparece

- **Módulo 1:** [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]], [[02.02 - Excelencia Operacional e Seguranca|2.2]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
