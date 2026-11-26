---
aliases:
  - "limite de taxa"
  - "rate-based rules"
  - "regra baseada em taxa"
tags:
  - glossario
  - seguranca
---
# Rate-Based Rule

Uma rate-based rule do WAF conta as requisições de cada origem (por padrão, o endereço IP) em uma janela de tempo e aplica uma ação, como Block ou CAPTCHA, quando o limite é ultrapassado. Aceita um escopo reduzido (scope-down) para valer só em um caminho, como /login. Existe para frear floods HTTP e tentativas repetidas de login sem bloquear quem usa o site normalmente.

> [!example] Exemplo
> Uma regra limita a 100 requisições a cada 5 minutos por IP no caminho /login; o IP que passa disso é bloqueado até a taxa cair.

Veja também: [[Credential Stuffing]], [[DDoS]], [[Managed Rule Group]], [[WAF]], [[Web ACL]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 14:** [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 24:** [[24.02 - Texto com Comprehend e Translate|24.2]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
