---
aliases:
  - "AWS RAM"
  - "AWS Resource Access Manager"
  - "Resource Access Manager"
tags:
  - glossario
  - servico
---
# RAM

Serviço que compartilha recursos que você possui com outras contas, OUs ou a organização inteira, sem duplicá-los. Exemplos são sub-redes de VPC, Transit Gateways, listas de prefixos e regras do Route 53 Resolver. É um serviço regional e usa permissões gerenciadas para definir o que o consumidor pode fazer.

> [!example] Exemplo
> A conta de rede compartilha um Transit Gateway com a organização, e cada conta de carga anexa a sua VPC a ele.

Veja também: [[Managed Permission]], [[Organizations]], [[Resource Share]], [[Sub-rede]], [[Transit Gateway]], [[VPC]], [[VPC Sharing]]

## Onde aparece

- **Módulo 1:** [[01.02 - Regions e Availability Zones|1.2]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.03 - Transit Gateway|7.3]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 10:** [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]]
- **Módulo 12:** [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 22:** [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
