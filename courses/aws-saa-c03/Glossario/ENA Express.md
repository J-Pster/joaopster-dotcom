---
aliases:
  - "ENA express"
tags:
  - glossario
  - rede
---
# ENA Express

Recurso do adaptador de rede ENA que usa o protocolo SRD para elevar a largura de banda de um fluxo único de 5 para até 25 Gbps dentro da Região e reduzir a latência de cauda. Exige instâncias suportadas nas duas pontas, conforme a documentação, e não substitui o EFA em cargas de MPI.

> [!example] Exemplo
> Uma aplicação que transfere grandes arquivos entre duas instâncias com ENA Express vê um fluxo único passar de 5 Gbps para até 25 Gbps.

Veja também: [[EFA]], [[ENA]], [[Placement Group]]

## Onde aparece

- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
