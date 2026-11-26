---
aliases:
  - "Amazon ElastiCache"
tags:
  - glossario
  - servico
---
# ElastiCache

Serviço gerenciado de cache em memória da AWS que roda Redis OSS, Valkey ou Memcached. Serve para acelerar qualquer banco ou aplicação (sessões, resultados de consulta, placares), com escala por nós ou no modo serverless.

> [!example] Exemplo
> Um site guarda no ElastiCache as sessões de login, compartilhadas por todos os servidores web.

Veja também: [[Cache]], [[DAX]], [[Memcached]], [[MemoryDB]], [[Redis]], [[Valkey]]

## Onde aparece

- **Módulo 2:** [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 18:** [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.10 - Rede e Transferencia de Dados|25.10]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
