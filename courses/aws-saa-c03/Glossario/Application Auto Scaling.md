---
aliases:
  - "Application Auto Scaling API"
  - "Auto Scaling de Aplicação"
  - "application auto scaling"
  - "service auto scaling"
tags:
  - glossario
  - servico
---
# Application Auto Scaling

O Application Auto Scaling é o serviço que ajusta automaticamente a capacidade de recursos que não são instâncias EC2, como o número de tarefas de um serviço ECS, a capacidade provisionada do DynamoDB, as réplicas de leitura do Aurora e a concorrência provisionada do Lambda. Usa o mesmo vocabulário de políticas do EC2 Auto Scaling (target tracking, step e scheduled) sobre um recurso registrado como scalable target; sem uma política, a capacidade fica fixa. Ele ajusta o recurso em si (quantas tarefas), diferente do que escala as instâncias por baixo.

> [!example] Exemplo
> O número de tarefas de um serviço ECS acompanha a CPU média do serviço: sobe de 2 para 8 tarefas no pico e volta a 2 depois.

Veja também: [[CloudWatch]], [[DynamoDB]], [[EC2 Auto Scaling]], [[ECS]], [[Servico ECS]], [[Target Tracking]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]]
- **Módulo 14:** [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]]
- **Módulo 16:** [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
