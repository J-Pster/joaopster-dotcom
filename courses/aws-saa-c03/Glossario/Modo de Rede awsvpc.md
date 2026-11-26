---
aliases:
  - "awsvpc"
  - "modo awsvpc"
  - "modo de rede awsvpc"
tags:
  - glossario
  - rede
---
# Modo de Rede awsvpc

No modo awsvpc cada tarefa do ECS recebe a própria interface de rede elástica, com IP e security groups próprios, como se fosse uma instância pequena na VPC. Isso permite regras de segurança por tarefa e é o único modo suportado no Fargate. Por isso os alvos do balanceador para essas tarefas são do tipo IP.

> [!example] Exemplo
> Um service em Fargate tem um security group próprio que só aceita tráfego vindo do ALB.

Veja também: [[ENI]], [[Fargate]], [[Security Group]], [[Target Group]]

## Onde aparece

- **Módulo 12:** [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]]
