---
aliases:
  - "tempo limite"
  - "timeout"
  - "timeouts"
tags:
  - glossario
  - conceito
---
# Timeout

Timeout é o tempo máximo que um chamador espera por uma resposta antes de desistir. Existe porque, sem ele, uma dependência lenta prende threads e conexões até esgotar os recursos do chamador, o que transforma uma lentidão em uma falha em cascata. Todo cliente de rede precisa de um timeout bem escolhido.

> [!example] Exemplo
> Uma chamada HTTP ao serviço de pagamento com timeout de 2 segundos em vez de esperar indefinidamente.

Veja também: [[Backoff Exponencial]], [[Circuit Breaker]], [[Retry Storm]]

## Onde aparece

- **Módulo 3:** [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
- **Módulo 22:** [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
