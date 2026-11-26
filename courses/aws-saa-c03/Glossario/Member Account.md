---
aliases:
  - "conta membro"
  - "contas membros"
  - "member account"
  - "member accounts"
tags:
  - glossario
  - conceito
---
# Member Account

Qualquer conta de uma organização que não seja a conta de gerenciamento. Ela está sujeita aos SCPs herdados da raiz e das OUs e tem a cobrança consolidada na conta de gerenciamento. O Organizations pode criar nela o role OrganizationAccountAccessRole para dar acesso administrativo à conta de gerenciamento.

> [!example] Exemplo
> Cada time recebe uma conta membro para a sua aplicação e vê os custos separados por conta, mesmo com uma fatura única.

Veja também: [[Management Account]], [[OrganizationAccountAccessRole]], [[Organizational Unit]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.05 - IAM Identity Center|5.5]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 25:** [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
