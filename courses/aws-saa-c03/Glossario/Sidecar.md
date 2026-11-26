---
aliases:
  - "container sidecar"
  - "sidecar"
  - "sidecars"
tags:
  - glossario
  - conceito
---
# Sidecar

Sidecar é um container auxiliar que roda junto do principal na mesma tarefa ou pod, compartilhando rede, para oferecer uma função de apoio como coleta de logs, proxy ou métricas. Assim a aplicação principal fica focada no negócio e a função de apoio é trocável. No ECS ele é definido como outro container na task definition.

> [!example] Exemplo
> A tarefa tem o container da API e um sidecar do agente de métricas que envia dados ao CloudWatch.

Veja também: [[Container]], [[Pod]], [[Task Definition]]

## Onde aparece

- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
