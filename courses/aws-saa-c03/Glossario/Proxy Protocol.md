---
aliases:
  - "PPv2"
  - "Proxy Protocol v2"
tags:
  - glossario
  - rede
---
# Proxy Protocol

Cabeçalho que o Network Load Balancer pode acrescentar no início da conexão TCP para informar o IP e a porta originais do cliente quando a preservação de IP está desligada. A aplicação precisa saber interpretá-lo, senão a conexão falha.

> [!example] Exemplo
> Um NLB com alvos do tipo ip repassa o endereço real do cliente em um cabeçalho proxy protocol v2 lido pelo servidor.

Veja também: [[Application Load Balancer]], [[Elastic IP]], [[Network Load Balancer]], [[Target Group]]

## Onde aparece

- **Módulo 6:** [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 12:** [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
