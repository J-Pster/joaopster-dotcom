---
aliases:
  - "Auto Mode"
tags:
  - glossario
  - servico
---
# EKS Auto Mode

O EKS Auto Mode estende a gestão da AWS para a computação do cluster: provisiona e escala os nós, e também gerencia componentes como rede, balanceamento e armazenamento. Reduz o trabalho de operar nós e add-ons em comparação com managed node groups. É a opção do EKS com menor overhead quando se quer Kubernetes sem cuidar dos nós.

> [!example] Exemplo
> Um time sobe um cluster com Auto Mode e implanta pods sem criar node groups nem instalar o Cluster Autoscaler.

Veja também: [[EKS]], [[Karpenter]], [[Overhead Operacional]]

## Onde aparece

- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
