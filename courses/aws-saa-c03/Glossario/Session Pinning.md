---
aliases:
  - "conexão presa"
  - "pinning"
  - "session pinning"
tags:
  - glossario
  - conceito
---
# Session Pinning

O session pinning acontece quando uma conexão do RDS Proxy fica presa a um único cliente, por causa de comandos que mudam o estado da sessão ou de instruções muito grandes. Enquanto a conexão está presa, ela não pode ser reaproveitada por outros clientes. Muito pinning reduz o ganho de multiplexação do proxy.

> [!example] Exemplo
> Uma aplicação que executa SET de variáveis de sessão em toda requisição quase não se beneficia do pool do proxy.

Veja também: [[Pool de Conexoes]], [[RDS Proxy]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
