---
aliases:
  - "DB subnet group"
  - "DB subnet groups"
  - "grupo de sub-redes do banco"
  - "subnet group do RDS"
tags:
  - glossario
  - rede
---
# DB Subnet Group

O DB subnet group é o conjunto de sub-redes de uma VPC em que o RDS pode criar instâncias. Ele precisa cobrir pelo menos duas zonas de disponibilidade, e um Multi-AZ DB cluster precisa de três. É o que permite ao RDS escolher onde colocar o standby.

> [!example] Exemplo
> Um subnet group com duas sub-redes privadas, uma em cada zona, hospeda o banco de uma aplicação em três camadas.

Veja também: [[Multi-AZ]], [[Security Group]], [[VPC]]

## Onde aparece

- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
