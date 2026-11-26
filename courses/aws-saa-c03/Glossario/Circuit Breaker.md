---
aliases:
  - "circuit breaker"
  - "disjuntor"
tags:
  - glossario
  - conceito
---
# Circuit Breaker

O circuit breaker é um padrão em que o chamador, depois de falhas repetidas em uma dependência, abre o circuito e para de chamá-la por um tempo, falhando rápido ou usando um fallback, e testa de novo mais tarde. Existe para não sobrecarregar uma dependência que já está mal e para não prender os recursos do próprio chamador em chamadas que vão falhar.

> [!example] Exemplo
> Depois de 50% de erros em 10 segundos, o serviço de pedidos para de chamar o de frete por 30 segundos e usa um valor padrão.

Veja também: [[Bulkhead]], [[Graceful Degradation]], [[Retry Storm]], [[Timeout]]

## Onde aparece

- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
