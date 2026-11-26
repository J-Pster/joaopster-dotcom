---
aliases:
  - "controle baseado em papéis"
  - "controle de acesso por função"
  - "role-based access control"
tags:
  - glossario
  - seguranca
---
# RBAC

Estratégia de autorização em que as permissões são agrupadas em roles ou grupos por função de trabalho, e as pessoas ganham acesso entrando nelas. É simples de entender e auditar, mas cresce linearmente: cada projeto ou time novo tende a exigir uma role e uma policy novas.

> [!example] Exemplo
> As roles dev-projeto-a e dev-projeto-b dão a cada time acesso apenas aos recursos do respectivo projeto.

Veja também: [[ABAC]], [[IAM Group]], [[IAM Role]], [[Menor Privilegio]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 14:** [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
