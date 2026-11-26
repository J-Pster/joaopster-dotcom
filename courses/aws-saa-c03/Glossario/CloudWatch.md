---
aliases:
  - "Amazon CloudWatch"
tags:
  - glossario
  - servico
---
# CloudWatch

Serviço de monitoramento que coleta métricas, logs e eventos e permite criar alarmes e painéis. Existe para que o time enxergue o estado do sistema e reaja a ele. É a base da observabilidade na maioria das arquiteturas AWS.

> [!example] Exemplo
> Um alarme do CloudWatch dispara quando a taxa de erros passa de um limite e aciona uma automação que substitui a instância com falha.

Veja também: [[CloudTrail]], [[EventBridge]], [[X-Ray]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]]
- **Módulo 9:** [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]]
- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 24:** [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
