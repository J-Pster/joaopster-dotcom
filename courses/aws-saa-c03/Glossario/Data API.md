---
aliases:
  - "RDS Data API"
tags:
  - glossario
  - servico
---
# Data API

O Data API é uma interface HTTPS do Aurora para executar SQL sem abrir conexão persistente com o banco. Ele existe para aplicações serverless, como Lambda, que criam muitas conexões curtas. A função não precisa estar na VPC, mas o recurso só vale para Aurora, e a autenticação usa IAM e Secrets Manager.

> [!example] Exemplo
> Uma função Lambda fora da VPC chama o Data API para inserir um pedido no Aurora, sem pool de conexões.

Veja também: [[Cluster Endpoint]], [[Pool de Conexoes]], [[RDS Proxy]], [[Serverless]]

## Onde aparece

- **Módulo 13:** [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
