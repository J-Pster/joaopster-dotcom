---
aliases:
  - "active-active"
  - "active/active"
  - "ativo-ativo"
  - "multi-site ativo-ativo"
tags:
  - glossario
  - conceito
---
# Multi-Site Active-Active

No multi-site ativo-ativo, a carga roda ao mesmo tempo em duas ou mais Regiões, e todas atendem usuários; se uma falha, as outras absorvem o tráfego, com RPO perto de zero e RTO potencialmente zero. É a estratégia mais cara e complexa, porque os dados precisam ser gravados e reconciliados em várias Regiões. Não dispensa backup, pois a corrupção é replicada para todas.

> [!example] Exemplo
> Uma aplicação com Aurora Global Database ou DynamoDB Global Tables atendendo usuários em duas Regiões ao mesmo tempo.

Veja também: [[Aurora Global Database]], [[Global Tables]], [[Hot Standby]], [[RTO]], [[Warm Standby]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
