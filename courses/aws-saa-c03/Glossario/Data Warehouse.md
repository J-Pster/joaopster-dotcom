---
aliases:
  - "DW"
  - "armazém de dados"
  - "data warehouse"
tags:
  - glossario
  - dados
---
# Data Warehouse

Um data warehouse é um repositório de dados já estruturados e organizados para análise, otimizado para consultas complexas e repetidas sobre grandes volumes. Na AWS, o serviço correspondente é o Redshift. Existe porque bancos transacionais não foram feitos para varrer milhões de linhas e agregar, e o warehouse separa a análise da operação.

> [!example] Exemplo
> Relatórios de vendas por região e mês, consultados por centenas de analistas, rodam em um data warehouse.

Veja também: [[Data Lake]], [[ETL]], [[OLAP]], [[Redshift]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 10:** [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]]
- **Módulo 14:** [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
