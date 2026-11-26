---
aliases:
  - "invalidar o cache"
  - "invalidation"
  - "invalidação"
  - "invalidações"
tags:
  - glossario
  - conceito
---
# Invalidacao de Cache

A invalidação pede ao CloudFront que remova caminhos do cache antes de o TTL vencer, para que o próximo pedido busque a versão nova na origem. Ela atua nos pontos de presença e nos caches regionais, mas não limpa o navegador do usuário. Os primeiros 1.000 caminhos por mês são gratuitos, e um caminho com curinga conta como um; versionar o nome dos arquivos costuma ser mais barato e mais confiável.

> [!example] Exemplo
> Depois de corrigir o `index.html`, a equipe invalida `/index.html` e não precisa esperar as 24 horas do TTL.

Veja também: [[Cache Hit Ratio]], [[CloudFront]], [[TTL]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 14:** [[14.06 - Estrategias de Cache e DAX|14.6]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
