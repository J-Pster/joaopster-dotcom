---
aliases:
  - "outbox"
  - "padrão outbox"
  - "transactional outbox"
tags:
  - glossario
  - conceito
---
# Outbox

Padrão em que o serviço grava, na mesma transação do banco, uma linha numa tabela de saída com a mensagem a publicar, e um processo separado lê as linhas pendentes, publica na fila e as marca como enviadas. Existe para não perder mensagens quando o banco confirma mas a fila falha (ou é recriada vazia). Exige consumidores idempotentes, porque uma linha pode ser publicada mais de uma vez.

> [!example] Exemplo
> Depois de um failover para a Região B, as filas SQS nascem vazias; o PropDesk republica as linhas ainda pendentes da tabela outbox e os consumidores idempotentes toleram as repetições.

Veja também: [[Idempotencia]], [[SQS]], [[Desacoplamento]]

## Onde aparece

- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
