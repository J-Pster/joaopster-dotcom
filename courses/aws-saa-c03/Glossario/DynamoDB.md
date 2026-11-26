---
aliases:
  - "Amazon DynamoDB"
tags:
  - glossario
  - dados
---
# DynamoDB

O Amazon DynamoDB é o banco de dados NoSQL de chave-valor e documentos da AWS, totalmente gerenciado, regional e replicado entre AZs, com latência de milissegundos em qualquer escala. É feito para acesso por chave, não para análises agregadas, por isso não substitui um data warehouse; replicação entre Regiões exige Global Tables. Pode alimentar o lago de dados por exportações para o S3, streams e conectores de consulta federada.

> [!example] Exemplo
> Uma tabela de sessões usa user_id como partition key, e seus dados são exportados ao S3 para análise no Athena.

Veja também: [[Athena]], [[DynamoDB Streams]], [[OLTP]], [[Regiao AWS]], [[S3]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.01 - Por que a Nuvem Existe|1.1]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.06 - Direct Connect|7.6]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 9:** [[09.05 - Compra Savings Plans e Reserved Instances|9.5]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 18:** [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.02 - Kinesis Data Streams|22.2]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.10 - Rede e Transferencia de Dados|25.10]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
