---
aliases:
  - "hit ratio"
  - "taxa de acerto de cache"
  - "taxa de cache hit"
tags:
  - glossario
  - conceito
---
# Cache Hit Ratio

O cache hit ratio é a proporção de pedidos respondidos pelo cache em relação ao total. Quanto maior, menos pedidos chegam à origem, menor a latência para o usuário e menor o custo de computação e de transferência da origem. Ele cai quando a cache key é fragmentada, quando os TTLs são curtos demais ou quando o conteúdo é majoritariamente dinâmico.

> [!example] Exemplo
> Com 90% de hit ratio, só 1 em cada 10 pedidos vai à origem, que passa a receber um décimo da carga.

Veja também: [[Cache Key]], [[CloudFront]], [[Regional Edge Cache]], [[TTL]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
