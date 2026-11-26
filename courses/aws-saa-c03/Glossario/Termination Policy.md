---
aliases:
  - "Política de terminação"
  - "Políticas de terminação"
  - "Termination Policies"
tags:
  - glossario
  - conceito
---
# Termination Policy

Regra que o Auto Scaling Group usa para escolher qual instância terminar em um scale in ou rebalanceamento. A padrão equilibra as AZs e prefere o launch template mais antigo; há ainda OldestInstance, NewestInstance, AllocationStrategy e política personalizada por Lambda. Instâncias com proteção contra scale in ficam de fora.

> [!example] Exemplo
> Com a política NewestInstance, as instâncias de uma versão experimental são as primeiras a sair na redução.

Veja também: [[Auto Scaling Group]], [[Instance Refresh]], [[Launch Template]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.09 - Instance Refresh Termination e Spot|12.9]]
