---
aliases:
  - "API key"
  - "chave de API"
  - "plano de uso"
  - "planos de uso"
  - "usage plan"
tags:
  - glossario
  - conceito
---
# Usage Plan

O usage plan (plano de uso) do API Gateway define limites de taxa, rajada e cota de requisições para os clientes que usam chaves de API, permitindo medir e limitar o consumo por cliente. É a base para vender camadas de uso de uma API. A chave de API serve para identificar e medir o cliente, e não como mecanismo de autenticação de usuários.

> [!example] Exemplo
> Uma empresa oferece um plano gratuito com 1.000 chamadas por dia e um plano pago com 100.000; cada cliente recebe uma chave associada ao plano contratado.

Veja também: [[API Gateway]], [[Lambda Authorizer]], [[Throttling]]

## Onde aparece

- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
