---
aliases:
  - "OU"
  - "OUs"
  - "unidade organizacional"
  - "unidades organizacionais"
tags:
  - glossario
  - conceito
---
# Organizational Unit

Contêiner dentro do Organizations que agrupa contas e outras OUs, formando uma hierarquia. As políticas anexadas a uma OU valem para todas as contas dentro dela e para as OUs filhas. É a forma de aplicar o mesmo guardrail a um conjunto de contas sem configurar uma por uma.

> [!example] Exemplo
> A OU Workloads/Prod recebe um SCP mais restritivo do que a OU Workloads/Sandbox, e cada nova conta herda o que a OU define.

Veja também: [[Management Account]], [[Organizations]], [[SCP]]

## Onde aparece

- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
