---
aliases:
  - "ACL de rede"
  - "NACL"
  - "NACLs"
  - "network ACL"
  - "network ACLs"
tags:
  - glossario
  - seguranca
---
# Network ACL

A network ACL é o firewall stateless no limite da sub-rede, com regras de permitir e de negar avaliadas por número, da menor para a maior. Como não guarda estado, a resposta precisa de regra própria, em geral nas portas efêmeras. É a ferramenta para negar um IP e uma segunda camada de defesa atrás dos security groups.

> [!example] Exemplo
> Uma regra 90 nega 198.51.100.7/32 antes da regra 100 que permite HTTPS para todos.

Veja também: [[Defesa em Profundidade]], [[Porta Efemera]], [[Security Group]], [[Stateful e Stateless (Firewall)]], [[Sub-rede]]

## Onde aparece

- **Módulo 1:** [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 22:** [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
