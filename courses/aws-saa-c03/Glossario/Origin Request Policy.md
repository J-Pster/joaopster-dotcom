---
aliases:
  - "origin request policies"
  - "política de requisição de origem"
tags:
  - glossario
  - servico
---
# Origin Request Policy

A origin request policy define o que o CloudFront envia à origem além do que já está na cache key, como headers, cookies e query strings extras. Ela existe porque a origem às vezes precisa de um valor (o país do usuário, um cookie de sessão) que não deve dividir o cache em várias versões. Tudo o que está na cache key vai automaticamente à origem, e a origin request policy acrescenta o resto.

> [!example] Exemplo
> Uma API recebe o cookie de sessão por uma origin request policy, enquanto a cache policy CachingDisabled impede que a resposta seja guardada.

Veja também: [[Cache Behavior]], [[Cache Key]], [[Cache Policy]]

## Onde aparece

- **Módulo 18:** [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]]
