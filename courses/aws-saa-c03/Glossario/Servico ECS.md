---
aliases:
  - "ECS service"
  - "ECS services"
  - "service ECS"
  - "service do ECS"
  - "serviço do ECS"
tags:
  - glossario
  - conceito
---
# Servico ECS

O service do ECS mantém um número desejado de tarefas em execução, substitui as que falham e as registra em um balanceador. Ele também coordena os deploys e responde ao service auto scaling. Use service para cargas contínuas (APIs, workers) e tarefa avulsa para jobs que terminam.

> [!example] Exemplo
> Um service com desired count 4 inicia uma tarefa nova sempre que uma das quatro morre.

Veja também: [[Application Auto Scaling]], [[Application Load Balancer]], [[Tarefa ECS]], [[Task Definition]]

## Onde aparece

- **Módulo 12:** [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
