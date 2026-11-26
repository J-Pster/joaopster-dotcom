---
aliases:
  - "grupo de parâmetros"
  - "parameter group"
  - "parameter groups"
tags:
  - glossario
  - conceito
---
# Parameter Group

Um parameter group é um conjunto de configurações do engine, como rds.force_ssl ou max_connections, aplicado a uma ou mais instâncias RDS. Ele existe para mudar o comportamento do banco sem acesso ao sistema operacional. Alguns parâmetros exigem reinício para valer.

> [!example] Exemplo
> A equipe cria um parameter group com rds.force_ssl igual a 1 e o associa ao banco PostgreSQL de produção.

Veja também: [[DB Instance Class]], [[IAM Database Authentication]], [[RDS Custom]]

## Onde aparece

- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
