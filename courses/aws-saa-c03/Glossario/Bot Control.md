---
aliases:
  - "AWS WAF Bot Control"
  - "controle de bots"
tags:
  - glossario
  - seguranca
---
# Bot Control

O Bot Control é um grupo gerenciado de regras do WAF que identifica e trata tráfego automatizado, em níveis Common (bots declarados, verificados por assinatura) e Targeted (bots que tentam se disfarçar, com técnicas como desafios e análise de comportamento). Tem cobrança própria além da do WAF. Existe porque nem todo robô é ruim: ele permite liberar buscadores legítimos e conter scraping e abuso.

> [!example] Exemplo
> Um site de ingressos ativa o Bot Control em modo Targeted para barrar robôs de compra automática sem afetar o mecanismo de busca.

Veja também: [[Credential Stuffing]], [[Managed Rule Group]], [[WAF]]

## Onde aparece

- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
