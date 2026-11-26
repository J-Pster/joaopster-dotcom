---
aliases:
  - "Pool aquecido"
  - "Pool de instâncias pré-aquecidas"
  - "Warm Pools"
tags:
  - glossario
  - conceito
---
# Warm Pool

Conjunto de instâncias pré-inicializadas mantido ao lado de um Auto Scaling Group, nos estados Stopped, Running ou Hibernated, para encurtar o tempo até a entrada em serviço no scale out. As instâncias do warm pool não contam na capacidade desejada e não recebem tráfego. Em Stopped não há custo de computação.

> [!example] Exemplo
> Uma aplicação que leva 8 minutos para subir mantém 4 instâncias paradas e já configuradas, que entram em serviço em poucos minutos no pico.

Veja também: [[Auto Scaling Group]], [[Health Check Grace Period]], [[Launch Template]], [[Lifecycle Hook]]

## Onde aparece

- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]], [[12.09 - Instance Refresh Termination e Spot|12.9]]
