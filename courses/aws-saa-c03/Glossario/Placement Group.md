---
aliases:
  - "Cluster Placement Group"
  - "Grupo de Posicionamento"
  - "Partition Placement Group"
  - "Placement Groups"
  - "Spread Placement Group"
tags:
  - glossario
  - conceito
---
# Placement Group

Configuração que controla a posição física das instâncias EC2 no hardware da AWS, com três estratégias: cluster (proximidade para baixa latência), partition (racks separados por partição) e spread (cada instância em hardware distinto). Serve para escolher entre velocidade e isolamento de falhas.

> [!example] Exemplo
> Uma simulação científica usa um placement group cluster para latência mínima, enquanto três nós de quórum usam um spread group para não dividir hardware.

Veja também: [[Batch]], [[EC2]], [[EFA]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.07 - Placement Groups|9.7]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
