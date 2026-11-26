---
aliases:
  - "EC2 Fleets"
  - "Spot Fleet"
  - "Spot Fleets"
tags:
  - glossario
  - custo
---
# EC2 Fleet

Recurso que lança e mantém um grupo de instâncias EC2 de uma só vez, misturando tipos, AZs e modelos de compra (On-Demand e Spot) conforme uma estratégia de alocação. O Spot Fleet é a versão mais antiga, só de Spot. Para a maioria dos casos novos, um Auto Scaling group com política de instâncias mistas cobre a mesma necessidade com escalabilidade automática.

> [!example] Exemplo
> Uma frota que pede 100 vCPUs combina On-Demand para a base e vários tipos Spot para o resto, e a AWS escolhe os pools com mais capacidade.

Veja também: [[Auto Scaling Group]], [[Capacity Reservation]], [[Spot Instance]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]]
