---
aliases:
  - "efeito manada"
  - "thundering herd"
tags:
  - glossario
  - conceito
---
# Thundering Herd

Pico de pedidos ao banco quando muitas chaves do cache expiram ao mesmo tempo (ou o cache cai) e todos os clientes vão ao banco juntos. Reduz-se com TTLs com variação aleatória, cache aquecido e limites de concorrência.

> [!example] Exemplo
> Mil chaves criadas no mesmo minuto com TTL de 1 hora expiram juntas e geram mil consultas simultâneas ao banco.

Veja também: [[Cache]], [[Lazy Loading]], [[TTL de Cache]]

## Onde aparece

- **Módulo 14:** [[14.06 - Estrategias de Cache e DAX|14.6]]
