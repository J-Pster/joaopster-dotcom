---
aliases:
  - "IAM database authentication"
  - "autenticação IAM do banco"
  - "autenticação por IAM no banco"
tags:
  - glossario
  - seguranca
---
# IAM Database Authentication

A autenticação IAM do banco troca a senha por um token temporário de 15 minutos assinado com SigV4, e exige TLS. Existe para MariaDB, MySQL e PostgreSQL no RDS e elimina senhas fixas no código. A permissão necessária é rds-db:connect.

> [!example] Exemplo
> Uma função Lambda gera um token com a API do RDS e conecta ao banco sem nenhuma senha armazenada.

Veja também: [[KMS]], [[RDS Proxy]], [[Secrets Manager]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
