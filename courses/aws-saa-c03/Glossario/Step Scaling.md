---
aliases:
  - "Escala em degraus"
  - "Step Scaling Policy"
tags:
  - glossario
  - conceito
---
# Step Scaling

Política de escala baseada em alarmes do CloudWatch com degraus: quanto maior a violação do limite, maior o ajuste de capacidade. Continua reagindo enquanto um ajuste anterior ainda está em andamento, usando o warmup da instância.

> [!example] Exemplo
> CPU entre 60% e 70% soma 1 instância, entre 70% e 85% soma 3, e acima de 85% soma 6.

Veja também: [[CloudWatch]], [[Instance Warmup]], [[Simple Scaling]], [[Target Tracking]]

## Onde aparece

- **Módulo 12:** [[12.07 - Politicas de Escala|12.7]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
