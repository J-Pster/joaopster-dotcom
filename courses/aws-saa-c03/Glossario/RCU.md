---
aliases:
  - "Read Capacity Unit"
  - "Unidade de Capacidade de Leitura"
tags:
  - glossario
  - custo
---
# RCU

Unidade de capacidade de leitura do DynamoDB. Uma RCU permite uma leitura fortemente consistente por segundo de um item de até 4 KB (ou duas leituras eventualmente consistentes). Itens maiores consomem mais unidades.

> [!example] Exemplo
> Ler 100 itens de 4 KB por segundo com consistência forte exige 100 RCUs.

Veja também: [[DAX]], [[DynamoDB]], [[Throttling]], [[WCU]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
