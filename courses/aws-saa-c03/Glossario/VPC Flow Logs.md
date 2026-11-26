---
aliases:
  - "Flow Logs"
  - "VPC flow logs"
  - "flow logs"
tags:
  - glossario
  - seguranca
---
# VPC Flow Logs

VPC Flow Logs registra metadados do tráfego IP de e para as interfaces de rede, por VPC, sub-rede ou ENI, com ação ACCEPT ou REJECT. Publica em CloudWatch Logs, S3 ou Firehose, fora do caminho do tráfego, sem afetar a latência. Não captura o conteúdo dos pacotes nem DNS da Amazon, IMDS e DHCP.

> [!example] Exemplo
> Os logs mostram entrada ACCEPT e saída REJECT, apontando uma NACL sem portas efêmeras.

Veja também: [[Network ACL]], [[Reachability Analyzer]], [[Security Group]]

## Onde aparece

- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 22:** [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
