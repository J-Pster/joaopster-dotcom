---
aliases:
  - "modo Elastic do EFS"
  - "throughput Elastic"
  - "throughput elástico"
tags:
  - glossario
  - custo
---
# Elastic Throughput

O Elastic é o modo de throughput do EFS que escala o desempenho para cima e para baixo automaticamente conforme a carga, e cobra apenas pelos dados lidos e escritos. É o modo recomendado pela AWS para cargas imprevisíveis ou com picos, sem créditos nem capacidade provisionada.

> [!example] Exemplo
> Um EFS com horas ociosas e picos curtos usa Elastic e paga só pelos bytes que de fato trafegam.

Veja também: [[Burst Credits]], [[EFS]], [[Throughput]]

## Onde aparece

- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
