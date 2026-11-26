---
aliases:
  - "Amazon Athena"
tags:
  - glossario
  - servico
---
# Athena

O Amazon Athena é um serviço serverless de consulta interativa que executa SQL padrão diretamente sobre arquivos no S3, sem carregar os dados em um banco nem manter cluster. A cobrança é pelo volume de dados lido em cada consulta, então formato colunar (como Parquet), compressão e partições reduzem o custo. Usa o Glue Data Catalog para saber quais tabelas existem e é a resposta típica para análise ocasional de dados do data lake.

> [!example] Exemplo
> Uma equipe consulta logs no S3 de vez em quando com SQL, sem montar cluster nenhum.

Veja também: [[Glue Data Catalog]], [[OpenSearch Service]], [[Parquet]], [[Particao de Dados]], [[Redshift]], [[S3]]

## Onde aparece

- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 6:** [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
- **Módulo 24:** [[24.02 - Texto com Comprehend e Translate|24.2]], [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
