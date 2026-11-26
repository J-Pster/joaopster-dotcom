---
aliases:
  - "AWS Glue"
tags:
  - glossario
  - servico
---
# Glue

O AWS Glue é o serviço serverless de integração de dados da AWS. Reúne o Data Catalog (metadados das tabelas), os crawlers (que descobrem esquemas) e os jobs de ETL (que transformam os dados com Spark ou Python), sem servidores para gerenciar. Existe para preparar e catalogar os dados do lago com o menor esforço operacional, cobrando por DPU-hora.

> [!example] Exemplo
> Um job do Glue agendado converte CSV em Parquet particionado toda noite e o crawler atualiza as tabelas.

Veja também: [[DPU]], [[EMR]], [[ETL]], [[Glue Crawler]], [[Glue Data Catalog]], [[Job Bookmark]]

## Onde aparece

- **Módulo 14:** [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
