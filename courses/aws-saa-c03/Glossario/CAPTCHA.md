---
aliases:
  - "CAPTCHA do WAF"
tags:
  - glossario
  - seguranca
---
# CAPTCHA

CAPTCHA é um desafio interativo que exige que a pessoa prove ser humana antes de a requisição prosseguir. No AWS WAF é uma ação de regra: sem token válido o cliente recebe o desafio (resposta HTTP 405) e a avaliação para; com token válido, a avaliação continua. Tem tarifa própria.

> [!example] Exemplo
> Uma regra rate-based em /login com ação CAPTCHA pede o desafio a quem excede o limite, em vez de bloqueá-lo de vez.

Veja também: [[Rate-Based Rule]], [[WAF]]

## Onde aparece

- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
