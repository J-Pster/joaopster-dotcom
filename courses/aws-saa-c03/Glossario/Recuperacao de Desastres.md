---
aliases:
  - "disaster recovery"
  - "recuperacao de desastres"
  - "recuperação de desastre"
  - "recuperação de desastres"
tags:
  - glossario
  - conceito
---
# Recuperacao de Desastres

A recuperação de desastres é o conjunto de planos e recursos para voltar a operar depois da perda de um grande componente, como uma Região inteira. Os objetivos são medidos em RPO (quanto dado se aceita perder) e RTO (quanto tempo para voltar). Em bancos, o desenho usa réplicas entre Regiões, cópia de snapshots ou o Aurora Global Database.

> [!example] Exemplo
> Uma réplica entre Regiões é promovida manualmente quando a Região principal fica indisponível.

Veja também: [[Aurora Global Database]], [[RPO]], [[RTO]], [[Read Replica]]

## Onde aparece

- **Módulo 1:** [[01.02 - Regions e Availability Zones|1.2]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.08 - Secrets Manager e Parameter Store|8.8]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 10:** [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 22:** [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 24:** [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
