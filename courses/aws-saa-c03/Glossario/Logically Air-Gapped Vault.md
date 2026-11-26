---
aliases:
  - "air-gapped vault"
  - "cofre logicamente isolado"
  - "logically air-gapped vault"
tags:
  - glossario
  - seguranca
---
# Logically Air-Gapped Vault

O cofre logicamente isolado é um cofre do AWS Backup já em modo compliance, cujos backups ficam em uma conta pertencente ao serviço, fora da sua conta. Pode ser compartilhado por AWS RAM e, opcionalmente, exigir aprovação de múltiplas pessoas (multi-party approval) para recuperar. Existe para permitir a recuperação mesmo quando a conta inteira foi comprometida.

> [!example] Exemplo
> Depois de um ataque que tomou a conta de produção, o time restaura os dados a partir do cofre compartilhado com a conta de recuperação.

Veja também: [[Backup]], [[Backup Vault]], [[Organizations]], [[Vault Lock]]

## Onde aparece

- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
