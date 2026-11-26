---
aliases:
  - "Cold HDD"
  - "EBS sc1"
  - "HDD frio"
  - "volume sc1"
tags:
  - glossario
  - servico
---
# sc1

O sc1 é o volume HDD frio do EBS, o de menor custo por GB, para dados acessados com pouca frequência e de forma sequencial. Tem base de 12 MiB/s por TiB, não pode ser volume de boot nem usar Multi-Attach. Existe para armazenar grandes volumes que precisam estar em disco, mas raramente são lidos.

> [!example] Exemplo
> Um arquivo de dados históricos de 12 TiB consultado poucas vezes por mês fica em um sc1.

Veja também: [[EBS]], [[gp3]], [[st1]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
