---
aliases:
  - "IAM role da tarefa"
  - "role da tarefa"
  - "task role"
tags:
  - glossario
  - seguranca
---
# Task Role

A task role é a IAM role que o código dentro do container assume para chamar serviços da AWS, como gravar no S3 ou ler do DynamoDB. Ela existe para aplicar o menor privilégio por aplicação, sem credenciais fixas dentro da imagem. Não se confunde com a task execution role, que serve ao agente do ECS.

> [!example] Exemplo
> O container que grava relatórios no S3 recebe uma task role com `s3:PutObject` apenas naquele prefixo.

Veja também: [[IAM Role]], [[Menor Privilegio]], [[Task Execution Role]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
