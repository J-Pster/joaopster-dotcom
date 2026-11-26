---
aliases:
  - "NAT gateway regional"
  - "NAT regional"
  - "regional NAT gateway"
tags:
  - glossario
  - servico
---
# Regional NAT Gateway

Modo de disponibilidade do NAT gateway em que um único recurso expande e contrai sozinho entre as AZs onde há workloads, sem exigir sub-rede pública nem uma rota por AZ. No modo automático a AWS gerencia os Elastic IPs por AZ. Não suporta NAT privado.

> [!example] Exemplo
> Em vez de três NAT gateways zonais e três rotas, a equipe usa um NAT gateway regional e uma única rota 0.0.0.0/0 nas três AZs.

Veja também: [[Alta Disponibilidade]], [[Elastic IP]], [[NAT Gateway]], [[Route Table]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
