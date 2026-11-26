---
aliases:
  - "EBS gp2"
  - "General Purpose SSD gp2"
  - "volume gp2"
tags:
  - glossario
  - servico
---
# gp2

O gp2 é o volume SSD de uso geral da geração anterior do EBS, que entrega 3 IOPS por GiB (mínimo de 100, máximo de 16.000) e permite burst até 3.000 IOPS para volumes pequenos, com um balde de créditos. Existe para uso geral, mas amarra IOPS ao tamanho; hoje o gp3 é a escolha recomendada.

> [!example] Exemplo
> Um gp2 de 500 GiB tem 1.500 IOPS de base e estoura até 3.000 enquanto houver créditos de burst.

Veja também: [[Burst Credits]], [[EBS]], [[IOPS]], [[gp3]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
