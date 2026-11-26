---
aliases:
  - "AWS Backup"
  - "backups centralizados"
tags:
  - glossario
  - servico
---
# Backup

O AWS Backup é o serviço que centraliza e automatiza backups de vários serviços AWS (EBS, EFS, FSx, RDS, DynamoDB e outros) por meio de planos com agenda, retenção e cópia entre Regiões e contas. Existe para ter uma política única, auditável e fácil de proteger, em vez de scripts e agendas diferentes em cada serviço.

> [!example] Exemplo
> Uma empresa cria um plano diário com retenção de 35 dias que protege volumes EBS e sistemas EFS, com cópia para outra Região.

Veja também: [[Durabilidade]], [[EBS]], [[EFS]], [[Snapshot]]

## Onde aparece

- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.04 - Control Tower e Landing Zone|5.4]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 10:** [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 13:** [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 23:** [[23.07 - Transferencia Offline e a Conta da Rede|23.7]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
