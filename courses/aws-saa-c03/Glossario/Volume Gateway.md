---
aliases:
  - "Volume Gateway cached"
  - "Volume Gateway stored"
tags:
  - glossario
  - servico
---
# Volume Gateway

O Volume Gateway apresenta volumes de blocos por iSCSI. No modo cached, o dado primário fica no S3 e o cache local guarda o que é acessado com frequência; no modo stored, o dado primário fica no local e há cópias assíncronas na AWS como snapshots do EBS.

> [!example] Exemplo
> Um servidor local monta um disco iSCSI cujo conteúdo é guardado na AWS, com cache local.

Veja também: [[S3 File Gateway]], [[Storage Gateway]], [[Tape Gateway]]

## Onde aparece

- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
