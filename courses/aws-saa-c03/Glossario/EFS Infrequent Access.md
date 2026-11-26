---
aliases:
  - "EFS Archive"
  - "EFS IA"
  - "Infrequent Access do EFS"
  - "classe Archive do EFS"
  - "classe IA do EFS"
tags:
  - glossario
  - custo
---
# EFS Infrequent Access

EFS Infrequent Access (IA) e EFS Archive são classes de armazenamento mais baratas para arquivos raramente lidos, com latência de dezenas de milissegundos e cobrança por leitura. O lifecycle move arquivos para elas segundo o último acesso (por padrão 30 dias para IA e 90 dias para Archive). Existem para reduzir o custo de dados frios sem mudar o caminho de acesso dos arquivos.

> [!example] Exemplo
> Arquivos de um projeto encerrado sem leitura por 60 dias passam para IA e custam bem menos por GB.

Veja também: [[EFS]], [[Elastic Throughput]]

## Onde aparece

- **Módulo 10:** [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
