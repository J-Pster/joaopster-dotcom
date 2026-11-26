---
aliases:
  - "Input/Output Operations Per Second"
  - "Operações de entrada e saída por segundo"
tags:
  - glossario
  - dados
---
# IOPS

Medida de quantas operações de leitura e escrita um disco executa por segundo. Importa para bancos de dados e cargas com muitos acessos pequenos e aleatórios. Nesses casos o limite de IOPS do volume ou da instância vira o gargalo antes da capacidade em GB.

> [!example] Exemplo
> Um banco transacional que faz 20.000 leituras por segundo precisa de um volume que ofereça pelo menos 20.000 IOPS.

Veja também: [[EBS]], [[Instance Store]], [[Latencia]], [[Throughput]]

## Onde aparece

- **Módulo 9:** [[09.02 - Familias Graviton e Burstable|9.2]], [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 12:** [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.06 - Estrategias de Cache e DAX|14.6]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
