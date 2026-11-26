---
aliases:
  - "CIDR collection"
  - "política baseada em IP"
  - "roteamento baseado em IP"
tags:
  - glossario
  - conceito
---
# IP-Based Routing

No roteamento baseado em IP, o Route 53 compara o endereço de origem da consulta a coleções de blocos CIDR que você define e escolhe o registro correspondente. Serve para tratar uma operadora ou uma rede corporativa conhecida de forma especial, por exemplo mandando-a a um endpoint com peering direto.

> [!example] Exemplo
> Os clientes de uma operadora com peering em eu-west-1 recebem o endpoint dessa Região pelo bloco CIDR da operadora.

Veja também: [[Geolocation Routing]], [[Hosted Zone]], [[Routing Policy]]

## Onde aparece

- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]]
