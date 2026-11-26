---
aliases:
  - "Amazon VPC"
  - "VPCs"
  - "Virtual Private Cloud"
  - "nuvem privada virtual"
  - "rede virtual privada"
tags:
  - glossario
  - rede
---
# VPC

A VPC (Virtual Private Cloud) é a rede virtual isolada que você define dentro de uma Região da AWS, com seu próprio bloco CIDR (de /16 a /28), sub-redes, tabelas de rotas e filtros. Ela existe para que seus recursos não dividam uma rede aberta com os de outros clientes e para que você controle quem fala com quem. Uma VPC é regional e atravessa todas as Zonas de Disponibilidade da Região, enquanto cada sub-rede fica em uma única AZ.

> [!example] Exemplo
> Uma empresa cria uma VPC 10.20.0.0/16 em us-east-1 e divide em sub-redes públicas, privadas e de dados em três AZs.

Veja também: [[CIDR]], [[Internet Gateway]], [[NAT Gateway]], [[PrivateLink]], [[Route Table]], [[Security Group]], [[Sub-rede]], [[VPC Endpoint]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.07 - TLS HTTPS e Certificados|3.7]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.07 - Placement Groups|9.7]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]]
- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.09 - Outposts e Computacao no Local|23.9]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.10 - Rede e Transferencia de Dados|25.10]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
