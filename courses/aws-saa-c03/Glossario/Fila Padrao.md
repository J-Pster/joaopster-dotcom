---
aliases:
  - "SQS Standard"
  - "fila Standard"
  - "fila standard"
  - "standard queue"
tags:
  - glossario
  - servico
---
# Fila Padrao

A fila padrão do SQS é o tipo de fila com throughput quase ilimitado, entrega at-least-once e ordem apenas aproximada (best-effort). Existe para os casos em que o volume importa mais que a ordem estrita, e o consumidor precisa tolerar mensagens duplicadas ou fora de ordem. É a escolha padrão quando não há requisito de ordem.

> [!example] Exemplo
> Uma fila que recebe milhões de pedidos de redimensionamento de imagem por hora, processados por workers em paralelo, é uma fila padrão.

Veja também: [[Fila FIFO]], [[Idempotencia]], [[SQS]], [[Visibility Timeout]]

## Onde aparece

- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
