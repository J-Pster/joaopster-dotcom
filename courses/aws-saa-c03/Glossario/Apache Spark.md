---
aliases:
  - "PySpark"
  - "Spark"
tags:
  - glossario
  - conceito
---
# Apache Spark

O Apache Spark é um motor de processamento distribuído de código aberto que divide dados e trabalho entre muitos nós e processa principalmente em memória, o que o torna muito mais rápido que o MapReduce clássico em várias cargas. É a base dos jobs de ETL do Glue e do EMR. Existe porque volumes grandes não cabem em uma só máquina.

> [!example] Exemplo
> Um job PySpark lê 2 TB de logs, agrega por usuário e grava o resultado em Parquet.

Veja também: [[EMR]], [[Glue]], [[HDFS]]

## Onde aparece

- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
