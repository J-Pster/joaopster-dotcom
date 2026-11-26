---
aliases:
  - "Partição do Kafka"
  - "partição do Kafka"
  - "partições de um tópico"
  - "partições do tópico"
tags:
  - glossario
  - dados
---
# Partição do Kafka

Uma partição do Kafka é uma subdivisão ordenada de um tópico: mensagens com a mesma chave vão para a mesma partição, e cada partição é lida por um consumidor do grupo. Existe para paralelizar a leitura e a escrita. Não confunda com a partição de dados do S3 (prefixos como ano=2026) nem com o shard do Kinesis, que é parecido mas é outro serviço.

> [!example] Exemplo
> Um tópico de pedidos com 12 partições permite até 12 consumidores do mesmo grupo lendo em paralelo.

Veja também: [[Apache Kafka]], [[Particao de Dados]], [[Shard]]

## Onde aparece

- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]]
