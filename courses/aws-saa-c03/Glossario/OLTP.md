---
aliases:
  - "Online Transaction Processing"
  - "carga transacional"
  - "processamento transacional"
tags:
  - glossario
  - dados
---
# OLTP

OLTP (online transaction processing) é o tipo de carga das aplicações do dia a dia: muitas transações pequenas e rápidas, como pedidos e pagamentos, que leem e gravam poucas linhas por vez. Bancos relacionais como RDS e Aurora são feitos para isso, com ACID e baixa latência. Consultas analíticas pesadas sobre os mesmos dados competem com as transações e pertencem a um data warehouse como o Redshift.

> [!example] Exemplo
> O sistema de pedidos de uma loja é OLTP: milhares de inserts e selects pequenos por segundo.

Veja também: [[Aurora]], [[OLAP]], [[RDS]], [[Redshift]]

## Onde aparece

- **Módulo 10:** [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
