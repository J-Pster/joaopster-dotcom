---
aliases:
  - "AWS Fargate"
tags:
  - glossario
  - servico
---
# Fargate

Mecanismo serverless para rodar contêineres no ECS ou no EKS sem gerenciar servidores. A AWS cuida da infraestrutura e do sistema operacional do host, reduzindo o overhead operacional. Detalhado no Módulo 17.

> [!example] Exemplo
> Uma API em contêiner rodando no ECS Fargate sem nenhuma instância EC2 para gerenciar.

Veja também: [[ECS]], [[Lambda]], [[Overhead Operacional]]

## Onde aparece

- **Módulo 1:** [[01.01 - Por que a Nuvem Existe|1.1]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]]
- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]]
- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 5:** [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 22:** [[22.10 - EMR Big Data com Spark e Hadoop|22.10]]
- **Módulo 23:** [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
