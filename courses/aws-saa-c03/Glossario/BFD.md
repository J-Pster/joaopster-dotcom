---
aliases:
  - "Bidirectional Forwarding Detection"
tags:
  - glossario
  - rede
---
# BFD

O BFD é um protocolo leve que detecta falha de caminho entre dois roteadores em menos de um segundo, bem antes do timeout normal do BGP. Em Direct Connect, ele acelera o failover para o link de backup quando o caminho principal cai. O BFD vem habilitado do lado da AWS, mas o roteador do cliente precisa ativá-lo também.

> [!example] Exemplo
> Sem BFD, o BGP pode levar dezenas de segundos para perceber que o link caiu e trocar para a VPN de backup. Com BFD ativo no roteador do cliente, a troca acontece em cerca de um segundo.

Veja também: [[Direct Connect]], [[Site-to-Site VPN]], [[Virtual Interface]]

## Onde aparece

- **Módulo 7:** [[07.06 - Direct Connect|7.6]]
