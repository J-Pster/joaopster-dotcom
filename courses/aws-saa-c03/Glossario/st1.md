---
aliases:
  - "EBS st1"
  - "HDD otimizado para throughput"
  - "Throughput Optimized HDD"
  - "volume st1"
tags:
  - glossario
  - servico
---
# st1

O st1 é o volume HDD de throughput otimizado do EBS, indicado para leituras e escritas sequenciais grandes, como big data, logs e data warehouses. Tem base de 40 MiB/s por TiB, com burst, e não pode ser volume de boot nem usar Multi-Attach. Existe para entregar throughput com o menor custo por GB entre os volumes que não são frios.

> [!example] Exemplo
> Um job noturno que lê 10 TiB de logs em sequência usa um st1 para custar menos que um SSD.

Veja também: [[EBS]], [[Throughput]], [[gp3]], [[sc1]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
