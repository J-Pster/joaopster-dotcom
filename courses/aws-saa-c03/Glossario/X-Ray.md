---
aliases:
  - "AWS X-Ray"
  - "Amazon X-Ray"
tags:
  - glossario
  - servico
---
# X-Ray

Serviço de rastreamento distribuído que acompanha uma requisição pelos vários serviços que ela atravessa e mostra onde há lentidão ou erro. Existe porque, em sistemas desacoplados, olhar um componente isolado não explica o problema. Complementa métricas e logs do CloudWatch.

> [!example] Exemplo
> Ao investigar uma API lenta, o X-Ray mostra que o atraso vem da chamada ao banco, e não da função em si.

Veja também: [[CloudWatch]], [[Desacoplamento]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 15:** [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 20:** [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
