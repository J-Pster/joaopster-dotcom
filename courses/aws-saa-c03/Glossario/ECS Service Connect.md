---
aliases:
  - "service connect"
tags:
  - glossario
  - servico
---
# ECS Service Connect

O Service Connect dá aos services do ECS descoberta de nomes e balanceamento entre si, com um proxy gerenciado em cada tarefa que também traz métricas e retentativas. Ele evita configurar um balanceador interno ou um service mesh à parte para a comunicação entre microsserviços. Os serviços se chamam por um nome curto dentro de um namespace.

> [!example] Exemplo
> O service `pedidos` chama `http://pagamentos:8080` e o Service Connect escolhe uma tarefa saudável de pagamentos.

Veja também: [[Application Load Balancer]], [[Microsservicos]], [[Servico ECS]]

## Onde aparece

- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
