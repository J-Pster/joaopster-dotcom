---
aliases:
  - "Avro"
tags:
  - glossario
  - dados
---
# Apache Avro

O Avro é um formato de arquivo por linha, com o esquema gravado no próprio arquivo, bom para streaming e para esquemas que evoluem. Não é colunar, então o Athena lê todas as colunas de cada registro. Aparece em questões como distrator de formato colunar.

> [!example] Exemplo
> Eventos Kafka serializados em Avro com o esquema no Glue Schema Registry.

Veja também: [[Apache Kafka]], [[Armazenamento Colunar]], [[Parquet]]

## Onde aparece

- **Módulo 22:** [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]]
