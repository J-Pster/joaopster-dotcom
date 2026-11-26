---
aliases:
  - "NFS v4"
  - "NFSv4"
  - "NFSv4.1"
  - "Network File System"
tags:
  - glossario
  - rede
---
# NFS

O NFS é o protocolo de rede, nativo do mundo Linux e Unix, que permite montar uma pasta remota como se fosse local. Usa a porta TCP 2049 e o modelo de permissões POSIX. Existe para compartilhar arquivos entre muitos servidores sem copiá-los, e é o protocolo do Amazon EFS e do FSx for OpenZFS.

> [!example] Exemplo
> Uma instância Linux monta o EFS com o comando mount e passa a ver os arquivos em /mnt/efs, compartilhados com outras instâncias.

Veja também: [[Armazenamento de Arquivos]], [[EFS]], [[SMB]], [[Security Group]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
