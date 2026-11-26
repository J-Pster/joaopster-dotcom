---
aliases:
  - "cache policies"
  - "política de cache"
  - "políticas de cache"
tags:
  - glossario
  - servico
---
# Cache Policy

A cache policy define a cache key (quais headers, cookies e query strings contam) e os TTLs mínimo, máximo e padrão de um behavior. Existem políticas gerenciadas, como CachingOptimized para conteúdo estático e CachingDisabled para conteúdo que não deve ser guardado. Separar essa regra em uma política reutilizável deixa a configuração consistente entre vários behaviors.

> [!example] Exemplo
> Um behavior de imagens usa CachingOptimized, que respeita o Cache-Control da origem (TTL padrão de 1 dia, máximo de 365) e ignora cookies e query strings na chave.

Veja também: [[Cache Behavior]], [[Cache Key]], [[Origin Request Policy]], [[TTL]]

## Onde aparece

- **Módulo 18:** [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
