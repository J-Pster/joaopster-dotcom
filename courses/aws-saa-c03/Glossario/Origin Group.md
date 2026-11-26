---
aliases:
  - "grupo de origens"
  - "origin failover"
  - "origin group"
  - "origin groups"
tags:
  - glossario
  - servico
---
# Origin Group

O origin group reúne uma origem primária e uma secundária para failover automático dentro do CloudFront. Se a primária responder com um dos códigos de erro escolhidos (como 500, 502, 503 ou 504) ou falhar na conexão, o CloudFront tenta a secundária para aquele pedido. O failover vale só para GET, HEAD e OPTIONS, começa sempre pela primária e funciona por requisição, sem health check externo, o que combina com conteúdo estático servido por dois buckets em Regiões diferentes.

> [!example] Exemplo
> Um site lê de um bucket em us-east-1 e, se ele falhar, o CloudFront serve do bucket réplica em sa-east-1.

Veja também: [[CloudFront]], [[CloudFront Distribution]], [[Failover]], [[Failover Routing]], [[Origin Shield]], [[S3]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
