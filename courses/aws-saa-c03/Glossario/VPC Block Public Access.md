---
aliases:
  - "Block Public Access da VPC"
tags:
  - glossario
  - seguranca
---
# VPC Block Public Access

O VPC Block Public Access é um controle central que bloqueia o tráfego de e para a internet por Internet Gateways e egress-only gateways em toda a conta de uma Região, com exclusões opcionais. Existe para que uma configuração local não exponha recursos por engano. É uma camada acima das rotas e dos security groups.

> [!example] Exemplo
> Uma conta de segurança ativa o BPA em modo bidirecional para impedir qualquer acesso público acidental.

Veja também: [[Defesa em Profundidade]], [[Internet Gateway]], [[Sub-rede Publica]]

## Onde aparece

- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]]
