---
aliases:
  - "container orchestrator"
  - "orquestrador de containers"
  - "orquestração de containers"
tags:
  - glossario
  - conceito
---
# Orquestrador de Containers

O orquestrador decide onde cada container roda, reinicia os que falham, escala conforme a carga e conecta os containers à rede e ao balanceador. Sem ele, operar dezenas de containers em vários hosts viraria trabalho manual e frágil. Na AWS os orquestradores são o ECS e o EKS; o Fargate não é um orquestrador, e sim um modo de capacidade.

> [!example] Exemplo
> O ECS percebe que uma tarefa morreu e inicia outra automaticamente para voltar ao número desejado.

Veja também: [[ECS]], [[EKS]], [[Fargate]], [[Kubernetes]]

## Onde aparece

- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
