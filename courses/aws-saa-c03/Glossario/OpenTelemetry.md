---
aliases:
  - "ADOT"
  - "AWS Distro for OpenTelemetry"
  - "OTel"
tags:
  - glossario
  - conceito
---
# OpenTelemetry

OpenTelemetry é um padrão aberto de instrumentação para gerar métricas, logs e traces de forma neutra em relação ao fornecedor. Na AWS, a distribuição ADOT envia esses dados para X-Ray, CloudWatch e Prometheus gerenciado. É o caminho recomendado depois que o SDK do X-Ray entrou em modo de manutenção.

> [!example] Exemplo
> A aplicação usa o SDK do OpenTelemetry e o collector envia os traces ao X-Ray.

Veja também: [[Observabilidade]], [[Trace]], [[X-Ray]]

## Onde aparece

- **Módulo 17:** [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
