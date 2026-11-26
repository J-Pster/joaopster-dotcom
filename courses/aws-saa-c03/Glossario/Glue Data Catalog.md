---
aliases:
  - "Data Catalog"
  - "catálogo de dados"
  - "catálogo do Glue"
tags:
  - glossario
  - dados
---
# Glue Data Catalog

O Glue Data Catalog é o repositório central de metadados do lago: guarda bancos, tabelas, colunas, tipos, locais no S3 e partições, mas nunca os dados em si. Funciona como um metastore compartilhado, então Athena, Redshift Spectrum, EMR e o próprio Glue enxergam as mesmas definições de tabela. Existe porque arquivos soltos no S3 não dizem sozinhos qual tabela são.

> [!example] Exemplo
> O Athena e o EMR consultam a mesma tabela vendas porque ambos leem a definição no Glue Data Catalog.

Veja também: [[Athena]], [[Glue]], [[Glue Crawler]], [[Lake Formation]], [[Schema-on-Read]]

## Onde aparece

- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
