---
aliases:
  - "Elastic Network Adapter"
tags:
  - glossario
  - rede
---
# ENA

Interface de rede de alto desempenho do EC2, usada em instâncias modernas para entregar mais banda, mais pacotes por segundo e menor latência. Sem o ENA habilitado na AMI, a instância não aproveita a rede rápida da família escolhida.

> [!example] Exemplo
> Uma instância c5n com ENA alcança dezenas de Gbps de rede, enquanto uma sem o driver ficaria limitada a uma fração disso.

Veja também: [[EFA]], [[ENI]], [[Instance Type]], [[Nitro]]

## Onde aparece

- **Módulo 6:** [[06.05 - Security Groups|6.5]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
