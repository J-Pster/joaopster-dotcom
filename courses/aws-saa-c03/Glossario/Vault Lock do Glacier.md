---
aliases:
  - "Glacier Vault Lock"
tags:
  - glossario
  - dados
---
# Vault Lock do Glacier

Política de bloqueio de um cofre do S3 Glacier (serviço independente). Depois de InitiateVaultLock a política fica in progress por até 24 horas, para teste; ao completar o bloqueio ela se torna imutável. Para dados novos, o caminho recomendado é S3 com Object Lock.

> [!example] Exemplo
> Uma política de retenção de 7 anos é testada por algumas horas e então confirmada com CompleteVaultLock.

Veja também: [[Object Lock]], [[WORM]]

## Onde aparece

- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
