---
aliases:
  - "Amazon MQ para ActiveMQ"
  - "Amazon MQ para RabbitMQ"
  - "AmazonMQ"
  - "MQ"
tags:
  - glossario
  - servico
---
# Amazon MQ

O Amazon MQ é o serviço de message broker gerenciado da AWS para Apache ActiveMQ Classic e RabbitMQ. Existe para quem já usa esses brokers e protocolos (JMS, AMQP, MQTT, OpenWire, STOMP) e quer migrar para a nuvem sem reescrever a aplicação. Diferente do SQS e do SNS, é um broker provisionado (você escolhe a instância e a implantação, como active/standby em duas AZs), e na prova a resposta para aplicações novas costuma ser SQS ou SNS, não o Amazon MQ.

> [!example] Exemplo
> Uma financeira migra o ActiveMQ do datacenter para o Amazon MQ em active/standby de duas AZs e só altera a URL do broker no código.

Veja também: [[AppFlow]], [[MSK]], [[Message Broker]], [[SNS]], [[SQS]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 22:** [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
