---
aliases:
  - "definição de tarefa"
  - "task definition"
  - "task definitions"
tags:
  - glossario
  - conceito
---
# Task Definition

A task definition é o modelo versionado, em JSON, que descreve como o ECS deve rodar uma tarefa: imagens, CPU e memória, portas, variáveis, segredos, roles, logs e modo de rede. Cada alteração gera uma nova revisão, e as revisões antigas não mudam, o que permite voltar atrás. É o equivalente a um plano de lançamento reutilizável por tarefas avulsas e por services.

> [!example] Exemplo
> Para trocar de 512 para 1024 unidades de CPU, você registra a revisão 8 da task definition e atualiza o service para usá-la.

Veja também: [[ECS]], [[Servico ECS]], [[Tarefa ECS]], [[Task Role]]

## Onde aparece

- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
