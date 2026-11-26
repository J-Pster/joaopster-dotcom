---
aliases:
  - "Failovers"
  - "failover"
  - "failover automático"
tags:
  - glossario
  - conceito
---
# Failover

Failover é a troca automática de um componente que falhou para uma cópia reserva, para que o serviço continue funcionando. Em bancos de dados, ele evita que uma falha de zona ou de instância pare a aplicação por horas. A aplicação precisa reconectar, e o tempo da troca (segundos a minutos) é o que a prova mede como RTO.

> [!example] Exemplo
> No Multi-AZ do RDS, o standby é promovido e o nome DNS passa a apontar para ele em 60 a 120 segundos.

Veja também: [[Multi-AZ]], [[Multi-AZ DB Cluster]], [[RTO]], [[Switchover]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 22:** [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
