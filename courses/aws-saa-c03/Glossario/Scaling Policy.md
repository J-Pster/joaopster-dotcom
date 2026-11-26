---
aliases:
  - "política de escala"
  - "política de escalonamento"
  - "scaling policy"
tags:
  - glossario
  - conceito
---
# Scaling Policy

A scaling policy é a regra que diz ao Auto Scaling quando e quanto aumentar ou diminuir a capacidade, por exemplo mantendo uma métrica próxima de um valor-alvo (target tracking), em degraus (step scaling) ou em horários (scheduled). Existe para ajustar os recursos à carga sem intervenção manual. Para consumidores de fila, a métrica mais fiel é o backlog por instância, e não a CPU.

> [!example] Exemplo
> Uma política de target tracking mantém o backlog por instância em 100 mensagens, e o grupo adiciona instâncias quando a fila cresce.

Veja também: [[Backpressure]], [[CloudWatch Alarm]], [[EC2 Auto Scaling]], [[SQS]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
