---
aliases:
  - "invocacao assincrona"
  - "invocação assíncrona"
  - "invocação assíncrona do Lambda"
tags:
  - glossario
  - conceito
---
# Invocacao Assincrona

Na invocação assíncrona o Lambda coloca o evento numa fila interna e responde de imediato ao chamador (resposta 202), e executa a função em seguida. Se a função falhar, o serviço repete a execução (duas vezes, por padrão) e, ao esgotar as tentativas, descarta o evento ou o envia a uma DLQ ou a um destino de falha. É o modelo usado por S3, SNS e EventBridge ao acionar funções.

> [!example] Exemplo
> Uma notificação do S3 aciona uma função de miniaturas; se ela falhar, o Lambda repete e, no fim, envia o evento para uma fila de falhas.

Veja também: [[Dead-Letter Queue]], [[EventBridge]], [[Lambda]], [[S3]]

## Onde aparece

- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
