---
aliases:
  - "route table"
  - "route tables"
  - "tabela de rotas"
  - "tabelas de rotas"
tags:
  - glossario
  - rede
---
# Route Table

Route table é a lista de rotas que diz para onde enviar o tráfego de cada destino de uma sub-rede. A rota mais específica vence, e toda tabela tem a rota local que mantém a comunicação dentro da VPC. Cada sub-rede está associada a uma tabela, e a principal (main) vale para as sub-redes sem associação explícita, por isso deve ficar privada.

> [!example] Exemplo
> A tabela da sub-rede pública tem 0.0.0.0/0 apontando para o IGW; a da privada tem 0.0.0.0/0 apontando para o NAT gateway.

Veja também: [[Internet Gateway]], [[Longest Prefix Match]], [[Managed Prefix List]], [[NAT Gateway]], [[Rota Padrao]], [[Sub-rede]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
