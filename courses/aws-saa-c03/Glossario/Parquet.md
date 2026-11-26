---
aliases:
  - "Apache Parquet"
  - "ORC"
  - "formato Parquet"
tags:
  - glossario
  - dados
---
# Parquet

O Parquet é um formato de arquivo colunar, comprimido e binário, criado para análise de grandes volumes. Como guarda os valores por coluna, uma consulta lê só as colunas de que precisa e pode pular blocos inteiros usando estatísticas de mínimo e máximo, o que reduz o tempo e, no Athena, o custo. O ORC é um formato colunar parecido, também suportado.

> [!example] Exemplo
> Converter um CSV de 1 TB para Parquet faz uma consulta que usa 3 colunas ler apenas uma fração dos bytes.

Veja também: [[Armazenamento Colunar]], [[Athena]], [[Glue]], [[Particao de Dados]]

## Onde aparece

- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 15:** [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 25:** [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
