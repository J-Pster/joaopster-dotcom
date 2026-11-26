---
aliases:
  - "Aquecimento da instância"
  - "Warmup da instância"
tags:
  - glossario
  - conceito
---
# Instance Warmup

Período em que uma instância recém-lançada ainda não entra nas métricas agregadas de uma política de target tracking ou step scaling, nem conta como capacidade pronta em um instance refresh. Evita superestimar a capacidade e parar de escalar cedo demais.

> [!example] Exemplo
> Com warmup de 180 segundos, a CPU baixa de uma instância ainda em boot não faz o ASG achar que já há capacidade sobrando.

Veja também: [[Cooldown]], [[Instance Refresh]], [[Step Scaling]], [[Target Tracking]]

## Onde aparece

- **Módulo 12:** [[12.07 - Politicas de Escala|12.7]], [[12.09 - Instance Refresh Termination e Spot|12.9]]
