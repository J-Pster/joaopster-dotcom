---
aliases:
  - "pull through cache"
  - "pull-through cache"
tags:
  - glossario
  - servico
---
# Pull Through Cache

O pull through cache do ECR guarda no seu registry uma cópia das imagens de um registry público externo (como o Docker Hub ou o ECR Public) na primeira vez em que são baixadas. As baixadas seguintes saem do ECR, mais rápidas e sem depender da disponibilidade ou dos limites do registry público. Ajuda a evitar limites de pull e a manter imagens sob seu controle.

> [!example] Exemplo
> Os clusters baixam a imagem base do Docker Hub via ECR e não esbarram no limite de pulls.

Veja também: [[ECR]], [[Imagem de Container]]

## Onde aparece

- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
