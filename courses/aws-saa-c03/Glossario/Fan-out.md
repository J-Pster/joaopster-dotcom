---
aliases:
  - "fan-out"
  - "fanout"
  - "padrão fan-out"
tags:
  - glossario
  - conceito
---
# Fan-out

O fan-out é o padrão em que um único evento publicado é entregue a vários destinos independentes. Existe para que o produtor não precise conhecer os consumidores nem chamá-los um a um. Na AWS, o desenho clássico é um tópico SNS com várias filas SQS assinantes: o SNS distribui e cada fila guarda a sua cópia, o que dá buffer, retry e DLQ por consumidor.

> [!example] Exemplo
> O evento pedido criado vai a um tópico SNS, e as filas de faturamento, logística e marketing recebem cada uma a sua cópia.

Veja também: [[Filter Policy]], [[Pub-Sub]], [[SNS]], [[SQS]]

## Onde aparece

- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
