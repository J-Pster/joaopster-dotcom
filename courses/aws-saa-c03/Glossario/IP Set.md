---
aliases:
  - "IP sets"
  - "conjunto de IPs"
  - "lista de IPs do WAF"
tags:
  - glossario
  - seguranca
---
# IP Set

Um IP set do WAF é uma lista de endereços ou intervalos CIDR que as regras podem referenciar para permitir ou bloquear, sem repetir os endereços dentro de cada regra. Pode ser reutilizado em vários web ACLs e atualizado em um só lugar. Existe para manter listas de permissão e de bloqueio simples de administrar.

> [!example] Exemplo
> Um IP set com os endereços do escritório é referenciado por uma regra Allow no painel administrativo, enquanto outro IP set de bloqueio é referenciado por uma regra Block.

Veja também: [[Rate-Based Rule]], [[WAF]], [[Web ACL]]

## Onde aparece

- **Módulo 18:** [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
