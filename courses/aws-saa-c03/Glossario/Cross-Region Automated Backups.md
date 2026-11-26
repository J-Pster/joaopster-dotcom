---
aliases:
  - "backups automáticos entre Regiões"
  - "cross-Region automated backups"
  - "replicação de backups automáticos"
tags:
  - glossario
  - conceito
---
# Cross-Region Automated Backups

A replicação de backups automáticos entre Regiões copia continuamente snapshots e logs de transação de uma instância RDS para outra Região. Ela permite fazer o point-in-time recovery no destino, para DR com RPO de minutos. Não vale para o Multi-AZ DB cluster.

> [!example] Exemplo
> Uma instância em us-east-1 replica seus backups para eu-west-1 e, em um desastre, é restaurada lá até o minuto desejado.

Veja também: [[Automated Backup]], [[DB Snapshot]], [[Point-in-Time Recovery]], [[Recuperacao de Desastres]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
