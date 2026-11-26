---
aliases:
  - "EBS Multi-Attach"
  - "Multi-Attach do EBS"
  - "anexo múltiplo"
tags:
  - glossario
  - conceito
---
# Multi-Attach

O Multi-Attach permite anexar um mesmo volume EBS io1 ou io2 a até 16 instâncias Nitro na mesma AZ ao mesmo tempo. Cada instância tem acesso total de leitura e escrita, mas o volume não coordena os acessos: a aplicação precisa ser consciente de cluster. Existe para aplicações de alta disponibilidade que compartilham um disco; não é um sistema de arquivos compartilhado.

> [!example] Exemplo
> Um cluster de failover com duas instâncias na mesma AZ usa um io2 com Multi-Attach e um software de cluster que coordena as escritas.

Veja também: [[EBS]], [[Nitro]], [[Zona de Disponibilidade]], [[io2]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
