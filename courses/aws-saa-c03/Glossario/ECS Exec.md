---
aliases:
  - "execute-command do ECS"
tags:
  - glossario
  - servico
---
# ECS Exec

Recurso do ECS que abre um shell interativo (ou roda um comando) dentro de um container em execução, usando o Systems Manager Session Manager por baixo, sem porta SSH aberta e sem bastion host. Existe para depurar containers com autenticação do IAM e registro de cada sessão, em vez de expor uma porta de administração.

> [!example] Exemplo
> O time de suporte do PropDesk abre um shell na tarefa Fargate para investigar um erro; o acesso é autorizado por uma role do IAM e a sessão fica registrada.

Veja também: [[Session Manager]], [[Systems Manager]], [[ECS]], [[Fargate]]

## Onde aparece

- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
