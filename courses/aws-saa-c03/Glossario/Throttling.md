---
aliases:
  - "RequestLimitExceeded"
  - "ThrottlingException"
  - "limitação de taxa"
  - "throttled"
  - "throttling"
tags:
  - glossario
  - conceito
---
# Throttling

Throttling é a rejeição de requisições quando a taxa excede o limite do serviço; na AWS costuma voltar como ThrottlingException, RequestLimitExceeded ou HTTP 429. Difere de quota, que limita a quantidade de recursos. A resposta de arquitetura padrão é retentativa com backoff exponencial e jitter, fila na frente para suavizar picos e pedido de aumento de quota.

> [!example] Exemplo
> Um pico curto de escritas em uma tabela do DynamoDB gera throttling por alguns segundos, e o SDK refaz as chamadas com backoff exponencial até passarem.

Veja também: [[DynamoDB]], [[Hot Partition]], [[Idempotencia]], [[RCU]], [[Service Quotas]], [[WCU]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 6:** [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.06 - Estrategias de Cache e DAX|14.6]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.02 - Texto com Comprehend e Translate|24.2]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
