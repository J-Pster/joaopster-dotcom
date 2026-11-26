---
aliases:
  - "Amazon CloudWatch Logs"
  - "Logs do CloudWatch"
  - "logs do CloudWatch"
tags:
  - glossario
  - servico
---
# CloudWatch Logs

O CloudWatch Logs é o serviço que reúne, armazena e permite pesquisar os logs de aplicações e serviços da AWS, organizados em grupos e streams de log. Por guardar os logs fora da instância, é o destino típico para que uma aplicação sem estado local não perca registros quando a instância é substituída. Permite filtros de métrica, alarmes e assinaturas que enviam os logs a destinos como Kinesis, Data Firehose ou Lambda.

> [!example] Exemplo
> Cada instância do grupo envia o log da aplicação ao CloudWatch Logs; quando o ASG termina uma instância, os registros continuam disponíveis.

Veja também: [[Auto Scaling Group]], [[CloudWatch]], [[Data Firehose]], [[Lambda]], [[OpenSearch Service]], [[S3]], [[Stateless]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 6:** [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 9:** [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]]
- **Módulo 15:** [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
