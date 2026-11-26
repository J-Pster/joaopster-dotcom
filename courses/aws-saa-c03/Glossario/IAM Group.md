---
aliases:
  - "IAM group"
  - "grupo IAM"
  - "grupos IAM"
tags:
  - glossario
  - seguranca
---
# IAM Group

Coleção de usuários IAM à qual se anexam policies, para que todos os membros as herdem. Um grupo não é um principal (não pode ser citado em um Principal de resource policy ou de trust policy) e não pode conter outros grupos. Serve para organizar permissões por função de trabalho.

> [!example] Exemplo
> O grupo Desenvolvedores recebe a policy de acesso ao CodeCommit, e cada nova pessoa entra no grupo em vez de receber a policy individualmente.

Veja também: [[IAM Policy]], [[IAM Role]], [[IAM User]], [[Identity-Based Policy]]

## Onde aparece

- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]]
- **Módulo 5:** [[05.05 - IAM Identity Center|5.5]]
