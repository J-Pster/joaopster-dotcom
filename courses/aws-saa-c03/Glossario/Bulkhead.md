---
aliases:
  - "antepara"
  - "bulkhead"
  - "isolamento de recursos"
tags:
  - glossario
  - conceito
---
# Bulkhead

O bulkhead, ou antepara, isola recursos em compartimentos separados, como pools de conexão distintos por dependência ou células por grupo de clientes, para que a falha de uma parte não afunde o sistema inteiro. É o princípio por trás de limitar o raio de impacto em uma arquitetura.

> [!example] Exemplo
> Um pool de conexões próprio para cada dependência, de modo que o serviço lento esgote só o seu pool.

Veja também: [[Circuit Breaker]], [[Raio de Impacto]], [[Timeout]]

## Onde aparece

- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
