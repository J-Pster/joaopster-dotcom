---
aliases:
  - "AWS PrivateLink"
  - "Private Link"
tags:
  - glossario
  - rede
---
# PrivateLink

O PrivateLink expõe um serviço a outras VPCs ou contas, ou permite consumir serviços da AWS, por IPs privados, sem juntar as redes. O provedor coloca o serviço atrás de um Network Load Balancer ou Gateway Load Balancer e cria um endpoint service; o consumidor cria um interface endpoint, que vira uma ENI na sua sub-rede. A conexão é unidirecional, do consumidor para o provedor, e CIDRs sobrepostos não são problema, por isso a prova o prefere ao peering para expor um serviço a muitos consumidores.

> [!example] Exemplo
> Um SaaS oferece sua API a centenas de clientes por endpoint service, mesmo com CIDRs iguais entre eles.

Veja também: [[AppFlow]], [[Endpoint Service]], [[Interface Endpoint]], [[Network Load Balancer]], [[VPC]], [[VPC Endpoint]], [[VPC Peering]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
