---
aliases:
  - "Spectrum"
tags:
  - glossario
  - servico
---
# Redshift Spectrum

O Redshift Spectrum permite que o Redshift consulte arquivos no S3, como Parquet, ORC e CSV, sem carregá-los nas tabelas do cluster, por meio de um esquema externo que aponta para o Glue Data Catalog. Uma única consulta pode juntar tabelas do warehouse com dados do lago. É a ponte entre o warehouse e o data lake.

> [!example] Exemplo
> Um relatório de cinco anos junta as vendas recentes do cluster com os anos antigos em Parquet no S3.

Veja também: [[Data Lake]], [[Glue Data Catalog]], [[Redshift]], [[S3]]

## Onde aparece

- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
