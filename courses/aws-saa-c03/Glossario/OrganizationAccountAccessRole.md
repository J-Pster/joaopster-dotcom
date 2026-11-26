---
aliases:
  - "role de acesso da organização"
tags:
  - glossario
  - seguranca
---
# OrganizationAccountAccessRole

Role que o Organizations cria automaticamente numa conta membro criada por ele, com confiança na conta de gerenciamento e permissões de administrador. Permite à conta de gerenciamento acessar a conta nova. Contas convidadas não recebem esse role, que deve ser criado manualmente.

> [!example] Exemplo
> Depois de criar uma conta pelo Organizations, o administrador assume o OrganizationAccountAccessRole para configurá-la.

Veja também: [[IAM Role]], [[Management Account]], [[Member Account]]

## Onde aparece

- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]]
