---
aliases:
  - "0.0.0.0/0"
  - "default route"
  - "rota padrão"
  - "rotas padrão"
tags:
  - glossario
  - rede
---
# Rota Padrao

Rota com prefixo zero (0.0.0.0/0 em IPv4, ::/0 em IPv6) que casa com qualquer destino e por isso é a menos específica. Em sub-rede pública aponta para o Internet Gateway; em privada, para o NAT gateway.

> [!example] Exemplo
> A rota 0.0.0.0/0 para o NAT gateway dá saída à sub-rede privada.

Veja também: [[Longest Prefix Match]], [[NAT Gateway]], [[Route Table]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]]
- **Módulo 7:** [[07.03 - Transit Gateway|7.3]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
