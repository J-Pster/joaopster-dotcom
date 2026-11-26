---
aliases:
  - "recursive resolver"
  - "resolvedor DNS"
  - "resolvedor recursivo"
tags:
  - glossario
  - rede
---
# Resolvedor Recursivo

Servidor que faz a consulta de DNS em nome do cliente: usa cache e, sem ele, pergunta à raiz, ao TLD e ao servidor autoritativo. Dentro da VPC, o resolvedor Amazon DNS fica no endereço base da VPC mais 2.

> [!example] Exemplo
> O notebook pergunta ao resolvedor do provedor, que descobre o IP percorrendo a hierarquia.

Veja também: [[DNS]], [[Route 53 Resolver]], [[TTL]]

## Onde aparece

- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]]
- **Módulo 7:** [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
