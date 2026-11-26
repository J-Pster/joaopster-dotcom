---
aliases:
  - "armazenamento em bloco"
  - "block storage"
  - "storage de bloco"
tags:
  - glossario
  - conceito
---
# Armazenamento de Bloco

O armazenamento de bloco divide os dados em blocos de tamanho fixo, cada um com um endereço, e entrega esses blocos a um servidor como se fossem um disco bruto. O sistema operacional formata o volume e decide como organizar os arquivos. Existe porque bancos de dados e sistemas operacionais precisam de leitura e escrita pequenas, rápidas e parciais, sem regravar um arquivo inteiro.

> [!example] Exemplo
> O disco de uma instância EC2 que guarda o sistema operacional e um banco MySQL é um volume de bloco (EBS).

Veja também: [[Armazenamento de Arquivos]], [[Armazenamento de Objetos]], [[EBS]], [[IOPS]]

## Onde aparece

- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 10:** [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
