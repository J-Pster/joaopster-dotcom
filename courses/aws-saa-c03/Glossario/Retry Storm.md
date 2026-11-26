---
aliases:
  - "retry storm"
  - "tempestade de retentativas"
tags:
  - glossario
  - conceito
---
# Retry Storm

A tempestade de retentativas ocorre quando muitos clientes retentam ao mesmo tempo uma chamada que falhou, aumentando a carga sobre um serviço já degradado e impedindo sua recuperação. Backoff exponencial, jitter, limite de tentativas e circuit breakers existem para evitá-la.

> [!example] Exemplo
> Mil clientes perdem a conexão e retentam em 1 s, 2 s e 4 s em ondas sincronizadas que mantêm o servidor sobrecarregado.

Veja também: [[Backoff Exponencial]], [[Circuit Breaker]], [[Idempotencia]], [[Jitter]]

## Onde aparece

- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
