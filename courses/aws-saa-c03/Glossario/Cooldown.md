---
aliases:
  - "Cooldown padrão"
  - "Período de espera de escala"
tags:
  - glossario
  - conceito
---
# Cooldown

Tempo, 300 segundos por padrão, em que o Auto Scaling Group bloqueia novas ações de escala depois de uma ação de simple scaling, para esperar o efeito aparecer. Não se confunde com o warmup, que apenas adia a contagem de uma instância nova nas métricas.

> [!example] Exemplo
> Depois de somar 2 instâncias, o ASG espera 300 segundos antes de aceitar outro alarme de simple scaling.

Veja também: [[Auto Scaling Group]], [[Instance Warmup]], [[Simple Scaling]], [[Target Tracking]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
