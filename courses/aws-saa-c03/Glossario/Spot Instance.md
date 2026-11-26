---
aliases:
  - "Instâncias Spot"
  - "Spot"
  - "Spot Instances"
tags:
  - glossario
  - custo
---
# Spot Instance

Instância EC2 que usa capacidade ociosa da AWS com desconto de até 90% em relação ao On-Demand. A condição é poder ser interrompida com aviso de 2 minutos. Serve para cargas tolerantes a falha e reiniciáveis, como lotes, renderização e workers de fila.

> [!example] Exemplo
> Uma frota Spot renderiza quadros de animação, grava cada quadro pronto no S3 e a fila reentrega as tarefas das instâncias interrompidas.

Veja também: [[Batch]], [[Capacity Reservation]], [[Reserved Instance]], [[Savings Plans]]

## Onde aparece

- **Módulo 2:** [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 5:** [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.09 - Instance Refresh Termination e Spot|12.9]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
