---
aliases:
  - "Gancho de ciclo de vida"
  - "Ganchos de ciclo de vida"
  - "Lifecycle Hooks"
tags:
  - glossario
  - conceito
---
# Lifecycle Hook

Pausa configurada em um Auto Scaling Group no lançamento (Pending:Wait) ou no término (Terminating:Wait) de uma instância, para executar uma ação customizada antes de seguir. Emite notificação ao EventBridge, SNS ou SQS e termina com complete-lifecycle-action (CONTINUE ou ABANDON). O heartbeat padrão é de 3600 segundos.

> [!example] Exemplo
> Antes de terminar a instância, um hook segura o término até o worker enviar os logs ao S3 e completar a ação.

Veja também: [[Auto Scaling Group]], [[SNS]], [[SQS]], [[Warm Pool]]

## Onde aparece

- **Módulo 12:** [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
