---
aliases:
  - "solicitante paga"
tags:
  - glossario
  - custo
---
# Requester Pays

Requester Pays é uma configuração de bucket do S3 em que quem faz a requisição, e não o dono do bucket, paga a transferência e as requisições. O dono continua pagando o armazenamento. O solicitante precisa estar autenticado, e um bucket de destino de replicação não pode ser Requester Pays.

> [!example] Exemplo
> Um laboratório compartilha um dataset grande com Requester Pays, e cada universidade paga o próprio download.

Veja também: [[Data Transfer]], [[S3]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 25:** [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
