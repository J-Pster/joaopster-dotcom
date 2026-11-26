---
aliases:
  - "AWS Resilience Hub"
tags:
  - glossario
  - servico
---
# Resilience Hub

O Resilience Hub avalia uma aplicação contra uma política de resiliência com metas de RTO e RPO por tipo de interrupção, estima se a arquitetura atual as cumpre, recomenda correções e acompanha a deriva. É uma análise da configuração, não da execução, portanto complementa o teste real de recuperação sem substituí-lo.

> [!example] Exemplo
> Uma avaliação aponta que o banco Single-AZ não cumpre o RTO da política e recomenda o Multi-AZ.

Veja também: [[Drift]], [[Game Day]], [[RPO]], [[RTO]]

## Onde aparece

- **Módulo 20:** [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
