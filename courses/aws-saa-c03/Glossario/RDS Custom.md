---
aliases:
  - "RDS Custom for Oracle"
  - "RDS Custom for SQL Server"
tags:
  - glossario
  - servico
---
# RDS Custom

O RDS Custom é uma variante do RDS para Oracle e SQL Server que dá acesso de administrador ao sistema operacional da instância. Ele existe para aplicações empacotadas que exigem acesso ao host, com menos overhead do que instalar o banco em EC2. A responsabilidade pela personalização passa a ser do cliente.

> [!example] Exemplo
> Uma aplicação de terceiros exige instalar um agente no sistema operacional do SQL Server: RDS Custom for SQL Server.

Veja também: [[EC2]], [[Modelo de Responsabilidade Compartilhada]], [[RDS]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
