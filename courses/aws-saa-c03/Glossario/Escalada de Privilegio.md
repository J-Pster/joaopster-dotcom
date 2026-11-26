---
aliases:
  - "elevação de privilégio"
  - "escalada de privilégio"
  - "privilege escalation"
tags:
  - glossario
  - seguranca
---
# Escalada de Privilegio

Situação em que uma identidade consegue obter mais permissões do que deveria, por exemplo criando uma role com acesso de administrador ou anexando uma policy mais forte a si mesma. É o risco principal de delegar administração de IAM sem um teto, e o motivo de existir a permissions boundary.

> [!example] Exemplo
> Um desenvolvedor com iam:CreateRole e iam:AttachRolePolicy cria uma role administradora e a assume, a menos que exista uma boundary obrigatória.

Veja também: [[IAM Policy]], [[Menor Privilegio]], [[Permissions Boundary]], [[SCP]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
