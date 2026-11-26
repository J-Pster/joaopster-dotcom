---
aliases:
  - "Write Once Read Many"
tags:
  - glossario
  - conceito
---
# WORM

Modelo de armazenamento em que o dado pode ser escrito uma vez e lido quantas vezes quiser, mas não pode ser alterado nem apagado durante o período de retenção. Garante imutabilidade para auditorias e exigências regulatórias. No S3, é implementado pelo Object Lock.

> [!example] Exemplo
> Um arquivo de auditoria gravado em WORM não pode ser modificado depois de gravado, nem por quem o criou.

Veja também: [[Legal Hold]], [[Modo Compliance]], [[Object Lock]]

## Onde aparece

- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
