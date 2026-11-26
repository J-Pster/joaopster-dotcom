---
aliases:
  - "backup and recovery"
  - "backup and restore"
  - "backup e restauração"
tags:
  - glossario
  - conceito
---
# Backup and Restore

Backup and restore é a estratégia de DR mais barata: só se copiam dados e configuração para a Região de recuperação ou outra conta, e nada de computação fica ligado. No desastre, recria-se a infraestrutura a partir de código e restauram-se os dados, o que leva horas. Existe para cargas que toleram RPO de horas e RTO de até um dia, e serve também de proteção contra corrupção e ransomware.

> [!example] Exemplo
> Um blog cujo template do CloudFormation e backups noturnos ficam em outra Região, recriado só se a principal cair.

Veja também: [[Backup]], [[Multi-Site Active-Active]], [[Pilot Light]], [[RPO]], [[RTO]], [[Warm Standby]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 11:** [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]]
- **Módulo 13:** [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 18:** [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 22:** [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
