---
aliases:
  - "Amazon FSx for Lustre"
  - "FSx Lustre"
  - "Lustre"
  - "sistema de arquivos Lustre"
tags:
  - glossario
  - servico
---
# FSx for Lustre

O FSx for Lustre é um sistema de arquivos paralelo de alto desempenho para Linux, com latência submilissegundo, até múltiplos TB/s de throughput e milhões de IOPS, usado em HPC e machine learning. Integra-se ao S3: objetos aparecem como arquivos e os resultados podem voltar ao bucket. Existe porque processamento paralelo massivo precisa de um armazenamento que acompanhe a velocidade da computação.

> [!example] Exemplo
> Um treino de machine learning lê um dataset do S3 através de um FSx for Lustre, sem baixar tudo a cada execução.

Veja também: [[FSx]], [[FSx for Windows File Server]], [[Lustre Scratch e Persistent]], [[S3]]

## Onde aparece

- **Módulo 9:** [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
