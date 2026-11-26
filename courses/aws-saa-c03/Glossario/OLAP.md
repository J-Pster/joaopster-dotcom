---
aliases:
  - "Online Analytical Processing"
  - "carga analítica"
  - "processamento analítico"
tags:
  - glossario
  - dados
---
# OLAP

OLAP (online analytical processing) é a carga voltada a análise: poucas consultas grandes que varrem muitos dados históricos e agregam poucas colunas, como receita por região no ano. Pede armazenamento colunar e processamento paralelo, como no Redshift e no Athena, e é o oposto do OLTP, que lida com muitas transações pequenas. Misturar OLAP com OLTP no mesmo banco transacional deixa os dois lentos.

> [!example] Exemplo
> Um relatório que soma dois anos de vendas por região é OLAP e vai para o Redshift, não para o banco transacional.

Veja também: [[Data Warehouse]], [[OLTP]], [[Redshift]]

## Onde aparece

- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
