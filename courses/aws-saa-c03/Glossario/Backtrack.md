---
aliases:
  - "Backtracking"
  - "backtrack"
  - "backtrack do Aurora"
tags:
  - glossario
  - servico
---
# Backtrack

O Backtrack rebobina um cluster Aurora MySQL para um instante anterior, no mesmo cluster, sem restaurar um backup. A janela máxima é de 72 horas, e o recurso precisa ser habilitado na criação do cluster. Não existe para o Aurora PostgreSQL.

> [!example] Exemplo
> Depois de um UPDATE sem WHERE, a equipe rebobina o cluster para dez minutos atrás.

Veja também: [[Aurora]], [[Aurora Cloning]], [[Point-in-Time Recovery]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
