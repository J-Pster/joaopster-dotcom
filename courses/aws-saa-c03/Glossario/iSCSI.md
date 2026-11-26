---
aliases:
  - "Internet Small Computer Systems Interface"
  - "LUN iSCSI"
tags:
  - glossario
  - rede
---
# iSCSI

O iSCSI é um protocolo que transporta comandos de disco (SCSI) sobre uma rede IP, usando a porta TCP 3260. O servidor enxerga um LUN remoto como se fosse um disco local de bloco. Existe para ligar servidores a um armazenamento de bloco centralizado (SAN). Na família FSx, só o FSx for NetApp ONTAP oferece esse acesso.

> [!example] Exemplo
> Uma aplicação legada que espera um disco de SAN migra para o FSx for ONTAP e continua acessando seu LUN por iSCSI.

Veja também: [[Armazenamento de Bloco]], [[FSx]], [[NFS]], [[SMB]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
