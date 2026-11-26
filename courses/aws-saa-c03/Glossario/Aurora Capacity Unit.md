---
aliases:
  - "ACU"
  - "ACUs"
  - "unidade de capacidade do Aurora"
tags:
  - glossario
  - custo
---
# Aurora Capacity Unit

O ACU é a unidade de capacidade do Aurora Serverless v2 e corresponde a cerca de 2 GiB de memória com CPU e rede proporcionais. Você define um mínimo e um máximo de ACUs, e o Aurora escala dentro dessa faixa, com cobrança por ACU-hora. Com mínimo 0, a instância pausa e não cobra computação.

> [!example] Exemplo
> Um banco de teste configurado de 0 a 8 ACUs pausa à noite e cresce sob demanda de dia.

Veja também: [[Aurora]], [[Aurora Serverless]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
