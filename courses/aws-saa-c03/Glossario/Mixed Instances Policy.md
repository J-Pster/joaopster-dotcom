---
aliases:
  - "Mixed Instances"
  - "Política de instâncias mistas"
tags:
  - glossario
  - custo
---
# Mixed Instances Policy

Configuração do Auto Scaling Group que combina vários tipos de instância e opções de compra, com uma base de capacidade On-Demand, um percentual On-Demand acima da base e o restante em Spot. Diversificar tipos e AZs aumenta os pools de capacidade e reduz interrupções.

> [!example] Exemplo
> Base de 2 instâncias On-Demand e 20% On-Demand acima da base; com desired 12, o grupo roda 4 On-Demand e 8 Spot.

Veja também: [[Auto Scaling Group]], [[Capacity Rebalancing]], [[Launch Template]], [[Spot Instance]]

## Onde aparece

- **Módulo 9:** [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 12:** [[12.09 - Instance Refresh Termination e Spot|12.9]]
- **Módulo 17:** [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]]
