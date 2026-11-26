---
aliases:
  - "VGW"
  - "gateway privado virtual"
  - "virtual private gateway"
tags:
  - glossario
  - rede
---
# Virtual Private Gateway

O Virtual Private Gateway é o lado AWS de uma VPN ou de um Direct Connect privado, anexado a uma única VPC. Recebe os túneis da Site-to-Site VPN e anuncia as rotas da VPC. É a opção simples para ligar uma VPC ao data center; para várias VPCs, o Transit Gateway é o ponto de entrada mais adequado.

> [!example] Exemplo
> Uma VPC isolada anexa um VGW e recebe os dois túneis de VPN do escritório.

Veja também: [[Customer Gateway]], [[Direct Connect Gateway]], [[Site-to-Site VPN]], [[Transit Gateway]]

## Onde aparece

- **Módulo 3:** [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.03 - Transit Gateway|7.3]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
