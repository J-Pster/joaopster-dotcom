---
aliases:
  - "cgroup"
  - "cgroups"
  - "namespace"
  - "namespaces"
tags:
  - glossario
  - conceito
---
# Namespaces e Cgroups

Namespaces e cgroups são os dois mecanismos do kernel do Linux que criam o container. Os namespaces dão a cada processo uma visão própria de rede, processos e sistema de arquivos; os cgroups limitam quanta CPU e memória ele pode usar. Como o kernel é o mesmo para todos, a isolação é mais fraca que a de uma VM com hypervisor.

> [!example] Exemplo
> Dois containers no mesmo host têm tabelas de processos separadas (namespace), e um deles não consegue passar de 512 MB de memória (cgroup).

Veja também: [[Container]], [[Orquestrador de Containers]]

## Onde aparece

- **Módulo 10:** [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
- **Módulo 24:** [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
