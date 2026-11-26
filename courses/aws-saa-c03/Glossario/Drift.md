---
aliases:
  - "desvio de configuração"
  - "drift do Control Tower"
tags:
  - glossario
  - conceito
---
# Drift

Situação em que algo gerenciado pelo Control Tower é alterado fora dele, como uma conta movida para outra OU ou um role removido. O serviço detecta o drift e orienta a reparar a landing zone ou o controle afetado. Evitar mudanças manuais nos recursos gerenciados reduz o problema.

> [!example] Exemplo
> Alguém move uma conta para fora da OU gerenciada e o Control Tower aponta o drift.

Veja também: [[Control Tower]], [[Landing Zone]]

## Onde aparece

- **Módulo 5:** [[05.04 - Control Tower e Landing Zone|5.4]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
