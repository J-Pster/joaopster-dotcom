---
aliases:
  - "columnar"
  - "colunar"
  - "formato colunar"
tags:
  - glossario
  - dados
---
# Armazenamento Colunar

No armazenamento colunar, os valores de cada coluna ficam juntos no disco, em vez de cada linha ser gravada inteira. Isso acelera análises que agregam poucas colunas de muitas linhas e melhora a compressão, porque valores da mesma coluna se parecem. É a base do Parquet, do ORC e do Redshift.

> [!example] Exemplo
> Somar a coluna valor de 100 milhões de linhas lê apenas essa coluna, não todos os campos de cada pedido.

Veja também: [[OLAP]], [[Parquet]], [[Redshift]]

## Onde aparece

- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
