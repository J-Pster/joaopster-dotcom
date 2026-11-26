---
aliases:
  - "tempo de visibilidade"
  - "timeout de visibilidade"
  - "visibility timeout"
tags:
  - glossario
  - conceito
---
# Visibility Timeout

O visibility timeout é o período em que uma mensagem recebida fica invisível aos outros consumidores da fila SQS. Existe porque o SQS não apaga a mensagem ao entregá-la: ela só some quando o consumidor confirma o processamento. Se o consumidor demorar mais que o timeout, a mensagem reaparece e pode ser processada em duplicidade. O padrão é 30 segundos, com máximo de 12 horas.

> [!example] Exemplo
> Se um worker leva 90 segundos para converter um vídeo e o timeout é 30 segundos, outro worker recebe a mesma mensagem no meio do trabalho.

Veja também: [[Dead-Letter Queue]], [[Idempotencia]], [[Long Polling]], [[SQS]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
