---
aliases:
  - "ponto de recuperação"
  - "recovery point"
tags:
  - glossario
  - dados
---
# Recovery Point

O ponto de recuperação é um backup específico, um instante no tempo do qual um recurso pode ser restaurado. Cada execução de um backup gera um ponto, e o ciclo de vida do plano decide quando ele passa ao armazenamento frio e quando expira. É o objeto que você realmente restaura em uma emergência.

> [!example] Exemplo
> O backup de 03:00 de ontem do volume EBS é um ponto de recuperação no cofre.

Veja também: [[Backup Plan]], [[Backup Vault]], [[Point-in-Time Recovery]], [[Snapshot]]

## Onde aparece

- **Módulo 20:** [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]]
