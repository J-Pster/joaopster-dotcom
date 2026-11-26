---
aliases:
  - "geo restrictions"
  - "restrição geográfica"
  - "restrição por país do CloudFront"
tags:
  - glossario
  - seguranca
---
# Geo Restriction

A geo restriction do CloudFront permite ou bloqueia o acesso a toda a distribuição por país, devolvendo erro 403 a quem está nos países bloqueados. Existe para atender obrigações legais ou de licenciamento. Ela bloqueia conteúdo, ao contrário da geolocalização do Route 53, que apenas escolhe para onde apontar o DNS.

> [!example] Exemplo
> Uma plataforma de streaming com direitos só para o Brasil usa uma lista de permissão com um único país.

Veja também: [[CloudFront Signed URL]], [[Geolocation Routing]], [[WAF]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
