---
aliases:
  - "behavior padrão"
  - "cache behaviors"
  - "comportamento de cache"
  - "padrão de caminho"
tags:
  - glossario
  - servico
---
# Cache Behavior

O cache behavior é a regra da distribuição que diz como tratar os pedidos que casam com um padrão de caminho: qual origem usar, qual cache policy aplicar, quais métodos aceitar e se exige assinatura. O CloudFront compara o pedido aos padrões na ordem e usa o primeiro que casar, com o padrão `*` sempre por último. Isso permite servir, em um mesmo domínio, conteúdo estático com cache longo e uma API sem cache.

> [!example] Exemplo
> O padrão `/api/*` vai ao ALB com CachingDisabled e o padrão `/static/*` vai ao S3 com cache de um ano.

Veja também: [[Cache Policy]], [[CloudFront Distribution]], [[Origin Request Policy]], [[TTL]]

## Onde aparece

- **Módulo 18:** [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
