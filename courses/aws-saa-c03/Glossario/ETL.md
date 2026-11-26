---
aliases:
  - "ELT"
  - "extract transform load"
  - "extrair transformar carregar"
tags:
  - glossario
  - conceito
---
# ETL

ETL é o processo de extrair dados das fontes, transformá-los (limpar, converter formato, juntar) e carregá-los no destino de análise. Existe porque dados brutos raramente estão prontos para consulta. Na AWS, o Glue e o EMR são os serviços típicos de ETL; no ELT, a ordem muda e a transformação acontece dentro do destino.

> [!example] Exemplo
> Ler CSVs do S3, remover linhas inválidas e gravar Parquet particionado é um ETL.

Veja também: [[Data Warehouse]], [[EMR]], [[Glue]], [[Processamento em Lote]]

## Onde aparece

- **Módulo 10:** [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
