---
aliases:
  - "distributed trace"
  - "rastreamento distribuído"
  - "trace"
tags:
  - glossario
  - conceito
---
# Trace

Trace é o registro do caminho de uma requisição por vários serviços, formado por segmentos e subsegmentos com tempo de cada etapa. Existe para localizar onde uma requisição distribuída perde tempo ou falha. No X-Ray, um trace reúne todos os segmentos de uma mesma requisição.

> [!example] Exemplo
> O trace mostra que 80% da latência de um pedido veio da chamada ao serviço de pagamento.

Veja também: [[OpenTelemetry]], [[Sampling]], [[Service Map]], [[X-Ray]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
