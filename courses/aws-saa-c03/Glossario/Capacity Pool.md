---
aliases:
  - "camada de capacity pool"
  - "capacity pool do ONTAP"
  - "tiering do ONTAP"
tags:
  - glossario
  - custo
---
# Capacity Pool

A capacity pool é a camada de armazenamento elástica e mais barata do FSx for ONTAP, para onde o sistema move automaticamente os dados pouco acessados, mantendo na camada SSD só o que é quente. Você paga pelo que armazena e pelas requisições à camada. Existe para reduzir o custo de dados frios sem que a aplicação note a mudança.

> [!example] Exemplo
> Um sistema ONTAP com 100 TB, dos quais 90 TB são frios, mantém 10 TB em SSD e o restante na capacity pool.

Veja também: [[EFS Infrequent Access]], [[FSx for NetApp ONTAP]]

## Onde aparece

- **Módulo 10:** [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
