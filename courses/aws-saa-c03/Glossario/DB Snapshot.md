---
aliases:
  - "DB snapshot"
  - "snapshot do RDS"
  - "snapshot manual"
  - "snapshots do RDS"
  - "snapshots manuais"
tags:
  - glossario
  - servico
---
# DB Snapshot

O snapshot manual do RDS é uma cópia do banco que você dispara e que não expira sozinha. Ele existe para guardar estados importantes e continua existindo depois que a instância é apagada. Pode ser restaurado, copiado entre Regiões e usado para criptografar um banco existente, e há uma cota de 100 por Região.

> [!example] Exemplo
> O DBA tira um snapshot manual antes de uma mudança de schema, para poder voltar àquele estado exato.

Veja também: [[Automated Backup]], [[Point-in-Time Recovery]], [[RDS]], [[Snapshot]]

## Onde aparece

- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 10:** [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
