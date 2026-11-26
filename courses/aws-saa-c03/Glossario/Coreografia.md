---
aliases:
  - "coreografia"
  - "coreografia de eventos"
tags:
  - glossario
  - conceito
---
# Coreografia

A coreografia é o estilo de coordenação em que não há coordenador: cada componente reage a eventos e publica os seus próprios, sem conhecer o fluxo inteiro. Existe porque minimiza o acoplamento e permite adicionar participantes sem alterar os outros. A contrapartida é a dificuldade de visualizar o processo completo e de depurar onde uma execução parou.

> [!example] Exemplo
> O serviço de pedidos publica pedido criado, e faturamento e logística reagem por conta própria, sem que ninguém comande a sequência.

Veja também: [[Arquitetura Orientada a Eventos]], [[EventBridge]], [[Orquestracao]], [[SNS]]

## Onde aparece

- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
