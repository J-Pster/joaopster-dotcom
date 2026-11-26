---
aliases:
  - "IAM Roles for Service Accounts"
tags:
  - glossario
  - seguranca
---
# IRSA

IRSA (IAM Roles for Service Accounts) associa uma IAM role a uma service account do Kubernetes, para que os pods daquela conta recebam credenciais temporárias da AWS via federação OIDC. Isso aplica o menor privilégio por aplicação, em vez de dar a todos os pods a role dos nós. O EKS Pod Identity é a alternativa mais simples de configurar.

> [!example] Exemplo
> Só o pod do serviço de relatórios consegue ler o bucket S3, porque somente a service account dele tem a role.

Veja também: [[EKS Pod Identity]], [[IAM Role]], [[Menor Privilegio]], [[STS]]

## Onde aparece

- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
