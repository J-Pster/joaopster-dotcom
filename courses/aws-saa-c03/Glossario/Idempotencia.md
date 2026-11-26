---
aliases:
  - "consumidor idempotente"
  - "idempotente"
  - "idempotência"
  - "operação idempotente"
tags:
  - glossario
  - conceito
---
# Idempotencia

Uma operação é idempotente quando executá-la uma ou várias vezes produz o mesmo resultado final. Importa na mensageria porque a entrega at-least-once do SQS, do SNS e do EventBridge pode repetir uma mensagem. O consumidor idempotente guarda uma chave (como o ID do pedido) e ignora repetições, em vez de cobrar duas vezes ou duplicar um registro.

> [!example] Exemplo
> Ao receber duas vezes a mensagem do pedido 4711, o consumidor consulta uma tabela de pedidos já processados e ignora a segunda cópia.

Veja também: [[Desacoplamento]], [[Fila FIFO]], [[SQS]], [[Visibility Timeout]]

## Onde aparece

- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
