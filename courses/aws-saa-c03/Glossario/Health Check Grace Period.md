---
aliases:
  - "Grace Period"
  - "Período de carência"
  - "Período de carência do health check"
tags:
  - glossario
  - conceito
---
# Health Check Grace Period

Intervalo, contado a partir da entrada em serviço, em que o Auto Scaling Group ignora o resultado da verificação de saúde de uma instância nova. Evita que instâncias ainda em boot sejam consideradas doentes e substituídas em laço. O padrão é 300 segundos.

> [!example] Exemplo
> Com a aplicação levando 6 minutos para subir, um grace period de 600 segundos impede que o ASG termine instâncias antes de ficarem prontas.

Veja também: [[Auto Scaling Group]], [[Health Check]], [[Launch Template]], [[Warm Pool]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
