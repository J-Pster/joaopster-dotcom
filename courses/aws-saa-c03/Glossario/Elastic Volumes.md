---
aliases:
  - "Elastic Volumes do EBS"
  - "modificação de volume EBS"
tags:
  - glossario
  - servico
---
# Elastic Volumes

O Elastic Volumes é o recurso do EBS que permite aumentar o tamanho, mudar o tipo e ajustar IOPS e throughput de um volume em uso, sem desanexá-lo. Não é possível reduzir o tamanho, e há limite de quatro modificações a cada 24 horas por volume. Depois de aumentar, é preciso estender o sistema de arquivos. Existe para ajustar capacidade e desempenho sem janela de manutenção.

> [!example] Exemplo
> Um volume gp2 de 500 GiB vira gp3 de 1 TiB com 6.000 IOPS sem parar a instância.

Veja também: [[EBS]], [[gp2]], [[gp3]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
