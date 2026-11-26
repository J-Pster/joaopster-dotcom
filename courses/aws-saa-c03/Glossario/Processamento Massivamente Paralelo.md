---
aliases:
  - "MPP"
  - "massively parallel processing"
tags:
  - glossario
  - conceito
---
# Processamento Massivamente Paralelo

No processamento massivamente paralelo (MPP), os dados e o trabalho de uma consulta são divididos entre vários nós, que executam suas partes ao mesmo tempo, e um nó coordenador junta os resultados. É a técnica que permite ao Redshift responder rápido a consultas sobre muitos terabytes, e por isso acrescentar nós aumenta a capacidade.

> [!example] Exemplo
> Uma agregação sobre bilhões de linhas é dividida entre 8 nós, cada um processando um oitavo dos dados.

Veja também: [[Armazenamento Colunar]], [[Redshift]]

## Onde aparece

- **Módulo 14:** [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 22:** [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
