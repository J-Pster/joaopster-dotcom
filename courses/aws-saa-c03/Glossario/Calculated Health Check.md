---
aliases:
  - "health check calculado"
  - "health checks calculados"
tags:
  - glossario
  - conceito
---
# Calculated Health Check

O health check calculado combina o estado de outros health checks (os filhos) em um resultado único, por E, OU ou um mínimo de saudáveis. Serve para declarar uma aplicação saudável só quando um conjunto de componentes está de pé. Um health check calculado não pode monitorar outro calculado.

> [!example] Exemplo
> A aplicação só é saudável se pelo menos 2 de 3 microsserviços responderem.

Veja também: [[Evaluate Target Health]], [[Failover Routing]], [[Health Check]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
