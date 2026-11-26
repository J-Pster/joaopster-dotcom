---
aliases:
  - "mean time to recovery"
  - "mean time to repair"
  - "tempo médio de recuperação"
tags:
  - glossario
  - conceito
---
# MTTR

MTTR é o tempo médio entre o início de uma queda e a recuperação do serviço, calculado sobre vários eventos. Diferente do RTO, que é um alvo máximo para um evento, o MTTR é uma média observada. Reduzi-lo, com automação, detecção rápida e infraestrutura imutável, costuma melhorar mais a disponibilidade do que tentar evitar toda falha.

> [!example] Exemplo
> Se três quedas duraram 6, 12 e 18 minutos, o MTTR é de 12 minutos.

Veja também: [[Disponibilidade]], [[Infraestrutura Imutavel]], [[MTBF]], [[RTO]]

## Onde aparece

- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
