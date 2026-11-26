---
aliases:
  - "Multi-AZ DB cluster"
  - "Multi-AZ DB clusters"
  - "cluster Multi-AZ"
tags:
  - glossario
  - servico
---
# Multi-AZ DB Cluster

O Multi-AZ DB cluster é uma implantação do RDS para MySQL e PostgreSQL com uma instância writer e duas readers em três zonas de disponibilidade, com replicação semissíncrona. Ele existe para dar failover mais rápido (menos de 35 segundos) e ainda usar os dois readers para leitura. Não suporta storage autoscaling nem stop/start.

> [!example] Exemplo
> Um banco PostgreSQL de produção usa o cluster endpoint para escrever e o reader endpoint para os relatórios.

Veja também: [[Failover]], [[Multi-AZ]], [[RDS]], [[Read Replica]]

## Onde aparece

- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
