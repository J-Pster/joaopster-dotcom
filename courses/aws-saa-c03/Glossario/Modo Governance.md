---
aliases:
  - "governance mode"
  - "modo governance"
tags:
  - glossario
  - dados
---
# Modo Governance

Modo de retenção do Object Lock em que a versão fica protegida contra exclusão, mas usuários com a permissão especial s3:BypassGovernanceRetention podem contornar a proteção usando um cabeçalho próprio. Protege contra erro e exclusão acidental e deixa uma saída de emergência controlada.

> [!example] Exemplo
> Um time protege os backups em modo governance: um script não apaga por engano, mas o responsável pela segurança pode fazer bypass se for preciso.

Veja também: [[Legal Hold]], [[Modo Compliance]], [[Object Lock]]

## Onde aparece

- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
