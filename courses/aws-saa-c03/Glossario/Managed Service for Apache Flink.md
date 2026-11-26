---
aliases:
  - "Amazon Managed Service for Apache Flink"
  - "Apache Flink"
  - "Flink"
  - "Kinesis Data Analytics"
  - "Kinesis Data Analytics for SQL"
tags:
  - glossario
  - servico
---
# Managed Service for Apache Flink

O Managed Service for Apache Flink executa aplicações do Apache Flink sem que você gerencie servidores, para processar fluxos de dados em tempo real com janelas de tempo, agregações e junções. Existe porque processar streams com estado e tempo é difícil de operar à mão. É o novo nome do Kinesis Data Analytics (as aplicações antigas em SQL foram descontinuadas, e a trilha atual é Flink, inclusive Flink SQL no Studio), então questões antigas que citam o nome velho apontam para ele.

> [!example] Exemplo
> Uma aplicação Flink lê um stream de transações e calcula, a cada minuto, o total por cartão para sinalizar fraude.

Veja também: [[Kinesis Data Streams]], [[MSK]], [[Streaming de Dados]]

## Onde aparece

- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]]
