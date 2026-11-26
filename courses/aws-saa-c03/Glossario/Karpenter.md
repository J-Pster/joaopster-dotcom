---
aliases:
  - "karpenter"
tags:
  - glossario
  - servico
---
# Karpenter

Karpenter é um provisionador de nós de código aberto para Kubernetes que cria instâncias EC2 sob medida para os pods pendentes e as remove quando sobram. Ele escolhe o tipo e o tamanho adequados e pode usar Spot, o que costuma reduzir custo e tempo de espera em relação a grupos de nós fixos. O EKS Auto Mode incorpora essa ideia como capacidade gerenciada.

> [!example] Exemplo
> Ao surgir 200 pods pendentes, o Karpenter lança instâncias de tamanho adequado em segundos e as remove quando a carga cai.

Veja também: [[EKS]], [[EKS Auto Mode]], [[Spot Instance]]

## Onde aparece

- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
