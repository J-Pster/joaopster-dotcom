---
aliases:
  - "DX Gateway"
  - "DXGW"
  - "Direct Connect gateway"
tags:
  - glossario
  - rede
---
# Direct Connect Gateway

O Direct Connect Gateway é um recurso global que liga uma VIF privada ou de trânsito a Virtual Private Gateways ou Transit Gateways em várias Regiões e contas. Permite que um único Direct Connect alcance VPCs de Regiões diferentes. Ele não roteia tráfego entre as VPCs associadas a ele, e não liga Transit Gateways entre si.

> [!example] Exemplo
> Um Direct Connect em Virgínia alcança VPCs em us-east-1 e eu-west-1 por um DX Gateway.

Veja também: [[Direct Connect]], [[Transit Gateway]], [[Virtual Interface]], [[Virtual Private Gateway]]

## Onde aparece

- **Módulo 3:** [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.06 - Direct Connect|7.6]]
