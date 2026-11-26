---
aliases:
  - "Estabilidade Estática"
  - "estabilidade estatica"
  - "estabilidade estática"
  - "static stability"
tags:
  - glossario
  - conceito
---
# Estabilidade Estática

Estabilidade estática é o desenho em que o sistema continua funcionando durante uma falha sem precisar de nenhuma ação de recuperação, porque a capacidade e o estado necessários já estavam pré-provisionados. Existe porque as ações de recuperação, como criar instâncias, dependem do plano de controle, justamente o que pode falhar no pior momento. Na prova, é a razão para superdimensionar entre AZs e para preferir failover por plano de dados.

> [!example] Exemplo
> Um grupo de Auto Scaling com capacidade sobrando em três AZs absorve a perda de uma AZ sem criar nenhuma instância nova.

Veja também: [[Capacity Reservation]], [[Game Day]], [[Multi-AZ]], [[Plano de Controle]], [[Plano de Dados]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
