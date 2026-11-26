---
aliases:
  - "Memcached OSS"
tags:
  - glossario
  - servico
---
# Memcached

Motor de cache em memória simples, de chave e valor, sem persistência nem replicação. É multithreaded e fácil de escalar horizontalmente, e serve quando só se quer um cache descartável e rápido.

> [!example] Exemplo
> Um site guarda fragmentos de página renderizados no Memcached e aceita perdê-los se um nó cair.

Veja também: [[Cache]], [[ElastiCache]], [[Redis]], [[Valkey]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
