---
aliases:
  - "Resolver rules"
  - "regra de forward"
  - "regra do Resolver"
  - "regras do Resolver"
tags:
  - glossario
  - rede
---
# Resolver Rule

Uma Resolver rule associa um domínio a um destino de DNS. A regra de forward encaminha as consultas do domínio, por um outbound endpoint, a servidores como os do data center; quando duas regras casam, vale a mais específica. As regras se associam a VPCs e podem ser compartilhadas entre contas pelo AWS RAM.

> [!example] Exemplo
> A regra corp.example.com aponta ao DNS do data center e é compartilhada com toda a organização.

Veja também: [[RAM]], [[Resolver Endpoint]], [[Route 53 Resolver]]

## Onde aparece

- **Módulo 4:** [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 7:** [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
