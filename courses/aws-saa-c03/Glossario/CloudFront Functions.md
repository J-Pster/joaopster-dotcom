---
aliases:
  - "CloudFront Function"
  - "funções do CloudFront"
tags:
  - glossario
  - servico
---
# CloudFront Functions

As CloudFront Functions são funções leves em JavaScript executadas nas edge locations do CloudFront, nos eventos de viewer request e viewer response, com tempo de execução em submilissegundos e custo muito baixo. Não acessam rede, corpo do pedido nem sistema de arquivos. Existem para lógica simples em volume enorme, como reescrever URLs, ajustar headers e normalizar a cache key, que fica mais barata e rápida do que no Lambda@Edge.

> [!example] Exemplo
> Uma função adiciona o header Strict-Transport-Security a toda resposta de um site com milhões de acessos por dia.

Veja também: [[Cache Behavior]], [[CloudFront]], [[Edge Location]], [[Lambda@Edge]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
