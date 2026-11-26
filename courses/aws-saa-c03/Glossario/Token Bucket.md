---
aliases:
  - "balde de tokens"
  - "token bucket"
tags:
  - glossario
  - conceito
---
# Token Bucket

O token bucket é o algoritmo que o API Gateway usa para o throttling: um balde com capacidade igual à rajada (burst) é reabastecido a uma taxa constante (requisições por segundo). Cada requisição consome um token, e quando o balde esvazia as requisições seguintes recebem erro 429. Permite picos curtos acima da taxa média sem abrir mão do limite no longo prazo.

> [!example] Exemplo
> Com taxa de 100 por segundo e rajada de 200, a API absorve um pico de 200 requisições de uma vez, e depois só aceita 100 por segundo até o balde reencher.

Veja também: [[API Gateway]], [[Throttling]], [[Usage Plan]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
