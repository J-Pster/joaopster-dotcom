---
aliases:
  - "File Gateway"
tags:
  - glossario
  - servico
---
# S3 File Gateway

O S3 File Gateway expõe um compartilhamento de arquivos por NFS ou SMB cujo conteúdo é gravado como objetos no S3, com cache local dos arquivos acessados recentemente. Existe para que aplicações locais usem o S3 sem mudar a forma de acessar arquivos.

> [!example] Exemplo
> Uma agência mapeia um compartilhamento SMB que guarda no S3 as pastas de projetos antigos.

Veja também: [[Storage Gateway]], [[Tape Gateway]], [[Volume Gateway]]

## Onde aparece

- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
