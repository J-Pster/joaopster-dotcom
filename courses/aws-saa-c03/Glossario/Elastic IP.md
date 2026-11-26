---
aliases:
  - "EIP"
  - "Elastic IPs"
  - "IP elástico"
tags:
  - glossario
  - rede
---
# Elastic IP

Elastic IP é um endereço IPv4 público estático que você reserva na conta e associa a um recurso, mantendo o mesmo endereço mesmo que a instância mude. A AWS cobra por hora todo IPv4 público, em uso ou ocioso, então EIPs esquecidos custam dinheiro. O NAT gateway público e o NLB podem usar Elastic IPs; o ALB não.

> [!example] Exemplo
> Um NLB com um Elastic IP por AZ dá ao parceiro IPs fixos para liberar no firewall dele.

Veja também: [[ENI]], [[IPv4]], [[Internet Gateway]], [[NAT Gateway]], [[Network Load Balancer]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]]
- **Módulo 7:** [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 18:** [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
