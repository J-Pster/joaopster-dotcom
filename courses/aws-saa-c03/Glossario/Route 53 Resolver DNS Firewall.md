---
aliases:
  - "DNS Firewall"
  - "Resolver DNS Firewall"
  - "firewall de DNS"
tags:
  - glossario
  - seguranca
---
# Route 53 Resolver DNS Firewall

O DNS Firewall filtra as consultas DNS que saem das VPCs por meio do Route 53 Resolver, comparando o nome consultado com listas de domínios (suas ou gerenciadas pela AWS) e aplicando as ações Allow, Block ou Alert; regras avançadas ajudam contra tunelamento por DNS e algoritmos de geração de domínios. Existe porque malware costuma falar com o servidor de comando e controle por nome de domínio. Ele só enxerga DNS e nome: uma conexão direta por IP não passa por ele.

> [!example] Exemplo
> Um grupo de regras com a lista gerenciada de domínios maliciosos, em ação Block, é associado às VPCs de produção e consultas a esses domínios retornam resposta bloqueada.

Veja também: [[Firewall Manager]], [[GuardDuty]], [[Network Firewall]], [[Route 53]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
