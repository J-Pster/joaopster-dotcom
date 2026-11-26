---
aliases:
  - "TTL do cache"
  - "Tempo de vida do cache"
tags:
  - glossario
  - conceito
---
# TTL de Cache

Prazo de validade de um item guardado em cache. Passado o prazo, o item expira e a próxima leitura busca o dado novamente na origem. É a defesa mais simples contra dado velho: quanto menor o TTL, mais fresco o dado e menor o ganho do cache.

> [!example] Exemplo
> O preço de um produto fica 60 segundos no cache; depois disso, a leitura seguinte consulta o banco e renova a cópia.

Veja também: [[Cache]], [[DynamoDB TTL]], [[Lazy Loading]], [[Write-Through]]

## Onde aparece

- **Módulo 14:** [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
