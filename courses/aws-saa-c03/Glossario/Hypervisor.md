---
aliases:
  - "hipervisor"
  - "hypervisors"
tags:
  - glossario
  - conceito
---
# Hypervisor

Software que divide um servidor físico em várias máquinas virtuais isoladas, repartindo CPU, memória e rede entre elas. No EC2, o Nitro usa um hipervisor leve e deixa quase todo o hardware para a instância. Instâncias bare metal rodam sem hypervisor da AWS, com acesso direto ao hardware.

> [!example] Exemplo
> Em um servidor com muita memória, o hypervisor cria dezenas de instâncias pequenas, cada uma enxergando só a sua fatia de vCPU e RAM.

Veja também: [[EC2]], [[Instance Type]], [[Nitro]]

## Onde aparece

- **Módulo 1:** [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
