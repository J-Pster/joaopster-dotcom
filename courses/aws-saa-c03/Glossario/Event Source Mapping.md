---
aliases:
  - "event source mapping"
  - "mapeamento de fonte de eventos"
  - "mapeamento de origem de eventos"
tags:
  - glossario
  - conceito
---
# Event Source Mapping

O event source mapping é o recurso do Lambda que lê de uma origem (SQS, Kinesis, DynamoDB Streams, MSK, entre outras) e invoca a função com lotes de registros. Ele faz o polling por você, controla o tamanho do lote, a janela, as retentativas e a forma de tratar falhas de itens. A invocação é síncrona do ponto de vista do mapeamento, e o erro volta para ele decidir se repete o lote.

> [!example] Exemplo
> Uma função consome uma fila SQS em lotes de 10 mensagens: o event source mapping busca as mensagens, invoca a função e apaga da fila apenas as que foram processadas com sucesso.

Veja também: [[DynamoDB Streams]], [[Kinesis Data Streams]], [[Lambda]], [[SQS]]

## Onde aparece

- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
