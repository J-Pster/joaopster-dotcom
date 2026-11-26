---
aliases:
  - "Elastic Fabric Adapter"
tags:
  - glossario
  - rede
---
# EFA

Interface de rede do EC2 para cargas que precisam de comunicação entre nós com latência muito baixa, como HPC e treinamento distribuído de machine learning. Contorna a pilha de rede do sistema operacional e funciona dentro de uma AZ. É usada com bibliotecas MPI e NCCL.

> [!example] Exemplo
> Um modelo climático com 200 nós usa EFA e um placement group do tipo cluster para que a troca de dados a cada passo não atrase a simulação.

Veja também: [[Batch]], [[EC2]], [[ENA]], [[Placement Group]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.07 - Placement Groups|9.7]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
