---
aliases:
  - "Cache-aside"
  - "Carga preguiçosa"
tags:
  - glossario
  - conceito
---
# Lazy Loading

Estratégia de cache em que a aplicação lê primeiro o cache; se o item não está lá (miss), busca no banco e então grava no cache para as próximas leituras. Só guarda o que é realmente pedido, mas a primeira leitura é lenta e o dado pode ficar velho até expirar.

> [!example] Exemplo
> O perfil de um usuário só entra no cache na primeira vez em que alguém o consulta.

Veja também: [[Cache]], [[ElastiCache]], [[TTL de Cache]], [[Write-Through]]

## Onde aparece

- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
