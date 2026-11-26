---
aliases:
  - "EFO"
  - "enhanced fan-out"
  - "fan-out aprimorado"
tags:
  - glossario
  - conceito
---
# Enhanced Fan-out

O enhanced fan-out dá a cada consumidor registrado do Kinesis Data Streams uma vazão de leitura dedicada por shard, em vez de dividir a vazão de leitura do shard entre todos os consumidores. Existe porque, com muitos consumidores compartilhando um shard, cada um disputa a mesma banda e a latência sobe. Tem custo adicional e é indicado quando vários leitores precisam de baixa latência.

> [!example] Exemplo
> Com três consumidores lendo o mesmo stream, o enhanced fan-out evita que eles dividam os 2 MB por segundo de leitura de cada shard.

Veja também: [[Kinesis Data Streams]], [[Shard]]

## Onde aparece

- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]]
