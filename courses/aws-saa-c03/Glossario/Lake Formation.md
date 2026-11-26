---
aliases:
  - "AWS Lake Formation"
tags:
  - glossario
  - seguranca
---
# Lake Formation

O AWS Lake Formation é a camada central de governança do data lake. Oferece permissões no estilo de banco de dados (tabela, coluna, linha e célula), controle por tags, compartilhamento entre contas sem copiar dados e aplicação das regras por Athena, Redshift Spectrum, EMR, Glue e Quick. Complementa o IAM: as duas camadas precisam permitir o acesso.

> [!example] Exemplo
> O marketing consulta a tabela de clientes sem ver a coluna de CPF, e um parceiro vê só as linhas do país dele.

Veja também: [[Athena]], [[Glue Data Catalog]], [[LF-Tag]], [[S3]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
