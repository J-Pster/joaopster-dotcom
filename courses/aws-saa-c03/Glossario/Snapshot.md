---
aliases:
  - "snapshots"
tags:
  - glossario
  - dados
---
# Snapshot

Cópia pontual de um volume EBS ou de um banco RDS, guardada de forma incremental e durável. Um snapshot de um recurso cifrado também é cifrado. É o caminho para copiar, compartilhar e, no caso de recursos sem criptografia, para criar uma versão cifrada por meio de uma cópia.

> [!example] Exemplo
> Para cifrar um volume existente, cria-se um snapshot, copia-se com criptografia e cria-se um novo volume a partir da cópia.

Veja também: [[Criptografia em Repouso]], [[Customer Managed Key]], [[KMS]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 5:** [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
