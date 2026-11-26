---
aliases:
  - "conntrack"
  - "rastreamento de conexões"
tags:
  - glossario
  - conceito
---
# Connection Tracking

Connection tracking é o mecanismo pelo qual o security group guarda o estado de cada conexão (IPs, portas, protocolo) e trata a resposta como parte de uma conexão estabelecida. É o que torna o security group stateful. Uma mudança de regra não derruba conexões já rastreadas.

> [!example] Exemplo
> Remover a regra SSH não encerra uma sessão aberta, que continua até expirar.

Veja também: [[Network ACL]], [[Security Group]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06.05 - Security Groups|6.5]]
