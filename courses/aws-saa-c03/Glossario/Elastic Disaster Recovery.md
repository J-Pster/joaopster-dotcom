---
aliases:
  - "AWS Elastic Disaster Recovery"
  - "CloudEndure Disaster Recovery"
  - "DRS"
  - "EDR"
tags:
  - glossario
  - servico
---
# Elastic Disaster Recovery

O Elastic Disaster Recovery replica continuamente, em nível de bloco, servidores de origem (locais, de outras nuvens ou EC2) para uma área de preparação barata na AWS, com RPO tipicamente subsegundo. No desastre ou em um simulado, lança instâncias de recuperação em minutos, a partir do ponto no tempo escolhido, e depois faz o failback. Existe para dar DR a servidores sem replicação nativa, seguindo a abordagem pilot light.

> [!example] Exemplo
> Um ERP legado em duas VMs locais replicado para a AWS e ligado em minutos depois de um incêndio no data center.

Veja também: [[Failback]], [[Pilot Light]], [[RPO]], [[RTO]], [[Snapshot]]

## Onde aparece

- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
