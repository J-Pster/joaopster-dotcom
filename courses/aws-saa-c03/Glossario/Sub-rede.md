---
aliases:
  - "sub-rede"
  - "sub-redes"
  - "subnet"
  - "subnets"
tags:
  - glossario
  - rede
---
# Sub-rede

Uma sub-rede é uma fatia do CIDR da VPC que vive em uma única Zona de Disponibilidade. Ela é a unidade onde você coloca recursos e à qual associa uma route table e uma Network ACL; a AWS reserva 5 endereços IPv4 em cada uma. Ser pública ou privada depende de a route table ter rota para o Internet Gateway, e, como é zonal, alta disponibilidade exige sub-redes em mais de uma AZ.

> [!example] Exemplo
> Uma VPC 10.10.0.0/16 usa sub-redes /24 por AZ e por camada (pública, aplicação, dados), cada uma com a sua route table.

Veja também: [[Sub-rede Privada]], [[Sub-rede Publica]], [[VPC]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 4:** [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.09 - Instance Refresh Termination e Spot|12.9]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 22:** [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.09 - Outposts e Computacao no Local|23.9]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
