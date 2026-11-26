---
aliases:
  - "Partição de Dados"
  - "particionamento"
  - "partition"
  - "partition pruning"
  - "partição de dados"
  - "partições de dados"
  - "poda de partições"
tags:
  - glossario
  - dados
---
# Partição de Dados

Particionar é organizar os arquivos de uma tabela em prefixos que refletem valores de colunas usadas em filtros, como ano, mês e dia. Quando a consulta filtra por essas colunas, o motor lê só os prefixos correspondentes e ignora o resto, o que se chama poda de partições. Particionar demais gera muitos arquivos pequenos, e de menos obriga a ler tudo. Não confunda com a partição do Kafka.

> [!example] Exemplo
> Com a tabela particionada por dia, uma consulta sobre 25 de novembro lê apenas esse prefixo no S3.

Veja também: [[Athena]], [[Glue Data Catalog]], [[Parquet]], [[S3]]

## Onde aparece

- **Módulo 8:** [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]]
