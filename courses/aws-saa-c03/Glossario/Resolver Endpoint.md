---
aliases:
  - "endpoint do Resolver"
  - "endpoints do Resolver"
  - "inbound endpoint"
  - "outbound endpoint"
tags:
  - glossario
  - rede
---
# Resolver Endpoint

Um Resolver endpoint é um conjunto de interfaces de rede (ENIs) na sua VPC por onde o DNS entra ou sai. O inbound recebe consultas vindas do data center e as entrega ao resolvedor da VPC; o outbound envia à rede externa as consultas que casam com uma regra de encaminhamento. Exige pelo menos dois IPs, recomendados em duas AZs, e cobra por ENI-hora e por consulta.

> [!example] Exemplo
> O DNS do data center encaminha aws.example.com ao inbound endpoint para resolver uma zona privada.

Veja também: [[ENI]], [[Hosted Zone]], [[Resolver Rule]], [[Route 53 Resolver]]

## Onde aparece

- **Módulo 6:** [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
