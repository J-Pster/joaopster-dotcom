---
aliases:
  - "S3 Event Notification"
  - "eventos do S3"
  - "notificações de evento do S3"
tags:
  - glossario
  - servico
---
# S3 Event Notifications

S3 Event Notifications são avisos que o S3 emite quando algo acontece em um bucket, como a criação ou remoção de um objeto, e que podem acionar Lambda, SQS (padrão), SNS ou EventBridge. A entrega é no mínimo uma vez, sem ordem garantida, então o consumidor deve ser idempotente. Gravar a saída no mesmo prefixo que dispara o evento cria um loop.

> [!example] Exemplo
> Cada foto enviada para entrada/ aciona uma Lambda que grava a miniatura em outro bucket.

Veja também: [[EventBridge]], [[Lambda]], [[SNS]], [[SQS]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
