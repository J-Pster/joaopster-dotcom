---
aliases:
  - "Escala simples"
  - "Simple Scaling Policy"
tags:
  - glossario
  - conceito
---
# Simple Scaling

Política de escala antiga em que um alarme dispara uma única ação e o grupo espera um cooldown, 300 segundos por padrão, antes de aceitar outra. É lenta e raramente a melhor escolha moderna.

> [!example] Exemplo
> Um alarme de CPU soma 2 instâncias e o ASG ignora novos alarmes pelos 300 segundos seguintes, mesmo com a carga subindo.

Veja também: [[Auto Scaling Group]], [[Cooldown]], [[Step Scaling]], [[Target Tracking]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.07 - Politicas de Escala|12.7]]
