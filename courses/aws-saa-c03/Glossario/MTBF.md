---
aliases:
  - "mean time between failures"
  - "tempo médio entre falhas"
tags:
  - glossario
  - conceito
---
# MTBF

MTBF é o tempo médio que um componente funciona entre uma falha e a seguinte. Entra na fórmula de disponibilidade estimada, MTBF dividido por MTBF mais MTTR, e mostra que dá para ganhar disponibilidade de duas formas: falhar menos (MTBF maior) ou se recuperar mais rápido (MTTR menor). É uma média histórica, não uma garantia sobre a próxima falha.

> [!example] Exemplo
> Um servidor com MTBF de 150 dias e MTTR de 1 hora tem disponibilidade estimada de cerca de 99,97%.

Veja também: [[Disponibilidade]], [[MTTR]], [[Ponto Unico de Falha]]

## Onde aparece

- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
