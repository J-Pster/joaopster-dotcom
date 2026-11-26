---
aliases:
  - "dados em fluxo"
  - "processamento em tempo real"
  - "streaming"
tags:
  - glossario
  - conceito
---
# Streaming de Dados

Streaming de dados é o modelo em que os dados chegam e são processados continuamente, evento a evento ou em lotes muito pequenos, em vez de esperar um grande volume acumulado. Existe porque algumas decisões perdem valor com o tempo, como detectar uma fraude ou reagir a um alarme. Exige serviços próprios de ingestão e processamento, como Kinesis, MSK e Flink.

> [!example] Exemplo
> Detectar uma compra suspeita enquanto o cartão ainda está sendo usado é um caso de streaming.

Veja também: [[Kinesis Data Streams]], [[MSK]], [[Managed Service for Apache Flink]], [[Processamento em Lote]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 12:** [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 14:** [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
