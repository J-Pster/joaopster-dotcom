---
aliases:
  - "AWS AppSync"
  - "Amazon AppSync"
tags:
  - glossario
  - servico
---
# AppSync

O AppSync é um serviço gerenciado de API GraphQL: o cliente pede exatamente os campos que precisa em uma única chamada e pode assinar mudanças para receber atualizações em tempo real. Resolvers ligam a API a fontes como DynamoDB e Lambda. Existe porque aplicativos móveis e web ganham em economizar chamadas e em sincronizar dados, algo que uma API REST não faz de forma nativa.

> [!example] Exemplo
> Um app móvel de tarefas consulta a lista com um único pedido GraphQL e recebe em tempo real a tarefa criada por outro usuário, com os dados guardados no DynamoDB.

Veja também: [[API Gateway]], [[Amplify]], [[DynamoDB]], [[Lambda]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
