---
aliases:
  - "burst credit"
  - "crédito de burst"
  - "créditos de burst"
  - "créditos de throughput"
tags:
  - glossario
  - conceito
---
# Burst Credits

Créditos de burst são um saldo que se acumula quando o uso fica abaixo da base e se gasta quando o uso passa dela, permitindo picos acima do desempenho de base por um tempo. Existem em volumes gp2, st1, sc1 e no modo Bursting do EFS. Importam porque, ao esgotar os créditos, o desempenho cai de repente para a base.

> [!example] Exemplo
> Um EFS de 100 GiB em Bursting tem base de cerca de 5 MiB/s; com créditos sobe até 100 MiB/s, e sem créditos volta à base.

Veja também: [[EFS]], [[Elastic Throughput]], [[Throughput]], [[gp2]]

## Onde aparece

- **Módulo 10:** [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]]
