---
aliases:
  - "replicacao sincrona"
  - "replicação sincrona"
  - "replicação síncrona"
tags:
  - glossario
  - conceito
---
# Replicacao Sincrona

Na replicação síncrona, a gravação só é confirmada ao cliente depois de chegar a todas as cópias envolvidas. O motivo de usá-la é não perder nenhum dado confirmado quando uma cópia falha. O preço é uma latência de gravação maior, porque cada commit espera a outra zona.

> [!example] Exemplo
> O standby do Multi-AZ DB instance recebe cada gravação de forma síncrona antes de o RDS confirmar o commit.

Veja também: [[Failover]], [[Multi-AZ]], [[Replicacao Assincrona]]

## Onde aparece

- **Módulo 1:** [[01.02 - Regions e Availability Zones|1.2]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
