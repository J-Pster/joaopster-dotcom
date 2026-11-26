---
aliases:
  - "Amazon RDS"
  - "Relational Database Service"
tags:
  - glossario
  - dados
---
# RDS

O Amazon RDS é o serviço de banco de dados relacional gerenciado (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Db2): a AWS cuida de instalação, patches, backups e failover, e o cliente configura acesso, rede e criptografia. Existe para o time não operar o servidor do banco, exemplo clássico de usar serviços gerenciados. A instância fica em uma AZ, e o Multi-AZ é uma opção a ativar para alta disponibilidade.

> [!example] Exemplo
> Em vez de instalar o PostgreSQL em uma instância EC2, o time usa o RDS e ativa Multi-AZ para failover automático.

Veja também: [[Alta Disponibilidade]], [[Aurora]], [[Modelo de Responsabilidade Compartilhada]], [[Multi-AZ]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.01 - Por que a Nuvem Existe|1.1]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]]
- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.05 - Security Groups|6.5]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07.06 - Direct Connect|7.6]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.08 - Secrets Manager e Parameter Store|8.8]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 18:** [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.09 - Outposts e Computacao no Local|23.9]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
