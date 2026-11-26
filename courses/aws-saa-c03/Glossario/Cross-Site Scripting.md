---
aliases:
  - "XSS"
  - "cross site scripting"
tags:
  - glossario
  - seguranca
---
# Cross-Site Scripting

O cross-site scripting (XSS) é o ataque em que o invasor faz uma página legítima entregar um script malicioso ao navegador de outra pessoa, geralmente por um campo que a aplicação devolve sem tratar. O script roda com a confiança do site e pode roubar sessão ou dados. O WAF ajuda a bloquear padrões comuns, mas a defesa de fundo é escapar e validar a saída na aplicação.

> [!example] Exemplo
> Um comentário contendo uma tag de script é exibido a todos os visitantes de um blog e envia os cookies de sessão para o servidor do invasor.

Veja também: [[Defesa em Profundidade]], [[SQL Injection]], [[WAF]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
