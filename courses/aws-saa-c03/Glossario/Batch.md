---
aliases:
  - "AWS Batch"
  - "Batch da AWS"
tags:
  - glossario
  - servico
---
# Batch

O AWS Batch é o serviço gerenciado de computação em lote que enfileira jobs em contêineres, provisiona capacidade EC2 ou Fargate (inclusive Spot) e reduz a frota quando a fila esvazia. Serve para tarefas longas ou pesadas, como simulações e renderização, que não cabem no limite de 15 minutos do Lambda, e não para frameworks de dados distribuídos como Spark, para os quais se usa EMR ou Glue. Não tem custo próprio além da computação usada.

> [!example] Exemplo
> Um laboratório submete 20.000 jobs de análise de amostras, e o Batch sobe centenas de instâncias Spot, processa tudo e desliga a frota.

Veja também: [[EFA]], [[EMR]], [[Fargate]], [[Glue]], [[Lambda]], [[Processamento em Lote]], [[Spot Instance]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 15:** [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 22:** [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]]
