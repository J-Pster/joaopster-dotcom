---
aliases:
  - "encaminhamento de escrita"
  - "write forwarding"
tags:
  - glossario
  - conceito
---
# Write Forwarding

O write forwarding permite que um cluster secundário do Aurora Global Database aceite comandos de escrita e os encaminhe à Região primária. Ele existe para que a aplicação use o mesmo código em qualquer Região. A escrita continua sendo executada na primária.

> [!example] Exemplo
> Um usuário na Europa grava no cluster secundário, e a escrita é executada na Região primária.

Veja também: [[Aurora]], [[Aurora Global Database]]

## Onde aparece

- **Módulo 13:** [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
