---
aliases:
  - "agendador do EventBridge"
  - "scheduler do EventBridge"
tags:
  - glossario
  - servico
---
# EventBridge Scheduler

O EventBridge Scheduler é o serviço de agendamento serverless do EventBridge, que dispara alvos por expressões cron, rate ou em um horário único. Existe para substituir servidores com cron e regras agendadas, com escala para milhões de agendamentos e janelas flexíveis. Ele chama mais de 270 serviços e milhares de APIs da AWS, e é a opção recomendada em lugar das regras agendadas.

> [!example] Exemplo
> Um schedule cron às 02:00 de todo dia envia uma mensagem a uma fila SQS que dispara a limpeza noturna.

Veja também: [[Event Bus]], [[EventBridge]], [[Lambda]], [[SQS]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
