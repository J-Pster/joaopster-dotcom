---
aliases:
  - "ACFP"
  - "ATP"
  - "Account Creation Fraud Prevention"
  - "Account Takeover Prevention"
  - "Fraud Control"
tags:
  - glossario
  - seguranca
---
# AWS WAF Fraud Control

Fraud Control é o conjunto de managed rule groups pagos do AWS WAF contra fraude em contas: o ATP (Account Takeover Prevention) detecta tentativas de roubo de conta e credential stuffing na página de login, e o ACFP (Account Creation Fraud Prevention) detecta a criação fraudulenta de contas. Não estão incluídos no preço padrão do WAF nem na assinatura do Shield Advanced.

> [!example] Exemplo
> Uma loja ativa o ATP no web ACL do /login para barrar bots que testam senhas vazadas, mesmo vindos de milhares de IPs.

Veja também: [[Rate-Based Rule]], [[Shield]], [[WAF]]

## Onde aparece

- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
