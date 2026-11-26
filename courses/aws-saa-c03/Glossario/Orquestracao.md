---
aliases:
  - "orquestrar"
  - "orquestração"
tags:
  - glossario
  - conceito
---
# Orquestracao

A orquestração é o estilo de coordenação em que um componente central conhece o fluxo e chama cada etapa na ordem, guardando o estado e tratando erros. Existe para processos de negócio com passos dependentes, onde é preciso saber em que ponto cada execução está. O custo é um coordenador que conhece os passos, ao contrário da coreografia. No ecossistema AWS, o orquestrador é o Step Functions.

> [!example] Exemplo
> Um coordenador chama em sequência reserva de estoque, cobrança e emissão de nota, e compensa o estoque se a cobrança falhar.

Veja também: [[Arquitetura Orientada a Eventos]], [[Coreografia]], [[State Machine]], [[Step Functions]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 5:** [[05.04 - Control Tower e Landing Zone|5.4]]
- **Módulo 9:** [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 18:** [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 22:** [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
