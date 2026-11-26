---
aliases:
  - "MessageGroupId"
  - "grupo de mensagens"
  - "message group"
tags:
  - glossario
  - conceito
---
# Message Group

O message group é o conjunto de mensagens de uma fila FIFO (ou de um tópico SNS FIFO) que compartilham o mesmo MessageGroupId e, por isso, são entregues em ordem estrita entre si. Existe para permitir paralelismo: grupos diferentes podem ser processados ao mesmo tempo, mas dentro de um grupo só uma mensagem fica em processamento por vez. Escolher a chave certa (conta, cliente, pedido) equilibra ordem e throughput.

> [!example] Exemplo
> Com o ID do cliente como MessageGroupId, os eventos de cada cliente são processados na ordem e clientes diferentes seguem em paralelo.

Veja também: [[Fila FIFO]], [[Idempotencia]], [[SNS]], [[SQS]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
