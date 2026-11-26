---
aliases:
  - "control plane"
  - "plano de controle"
tags:
  - glossario
  - conceito
---
# Plano de Controle

Parte de um serviço que cria, altera, lista e apaga recursos (operações CRUDL), em contraste com o plano de dados, que atende o tráfego do dia a dia. Em serviços globais como IAM e Route 53, o plano de controle fica em uma única Região (us-east-1). Planos de recuperação não devem depender dele durante um incidente.

> [!example] Exemplo
> Editar um registro do Route 53 usa o plano de controle; resolver DNS usa o plano de dados.

Veja também: [[Estabilidade Estatica]], [[Plano de Dados]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 11:** [[11.06 - Replicacao do S3|11.6]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 23:** [[23.09 - Outposts e Computacao no Local|23.9]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
