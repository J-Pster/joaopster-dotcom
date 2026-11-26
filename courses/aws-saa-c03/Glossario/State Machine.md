---
aliases:
  - "máquina de estados"
  - "máquinas de estados"
  - "state machine"
tags:
  - glossario
  - conceito
---
# State Machine

Uma state machine (máquina de estados) é a definição de um workflow como um conjunto de estados e das transições entre eles. No Step Functions ela é escrita em Amazon States Language (JSON) e cada execução percorre os estados guardando os dados entre eles. A estrutura existe porque deixa o fluxo explícito, visível e versionável, em vez de espalhado pelo código de várias funções.

> [!example] Exemplo
> Uma state machine com os estados Reservar, Cobrar, Emitir e Notificar, com um Choice que desvia para Cancelar quando a cobrança falha.

Veja também: [[Backoff Exponencial]], [[Orquestracao]], [[Step Functions]], [[Task Token]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
