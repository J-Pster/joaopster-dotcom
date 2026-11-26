---
aliases:
  - "Lambda at Edge"
  - "funções Lambda@Edge"
tags:
  - glossario
  - servico
---
# Lambda@Edge

O Lambda@Edge executa funções Lambda (Node.js e Python) em quatro eventos do CloudFront: viewer request, viewer response, origin request e origin response. Ao contrário das CloudFront Functions, acessa a rede e o corpo do pedido e roda por mais tempo, ao custo de preço maior e escala menor. A função é criada em us-east-1 e replicada para a borda, e a prova o escolhe quando a lógica na borda é complexa demais para uma CloudFront Function.

> [!example] Exemplo
> Uma função em origin request consulta uma API interna para decidir o caminho que será pedido à origem.

Veja também: [[Cache Behavior]], [[CloudFront]], [[CloudFront Functions]], [[Lambda]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
