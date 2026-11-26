---
aliases:
  - "RawMessageDelivery"
  - "entrega de mensagem crua"
  - "raw message delivery"
tags:
  - glossario
  - conceito
---
# Raw Message Delivery

Atributo por assinatura do SNS que remove o envelope JSON com metadados e entrega ao destino exatamente o corpo publicado. Existe para que consumidores SQS, Firehose e HTTP/S não precisem abrir o campo Message de cada notificação. Em assinaturas SQS aceita no máximo 10 atributos de mensagem.

> [!example] Exemplo
> Uma fila SQS assinante recebe o texto pedido-1 puro, em vez de um JSON com Type, MessageId, TopicArn e Message.

Veja também: [[Fan-out]], [[SNS]], [[SQS]]

## Onde aparece

- **Módulo 15:** [[15.04 - SNS Topicos Fan-out e Filtros|15.4]]
