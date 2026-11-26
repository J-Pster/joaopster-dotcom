---
aliases:
  - "AWS Storage Gateway"
  - "gateway de armazenamento"
tags:
  - glossario
  - servico
---
# Storage Gateway

O AWS Storage Gateway é um serviço híbrido que conecta aplicações locais ao armazenamento da AWS, apresentando S3, FSx ou volumes de bloco por protocolos como NFS, SMB e iSCSI, com cache local. Existe para quem quer usar o armazenamento da nuvem sem reescrever aplicações que esperam um servidor de arquivos ou um disco local.

> [!example] Exemplo
> Uma filial usa um gateway de arquivos para que seus servidores gravem por SMB e os dados cheguem ao S3.

Veja também: [[NFS]], [[S3]], [[SMB]], [[iSCSI]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 10:** [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
