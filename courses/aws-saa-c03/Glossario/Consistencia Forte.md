---
aliases:
  - "consistência forte"
  - "fortemente consistente"
  - "leitura forte"
  - "leitura fortemente consistente"
  - "strong consistency"
tags:
  - glossario
  - conceito
---
# Consistencia Forte

Modelo em que a leitura devolve sempre o dado mais recente confirmado. No DynamoDB é opcional por leitura (ConsistentRead), custa o dobro da eventual e não existe em GSI. O DAX apenas repassa essas leituras ao DynamoDB, sem usar o cache.

> [!example] Exemplo
> A tela de confirmação de pagamento lê o saldo com leitura forte para nunca mostrar o valor antigo.

Veja também: [[Consistencia Eventual]], [[DAX]], [[DynamoDB]], [[LSI]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
