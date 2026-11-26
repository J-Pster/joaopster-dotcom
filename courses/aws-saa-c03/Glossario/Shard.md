---
aliases:
  - "fragmento do stream"
  - "shards"
tags:
  - glossario
  - conceito
---
# Shard

O shard é a unidade de capacidade de um Kinesis Data Stream: cada shard oferece uma vazão fixa de escrita e de leitura, e a ordem dos registros só é garantida dentro do mesmo shard. A chave de partição do registro decide em qual shard ele cai. Dimensionar um stream é, portanto, calcular quantos shards a soma de escrita e leitura exige.

> [!example] Exemplo
> Um stream que recebe 10 MB por segundo precisa de pelo menos 10 shards de escrita, já que cada shard aceita 1 MB por segundo.

Veja também: [[Enhanced Fan-out]], [[Kinesis Data Streams]]

## Onde aparece

- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
