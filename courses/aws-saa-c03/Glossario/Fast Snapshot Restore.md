---
aliases:
  - "FSR"
  - "Fast Snapshot Restore (FSR)"
  - "restauração rápida de snapshot"
tags:
  - glossario
  - custo
---
# Fast Snapshot Restore

O Fast Snapshot Restore pré-aquece um snapshot de EBS em AZs específicas para que os volumes criados a partir dele estejam totalmente inicializados, sem a latência inicial de ler os blocos do S3. É cobrado por snapshot por AZ, por minuto, com mínimo de uma hora. Existe para quem precisa de volumes prontos com desempenho pleno, como AMIs e ambientes lançados em escala.

> [!example] Exemplo
> Uma frota que sobe centenas de instâncias a partir da mesma AMI ativa o FSR no snapshot, nas AZs de uso.

Veja também: [[EBS]], [[EBS Snapshots Archive]], [[Snapshot]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
