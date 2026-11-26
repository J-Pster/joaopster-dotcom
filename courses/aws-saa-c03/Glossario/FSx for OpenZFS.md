---
aliases:
  - "FSx OpenZFS"
  - "FSx ZFS"
  - "OpenZFS"
  - "ZFS"
tags:
  - glossario
  - servico
---
# FSx for OpenZFS

O FSx for OpenZFS entrega o sistema de arquivos OpenZFS como serviço gerenciado, acessado por NFS (v3 a v4.2), com latência de centenas de microssegundos, snapshots quase instantâneos, clonagem de dados e compressão. Existe para migrar servidores ZFS ou outros servidores de arquivos Linux sem mudar aplicações.

> [!example] Exemplo
> Um time cria um snapshot de um dataset de 3 TB e dez clones para testes, quase instantaneamente e quase sem ocupar espaço extra.

Veja também: [[FSx]], [[FSx for NetApp ONTAP]], [[NFS]], [[Snapshot]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
