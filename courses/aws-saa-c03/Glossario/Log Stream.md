---
aliases:
  - "fluxo de logs"
  - "log stream"
tags:
  - glossario
  - conceito
---
# Log Stream

Log stream é uma sequência de eventos de log que vem da mesma origem, como uma instância ou um contêiner, dentro de um log group. Existe para manter a ordem e a origem dos eventos. Um grupo tem muitos streams.

> [!example] Exemplo
> Cada instância EC2 grava em seu próprio stream dentro do grupo de logs da aplicação.

Veja também: [[CloudWatch Logs]], [[Log Group]]

## Onde aparece

- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
