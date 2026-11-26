---
aliases:
  - "data lake"
  - "lago de dados"
tags:
  - glossario
  - dados
---
# Data Lake

Um data lake é um repositório central que guarda dados de qualquer origem e formato, em estado bruto, sem exigir esquema definido antes da gravação. Na AWS ele costuma ficar no S3, o que dá baixo custo, durabilidade e a possibilidade de vários motores, como Athena, EMR e Redshift Spectrum, lerem os mesmos arquivos. Existe porque nem sempre se sabe de antemão quais perguntas serão feitas aos dados.

> [!example] Exemplo
> Uma empresa guarda logs, planilhas e JSON de dezenas de sistemas em um bucket e consulta tudo com o Athena quando precisa.

Veja também: [[Data Warehouse]], [[Glue Data Catalog]], [[Parquet]], [[S3]], [[Schema-on-Read]]

## Onde aparece

- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 25:** [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
