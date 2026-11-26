---
aliases:
  - "cache keys"
  - "chave de cache"
tags:
  - glossario
  - conceito
---
# Cache Key

A cache key é o identificador que o CloudFront usa para decidir se dois pedidos são do mesmo objeto. Ela sempre inclui o caminho e pode incluir headers, cookies e query strings, conforme a cache policy. Quanto mais valores entram na chave, mais versões do mesmo objeto são guardadas e menor o cache hit ratio, por isso só se inclui o que muda a resposta.

> [!example] Exemplo
> Se a chave inclui todas as query strings, os links `?utm_source=a` e `?utm_source=b` viram dois objetos distintos, mesmo com resposta idêntica.

Veja também: [[Cache Hit Ratio]], [[Cache Policy]], [[Origin Request Policy]]

## Onde aparece

- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
