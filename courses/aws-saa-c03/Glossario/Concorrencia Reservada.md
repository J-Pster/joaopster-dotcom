---
aliases:
  - "concorrência reservada"
  - "reserved concurrency"
tags:
  - glossario
  - conceito
---
# Concorrencia Reservada

A concorrência reservada separa uma parte da cota de concorrência da conta para uma função específica do Lambda. Ela faz duas coisas ao mesmo tempo: garante que a função sempre tenha essa fatia disponível e a limita a esse teto, o que protege recursos a jusante (como um banco) de excesso de execuções simultâneas. Não tem custo adicional, ao contrário da concorrência provisionada.

> [!example] Exemplo
> Uma função que grava num banco legado recebe concorrência reservada de 20 para que, mesmo com milhares de eventos na fila, só 20 execuções rodem ao mesmo tempo.

Veja também: [[Concorrencia Provisionada]], [[Lambda]], [[Service Quotas]], [[Throttling]]

## Onde aparece

- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
