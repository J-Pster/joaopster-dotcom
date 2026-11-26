---
aliases:
  - "pub-sub"
  - "pub/sub"
  - "publicação e assinatura"
  - "publish-subscribe"
tags:
  - glossario
  - conceito
---
# Pub-Sub

Pub-sub (publish-subscribe) é o modelo de mensageria em que produtores publicam em um tópico e todos os assinantes daquele tópico recebem a mensagem. Existe para desacoplar quem emite um fato de quem reage a ele, permitindo adicionar consumidores sem mudar o produtor. No SNS a entrega é imediata (push) e o serviço não retém a mensagem para quem não estava disponível.

> [!example] Exemplo
> Um tópico de alertas de segurança é assinado por e-mail, por uma Lambda e por uma fila SQS; todos recebem o mesmo alerta.

Veja também: [[Desacoplamento]], [[Fan-out]], [[Filter Policy]], [[SNS]]

## Onde aparece

- **Módulo 14:** [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
