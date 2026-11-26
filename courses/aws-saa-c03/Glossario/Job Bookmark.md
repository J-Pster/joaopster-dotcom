---
aliases:
  - "bookmark do Glue"
  - "bookmarks"
  - "job bookmarks"
tags:
  - glossario
  - servico
---
# Job Bookmark

O job bookmark é o recurso do Glue que faz um job de ETL lembrar até onde já leu, para que a próxima execução processe só os dados novos. Existe para evitar reprocessar o dataset inteiro a cada rodada, o que custa tempo e dinheiro. Não apaga nada: apenas registra o ponto de progresso.

> [!example] Exemplo
> Todo dia chegam novos arquivos de vendas, e o bookmark faz o job ler apenas os do dia, sem reler os antigos.

Veja também: [[DPU]], [[ETL]], [[Glue]]

## Onde aparece

- **Módulo 22:** [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]]
