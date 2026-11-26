---
aliases:
  - "backup policies"
  - "política de backup"
  - "políticas de backup"
tags:
  - glossario
  - seguranca
---
# Backup Policy

Tipo de política do Organizations que define planos do AWS Backup aplicados de forma centralizada às contas da organização. Em vez de criar o plano em cada conta, a política o implanta onde for anexada. Ajuda a garantir que todas as contas façam backup dos recursos importantes.

> [!example] Exemplo
> Uma backup policy anexada à OU de produção cria em cada conta um plano diário com retenção de 35 dias.

Veja também: [[Organizations]], [[Tag Policy]]

## Onde aparece

- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
