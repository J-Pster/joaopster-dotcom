---
aliases:
  - "Batch Operations"
  - "operações em lote do S3"
tags:
  - glossario
  - seguranca
---
# S3 Batch Operations

S3 Batch Operations executa uma ação em bilhões de objetos com um único job, a partir de um manifesto (por exemplo, um relatório do S3 Inventory), com acompanhamento de progresso e relatório de conclusão. As ações incluem copiar, invocar Lambda, restaurar do Glacier, alterar tags e retenção e replicar objetos existentes.

> [!example] Exemplo
> Para recifrar 400 milhões de objetos com uma nova chave KMS, um job de Batch Operations copia cada um sobre si mesmo.

Veja também: [[Batch Replication]], [[Lambda]], [[S3 Bucket Keys]], [[S3 Inventory]], [[SSE-KMS]]

## Onde aparece

- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
