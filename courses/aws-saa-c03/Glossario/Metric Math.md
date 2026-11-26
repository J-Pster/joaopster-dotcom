---
aliases:
  - "matemática de métricas"
  - "metric math"
tags:
  - glossario
  - conceito
---
# Metric Math

Metric Math permite combinar métricas do CloudWatch com expressões (soma, razão, taxa) para criar uma nova série calculada. Existe para derivar indicadores, como taxa de erro, sem publicar uma métrica extra. O resultado pode ser usado em gráficos e alarmes.

> [!example] Exemplo
> A taxa de erro é calculada como 100 * erros5xx / requisicoes, direto em um alarme.

Veja também: [[CloudWatch Alarm]], [[Metrica]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
