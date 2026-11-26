---
aliases:
  - "dual stack"
  - "dual-stack"
  - "pilha dupla"
tags:
  - glossario
  - rede
---
# Dual-Stack

Dual-stack é uma VPC ou sub-rede com IPv4 e IPv6 ao mesmo tempo. Os blocos IPv6 são /56 na VPC e /64 por sub-rede, e os endereços são globais. Security groups e NACLs têm regras separadas para cada família, e esquecer o ::/0 é causa comum de falha.

> [!example] Exemplo
> Um ALB dual-stack atende clientes IPv4 e IPv6, com regras para 0.0.0.0/0 e ::/0.

Veja também: [[CIDR]], [[Egress-Only Internet Gateway]], [[Security Group]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 5:** [[05.05 - IAM Identity Center|5.5]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
