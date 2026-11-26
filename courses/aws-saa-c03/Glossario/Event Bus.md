---
aliases:
  - "barramento de eventos"
  - "barramento do EventBridge"
  - "event bus"
tags:
  - glossario
  - conceito
---
# Event Bus

O event bus é o canal do EventBridge que recebe eventos de aplicações, serviços AWS e parceiros SaaS e os encaminha a alvos conforme regras. Existe para centralizar o roteamento por conteúdo, de modo que produtores e consumidores não se conheçam. Há o barramento default da conta, barramentos personalizados e barramentos de parceiros.

> [!example] Exemplo
> Uma regra no barramento default aciona uma Lambda sempre que uma instância EC2 muda para o estado stopped.

Veja também: [[Arquitetura Orientada a Eventos]], [[EventBridge]], [[EventBridge Pipes]], [[EventBridge Scheduler]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
