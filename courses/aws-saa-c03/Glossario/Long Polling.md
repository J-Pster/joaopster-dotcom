---
aliases:
  - "long polling"
  - "polling longo"
  - "sondagem longa"
tags:
  - glossario
  - conceito
---
# Long Polling

O long polling faz a chamada ReceiveMessage do SQS esperar até 20 segundos por mensagens, em vez de responder vazio na hora. Existe para reduzir o número de respostas vazias, o que diminui custo e carga de requisições. Também reduz o atraso de entrega, porque a resposta volta assim que chega uma mensagem. A alternativa, o short polling, consulta apenas uma parte dos servidores e responde de imediato.

> [!example] Exemplo
> Um consumidor configurado com WaitTimeSeconds igual a 20 faz poucas chamadas por minuto em uma fila quase vazia, em vez de centenas de chamadas vazias.

Veja também: [[Fila Padrao]], [[SQS]], [[Visibility Timeout]]

## Onde aparece

- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
