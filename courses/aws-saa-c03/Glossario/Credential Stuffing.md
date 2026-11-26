---
aliases:
  - "credential stuffing attack"
  - "preenchimento de credenciais"
tags:
  - glossario
  - seguranca
---
# Credential Stuffing

Credential stuffing é o ataque automatizado que testa, em grande escala, pares de e-mail e senha vazados de outros sites contra o login do seu, apostando que as pessoas reutilizam senhas. Existe porque listas vazadas são baratas e fáceis de automatizar. A defesa combina limite de taxa no login, controle de bots, MFA e, no WAF, o grupo de prevenção de tomada de conta (ATP, Account Takeover Prevention).

> [!example] Exemplo
> Um robô tenta 50 mil combinações de e-mail e senha por hora na tela de login; uma rate-based rule com CAPTCHA no caminho /login freia o ataque.

Veja também: [[Bot Control]], [[Cognito]], [[Rate-Based Rule]], [[WAF]]

## Onde aparece

- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
