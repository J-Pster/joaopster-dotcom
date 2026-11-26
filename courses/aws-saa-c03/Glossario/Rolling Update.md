---
aliases:
  - "deploy rolling"
  - "rolling update"
tags:
  - glossario
  - conceito
---
# Rolling Update

Rolling update substitui as tarefas ou instâncias antigas por novas em ondas, mantendo parte da capacidade no ar o tempo todo. No ECS, os parâmetros de percentual mínimo saudável e máximo controlam quantas tarefas podem sair e entrar de cada vez. É simples e barato, mas, durante a troca, versões antigas e novas atendem juntas e a reversão é mais lenta.

> [!example] Exemplo
> Com 4 tarefas, mínimo 50% e máximo 200%, o ECS sobe até 8 tarefas e derruba as antigas aos poucos.

Veja também: [[Blue Green Deployment]], [[Canary Deployment]], [[Servico ECS]]

## Onde aparece

- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
