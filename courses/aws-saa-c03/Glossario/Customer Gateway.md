---
aliases:
  - "CGW"
  - "customer gateway"
  - "gateway do cliente"
tags:
  - glossario
  - rede
---
# Customer Gateway

O customer gateway é o recurso que representa, na AWS, o dispositivo de VPN do seu lado (roteador ou firewall): guarda o endereço IP público dele e, para BGP, o número do sistema autônomo. A AWS usa essa informação para montar a configuração dos túneis. Um segundo customer gateway, em outro local, melhora a resiliência contra a falha do dispositivo.

> [!example] Exemplo
> O firewall do escritório é cadastrado como customer gateway com seu IP público e ASN.

Veja também: [[BGP]], [[Site-to-Site VPN]], [[Virtual Private Gateway]]

## Onde aparece

- **Módulo 3:** [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]]
