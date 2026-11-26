---
aliases:
  - "task token"
  - "token de tarefa"
  - "waitForTaskToken"
tags:
  - glossario
  - conceito
---
# Task Token

O task token é um identificador que o Step Functions entrega a um sistema externo quando uma tarefa usa o padrão wait for callback (.waitForTaskToken). O workflow pausa até que alguém devolva o token com SendTaskSuccess ou SendTaskFailure. Existe para esperas longas, como a aprovação humana, sem manter nenhum recurso rodando durante a pausa. Só funciona em workflows Standard.

> [!example] Exemplo
> O workflow envia ao gerente um e-mail com o token embutido no link de aprovar; o clique chama SendTaskSuccess e o fluxo continua.

Veja também: [[Orquestracao]], [[State Machine]], [[Step Functions]]

## Onde aparece

- **Módulo 15:** [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
