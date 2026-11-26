---
aliases:
  - "PHZ"
  - "zona hospedada privada"
  - "zona privada"
  - "zonas hospedadas privadas"
tags:
  - glossario
  - rede
---
# Private Hosted Zone

A zona hospedada privada guarda registros DNS que só podem ser resolvidos a partir das VPCs associadas a ela. Serve para dar nomes aos recursos internos sem expô-los na internet. A VPC precisa ter os atributos de DNS (suporte e hostnames) ligados.

> [!example] Exemplo
> A zona `interno.exemplo.com` resolve `db.interno.exemplo.com` para um IP privado, visível só às VPCs associadas.

Veja também: [[Hosted Zone]], [[Route 53 Resolver]], [[Split-View DNS]]

## Onde aparece

- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
