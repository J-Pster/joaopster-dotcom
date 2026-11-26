---
aliases:
  - "Border Gateway Protocol"
tags:
  - glossario
  - rede
---
# BGP

Protocolo (TCP 179) pelo qual sistemas autônomos anunciam os prefixos que alcançam e aprendem os dos vizinhos. Escolhe caminhos por política e menor AS path, e o prefixo mais específico sempre vence. Permite failover automático em VPNs dinâmicas e é usado no Direct Connect.

> [!example] Exemplo
> Se um túnel cai, a rota é retirada via BGP e o tráfego usa o outro.

Veja também: [[Direct Connect]], [[Longest Prefix Match]], [[Sistema Autonomo]], [[Site-to-Site VPN]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.03 - Transit Gateway|7.3]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
