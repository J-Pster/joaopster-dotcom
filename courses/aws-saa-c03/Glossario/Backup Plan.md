---
aliases:
  - "backup plan"
  - "plano de backup"
tags:
  - glossario
  - servico
---
# Backup Plan

O plano de backup do AWS Backup é a política que define quando e por quanto tempo fazer backup: regras com frequência, janela, ciclo de vida, cofre de destino e cópias entre Regiões ou contas. Existe para que a proteção seja descrita uma vez e aplicada a muitos recursos, em vez de configurar cada serviço separadamente.

> [!example] Exemplo
> Um plano com uma regra diária de 35 dias e outra mensal de 1 ano, aplicado a todos os recursos com a tag backup=sim.

Veja também: [[Backup]], [[Backup Vault]], [[Organizations]], [[Recovery Point]]

## Onde aparece

- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
