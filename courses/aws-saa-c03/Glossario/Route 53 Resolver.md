---
aliases:
  - "Amazon DNS"
  - "Amazon DNS server"
  - "AmazonProvidedDNS"
  - "Resolver"
  - "Resolver da VPC"
  - "Route 53 VPC Resolver"
tags:
  - glossario
  - servico
---
# Route 53 Resolver

O Route 53 Resolver (hoje também chamado VPC Resolver) é o servidor DNS recursivo embutido em toda VPC, no endereço base do CIDR mais dois (em uma VPC 10.0.0.0/16, 10.0.0.2). Resolve nomes de instâncias, zonas privadas e nomes públicos, e depende de enableDnsSupport. Para integrar com o DNS do data center usa endpoints inbound e outbound e regras de encaminhamento; encaminhar consultas de fora diretamente ao endereço VPC+2 não é suportado.

> [!example] Exemplo
> Instâncias resolvem db.corp.example.com, que vive no data center, por um outbound endpoint e uma regra de encaminhamento.

Veja também: [[DHCP Option Set]], [[DNS]], [[Hosted Zone]], [[Interface Endpoint]], [[Resolver Endpoint]], [[Resolver Rule]], [[VPC]], [[VPC Flow Logs]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
