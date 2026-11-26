---
aliases:
  - "automated backup"
  - "automated backups"
  - "backup automático"
  - "backups automáticos"
tags:
  - glossario
  - servico
---
# Automated Backup

O backup automático do RDS combina um snapshot diário do volume com o envio dos logs de transação ao S3 a cada 5 minutos. Ele existe para permitir o point-in-time recovery sem esforço manual, com retenção de 0 a 35 dias. É removido junto com a instância, ao contrário do snapshot manual.

> [!example] Exemplo
> Uma instância RDS com retenção de 14 dias pode ser restaurada para qualquer momento dos últimos 14 dias.

Veja também: [[DB Snapshot]], [[Point-in-Time Recovery]], [[RDS]]

## Onde aparece

- **Módulo 1:** [[01.01 - Por que a Nuvem Existe|1.1]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 10:** [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
