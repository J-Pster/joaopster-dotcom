---
aliases:
  - "Pod Identity"
tags:
  - glossario
  - seguranca
---
# EKS Pod Identity

O EKS Pod Identity entrega credenciais temporárias da AWS aos pods ligando uma IAM role a uma service account por meio de uma associação gerenciada pelo EKS, sem configurar um provedor OIDC por cluster. Permite reutilizar a mesma role em vários clusters. Resolve o mesmo problema do IRSA com menos passos.

> [!example] Exemplo
> Uma única role de leitura do DynamoDB é associada à service account `catalogo` em dois clusters.

Veja também: [[EKS]], [[IAM Role]], [[IRSA]]

## Onde aparece

- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
