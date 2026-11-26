---
aliases:
  - "Mountpoint"
  - "Mountpoint for S3"
tags:
  - glossario
  - servico
---
# Mountpoint for Amazon S3

Mountpoint for Amazon S3 é um cliente open source que monta um bucket como se fosse um sistema de arquivos local, traduzindo chamadas de arquivo em requisições GET e LIST do S3. Serve para leitura intensa de dados em data lakes e treinamento de modelos, mas não transforma o S3 em armazenamento de bloco nem suporta todas as operações de um sistema de arquivos POSIX.

> [!example] Exemplo
> Um job de treinamento em EC2 lê milhões de imagens de um bucket por um diretório montado com Mountpoint, sem baixar tudo antes.

Veja também: [[EFS]], [[S3]], [[S3 Express One Zone]]

## Onde aparece

- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
