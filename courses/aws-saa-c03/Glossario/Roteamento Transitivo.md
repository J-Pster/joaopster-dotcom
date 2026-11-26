---
aliases:
  - "não transitivo"
  - "roteamento transitivo"
  - "transitividade"
  - "trânsito de tráfego"
tags:
  - glossario
  - conceito
---
# Roteamento Transitivo

Roteamento transitivo é usar uma rede intermediária como ponte entre outras duas: se A fala com B e B fala com C, A falaria com C por B. O VPC peering não faz isso, e a AWS proíbe usar uma VPC peerada como trânsito para VPN, Direct Connect ou internet. Para topologias em que todos falam com todos é preciso um dispositivo próprio para isso, o Transit Gateway.

> [!example] Exemplo
> A VPC A está em peering com B, e B com C, mas A não alcança C; resolver exige um peering A-C ou um Transit Gateway.

Veja também: [[Route Table]], [[Transit Gateway]], [[VPC Peering]]

## Onde aparece

- **Módulo 5:** [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
