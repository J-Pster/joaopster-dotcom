---
aliases:
  - "Hadoop Distributed File System"
tags:
  - glossario
  - conceito
---
# HDFS

O HDFS é o sistema de arquivos distribuído do Hadoop, que espalha e replica os dados pelos discos dos nós de um cluster. No EMR, os nós core guardam dados no HDFS, mas ele é efêmero: desaparece quando o cluster é encerrado. Por isso o padrão recomendado é guardar a entrada e a saída no S3.

> [!example] Exemplo
> Um cluster EMR transitório lê do S3, usa o HDFS só como área temporária e grava o resultado de volta no S3.

Veja também: [[Apache Spark]], [[EMR]], [[S3]]

## Onde aparece

- **Módulo 9:** [[09.07 - Placement Groups|9.7]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
