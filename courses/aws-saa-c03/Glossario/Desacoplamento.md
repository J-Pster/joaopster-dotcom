---
aliases:
  - "acoplamento fraco"
  - "desacoplado"
  - "desacoplados"
  - "desacoplamento"
  - "loose coupling"
tags:
  - glossario
  - conceito
---
# Desacoplamento

Projetar componentes para que dependam pouco uns dos outros, geralmente com filas, eventos ou APIs entre eles. Assim, um componente pode falhar, escalar ou ser trocado sem derrubar os demais. É um dos padrões mais recorrentes nas respostas corretas da prova.

> [!example] Exemplo
> Em vez de chamar o serviço de e-mail direto, o pedido publica um evento, e o serviço de e-mail o consome no seu ritmo.

Veja também: [[Elasticidade]], [[EventBridge]], [[Ponto Unico de Falha]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 17:** [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
