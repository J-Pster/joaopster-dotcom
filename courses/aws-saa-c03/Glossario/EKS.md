---
aliases:
  - "Amazon EKS"
  - "Elastic Kubernetes Service"
tags:
  - glossario
  - servico
---
# EKS

Serviço gerenciado que executa o plano de controle do Kubernetes na AWS. A AWS cuida da disponibilidade do plano de controle, e você escolhe onde rodam os nós (instâncias EC2 ou Fargate). É indicado para quem já usa Kubernetes e quer portabilidade entre ambientes.

> [!example] Exemplo
> Uma empresa que opera dezenas de microsserviços em Kubernetes migra para o EKS e mantém os mesmos manifestos, sem administrar o plano de controle.

Veja também: [[Auto Scaling Group]], [[EC2]], [[ECS]], [[Fargate]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 6:** [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 11:** [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 22:** [[22.10 - EMR Big Data com Spark e Hadoop|22.10]]
- **Módulo 23:** [[23.09 - Outposts e Computacao no Local|23.9]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
