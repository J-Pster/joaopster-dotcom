---
aliases:
  - "public subnet"
  - "sub-rede pública"
  - "sub-redes públicas"
tags:
  - glossario
  - rede
---
# Sub-rede Publica

Sub-rede pública é a que tem, na sua tabela de rotas, uma rota para um Internet Gateway. Essa rota é o que a torna pública, não o nome. Para o recurso ser alcançável da internet ele ainda precisa de um IP público (ou Elastic IP, ou IPv6) e de security group e NACL permitindo; por isso ela abriga balanceadores e NAT gateways, e as aplicações e bancos ficam em sub-redes privadas.

> [!example] Exemplo
> O ALB e o NAT gateway ficam em sub-redes públicas; as instâncias da aplicação ficam em privadas.

Veja também: [[Internet Gateway]], [[NAT Gateway]], [[Route Table]], [[Sub-rede]], [[Sub-rede Privada]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 8:** [[08.05 - CloudHSM e Custom Key Stores|8.5]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 13:** [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
