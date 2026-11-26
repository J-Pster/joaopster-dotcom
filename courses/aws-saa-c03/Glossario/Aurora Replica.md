---
aliases:
  - "Aurora Replicas"
  - "réplica Aurora"
  - "réplica do Aurora"
  - "réplicas do Aurora"
tags:
  - glossario
  - servico
---
# Aurora Replica

A Aurora Replica é uma instância somente leitura de um cluster Aurora que lê do mesmo volume do writer. O lag típico é abaixo de 100 ms, e o cluster aceita até 15 réplicas. Elas servem ao mesmo tempo para escalar leitura e para ser alvo de failover.

> [!example] Exemplo
> Um cluster com uma réplica em outra zona promove essa réplica em menos de um minuto se o writer falhar.

Veja também: [[Aurora]], [[Cluster Volume]], [[Failover]], [[Read Replica]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
