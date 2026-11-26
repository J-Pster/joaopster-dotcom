---
aliases:
  - "AWS Direct Connect"
  - "DX"
tags:
  - glossario
  - rede
---
# Direct Connect

O Direct Connect é uma conexão de rede dedicada entre o seu data center e a AWS, que não passa pela internet pública. Dá latência e banda previsíveis e uma taxa de saída de dados menor que a da internet, em troca de custo fixo da porta e de prazo de provisionamento de semanas. Não é criptografado por padrão: use MACsec ou VPN sobre ele quando precisar. Tráfego que chega por ele alcança interface endpoints, mas não gateway endpoints.

> [!example] Exemplo
> Uma indústria move 15 TB por mês ao data center com latência estável por um Direct Connect de 10 Gbps.

Veja também: [[BGP]], [[Direct Connect Gateway]], [[IPsec]], [[Interface Endpoint]], [[LAG]], [[Local Zone]], [[MACsec]], [[Site-to-Site VPN]], [[Transit Gateway]], [[VPC]], [[VPC Peering]], [[Virtual Interface]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 5:** [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 22:** [[22.10 - EMR Big Data com Spark e Hadoop|22.10]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.09 - Outposts e Computacao no Local|23.9]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.10 - Rede e Transferencia de Dados|25.10]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
