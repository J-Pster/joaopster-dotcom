---
aliases:
  - "hot partition"
  - "hot partitions"
  - "partição quente"
  - "partições quentes"
tags:
  - glossario
  - conceito
---
# Hot Partition

Partição do DynamoDB que recebe tráfego acima do que ela aguenta (3.000 unidades de leitura e 1.000 de escrita por segundo), mesmo com a capacidade total da tabela sobrando. A causa é uma chave de partição com poucos valores ou muito acessados, e a cura é de modelagem, não de gastar mais capacidade.

> [!example] Exemplo
> Uma tabela de ingressos usa a data do evento como partition key: no dia da venda, 90% das escritas caem na mesma partição e sofrem throttling.

Veja também: [[Adaptive Capacity]], [[DynamoDB]], [[Partition Key]], [[Throttling]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.06 - Estrategias de Cache e DAX|14.6]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
