---
aliases:
  - "connection pool"
  - "connection pooling"
  - "pool de conexoes"
  - "pool de conexão"
  - "pool de conexões"
tags:
  - glossario
  - conceito
---
# Pool de Conexoes

Um pool de conexões mantém abertas várias conexões com o banco e as reutiliza entre clientes. Ele existe porque abrir uma conexão é caro e o número máximo de conexões de uma instância é limitado. O RDS Proxy é um pool gerenciado, útil sobretudo para Lambda e fleets que reiniciam em massa.

> [!example] Exemplo
> Duas mil execuções de Lambda compartilham algumas dezenas de conexões reais com o banco por meio do proxy.

Veja também: [[Lambda]], [[RDS Proxy]], [[Session Pinning]]

## Onde aparece

- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 20:** [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
