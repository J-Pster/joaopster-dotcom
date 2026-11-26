---
aliases:
  - "Managed Instances"
tags:
  - glossario
  - servico
---
# ECS Managed Instances

O ECS Managed Instances roda tarefas do ECS em instâncias EC2 que a AWS provisiona, escala e mantém, oferecendo acesso a tipos de instância como GPU sem que você gerencie a frota. Fica entre o Fargate (sem servidor, menos controle) e o ECS em EC2 puro (controle total, mais operação). Útil quando se precisa de hardware específico com menos trabalho.

> [!example] Exemplo
> Um serviço de inferência com GPU roda no ECS Managed Instances sem que o time faça patch das instâncias.

Veja também: [[EC2]], [[ECS]], [[Fargate]]

## Onde aparece

- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
