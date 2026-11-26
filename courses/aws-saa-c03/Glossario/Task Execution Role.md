---
aliases:
  - "execution role"
  - "role de execução da tarefa"
  - "task execution role"
tags:
  - glossario
  - seguranca
---
# Task Execution Role

A task execution role é a IAM role usada pelo agente do ECS (e do Fargate) para preparar a tarefa: baixar a imagem do ECR, enviar logs ao CloudWatch Logs e buscar segredos referenciados na task definition. Ela atua antes e fora do código da aplicação. Falhas de pull de imagem ou de log normalmente indicam que falta permissão nessa role, não na task role.

> [!example] Exemplo
> Com `AmazonECSTaskExecutionRolePolicy` anexada, a tarefa consegue baixar a imagem do ECR e criar o log stream.

Veja também: [[CloudWatch Logs]], [[ECR]], [[Secrets Manager]], [[Task Role]]

## Onde aparece

- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
