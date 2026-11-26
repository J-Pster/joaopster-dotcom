---
aliases:
  - "Recovery Point Objective"
  - "objetivo de ponto de recuperação"
tags:
  - glossario
  - conceito
---
# RPO

Recovery Point Objective: a quantidade máxima de dados, medida em tempo, que o negócio aceita perder em um desastre. Define a frequência necessária de backups ou replicação. Um RPO de 5 minutos exige cópias a cada poucos minutos.

> [!example] Exemplo
> Se o RPO é de 15 minutos, o último ponto restaurável não pode ser mais antigo do que 15 minutos antes da falha.

Veja também: [[Alta Disponibilidade]], [[Game Day]], [[RTO]]

## Onde aparece

- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.06 - Replicacao do S3|11.6]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 18:** [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
