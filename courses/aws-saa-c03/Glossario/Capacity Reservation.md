---
aliases:
  - "ODCR"
  - "On-Demand Capacity Reservation"
  - "Reserva de Capacidade"
  - "capacity reservation"
  - "reserva de capacidade sob demanda"
tags:
  - glossario
  - custo
---
# Capacity Reservation

A On-Demand Capacity Reservation (ODCR) reserva capacidade de instâncias EC2 de um tipo em uma AZ específica, pelo tempo que você quiser e sem compromisso de prazo. Existe porque a AWS não garante capacidade sob demanda durante um evento regional, quando todo mundo tenta criar instâncias ao mesmo tempo. Você paga a tarifa On-Demand pela reserva, usando-a ou não, e ela não dá desconto sozinha: para isso se combina com Savings Plans ou Reserved Instances regionais.

> [!example] Exemplo
> Uma empresa reserva 50 instâncias na Região de recuperação para garantir que o failover consiga escalar.

Veja também: [[Dedicated Host]], [[EC2]], [[Estabilidade Estatica]], [[Pilot Light]], [[Reserved Instance]], [[Savings Plans]], [[Spot Instance]], [[Warm Standby]]

## Onde aparece

- **Módulo 5:** [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]], [[09.07 - Placement Groups|9.7]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 17:** [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]]
- **Módulo 24:** [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
