---
aliases:
  - "attribute-based access control"
  - "controle baseado em atributos"
  - "controle de acesso por atributos"
tags:
  - glossario
  - seguranca
---
# ABAC

Estratégia de autorização em que uma policy compara tags (atributos) do principal e do recurso em vez de listar permissões por função. Com isso, projetos novos funcionam apenas marcando recursos e identidades com a tag certa, sem editar policies. O risco é que quem pode editar tags passa a controlar o acesso.

> [!example] Exemplo
> Uma única policy permite StartInstances somente quando a tag projeto do recurso é igual à tag projeto do principal.

Veja também: [[Condition Key]], [[Cost Allocation Tag]], [[Menor Privilegio]], [[RBAC]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.05 - IAM Identity Center|5.5]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
