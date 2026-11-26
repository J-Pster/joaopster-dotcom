---
aliases:
  - "policy de confiança"
  - "política de confiança"
  - "role trust policy"
  - "trust policies"
tags:
  - glossario
  - seguranca
---
# Trust Policy

Resource-based policy especial de uma role IAM, que define quais principals podem assumi-la. É a única resource-based policy que o IAM aceita em roles, e seu Action costuma ser sts:AssumeRole (ou a variante SAML ou Web Identity). Sem um allow explícito na trust policy, ninguém assume a role, nem administradores da conta.

> [!example] Exemplo
> A role de uma Lambda tem trust policy com Principal lambda.amazonaws.com, e por isso apenas o serviço Lambda pode assumi-la.

Veja também: [[AssumeRole]], [[External ID]], [[IAM Role]], [[Resource-Based Policy]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
