---
aliases:
  - "appliance mode do Transit Gateway"
  - "modo appliance"
tags:
  - glossario
  - rede
---
# Appliance Mode

O appliance mode é uma opção do attachment de VPC no Transit Gateway que mantém cada fluxo de tráfego na mesma AZ nos dois sentidos. Serve para VPCs de inspeção com firewalls stateful, que precisam ver a ida e a volta da mesma conexão; sem ele, o tráfego de retorno pode sair por outra AZ e ser descartado.

> [!example] Exemplo
> Uma VPC de inspeção com firewalls em duas AZs ativa o appliance mode para que cada conexão passe sempre pelo mesmo firewall.

Veja também: [[Gateway Load Balancer]], [[Stateful e Stateless (Firewall)]], [[Transit Gateway]], [[Transit Gateway Attachment]]

## Onde aparece

- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.03 - Transit Gateway|7.3]]
- **Módulo 12:** [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
