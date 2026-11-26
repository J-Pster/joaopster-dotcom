---
aliases:
  - "objetivo de nível de serviço"
  - "service level objective"
tags:
  - glossario
  - conceito
---
# SLO

O SLO (Service Level Objective) é a meta interna de nível de serviço, medida por um SLI, como 99,9% de requisições com sucesso em 30 dias. Existe para transformar uma expectativa vaga de qualidade num número que se mede e alarma, e deve ser mais rígido que o SLA contratual para que o time perceba o problema antes de dever crédito ao cliente. Define também o orçamento de erro.

> [!example] Exemplo
> Um SLO de 99,9% de sucesso em 30 dias permite 43,2 minutos de falha, e um alarme dispara quando o orçamento de erro está acabando.

Veja também: [[Application Signals]], [[Disponibilidade]], [[Error Budget]], [[Observabilidade]], [[SLA]], [[SLI]]

## Onde aparece

- **Módulo 13:** [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
