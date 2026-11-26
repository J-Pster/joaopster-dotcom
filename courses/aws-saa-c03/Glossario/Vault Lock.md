---
aliases:
  - "bloqueio de cofre"
tags:
  - glossario
  - seguranca
---
# Vault Lock

O Vault Lock torna um cofre do AWS Backup imutável (WORM), impondo retenção mínima e máxima que ninguém pode contornar. No modo governance, quem tem a permissão IAM correta ainda pode remover o lock; no modo compliance, depois de um período de carência de ao menos 3 dias, nem o administrador nem a AWS removem. Existe para proteger backups de ransomware e atender exigências legais de retenção.

> [!example] Exemplo
> Um cofre em modo compliance com retenção mínima de 5 anos, em que nem o root consegue apagar um ponto de recuperação.

Veja também: [[Backup]], [[Backup Vault]], [[Logically Air-Gapped Vault]], [[Recovery Point]]

## Onde aparece

- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]]
- **Módulo 11:** [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
