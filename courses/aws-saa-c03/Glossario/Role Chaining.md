---
aliases:
  - "encadeamento de roles"
  - "role chain"
tags:
  - glossario
  - seguranca
---
# Role Chaining

Uso de uma role para assumir outra, com as credenciais temporárias de uma sessão chamando AssumeRole de novo. Ao encadear, a duração da sessão fica limitada a 1 hora, mesmo que a role de destino permita um máximo maior. A sessão encadeada também perde as permissões da role anterior.

> [!example] Exemplo
> Um operador assume a role A e, a partir dela, a role B; a sessão de B dura no máximo 1 hora.

Veja também: [[AssumeRole]], [[Credencial Temporaria]], [[IAM Role]], [[STS]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
