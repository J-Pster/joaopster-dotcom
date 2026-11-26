---
aliases:
  - "regional edge cache"
  - "regional edge caches"
tags:
  - glossario
  - rede
---
# Regional Edge Cache

Camada de cache do CloudFront entre as edge locations e a origem, maior que o cache de cada POP. Mantém por mais tempo objetos menos populares e faz os POPs de uma área compartilharem um cache. Métodos de escrita (POST, PUT) vão direto à origem.

> [!example] Exemplo
> Fotos antigas de produto saem do POP, mas continuam no regional edge cache e não voltam à origem.

Veja também: [[CloudFront]], [[Edge Location]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
