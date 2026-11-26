---
aliases:
  - "DHCP options set"
  - "conjunto de opções DHCP"
  - "opções DHCP"
tags:
  - glossario
  - rede
---
# DHCP Option Set

O DHCP option set é o conjunto de parâmetros que a VPC entrega às instâncias ao iniciar: servidores DNS, nome de domínio, NTP e NetBIOS. O padrão usa o DNS da Amazon. Não se edita: para usar um DNS próprio cria-se um novo e associa-se à VPC.

> [!example] Exemplo
> Para usar o Active Directory como DNS, cria-se um novo option set apontando para os controladores.

Veja também: [[Route 53 Resolver]], [[VPC]]

## Onde aparece

- **Módulo 6:** [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
