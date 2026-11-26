---
aliases:
  - "EBS io2"
  - "Provisioned IOPS SSD io2"
  - "io1"
  - "io2 Block Express"
  - "volume io1"
  - "volume io2"
tags:
  - glossario
  - servico
---
# io2

O io2 (assim como o io1, da geração anterior) é o volume SSD de IOPS provisionadas do EBS, para bancos de dados e cargas críticas. O io2 Block Express chega a 256.000 IOPS, 4.000 MiB/s, 64 TiB e durabilidade de 99,999%. Também suporta Multi-Attach. Existe para quem precisa de desempenho previsível e muito alto que o gp3 não alcança.

> [!example] Exemplo
> Um banco crítico que exige 100.000 IOPS e latência abaixo de um milissegundo usa um io2 Block Express.

Veja também: [[EBS]], [[IOPS]], [[Multi-Attach]], [[gp3]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
