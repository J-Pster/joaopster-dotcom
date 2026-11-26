---
tags:
  - glossario
  - dados
---
# Bucket

Contêiner de objetos do Amazon S3, com nome único global e criado em uma Região. O acesso é controlado por IAM, bucket policy e, de forma legada, ACLs, e o Block Public Access protege contra exposição acidental.

> [!example] Exemplo
> A bucket policy do bucket relatorios permite leitura apenas à role de analytics de outra conta.

Veja também: [[IAM Policy]], [[Resource-Based Policy]], [[S3]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.05 - IAM Identity Center|5.5]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 10:** [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.02 - Texto com Comprehend e Translate|24.2]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
