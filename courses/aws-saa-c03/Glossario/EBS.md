---
aliases:
  - "Amazon EBS"
  - "volume EBS"
  - "volumes EBS"
tags:
  - glossario
  - dados
---
# EBS

Armazenamento em bloco para instâncias EC2. Cada volume vive em uma única AZ e só pode ser anexado a instâncias da mesma AZ; replicar para outra AZ se faz com snapshots. Detalhado no Módulo 10.

> [!example] Exemplo
> Um volume gp3 de 100 GB anexado a uma instância em us-east-1a.

Veja também: [[EC2]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.09 - Outposts e Computacao no Local|23.9]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
