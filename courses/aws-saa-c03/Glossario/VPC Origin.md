---
aliases:
  - "VPC origins"
  - "origem de VPC"
  - "origem em VPC"
tags:
  - glossario
  - seguranca
---
# VPC Origin

O VPC origin permite que o CloudFront use como origem um ALB, NLB ou instância EC2 que está em sub-rede privada, sem IP público. O CloudFront cria uma interface de rede gerenciada na sua VPC e fala com o recurso por ela. É a forma mais forte de impedir que alguém contorne o CloudFront e acesse a origem diretamente.

> [!example] Exemplo
> Um ALB interno em sub-redes privadas é usado como VPC origin, e a aplicação deixa de ter qualquer endereço público.

Veja também: [[Application Load Balancer]], [[CloudFront Distribution]], [[Origin Access Control]]

## Onde aparece

- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
