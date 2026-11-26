---
aliases:
  - "máscara de rede"
  - "máscara de sub-rede"
  - "máscaras de rede"
  - "netmask"
tags:
  - glossario
  - rede
---
# Mascara de Rede

O prefixo escrito como endereço: bits 1 onde está a rede e bits 0 onde está o host (/24 vira 255.255.255.0). A máquina a usa para decidir se um destino é local ou se deve ir ao roteador. Na AWS e na prova, a notação /n é a mais usada.

> [!example] Exemplo
> /20 equivale a 255.255.240.0, com blocos de 16 no terceiro octeto.

Veja também: [[CIDR]], [[IPv4]], [[Sub-rede]]

## Onde aparece

- **Módulo 3:** [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]]
