---
aliases:
  - "Amazon Data Lifecycle Manager"
  - "DLM"
  - "políticas de ciclo de vida de snapshots"
tags:
  - glossario
  - servico
---
# Data Lifecycle Manager

O Amazon Data Lifecycle Manager (DLM) automatiza a criação, retenção e exclusão de snapshots de EBS e de AMIs por meio de políticas com agenda, sem custo adicional. Só gerencia os snapshots que ele mesmo criou. Existe para garantir backups regulares sem scripts, evitando snapshots esquecidos que custam dinheiro.

> [!example] Exemplo
> Uma política do DLM tira um snapshot diário dos volumes com a tag backup=sim e mantém os últimos 14.

Veja também: [[Backup]], [[EBS]], [[Snapshot]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
