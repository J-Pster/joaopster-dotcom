---
aliases:
  - "DynamoDB Global Tables"
  - "Tabelas globais do DynamoDB"
tags:
  - glossario
  - servico
---
# Global Tables

Recurso do DynamoDB que replica uma tabela entre várias Regiões, com escrita em qualquer uma delas (multi-Região e ativa-ativa). Dá leitura local de baixa latência para usuários distantes e resistência à falha de uma Região inteira.

> [!example] Exemplo
> Uma loja global mantém réplicas da tabela de carrinhos nos Estados Unidos, na Europa e na Ásia, e cada região escreve localmente.

Veja também: [[Aurora Global Database]], [[DynamoDB]], [[DynamoDB Streams]], [[Regiao AWS]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
