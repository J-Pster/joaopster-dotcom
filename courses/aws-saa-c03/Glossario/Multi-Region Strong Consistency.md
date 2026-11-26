---
aliases:
  - "Global Tables MRSC"
  - "MRSC"
  - "consistência forte multi-Região"
tags:
  - glossario
  - dados
---
# Multi-Region Strong Consistency

A consistência forte multi-Região, ou MRSC, das Global Tables do DynamoDB replica as gravações de forma síncrona entre as Regiões antes de confirmá-las, o que dá RPO zero e leitura fortemente consistente. O preço é a latência de escrita, e difere do modo MREC, assíncrono e com last writer wins.

> [!example] Exemplo
> Uma tabela de saldos que não pode perder nenhuma gravação mesmo se uma Região inteira falhar.

Veja também: [[DynamoDB]], [[Global Tables]], [[RPO]], [[Replicacao Sincrona]]

## Onde aparece

- **Módulo 14:** [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 20:** [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
