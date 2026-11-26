---
aliases:
  - "AWS IoT Core"
tags:
  - glossario
  - servico
---
# IoT Core

Serviço gerenciado para conectar dispositivos IoT em grande escala usando MQTT e outros protocolos, com autenticação por certificado e regras que encaminham mensagens a serviços AWS. É a escolha para dispositivos novos; para preservar um broker MQTT existente sem mudar os clientes, a resposta é o Amazon MQ.

> [!example] Exemplo
> Milhões de sensores publicam telemetria por MQTT e uma regra grava cada leitura no DynamoDB.

Veja também: [[Amazon MQ]], [[SQS]]

## Onde aparece

- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
