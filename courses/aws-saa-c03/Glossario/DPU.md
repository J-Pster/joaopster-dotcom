---
aliases:
  - "DPUs"
  - "Data Processing Unit"
tags:
  - glossario
  - custo
---
# DPU

A DPU (Data Processing Unit) é a unidade de capacidade de um job do Glue: cada DPU equivale a 4 vCPUs e 16 GB de memória, e a cobrança é por DPU-hora, por segundo, com mínimo de 1 minuto (cerca de US$0,44 por DPU-hora, verificado em novembro de 2026). Existe para medir o poder de processamento de um serviço serverless de forma simples. Você escolhe o tipo e o número de workers do job.

> [!example] Exemplo
> Um job com 10 workers G.1X usa 10 DPUs e custa 10 vezes o valor de uma DPU por hora de execução.

Veja também: [[Glue]], [[Job Bookmark]]

## Onde aparece

- **Módulo 22:** [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]]
