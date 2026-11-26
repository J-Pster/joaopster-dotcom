---
aliases:
  - "Unidade de Capacidade de Escrita"
  - "Web ACL Capacity Unit"
  - "Write Capacity Unit"
  - "capacidade do web ACL"
  - "unidade de capacidade do WAF"
tags:
  - glossario
  - custo
---
# WCU

A WCU (Web ACL Capacity Unit) mede o custo computacional de cada regra do AWS WAF: regras simples usam poucas WCUs e regras complexas, como as de regex, usam mais. Existe para limitar a complexidade do que o WAF avalia, e cada web ACL e cada grupo de regras tem um limite de WCUs (até 5.000 em um grupo de regras). Dá para calcular o consumo antes de criar, com a operação check-capacity. Não confundir com a WCU (Write Capacity Unit) do DynamoDB, que permite uma escrita por segundo de um item de até 1 KB.

> [!example] Exemplo
> Antes de implantar, a equipe roda check-capacity para somar as WCUs de um grupo gerenciado e das regras próprias e confirmar que cabem no limite do web ACL.

Veja também: [[DynamoDB]], [[Managed Rule Group]], [[RCU]], [[Throttling]], [[WAF]], [[Web ACL]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
