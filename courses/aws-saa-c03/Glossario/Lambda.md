---
aliases:
  - "AWS Lambda"
  - "função Lambda"
  - "funções Lambda"
tags:
  - glossario
  - servico
---
# Lambda

O AWS Lambda é o serviço serverless regional que executa código em resposta a eventos, sem servidores para gerenciar e com cobrança pelo tempo de execução. Existe para tarefas curtas e orientadas a eventos que não justificam uma máquina ligada, e a AWS cuida do sistema operacional do ambiente. Nos pipelines de dados serve para transformar registros do Firehose, consumir tópicos do MSK e implementar conectores de consulta federada do Athena.

> [!example] Exemplo
> Uma função Lambda enriquece cada registro que passa pelo Firehose antes de ele ser gravado no S3.

Veja também: [[Data Firehose]], [[Fargate]], [[MSK]], [[Overhead Operacional]], [[S3]], [[SQS]]

## Onde aparece

- **Módulo 1:** [[01.01 - Por que a Nuvem Existe|1.1]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.05 - A Prova por Dentro|2.5]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.04 - Control Tower e Landing Zone|5.4]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.08 - Secrets Manager e Parameter Store|8.8]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]], [[12.09 - Instance Refresh Termination e Spot|12.9]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 18:** [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
