---
aliases:
  - "permissão de local de dados"
tags:
  - glossario
  - dados
---
# DATA_LOCATION_ACCESS

É a permissão do Lake Formation sobre um local registrado do S3, exigida junto com CREATE_TABLE ou CREATE_DATABASE para criar recursos que apontam para ele. Esquecê-la é a causa clássica de falha na criação de tabelas.

> [!example] Exemplo
> A role tem CREATE_TABLE, mas sem DATA_LOCATION_ACCESS no bucket registrado a criação falha.

Veja também: [[Lake Formation]], [[S3]]

## Onde aparece

- **Módulo 22:** [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
