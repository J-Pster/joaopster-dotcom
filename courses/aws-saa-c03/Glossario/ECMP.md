---
aliases:
  - "Equal Cost Multi-Path"
tags:
  - glossario
  - rede
---
# ECMP

ECMP (equal-cost multi-path) é a técnica de dividir o tráfego entre vários caminhos de mesmo custo. No Transit Gateway, anexos de VPN com roteamento dinâmico (BGP) podem usar ECMP para somar a banda de vários túneis, passando do limite de cerca de 1,25 Gbps de um túnel; na VPN para um Virtual Private Gateway isso não está disponível.

> [!example] Exemplo
> Quatro túneis de VPN para o mesmo Transit Gateway, com BGP, somam banda por ECMP.

Veja também: [[BGP]], [[Site-to-Site VPN]], [[Throughput]], [[Transit Gateway]]

## Onde aparece

- **Módulo 3:** [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.03 - Transit Gateway|7.3]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
