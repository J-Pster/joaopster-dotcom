---
aliases:
  - "capacity provider"
  - "capacity providers"
  - "provedor de capacidade"
tags:
  - glossario
  - conceito
---
# Capacity Provider

O capacity provider diz ao ECS de onde vem a capacidade de computação: Fargate, Fargate Spot ou um grupo de Auto Scaling de instâncias EC2. A estratégia do service define `base` (quantas tarefas mínimas vão para um provedor) e `weight` (como o restante é dividido). Isso permite misturar On-Demand e Spot para equilibrar custo e disponibilidade.

> [!example] Exemplo
> Com base 2 em Fargate e peso 1 para Fargate e 3 para Spot, as primeiras 2 tarefas ficam no Fargate e o resto se divide 1 para 3.

Veja também: [[ECS]], [[Fargate]], [[Fargate Spot]], [[Spot Instance]]

## Onde aparece

- **Módulo 12:** [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
