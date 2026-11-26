---
aliases:
  - "URL da função"
  - "URL de função"
  - "URL de função do Lambda"
  - "function URL"
tags:
  - glossario
  - servico
---
# Function URL

A function URL é um endpoint HTTPS dedicado, atribuído diretamente a uma função Lambda, sem API Gateway. Aceita autorização por IAM ou ficar pública, e é a forma mais simples de expor uma função (webhooks, por exemplo). Não oferece os recursos do API Gateway, como planos de uso, validação de requisição e cache.

> [!example] Exemplo
> Um webhook de um parceiro chama diretamente a function URL de uma função que grava o evento numa fila, sem nenhuma API na frente.

Veja também: [[API Gateway]], [[IAM Policy]], [[Lambda]]

## Onde aparece

- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
