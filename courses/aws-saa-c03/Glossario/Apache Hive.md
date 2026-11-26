---
aliases:
  - "Hive"
  - "estilo Hive"
tags:
  - glossario
  - dados
---
# Apache Hive

O Apache Hive é um motor de consultas SQL sobre dados distribuídos do ecossistema Hadoop. O termo estilo Hive descreve prefixos chave=valor (ano=2026/mes=11) que Athena e Glue entendem como partições. Existe porque o Hive popularizou essa convenção.

> [!example] Exemplo
> s3://lago/vendas/ano=2026/mes=11/ é uma estrutura de partições estilo Hive.

Veja também: [[Athena]], [[EMR]], [[Particao de Dados]]

## Onde aparece

- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]]
