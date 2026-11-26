---
aliases:
  - "lote"
  - "processamento batch"
tags:
  - glossario
  - conceito
---
# Processamento em Lote

Processamento em lote é o modelo em que os dados se acumulam por um período e são processados juntos, em horários definidos. É mais simples e barato quando a resposta não precisa ser imediata, e por isso costuma ser a escolha para relatórios diários e cargas noturnas. O oposto é o streaming, em que cada evento é tratado ao chegar.

> [!example] Exemplo
> Todo dia à meia-noite, um job processa as vendas do dia e gera o relatório da manhã seguinte.

Veja também: [[EMR]], [[ETL]], [[Glue]], [[Streaming de Dados]]

## Onde aparece

- **Módulo 1:** [[01.02 - Regions e Availability Zones|1.2]]
- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08.01 - Por que Criptografar e os Fundamentos|8.1]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 11:** [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 12:** [[12.09 - Instance Refresh Termination e Spot|12.9]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.02 - Texto com Comprehend e Translate|24.2]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
