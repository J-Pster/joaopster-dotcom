---
aliases:
  - "EBS gp3"
  - "General Purpose SSD gp3"
  - "volume gp3"
tags:
  - glossario
  - servico
---
# gp3

O gp3 é o volume SSD de uso geral do EBS: inclui 3.000 IOPS e 125 MiB/s sem custo extra, e permite provisionar IOPS (até 80.000) e throughput (até 2.000 MiB/s) de forma independente do tamanho. É cerca de 20% mais barato por GB que o gp2 e pode ser volume de boot. Existe para tirar a amarra entre tamanho e desempenho que o gp2 tinha.

> [!example] Exemplo
> Um banco de 100 GiB que precisa de 6.000 IOPS usa um gp3 pequeno com IOPS provisionadas, em vez de um gp2 de 2 TiB.

Veja também: [[EBS]], [[IOPS]], [[gp2]], [[io2]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
