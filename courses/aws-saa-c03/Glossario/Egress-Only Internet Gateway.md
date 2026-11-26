---
aliases:
  - "EIGW"
  - "egress-only IGW"
  - "egress-only internet gateway"
  - "gateway de saída para IPv6"
tags:
  - glossario
  - rede
---
# Egress-Only Internet Gateway

O egress-only internet gateway permite que instâncias IPv6 iniciem conexões para a internet e bloqueia conexões iniciadas de fora. Existe porque endereços IPv6 são globais e não há NAT de IPv6 para escondê-los. Só vale para IPv6, com a rota ::/0 apontando para ele; para IPv4, o equivalente é o NAT gateway.

> [!example] Exemplo
> Instâncias IPv6 em sub-rede privada baixam pacotes pela internet via egress-only IGW sem receber conexões externas.

Veja também: [[Dual-Stack]], [[IPv6]], [[Internet Gateway]], [[NAT Gateway]]

## Onde aparece

- **Módulo 3:** [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
