---
aliases:
  - "Inventory do S3"
  - "inventário do S3"
tags:
  - glossario
  - servico
---
# S3 Inventory

S3 Inventory gera, diária ou semanalmente, um relatório em CSV, ORC ou Parquet listando os objetos de um bucket e seus metadados, como tamanho, classe, criptografia e status de replicação. É a alternativa barata e escalável a listar o bucket pela API, e serve de manifesto para o S3 Batch Operations.

> [!example] Exemplo
> O time de segurança usa o relatório do Inventory para achar todos os objetos sem SSE-KMS.

Veja também: [[Macie]], [[S3]], [[S3 Batch Operations]]

## Onde aparece

- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
