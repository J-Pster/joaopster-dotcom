---
aliases:
  - "anomaly detection"
  - "banda de anomalia"
  - "detecção de anomalias"
tags:
  - glossario
  - conceito
---
# Anomaly Detection

A detecção de anomalias do CloudWatch usa aprendizado de máquina para modelar o comportamento normal de uma métrica e traçar uma banda esperada. Existe porque limites fixos falham em métricas com sazonalidade (picos diários ou semanais). Um alarme pode disparar quando o valor sai da banda.

> [!example] Exemplo
> Um alarme de tráfego dispara quando o número de requisições foge da banda aprendida para aquele horário.

Veja também: [[CloudWatch Alarm]], [[Metrica]]

## Onde aparece

- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
