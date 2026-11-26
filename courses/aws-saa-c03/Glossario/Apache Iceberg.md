---
aliases:
  - "Iceberg"
tags:
  - glossario
  - dados
---
# Apache Iceberg

O Apache Iceberg é um formato de tabela aberto sobre arquivos no S3 que adiciona transações ACID, atualização e exclusão de linhas, evolução de esquema e viagem no tempo. Existe porque Parquet puro não permite UPDATE e DELETE. O Athena e o EMR conseguem usá-lo, e o S3 Tables é a versão gerenciada.

> [!example] Exemplo
> Um lake precisa apagar os dados de um cliente por exigência legal: com Iceberg, o DELETE é uma operação da tabela.

Veja também: [[Athena]], [[Parquet]], [[Transacoes ACID]]

## Onde aparece

- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
- **Módulo 22:** [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
