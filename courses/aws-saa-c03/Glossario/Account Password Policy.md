---
aliases:
  - "password policy"
  - "politica de senha do IAM"
  - "política de senha da conta"
tags:
  - glossario
  - seguranca
---
# Account Password Policy

Configuração da conta que define comprimento mínimo, tipos de caractere, expiração, reuso e se os IAM users podem trocar a própria senha. Vale para as senhas de console dos IAM users da conta, não para o usuário root nem para usuários do IAM Identity Center, e não afeta chaves de acesso. Não existe política de bloqueio por tentativas erradas, por isso a recomendação é combinar com MFA.

> [!example] Exemplo
> Exigir 14 caracteres, expiração em 90 dias e impedir o reuso das últimas 5 senhas de todos os IAM users com um único comando de update-account-password-policy.

Veja também: [[IAM User]], [[MFA]], [[Usuario Root]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]]
