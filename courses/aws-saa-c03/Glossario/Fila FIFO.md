---
aliases:
  - "FIFO queue"
  - "SQS FIFO"
  - "fila FIFO"
  - "fila de ordem estrita"
tags:
  - glossario
  - servico
---
# Fila FIFO

A fila FIFO do SQS preserva a ordem de envio dentro de cada grupo de mensagens e evita duplicatas dentro de uma janela de deduplicação de 5 minutos. Existe para cargas em que a ordem muda o resultado, como operações sobre a mesma conta. O custo é um teto de throughput menor que o da fila padrão, que pode ser ampliado com o modo high throughput. O nome da fila precisa terminar em .fifo e o tipo não pode ser alterado depois.

> [!example] Exemplo
> Depósitos e saques da mesma conta bancária entram em uma fila FIFO com o ID da conta como MessageGroupId, para serem aplicados na ordem.

Veja também: [[Fila Padrao]], [[Idempotencia]], [[Message Group]], [[SQS]]

## Onde aparece

- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
