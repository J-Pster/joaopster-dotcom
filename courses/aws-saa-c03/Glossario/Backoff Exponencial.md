---
aliases:
  - "backoff com jitter"
  - "backoff exponencial"
  - "espera exponencial"
  - "exponential backoff"
tags:
  - glossario
  - conceito
---
# Backoff Exponencial

O backoff exponencial é a estratégia de retentativa em que o intervalo entre tentativas cresce a cada falha (por exemplo 1 s, 2 s, 4 s, 8 s), muitas vezes com jitter, uma variação aleatória. Existe para dar tempo ao serviço sobrecarregado de se recuperar e para evitar que vários clientes retentem todos no mesmo instante. O Step Functions usa BackoffRate e JitterStrategy para isso.

> [!example] Exemplo
> Com IntervalSeconds 3 e BackoffRate 2, as esperas entre as tentativas são 3, 6 e 12 segundos.

Veja também: [[Backpressure]], [[Dead-Letter Queue]], [[State Machine]], [[Step Functions]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 14:** [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
