---
aliases:
  - "mensagem tóxica"
  - "mensagem venenosa"
  - "poison message"
tags:
  - glossario
  - conceito
---
# Poison Message

Uma poison message é uma mensagem que sempre falha no processamento, por exemplo por ter um formato inválido, e que por isso volta à fila a cada tentativa. Sem controle, ela consome tentativas e pode atrasar as mensagens saudáveis. A defesa é configurar uma dead-letter queue com um número máximo de recebimentos, que isola a mensagem para análise.

> [!example] Exemplo
> Uma mensagem com um campo obrigatório ausente falha em todas as tentativas e, no quinto recebimento, é movida para a DLQ.

Veja também: [[Dead-Letter Queue]], [[SQS]], [[Visibility Timeout]]

## Onde aparece

- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
