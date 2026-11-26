---
aliases:
  - "ASG"
  - "Auto Scaling"
  - "grupo de Auto Scaling"
tags:
  - glossario
  - servico
---
# Auto Scaling Group

Grupo de instâncias EC2 que a AWS mantém no tamanho certo, adicionando ou removendo instâncias conforme políticas e métricas, e substituindo instâncias com falha. Fornece elasticidade e distribui instâncias entre AZs. Detalhado no Módulo 12.

> [!example] Exemplo
> Um ASG de 2 a 10 instâncias em três AZs, escalando por CPU.

Veja também: [[EC2]], [[Elastic Load Balancing]], [[Elasticidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.01 - Por que a Nuvem Existe|1.1]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 5:** [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.05 - Security Groups|6.5]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]], [[09.07 - Placement Groups|9.7]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]], [[12.09 - Instance Refresh Termination e Spot|12.9]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
- **Módulo 24:** [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
