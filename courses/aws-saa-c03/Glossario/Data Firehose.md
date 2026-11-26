---
aliases:
  - "Amazon Data Firehose"
  - "Firehose"
  - "Kinesis Data Firehose"
tags:
  - glossario
  - servico
---
# Data Firehose

O Amazon Data Firehose (antigo Kinesis Data Firehose) é o serviço gerenciado que recebe dados em fluxo e os entrega em lotes a destinos como S3, Redshift, OpenSearch e endpoints HTTP, sem exigir que você escreva consumidores nem gerencie shards. Ele acumula os dados em um buffer de tamanho e de tempo antes de gravar, e pode transformar com Lambda e converter JSON em Parquet ou ORC. Na prova, é a resposta para carregar streaming no S3 com o menor esforço operacional.

> [!example] Exemplo
> Os logs de acesso de uma aplicação vão para o Firehose, que grava arquivos Parquet no S3 a cada poucos minutos, prontos para o Athena.

Veja também: [[AppFlow]], [[Kinesis Data Streams]], [[MSK]], [[OpenSearch Service]], [[Parquet]], [[Processamento em Lote]], [[S3]], [[SNS]]

## Onde aparece

- **Módulo 6:** [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
