---
aliases:
  - "crawler"
  - "crawler do Glue"
  - "crawlers"
tags:
  - glossario
  - servico
---
# Glue Crawler

Um crawler do Glue varre uma fonte de dados, como um prefixo do S3 ou um banco JDBC, infere o esquema e cria ou atualiza as tabelas no Glue Data Catalog. Também detecta novas partições. Existe para automatizar a catalogação quando o esquema muda ou há muitas partições novas, mas ele só descobre e cataloga, não transforma dados.

> [!example] Exemplo
> Um crawler agendado percorre o prefixo vendas e passa a mostrar, no catálogo, a nova partição do dia.

Veja também: [[Glue]], [[Glue Data Catalog]], [[Particao de Dados]]

## Onde aparece

- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
