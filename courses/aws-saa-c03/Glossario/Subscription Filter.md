---
aliases:
  - "subscription filter"
tags:
  - glossario
  - conceito
---
# Subscription Filter

Subscription filter entrega em tempo quase real os eventos de um log group a um destino como Kinesis Data Streams, Amazon Data Firehose ou Lambda. Existe para processar, arquivar ou centralizar logs fora do CloudWatch. É o caminho para enviar logs de várias contas a um destino central.

> [!example] Exemplo
> Um filtro de assinatura envia os logs de produção ao Firehose, que os grava em um bucket S3.

Veja também: [[CloudWatch Logs]], [[Log Group]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]]
