---
aliases:
  - "cluster volume"
  - "volume compartilhado do Aurora"
  - "volume de cluster"
  - "volume do cluster"
tags:
  - glossario
  - dados
---
# Cluster Volume

O cluster volume é o volume virtual e compartilhado em que o Aurora guarda os dados, com seis cópias em três zonas de disponibilidade. Todas as instâncias do cluster leem dele, por isso criar uma réplica não copia dados e o atraso é baixo. O volume é autorreparável e cresce automaticamente, em incrementos de 10 GiB, até o limite do motor.

> [!example] Exemplo
> Se o writer do Aurora falha, os dados continuam no volume e uma réplica assume o papel de writer.

Veja também: [[Aurora]], [[Aurora Replica]], [[Failover]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 13:** [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]]
- **Módulo 14:** [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
