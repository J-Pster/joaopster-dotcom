---
aliases:
  - "AWS Nitro"
  - "Nitro System"
  - "Sistema Nitro"
tags:
  - glossario
  - conceito
---
# Nitro

Plataforma de virtualização da AWS que move rede, armazenamento e segurança para placas dedicadas e usa um hipervisor leve. Quase todo o hardware do host fica disponível para a instância, o que melhora desempenho e isola o ambiente. Também permite instâncias bare metal (.metal).

> [!example] Exemplo
> Uma instância m6i roda no Nitro: o tráfego de EBS e de rede é tratado por cartões dedicados, e não pelo processador que roda o seu código.

Veja também: [[EBS]], [[EC2]], [[ENA]], [[Instance Type]]

## Onde aparece

- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
