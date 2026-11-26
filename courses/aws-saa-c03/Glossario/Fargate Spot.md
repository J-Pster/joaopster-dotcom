---
aliases:
  - "fargate spot"
tags:
  - glossario
  - custo
---
# Fargate Spot

Fargate Spot roda tarefas do ECS em capacidade excedente da AWS com desconto grande sobre o preço On-Demand, em troca de poder ser interrompido. A tarefa recebe um aviso de 2 minutos e o sinal SIGTERM, e deve terminar o trabalho com cuidado. Serve para cargas tolerantes a interrupção, como lotes e workers idempotentes.

> [!example] Exemplo
> Um worker que consome uma fila SQS roda em Fargate Spot; se for interrompido, a mensagem volta à fila e outra tarefa a processa.

Veja também: [[Capacity Provider]], [[SQS]], [[Spot Instance]]

## Onde aparece

- **Módulo 9:** [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
