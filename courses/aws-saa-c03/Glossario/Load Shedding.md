---
aliases:
  - "descarte de carga"
  - "load shedding"
tags:
  - glossario
  - conceito
---
# Load Shedding

Load shedding é descartar deliberadamente parte da carga, a de menor valor, quando o sistema está sobrecarregado, para que o tráfego essencial continue sendo atendido. É uma das alavancas de emergência do Well-Architected: melhor recusar alguns pedidos com rapidez do que deixar todos lentos até o sistema cair.

> [!example] Exemplo
> Em um pico, rejeitar o tráfego de bots e de usuários anônimos para proteger as compras.

Veja também: [[Graceful Degradation]], [[Retry Storm]], [[Throttling]]

## Onde aparece

- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
