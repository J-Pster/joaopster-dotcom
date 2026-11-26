---
aliases:
  - "noisy neighbor"
  - "noisy neighbour"
tags:
  - glossario
  - conceito
---
# Vizinho Barulhento

Problema de ambientes compartilhados em que um tenant que consome muito (CPU, conexões, I/O ou requisições) degrada o desempenho dos demais. Existe porque o pool divide recursos finitos sem separar fisicamente os clientes. Mitiga-se com limites por tenant (rate limit, cotas), filas que suavizam a carga e, para os maiores clientes, recursos dedicados.

> [!example] Exemplo
> Um condomínio importa 50.000 boletos às 9h e satura o banco compartilhado; com limite de taxa por tenant e a importação em fila, os demais condomínios continuam respondendo normalmente.

Veja também: [[Multi-Tenant]], [[Raio de Impacto]], [[Modelo Bridge]]

## Onde aparece

- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]]
