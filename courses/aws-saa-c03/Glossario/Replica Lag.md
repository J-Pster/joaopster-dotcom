---
aliases:
  - "ReplicaLag"
  - "atraso de replicação"
  - "lag de replicação"
  - "lag de réplica"
  - "replica lag"
tags:
  - glossario
  - conceito
---
# Replica Lag

Replica lag é o atraso entre uma gravação na origem e o momento em que ela aparece em uma réplica. Ele existe porque a replicação é assíncrona, e cresce com carga de escrita alta ou réplicas subdimensionadas. Leituras que exigem dado atual não devem usar a réplica.

> [!example] Exemplo
> A métrica ReplicaLag do CloudWatch mostra 40 segundos: uma consulta na réplica ainda não vê o pedido gravado agora há pouco.

Veja também: [[CloudWatch]], [[Read Replica]], [[Replicacao Assincrona]]

## Onde aparece

- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 20:** [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
