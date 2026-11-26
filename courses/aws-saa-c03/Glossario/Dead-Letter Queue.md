---
aliases:
  - "DLQ"
  - "dead-letter queue"
  - "fila de falhas"
  - "fila de mensagens mortas"
tags:
  - glossario
  - conceito
---
# Dead-Letter Queue

A dead-letter queue (DLQ) é uma fila separada que recebe as mensagens que falharam repetidamente no processamento, depois de atingir o limite maxReceiveCount da fila de origem. Existe para isolar a mensagem venenosa, que de outra forma reapareceria para sempre e atrasaria o consumo. No SQS, a DLQ precisa ser do mesmo tipo da fila de origem, na mesma conta e na mesma Região. Serviços como SNS, EventBridge e Lambda também usam uma DLQ para entregas que falharam.

> [!example] Exemplo
> Uma mensagem com JSON malformado falha 5 vezes e vai para a DLQ, onde um alarme avisa a equipe e a mensagem pode ser analisada e reenviada depois.

Veja também: [[CloudWatch Alarm]], [[Poison Message]], [[SQS]], [[Visibility Timeout]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
