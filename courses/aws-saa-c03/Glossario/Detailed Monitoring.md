---
aliases:
  - "detailed monitoring"
  - "monitoramento detalhado"
tags:
  - glossario
  - conceito
---
# Detailed Monitoring

O monitoramento detalhado do EC2 publica as métricas da instância a cada 1 minuto, em vez dos 5 minutos do monitoramento básico. Ele existe para quem precisa reagir rápido, por exemplo em políticas de Auto Scaling, e tem custo adicional. Não adiciona métricas novas como memória, apenas aumenta a frequência.

> [!example] Exemplo
> Um Auto Scaling group que precisa reagir a picos em 2 minutos habilita o monitoramento detalhado das instâncias.

Veja também: [[CloudWatch]], [[Metrica]]

## Onde aparece

- **Módulo 9:** [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
