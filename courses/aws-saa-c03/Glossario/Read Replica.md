---
aliases:
  - "Réplica de leitura"
  - "Réplicas de leitura"
tags:
  - glossario
  - conceito
---
# Read Replica

Cópia somente leitura de um banco, mantida por replicação a partir da instância principal. Distribui as consultas de leitura e alivia o banco principal; a replicação costuma ser assíncrona, então a réplica pode estar um pouco atrasada.

> [!example] Exemplo
> Os relatórios passam a consultar uma réplica de leitura, e o banco principal fica livre para as transações.

Veja também: [[Aurora]], [[Aurora Global Database]], [[Escalabilidade Vertical]], [[RDS]]

## Onde aparece

- **Módulo 1:** [[01.02 - Regions e Availability Zones|1.2]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
