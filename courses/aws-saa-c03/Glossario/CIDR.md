---
aliases:
  - "bloco CIDR"
  - "blocos CIDR"
  - "notação CIDR"
  - "prefixo"
tags:
  - glossario
  - rede
---
# CIDR

CIDR é a notação que descreve um bloco de endereços IP com um endereço base e um prefixo, como 10.0.0.0/16. O número depois da barra diz quantos bits são fixos, e portanto quantos endereços existem: quanto menor o prefixo, maior o bloco. Na VPC o CIDR primário vai de /16 a /28 e não pode ser redimensionado, por isso é preciso planejá-lo antes de criar a rede.

> [!example] Exemplo
> Um /24 tem 256 endereços, e uma sub-rede /24 na AWS entrega 251 utilizáveis porque 5 são reservados.

Veja também: [[IPAM]], [[IPv4]], [[Mascara de Rede]], [[Sub-rede]], [[VPC]]

## Onde aparece

- **Módulo 2:** [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 4:** [[04.04 - Conditions e Condition Keys|4.4]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.05 - Security Groups|6.5]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
