---
aliases:
  - "armazenamento em arquivos"
  - "file storage"
  - "sistema de arquivos de rede"
  - "storage de arquivos"
tags:
  - glossario
  - conceito
---
# Armazenamento de Arquivos

O armazenamento de arquivos organiza os dados em pastas e arquivos, acessados por um protocolo de rede como NFS ou SMB, e permite que muitos clientes compartilhem o mesmo conjunto de arquivos ao mesmo tempo. Existe para quando várias máquinas precisam enxergar a mesma pasta, com permissões e locks, algo que um disco de bloco comum não oferece.

> [!example] Exemplo
> Uma frota de servidores web Linux lê e grava uploads no mesmo EFS, montado por NFS.

Veja também: [[Armazenamento de Bloco]], [[Armazenamento de Objetos]], [[EFS]], [[NFS]], [[SMB]]

## Onde aparece

- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
