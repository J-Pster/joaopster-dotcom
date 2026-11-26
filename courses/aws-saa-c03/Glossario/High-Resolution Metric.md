---
aliases:
  - "alta resolução"
  - "high resolution metric"
  - "métrica de alta resolução"
tags:
  - glossario
  - conceito
---
# High-Resolution Metric

Métrica de alta resolução é uma métrica personalizada publicada com granularidade de 1 segundo, em vez do mínimo de 1 minuto. Existe para acompanhar picos rápidos que uma média de 1 minuto esconderia. Os alarmes sobre ela podem avaliar em períodos de 10 ou 30 segundos.

> [!example] Exemplo
> Uma aplicação que mede picos de requisições por segundo publica a métrica com StorageResolution igual a 1.

Veja também: [[CloudWatch]], [[Metrica]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
