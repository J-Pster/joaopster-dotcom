---
aliases:
  - "Instance Scheduler on AWS"
tags:
  - glossario
  - custo
---
# Instance Scheduler

Solução da AWS que liga e desliga instâncias EC2 e RDS conforme agendas definidas por tags. Reduz o custo de ambientes de desenvolvimento e teste, que costumam rodar 24 horas por dia mas ser usados cerca de 30% das horas da semana. Roda como recursos implantados na conta (Lambda, DynamoDB, EventBridge) e tem um custo pequeno próprio.

> [!example] Exemplo
> A tag Schedule=office-hours faz a homologação ligar às 8h e desligar às 18h, de segunda a sexta.

Veja também: [[EventBridge]], [[RDS]], [[Rightsizing]]

## Onde aparece

- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
