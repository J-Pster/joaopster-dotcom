---
aliases:
  - "Chave de partição"
  - "Hash key"
tags:
  - glossario
  - dados
---
# Partition Key

Atributo do DynamoDB cujo valor passa por uma função hash para decidir em qual partição o item fica armazenado. Por isso a chave de partição precisa ter muitos valores diferentes e tráfego bem distribuído, para evitar uma partição quente.

> [!example] Exemplo
> Em uma tabela de pedidos, usar o ID do cliente como chave de partição espalha os itens pelas partições.

Veja também: [[DynamoDB]], [[GSI]], [[LSI]], [[Sort Key]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
