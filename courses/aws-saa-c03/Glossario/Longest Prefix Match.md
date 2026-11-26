---
aliases:
  - "longest prefix match"
  - "prefixo mais longo"
  - "rota mais específica"
tags:
  - glossario
  - rede
---
# Longest Prefix Match

Regra de roteamento segundo a qual, entre as rotas que casam com o destino, vale a de prefixo mais longo (maior /n, bloco menor). É por isso que a rota padrão 0.0.0.0/0 só é usada quando nada mais específico existe.

> [!example] Exemplo
> Para 172.16.8.50 com rotas /12 e /24, o pacote usa a /24.

Veja também: [[BGP]], [[Rota Padrao]], [[Route Table]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.03 - Transit Gateway|7.3]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
