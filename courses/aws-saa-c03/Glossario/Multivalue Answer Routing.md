---
aliases:
  - "multivalue answer"
  - "resposta de múltiplos valores"
  - "roteamento multivalue"
tags:
  - glossario
  - conceito
---
# Multivalue Answer Routing

A resposta de múltiplos valores devolve até 8 registros saudáveis escolhidos aleatoriamente, e cada registro pode ter um health check. Melhora a disponibilidade em nível de DNS, mas não substitui um balanceador de carga, pois quem escolhe o endereço é o cliente. Se todos estiverem não saudáveis, devolve até 8 deles mesmo assim.

> [!example] Exemplo
> Um nome devolve 4 IPs de servidores saudáveis, e o navegador tenta um deles.

Veja também: [[Application Load Balancer]], [[Health Check]], [[Routing Policy]]

## Onde aparece

- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
