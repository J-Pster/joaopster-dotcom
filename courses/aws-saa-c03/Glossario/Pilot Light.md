---
aliases:
  - "luz piloto"
  - "pilot light"
tags:
  - glossario
  - conceito
---
# Pilot Light

No pilot light, os dados são replicados continuamente para a Região de recuperação e o núcleo mínimo da infraestrutura existe, mas a camada de aplicação fica desligada ou sem servidores. Ele não atende requisições até que alguém execute uma ação de recuperação, como ligar e escalar a computação. Existe para ter RPO de minutos e RTO de dezenas de minutos pagando quase só armazenamento e banco.

> [!example] Exemplo
> Um banco replicado na Região B com zero instâncias de aplicação, que o time liga e escala quando a Região A cai.

Veja também: [[Backup and Restore]], [[Elastic Disaster Recovery]], [[Hot Standby]], [[Warm Standby]]

## Onde aparece

- **Módulo 11:** [[11.06 - Replicacao do S3|11.6]]
- **Módulo 18:** [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
