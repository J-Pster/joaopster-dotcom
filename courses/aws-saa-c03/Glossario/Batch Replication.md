---
aliases:
  - "S3 Batch Replication"
  - "replicação em lote"
tags:
  - glossario
  - dados
---
# Batch Replication

Batch Replication é o job sob demanda do S3 que replica objetos que já existiam antes da regra de replicação, objetos que falharam em replicar e réplicas. É a resposta à pegadinha de que a replicação ativa só cobre o conteúdo novo. É executado e rastreado pelo S3 Batch Operations e não tem o SLA de 15 minutos do RTC.

> [!example] Exemplo
> Depois de criar a regra em um bucket com 2 TB, um job de Batch Replication copia o legado para o destino.

Veja também: [[Replicacao do S3]], [[S3 Batch Operations]], [[Versionamento]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
