---
aliases:
  - "metric streams"
tags:
  - glossario
  - conceito
---
# CloudWatch Metric Streams

É o recurso que envia continuamente as métricas do CloudWatch para um destino, como o Firehose, quase em tempo real. Existe para alimentar ferramentas de terceiros ou um data lake sem consultar a API a cada minuto.

> [!example] Exemplo
> Uma empresa envia todas as métricas da conta para um data lake no S3 via Firehose para análise de longo prazo.

Veja também: [[Metrica]], [[Observabilidade]]

## Onde aparece

- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
