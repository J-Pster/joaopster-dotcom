---
aliases:
  - "classe de preço"
  - "classes de preço"
  - "price classes"
tags:
  - glossario
  - custo
---
# Price Class

A price class limita os pontos de presença que atendem uma distribuição do CloudFront, trocando desempenho por preço. A classe All usa todos os locais; as classes 200 e 100 excluem regiões mais caras. Usuários de regiões excluídas ainda são atendidos, mas por locais mais distantes, com maior latência.

> [!example] Exemplo
> Uma empresa com clientes só na América do Norte e na Europa escolhe uma price class menor para reduzir o custo.

Veja também: [[CloudFront Distribution]], [[Data Transfer]], [[Edge Location]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
