---
aliases:
  - "VPC endpoint"
  - "VPC endpoints"
  - "endpoint de VPC"
  - "endpoints de VPC"
tags:
  - glossario
  - rede
---
# VPC Endpoint

Um VPC endpoint permite que recursos da VPC acessem serviços da AWS sem passar pela internet pública. O endpoint de gateway serve ao S3 e ao DynamoDB e funciona por rota na tabela de rotas, sem custo adicional por hora. O endpoint de interface, baseado em PrivateLink, cria uma interface de rede (ENI) na sua sub-rede para muitos outros serviços, com cobrança por hora e por GB. Mantém o tráfego na rede da AWS e pode reduzir o custo de NAT.

> [!example] Exemplo
> Uma sub-rede sem internet usa um endpoint de gateway para o S3 e endpoints de interface para o SSM, sem NAT.

Veja também: [[Endpoint Policy]], [[Gateway Endpoint]], [[Interface Endpoint]], [[NAT Gateway]], [[PrivateLink]], [[Route Table]], [[S3]], [[VPC]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.04 - Conditions e Condition Keys|4.4]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 22:** [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
