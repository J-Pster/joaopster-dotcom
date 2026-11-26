---
aliases:
  - "standby morno"
  - "warm standby"
tags:
  - glossario
  - conceito
---
# Warm Standby

O warm standby mantém uma versão reduzida, porém completa e funcional, do ambiente rodando o tempo todo na Região de recuperação, com banco replicado e balanceador, atendendo tráfego em capacidade menor. No desastre, basta escalar e redirecionar, o que dá RPO de segundos e RTO de minutos. A diferença para o pilot light é que ele já atende, e por isso é testado continuamente.

> [!example] Exemplo
> Dois servidores pequenos e um banco replicado na Região B, que sobem para vinte servidores no failover.

Veja também: [[Backup and Restore]], [[Hot Standby]], [[Multi-Site Active-Active]], [[Pilot Light]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 11:** [[11.06 - Replicacao do S3|11.6]]
- **Módulo 18:** [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
