---
aliases:
  - "NAT instance"
  - "NAT instances"
  - "instância NAT"
tags:
  - glossario
  - rede
---
# NAT Instance

A NAT instance é uma instância EC2 configurada para fazer NAT, com a verificação de origem e destino desativada, para que sub-redes privadas saiam para a internet. É a alternativa legada ao NAT gateway: pode custar menos em tráfego baixo, mas você cuida de patches, escala, disponibilidade e banda. Na prova, o NAT gateway é a resposta quando o enunciado pede menos esforço operacional.

> [!example] Exemplo
> Um ambiente de teste usa uma NAT instance t3.nano para evitar a hora do NAT gateway.

Veja também: [[Elastic IP]], [[NAT]], [[NAT Gateway]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 3:** [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
