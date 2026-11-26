---
aliases:
  - "managed instance"
  - "managed node"
  - "nó gerenciado"
tags:
  - glossario
  - conceito
---
# Managed Node

Nó gerenciado é uma instância EC2 ou servidor on-premises que o Systems Manager consegue controlar. Exige SSM Agent, permissões IAM por instance profile e conectividade com o serviço, por internet ou por VPC endpoints.

> [!example] Exemplo
> Uma instância em sub-rede privada vira nó gerenciado ao criar os VPC endpoints do SSM.

Veja também: [[Hybrid Activation]], [[SSM Agent]], [[Systems Manager]]

## Onde aparece

- **Módulo 17:** [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 21:** [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
