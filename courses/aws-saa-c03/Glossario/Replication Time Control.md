---
aliases:
  - "RTC"
  - "S3 RTC"
  - "S3 Replication Time Control"
tags:
  - glossario
  - dados
---
# Replication Time Control

Replication Time Control (RTC) é uma opção da replicação do S3 que oferece um SLA de 15 minutos para replicar objetos, com métricas e eventos quando o prazo é perdido. Tem custo adicional por GB e não se aplica ao Batch Replication. É a resposta a requisitos de conformidade com prazo de replicação.

> [!example] Exemplo
> Uma exigência regulatória pede cópia em outra Região em até 15 minutos, então a regra liga o RTC.

Veja também: [[Batch Replication]], [[Replicacao do S3]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
