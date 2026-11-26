---
aliases:
  - "Amazon OpenSearch Service"
  - "Elasticsearch"
  - "OpenSearch"
tags:
  - glossario
  - servico
---
# OpenSearch Service

O Amazon OpenSearch Service é a versão gerenciada do OpenSearch (evoluído do Elasticsearch), usada para busca de texto livre, análise de logs e painéis em tempo quase real. Um domínio equivale a um cluster, pode ficar em duas ou três Zonas de Disponibilidade e tem camadas frias (UltraWarm e cold storage) para reduzir o custo de dados antigos. A prova o escolhe quando o requisito é busca ou análise de logs, e não consulta relacional ou chave-valor.

> [!example] Exemplo
> Logs de 40 microsserviços chegam por Firehose a um domínio OpenSearch, e os desenvolvedores buscam erros no Dashboards.

Veja também: [[Amazon Quick]], [[Athena]], [[CloudWatch Logs]], [[Data Firehose]], [[DynamoDB]], [[Redshift]], [[S3]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 24:** [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
