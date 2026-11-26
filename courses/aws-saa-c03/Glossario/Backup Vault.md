---
aliases:
  - "backup vault"
  - "cofre de backup"
  - "vault"
tags:
  - glossario
  - servico
---
# Backup Vault

O cofre de backup é o contêiner do AWS Backup onde ficam os pontos de recuperação, com sua própria política de acesso e chave de criptografia do KMS. Existe para separar quem pode ver, copiar e apagar backups de quem administra os recursos de produção, e para receber o Vault Lock quando é preciso imutabilidade.

> [!example] Exemplo
> Um cofre dedicado a backups financeiros, com chave própria e retenção mínima de 7 anos.

Veja também: [[Backup Plan]], [[KMS]], [[Recovery Point]], [[Vault Lock]]

## Onde aparece

- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
