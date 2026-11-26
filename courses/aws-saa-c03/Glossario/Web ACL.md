---
aliases:
  - "ACL da web"
  - "protection pack"
  - "web ACLs"
tags:
  - glossario
  - seguranca
---
# Web ACL

O web ACL é o contêiner de regras do AWS WAF: você o associa a um recurso (CloudFront, ALB, API Gateway REST, AppSync, Cognito user pool, entre outros) e cada requisição é avaliada pelas regras em ordem de prioridade até uma terminar a avaliação; se nenhuma casar, vale a ação padrão. No novo console o recurso aparece como 'protection pack'. Existe para reunir, em um só lugar, quais ameaças bloquear e como tratar o restante do tráfego.

> [!example] Exemplo
> Um web ACL com prioridade 1 para a lista de IPs bloqueados, prioridade 2 para o grupo gerenciado de SQL injection e ação padrão Allow é associado a um ALB.

Veja também: [[IP Set]], [[Managed Rule Group]], [[Rate-Based Rule]], [[WAF]], [[WCU]]

## Onde aparece

- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
