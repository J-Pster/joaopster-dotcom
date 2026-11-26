---
aliases:
  - "SourceIdentity"
  - "sts:SourceIdentity"
tags:
  - glossario
  - seguranca
---
# Source Identity

Valor definido no AssumeRole que identifica a pessoa ou o sistema original por trás de uma sessão de role. Persiste nas assunções seguintes do role chaining, não pode ser alterado depois e aparece no CloudTrail, o que serve para auditar quem usou uma role compartilhada.

> [!example] Exemplo
> Uma engenheira assume a role Admin informando SourceIdentity ana@empresa; mesmo depois de encadear outra role, o CloudTrail ainda mostra ana@empresa como origem.

Veja também: [[AssumeRole]], [[Role Chaining]], [[STS]]

## Onde aparece

- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
