---
aliases:
  - "EMF"
  - "embedded metric format"
tags:
  - glossario
  - conceito
---
# Embedded Metric Format

O Embedded Metric Format é um formato JSON de log que o CloudWatch Logs extrai automaticamente para criar métricas personalizadas. Existe para publicar métricas de alta cardinalidade a partir de logs, sem chamar a API de métricas. É muito usado em Lambda e contêineres.

> [!example] Exemplo
> Uma função Lambda escreve um log EMF com o tempo de processamento, e a métrica aparece no CloudWatch.

Veja também: [[CloudWatch Logs]], [[Metrica]]

## Onde aparece

- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
