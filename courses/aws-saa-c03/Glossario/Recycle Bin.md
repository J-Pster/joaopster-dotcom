---
aliases:
  - "EBS Recycle Bin"
  - "Lixeira de snapshots"
  - "Lixeira do EBS"
  - "Rbin"
  - "Recycle Bin do EBS"
  - "lixeira do EBS"
tags:
  - glossario
  - dados
---
# Recycle Bin

A Recycle Bin (Lixeira) do EBS guarda snapshots e AMIs baseadas em EBS apagados durante o período de uma regra de retenção, de 1 dia a 1 ano. Existe porque a exclusão acidental de um snapshot é irreversível sem ela, e a replicação ou o Vault Lock não recuperam o que já foi apagado. É a resposta de menor esforço para recuperar um snapshot ou AMI excluído por engano.

> [!example] Exemplo
> Uma regra de retenção de 30 dias permite recuperar, em até um mês, o snapshot que um engenheiro apagou sem querer.

Veja também: [[Backup]], [[Data Lifecycle Manager]], [[EBS]], [[Snapshot]], [[Vault Lock]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
