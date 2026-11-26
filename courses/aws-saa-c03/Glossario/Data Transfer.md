---
aliases:
  - "custo de transferência"
  - "data transfer"
  - "transferência de dados"
tags:
  - glossario
  - custo
---
# Data Transfer

Cobrança pelo tráfego de dados: em geral a entrada é grátis e a saída para a internet, entre Regiões e entre AZs é cobrada, além do processamento em NAT gateways. Decisões de rede (endpoints, CloudFront, NAT por AZ) mudam a conta.

> [!example] Exemplo
> Baixar terabytes do S3 por um NAT gateway paga o processamento; um gateway endpoint evita isso.

Veja também: [[Direct Connect]], [[NAT Gateway]], [[VPC Endpoint]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]]
- **Módulo 2:** [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]]
- **Módulo 11:** [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]]
- **Módulo 13:** [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 18:** [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
