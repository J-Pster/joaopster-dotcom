---
aliases:
  - "grupo de nós gerenciado"
  - "managed node group"
  - "managed node groups"
tags:
  - glossario
  - servico
---
# Managed Node Group

O managed node group é um grupo de instâncias EC2 que a AWS provisiona e atualiza como nós do cluster EKS, com drenagem durante as atualizações. Você ainda escolhe tipos de instância e o dimensionamento, e continua responsável pela capacidade e pelos patches de configuração. É o meio-termo entre nós autogerenciados e o Auto Mode.

> [!example] Exemplo
> Um node group de 3 a 10 instâncias m6i recebe uma nova AMI sem derrubar todos os pods de uma vez.

Veja também: [[EC2 Auto Scaling]], [[EKS]], [[EKS Auto Mode]]

## Onde aparece

- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
