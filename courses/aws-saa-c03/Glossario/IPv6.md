---
aliases:
  - "endereço IPv6"
  - "endereços IPv6"
tags:
  - glossario
  - rede
---
# IPv6

Endereçamento de 128 bits criado para acabar com a escassez do IPv4, escrito em 8 grupos hexadecimais com :: para abreviar zeros. Na VPC, a Amazon fornece um bloco /56 e cada sub-rede recebe um /64. As regras de IPv4 e IPv6 são avaliadas separadamente.

> [!example] Exemplo
> Em dual-stack, a porta 443 precisa ser liberada para 0.0.0.0/0 e também para ::/0.

Veja também: [[CIDR]], [[Egress-Only Internet Gateway]], [[IPv4]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
