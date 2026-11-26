---
aliases:
  - "VPC peering"
  - "conexão de peering"
  - "peering"
  - "peering de VPC"
  - "peerings"
tags:
  - glossario
  - rede
---
# VPC Peering

VPC peering é uma conexão de rede privada entre duas VPCs, da mesma conta ou de contas e Regiões diferentes, que permite tráfego por IPs privados. Exige CIDRs que não se sobreponham (com blocos sobrepostos a conexão falha), rotas nas route tables dos dois lados e, entre contas, um aceite do dono da outra ponta. Não é transitivo e não cobra taxa por hora, só a transferência entre AZs ou Regiões, sendo a opção mais barata para poucas VPCs. Abre a rede inteira entre as duas VPCs; quando só um serviço precisa ser exposto, o PrivateLink é melhor.

> [!example] Exemplo
> Duas VPCs 10.10.0.0/16 e 10.20.0.0/16 de times diferentes trocam muito tráfego por peering, cada uma com uma rota apontando para a conexão; duas VPCs 10.0.0.0/16 não poderiam.

Veja também: [[CIDR]], [[PrivateLink]], [[Roteamento Transitivo]], [[Transit Gateway]], [[VPC]]

## Onde aparece

- **Módulo 3:** [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 6:** [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.06 - Direct Connect|7.6]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
