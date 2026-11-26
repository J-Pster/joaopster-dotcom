---
aliases:
  - "cold storage do OpenSearch"
tags:
  - glossario
  - dados
---
# UltraWarm

UltraWarm e cold storage são camadas de armazenamento mais baratas do OpenSearch Service, apoiadas no S3, para índices antigos somente leitura. Existem para reduzir o custo de logs que raramente são consultados.

> [!example] Exemplo
> Índices com mais de 30 dias vão para UltraWarm e, depois, para cold storage.

Veja também: [[OpenSearch Service]], [[S3]]

## Onde aparece

- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
