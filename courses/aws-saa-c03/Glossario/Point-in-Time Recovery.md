---
aliases:
  - "PITR"
  - "point-in-time recovery"
  - "recuperação para um ponto no tempo"
  - "restauração para um ponto no tempo"
tags:
  - glossario
  - servico
---
# Point-in-Time Recovery

O point-in-time recovery restaura um banco para qualquer segundo dentro do período de retenção, combinando o snapshot diário com os logs de transação. Ele existe porque erros humanos como um DROP TABLE são replicados pelo Multi-AZ e só backups permitem voltar no tempo. No RDS e no Aurora, a restauração cria uma nova instância ou cluster.

> [!example] Exemplo
> Depois de um DELETE sem WHERE às 14h07, a equipe restaura o banco para 14h06 em uma nova instância.

Veja também: [[Automated Backup]], [[DB Snapshot]], [[RDS]], [[RPO]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
