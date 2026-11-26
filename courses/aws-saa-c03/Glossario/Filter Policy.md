---
aliases:
  - "filter policy"
  - "filtro de assinatura"
  - "política de filtro"
tags:
  - glossario
  - conceito
---
# Filter Policy

A filter policy é uma política JSON anexada a uma assinatura do SNS que define quais mensagens o assinante recebe, com base nos atributos ou no corpo da mensagem. Existe para evitar que cada consumidor receba tudo e descarte o que não interessa, economizando custo e código. Alterações na política levam alguns minutos (até 15) para valer plenamente.

> [!example] Exemplo
> A assinatura da fila de logística tem uma filter policy que aceita só mensagens com o atributo regiao igual a sul.

Veja também: [[EventBridge]], [[Fan-out]], [[Pub-Sub]], [[SNS]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
