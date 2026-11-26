---
aliases:
  - "Dedicated Instances"
  - "Instância Dedicada"
tags:
  - glossario
  - servico
---
# Dedicated Instance

Instância EC2 executada em hardware dedicado a uma única conta, sem dividir o servidor com outras contas, mas sem visibilidade de soquetes e sem controle de posicionamento. Atende a exigências de isolamento. Não serve para licenças por soquete, que exigem Dedicated Host.

> [!example] Exemplo
> Uma empresa com exigência de conformidade de isolamento de hardware roda suas instâncias como Dedicated Instances, sem precisar contar soquetes.

Veja também: [[Capacity Reservation]], [[Dedicated Host]], [[EC2]], [[Spot Instance]]

## Onde aparece

- **Módulo 9:** [[09.05 - Compra Savings Plans e Reserved Instances|9.5]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]], [[09.07 - Placement Groups|9.7]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
