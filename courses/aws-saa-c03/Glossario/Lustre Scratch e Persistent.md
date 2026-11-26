---
aliases:
  - "Lustre persistent"
  - "Lustre scratch"
  - "persistent file system"
  - "scratch file system"
  - "sistema persistent"
  - "sistema scratch"
tags:
  - glossario
  - dados
---
# Lustre Scratch e Persistent

No FSx for Lustre, scratch é o tipo de sistema de arquivos para armazenamento temporário, em que os dados não são replicados e se perdem se o servidor falhar. Persistent é o tipo para armazenamento de longo prazo, com dados replicados e servidores com falha substituídos. Existe para você pagar menos quando os dados são efêmeros e já estão duráveis no S3.

> [!example] Exemplo
> Um processamento de poucas horas usa scratch e exporta o resultado ao S3; uma plataforma de pesquisa de longa duração usa persistent.

Veja também: [[Durabilidade]], [[FSx for Lustre]], [[S3]]

## Onde aparece

- **Módulo 10:** [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
