---
aliases:
  - "AWS account"
  - "AWS accounts"
  - "conta da AWS"
  - "contas AWS"
tags:
  - glossario
  - conceito
---
# Conta AWS

Contêiner de recursos da AWS que também funciona como fronteira de segurança, de cobrança e de cotas. Os recursos de uma conta não são visíveis para outra por padrão, e os limites de serviço valem por conta. Por isso separar cargas em várias contas reduz o raio de impacto de erros e invasões.

> [!example] Exemplo
> Uma conta dedicada ao ambiente de produção impede que um erro de um desenvolvedor na conta de testes alcance os dados reais.

Veja também: [[Member Account]], [[Organizations]], [[Raio de Impacto]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 6:** [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.06 - Direct Connect|7.6]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.08 - Secrets Manager e Parameter Store|8.8]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 10:** [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 24:** [[24.02 - Texto com Comprehend e Translate|24.2]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
