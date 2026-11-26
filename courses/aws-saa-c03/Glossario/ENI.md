---
aliases:
  - "ENIs"
  - "Elastic Network Interface"
  - "interface de rede"
  - "interface de rede elástica"
tags:
  - glossario
  - rede
---
# ENI

A ENI (Elastic Network Interface) é a placa de rede virtual de um recurso na VPC, com IP privado, endereço MAC e security groups. É nela, e não na instância, que o security group atua. Muitos recursos criam ENIs na sua sub-rede (instâncias, tarefas Fargate no modo awsvpc, funções Lambda em VPC, ALB, RDS e interface endpoints) e por isso consomem IPs dela.

> [!example] Exemplo
> Uma sub-rede /28 com poucos IPs livres impede novas tarefas Fargate de iniciar, e um interface endpoint cria uma ENI em cada sub-rede escolhida.

Veja também: [[Interface Endpoint]], [[Security Group]], [[Sub-rede]], [[VPC]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.03 - Transit Gateway|7.3]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
