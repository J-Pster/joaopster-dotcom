---
aliases:
  - "PromQL"
tags:
  - glossario
  - conceito
---
# Prometheus

Prometheus é um sistema de código aberto de métricas e alertas muito usado em Kubernetes, que coleta séries temporais e as consulta com a linguagem PromQL. Existe como padrão de fato do ecossistema de contêineres. Na AWS, há uma versão gerenciada para não operar servidores.

> [!example] Exemplo
> Os pods do EKS expõem métricas no formato Prometheus, que o serviço gerenciado armazena.

Veja também: [[Container Insights]], [[Grafana]], [[Managed Service for Prometheus]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
