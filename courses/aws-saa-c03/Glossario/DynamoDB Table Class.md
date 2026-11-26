---
aliases:
  - "DynamoDB Standard-IA"
  - "Standard-IA do DynamoDB"
  - "classe de tabela do DynamoDB"
tags:
  - glossario
  - dados
---
# DynamoDB Table Class

Opção de classe de tabela do DynamoDB em que o armazenamento custa cerca de 60% menos e as leituras e escritas custam cerca de 25% mais que na classe Standard. Vale quando o armazenamento domina o custo da tabela, como em dados de histórico e auditoria pouco acessados. Quando o tráfego domina, a classe Standard continua sendo mais barata.

> [!example] Exemplo
> Uma tabela de auditoria de 20 TB, lida poucas vezes por mês, troca para Standard-IA e reduz a conta de armazenamento.

Veja também: [[Cost Explorer]], [[DynamoDB]], [[DynamoDB TTL]]

## Onde aparece

- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
