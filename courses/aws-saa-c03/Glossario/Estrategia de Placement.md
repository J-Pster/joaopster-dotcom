---
aliases:
  - "binpack"
  - "estratégia de placement"
  - "placement strategy"
  - "spread"
tags:
  - glossario
  - conceito
---
# Estrategia de Placement

A estratégia de placement define em quais instâncias EC2 do cluster o ECS coloca as novas tarefas: spread distribui por AZ ou instância para maior disponibilidade, binpack concentra para usar menos instâncias e reduzir custo, e random escolhe ao acaso. Ela só se aplica ao launch type EC2, já que no Fargate a AWS decide onde roda.

> [!example] Exemplo
> Com spread por AZ, as quatro tarefas se dividem entre duas zonas de disponibilidade.

Veja também: [[ECS]], [[Placement Group]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]]
- **Módulo 17:** [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]]
