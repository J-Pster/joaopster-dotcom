---
aliases:
  - "Amazon Route 53"
tags:
  - glossario
  - rede
---
# Route 53

O Amazon Route 53 é o serviço de DNS autoritativo e de registro de domínios da AWS, com health checks e políticas de roteamento (simples, ponderado, por latência, failover, geolocalização). É um serviço global, com plano de controle em us-east-1 e plano de dados na rede de POPs, e o nome vem da porta 53 do DNS. É ele que direciona o usuário ao ALB, ao CloudFront ou à Região certa, inclusive no failover.

> [!example] Exemplo
> Um registro alias aponta exemplo.com para o ALB, e uma política de failover manda o tráfego à Região secundária se o health check falhar.

Veja também: [[Alias Record]], [[CloudFront]], [[DNS]], [[Global Accelerator]], [[Hosted Zone]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.04 - Conditions e Condition Keys|4.4]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 11:** [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 13:** [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 22:** [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
