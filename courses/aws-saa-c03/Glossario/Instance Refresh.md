---
aliases:
  - "Atualização de instâncias"
  - "Instance Refresh do ASG"
tags:
  - glossario
  - conceito
---
# Instance Refresh

Recurso do Auto Scaling Group que substitui as instâncias antigas pelas novas em lotes controlados, por exemplo depois de trocar a AMI no launch template. Aceita mínimo e máximo de saúde, warmup, checkpoints e rollback automático por alarme. O mínimo saudável padrão é 90%.

> [!example] Exemplo
> Com uma nova versão do launch template, o grupo troca 10% das instâncias por vez, pausa em 20% para validação e volta atrás se um alarme disparar.

Veja também: [[AMI]], [[Auto Scaling Group]], [[Instance Warmup]], [[Launch Template]]

## Onde aparece

- **Módulo 9:** [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.09 - Instance Refresh Termination e Spot|12.9]]
- **Módulo 21:** [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
