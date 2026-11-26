---
aliases:
  - "replicacao assincrona"
  - "replicação assincrona"
  - "replicação assíncrona"
tags:
  - glossario
  - conceito
---
# Replicacao Assincrona

Na replicação assíncrona, a origem confirma a gravação ao cliente sem esperar a cópia aplicar a mudança. Isso mantém a origem rápida, mas a cópia pode ficar atrasada (replica lag) e perder dados recentes se a origem falhar. É o modelo das read replicas do RDS.

> [!example] Exemplo
> Uma read replica entre Regiões pode estar alguns segundos atrás da origem; por isso o checkout deve ler da origem.

Veja também: [[Read Replica]], [[Replica Lag]], [[Replicacao Sincrona]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 20:** [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
