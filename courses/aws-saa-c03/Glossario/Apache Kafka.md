---
aliases:
  - "Kafka"
tags:
  - glossario
  - dados
---
# Apache Kafka

O Apache Kafka é uma plataforma de código aberto para streaming de eventos: produtores gravam mensagens em tópicos divididos em partições e vários consumidores as leem, com retenção para releitura. Existe porque aplicações precisam trocar fluxos grandes de eventos com ordem por partição. Na AWS, o MSK roda o Kafka de forma gerenciada.

> [!example] Exemplo
> Uma empresa com dezenas de aplicações Kafka no data center migra para o MSK trocando só o endereço dos brokers.

Veja também: [[Kinesis Data Streams]], [[MSK]], [[Particao do Kafka]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.07 - Placement Groups|9.7]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
