---
aliases:
  - "Amazon Kinesis Data Streams"
  - "KDS"
  - "Kinesis Data Stream"
  - "stream do Kinesis"
tags:
  - glossario
  - servico
---
# Kinesis Data Streams

O Kinesis Data Streams é o serviço da AWS para capturar fluxos contínuos de dados em tempo real e guardá-los de forma durável por um período de retenção. Os dados se organizam em shards, e a capacidade do stream é a soma da capacidade dos shards (ou escala sozinha no modo on-demand). Existe porque aplicações precisam processar eventos assim que chegam e permitir que vários consumidores leiam e releiam o mesmo fluxo.

> [!example] Exemplo
> Uma loja envia cada clique do site para um stream, e três times leem os mesmos cliques em paralelo para métricas, fraude e recomendação.

Veja também: [[Data Firehose]], [[DynamoDB Streams]], [[Enhanced Fan-out]], [[Lambda]], [[MSK]], [[SNS]], [[SQS]], [[Shard]], [[Streaming de Dados]]

## Onde aparece

- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
