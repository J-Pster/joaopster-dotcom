---
aliases:
  - "Amazon MSK"
  - "Kafka gerenciado"
  - "Managed Streaming for Apache Kafka"
tags:
  - glossario
  - servico
---
# MSK

O Amazon MSK (Managed Streaming for Apache Kafka) é o Apache Kafka gerenciado na AWS: mantém a API do Kafka, então aplicações que já usam Kafka migram sem reescrever o código, e a AWS cuida de provisionar, substituir e atualizar os brokers. Existe em modo provisionado e em modo Serverless, que escala sozinho e usa IAM para controle de acesso. A prova o escolhe quando o cenário cita Kafka existente; sem esse requisito, o Kinesis é a opção nativa.

> [!example] Exemplo
> Uma empresa com 40 microsserviços publicando em Kafka no data center aponta os clientes para os brokers do MSK e só troca o endereço.

Veja também: [[Data Firehose]], [[EventBridge Pipes]], [[Kinesis Data Streams]], [[Managed Service for Apache Flink]], [[Message Broker]], [[Streaming de Dados]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
