---
aliases:
  - "AWS VPN CloudHub"
  - "VPN CloudHub"
tags:
  - glossario
  - rede
---
# CloudHub

O VPN CloudHub liga vários locais remotos ao mesmo Virtual Private Gateway por conexões VPN com BGP, para que eles se comuniquem entre si passando pela AWS, em topologia de estrela. Cada local precisa de um ASN próprio.

> [!example] Exemplo
> Três filiais, cada uma com uma VPN para o mesmo VGW, trocam tráfego entre si pelo CloudHub.

Veja também: [[BGP]], [[Site-to-Site VPN]], [[Virtual Private Gateway]]

## Onde aparece

- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]]
