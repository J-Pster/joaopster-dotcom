---
aliases:
  - "cluster endpoint"
  - "endpoint de cluster"
  - "endpoint do cluster"
tags:
  - glossario
  - rede
---
# Cluster Endpoint

O cluster endpoint de um Aurora aponta sempre para a instância writer atual. Depois de um failover, ele passa a apontar para o novo writer, por isso a aplicação mantém a mesma configuração de conexão. É o endpoint de escrita.

> [!example] Exemplo
> A aplicação grava no cluster endpoint e continua funcionando depois de uma troca de writer.

Veja também: [[Aurora]], [[Custom Endpoint]], [[Reader Endpoint]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]]
- **Módulo 14:** [[14.06 - Estrategias de Cache e DAX|14.6]]
