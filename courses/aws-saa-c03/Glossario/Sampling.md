---
aliases:
  - "amostragem"
  - "regras de amostragem"
  - "sampling"
tags:
  - glossario
  - conceito
---
# Sampling

Sampling no X-Ray é a decisão de registrar só uma fração das requisições como traces, definida por regras. Existe para limitar custo e volume sem perder representatividade. Por padrão, registra a primeira requisição de cada segundo e 5% das demais.

> [!example] Exemplo
> Uma regra de amostragem registra 100% das requisições do endpoint de checkout e 1% das demais.

Veja também: [[Trace]], [[X-Ray]]

## Onde aparece

- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
