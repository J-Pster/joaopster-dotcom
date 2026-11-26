---
aliases:
  - "Transparent Data Encryption"
tags:
  - glossario
  - seguranca
---
# TDE

O TDE (Transparent Data Encryption) é a criptografia em nível de engine disponível no RDS para Oracle e SQL Server: o banco cifra e decifra os arquivos de dados sozinho, sem mudar a aplicação. É um recurso do engine, não do volume, e se soma à criptografia do armazenamento com KMS. Em Oracle, a chave mestra pode vir do CloudHSM quando uma exigência de compliance pede controle exclusivo da chave.

> [!example] Exemplo
> Um banco Oracle com TDE guarda a chave mestra no CloudHSM para atender a uma exigência de compliance, sem alterar o código da aplicação.

Veja também: [[CloudHSM]], [[Criptografia em Repouso]], [[KMS]], [[RDS]]

## Onde aparece

- **Módulo 8:** [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 13:** [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
