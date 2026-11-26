---
aliases:
  - "broker de mensagens"
  - "broker de mensageria"
  - "message broker"
tags:
  - glossario
  - conceito
---
# Message Broker

Um message broker é um software intermediário que recebe mensagens de produtores, as guarda e as entrega a consumidores, falando protocolos padrão de mercado como AMQP, MQTT, JMS, STOMP e OpenWire. Existe para desacoplar sistemas e é a base de muitas aplicações corporativas antigas. O Amazon MQ oferece ActiveMQ e RabbitMQ gerenciados para migrar essas aplicações sem reescrever o código.

> [!example] Exemplo
> Uma aplicação Java publica ordens em uma fila JMS de um ActiveMQ; ao migrar para o Amazon MQ, só o endereço do broker muda.

Veja também: [[Amazon MQ]], [[Desacoplamento]], [[SNS]], [[SQS]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
