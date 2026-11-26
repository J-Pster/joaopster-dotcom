---
aliases:
  - "Amazon EMR"
  - "Elastic MapReduce"
tags:
  - glossario
  - servico
---
# EMR

O Amazon EMR é o serviço gerenciado para executar frameworks de big data, como Spark, Hadoop, Hive, Presto e HBase, em clusters de instâncias EC2 que a AWS provisiona e configura. Dá mais controle que o Glue, e existe também como EMR no EKS e EMR Serverless. Costuma usar Spot nos nós de task e guardar dados duráveis no S3.

> [!example] Exemplo
> Um ETL noturno em Spark roda em um cluster EMR transitório que se encerra ao terminar.

Veja também: [[Apache Spark]], [[Glue]], [[HDFS]], [[S3]]

## Onde aparece

- **Módulo 2:** [[02.05 - A Prova por Dentro|2.5]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 5:** [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 9:** [[09.05 - Compra Savings Plans e Reserved Instances|9.5]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 10:** [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]]
- **Módulo 12:** [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.09 - Outposts e Computacao no Local|23.9]]
- **Módulo 24:** [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
