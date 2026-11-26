---
aliases:
  - "Accelerated Site-to-Site VPN"
  - "VPN acelerada"
  - "accelerated VPN"
tags:
  - glossario
  - rede
---
# Accelerated VPN

A VPN acelerada usa o AWS Global Accelerator para levar o tráfego do data center até a borda da AWS mais próxima e seguir pela rede global da AWS, reduzindo a variação de latência da internet. Só funciona em conexões ligadas a um Transit Gateway, e tem custo adicional.

> [!example] Exemplo
> Uma filial distante usa VPN acelerada para ter latência mais estável até a Região.

Veja também: [[Global Accelerator]], [[Latencia]], [[Site-to-Site VPN]], [[Transit Gateway]]

## Onde aparece

- **Módulo 3:** [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
