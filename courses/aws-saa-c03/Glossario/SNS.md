---
aliases:
  - "Amazon SNS"
  - "Simple Notification Service"
tags:
  - glossario
  - servico
---
# SNS

O Amazon SNS é o serviço gerenciado e regional de publicação e assinatura (pub/sub): um publicador envia uma mensagem a um tópico e todos os assinantes (e-mail, SQS, Lambda, HTTP, Data Firehose) a recebem. Existe para distribuir eventos a vários destinos ao mesmo tempo, sem que o publicador conheça cada um. Na prova, SNS com várias filas SQS é o padrão de fan-out.

> [!example] Exemplo
> Um tópico SNS envia um evento de pedido a um e-mail de alerta e a duas filas SQS, uma para cobrança e outra para estoque.

Veja também: [[Athena]], [[Lambda]], [[SQS]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.05 - A Prova por Dentro|2.5]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
