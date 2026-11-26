---
aliases:
  - "CloudWatch canary"
  - "Synthetics"
  - "canários do CloudWatch"
tags:
  - glossario
  - servico
---
# CloudWatch Synthetics

O CloudWatch Synthetics executa roteiros (canários) em intervalos regulares que simulam o comportamento do usuário, como acessar uma página ou chamar uma API. Existe para descobrir falhas antes dos clientes. Os resultados viram métricas e podem acionar alarmes.

> [!example] Exemplo
> Um canário faz o fluxo de login e compra a cada 5 minutos e alarma se falhar.

Veja também: [[CloudWatch]], [[CloudWatch Alarm]], [[CloudWatch RUM]]

## Onde aparece

- **Módulo 20:** [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
