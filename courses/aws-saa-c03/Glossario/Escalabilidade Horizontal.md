---
aliases:
  - "escalabilidade horizontal"
  - "escalar horizontalmente"
  - "scale out"
tags:
  - glossario
  - conceito
---
# Escalabilidade Horizontal

Aumentar a capacidade adicionando mais unidades iguais (mais servidores) que trabalham em paralelo. Em princípio não tem teto, mas exige que a aplicação aceite várias cópias, geralmente sendo stateless. É o jeito preferido de escalar na AWS.

> [!example] Exemplo
> Passar de 2 para 20 instâncias web iguais atrás de um balanceador.

Veja também: [[Elasticidade]], [[Escalabilidade Vertical]], [[Stateless]]

## Onde aparece

- **Módulo 1:** [[01.01 - Por que a Nuvem Existe|1.1]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.07 - Politicas de Escala|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 14:** [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 17:** [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]]
