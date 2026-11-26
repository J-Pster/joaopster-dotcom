---
aliases:
  - "VIF"
  - "VIF de trânsito"
  - "VIF privada"
  - "VIF pública"
  - "interface virtual"
  - "virtual interface"
tags:
  - glossario
  - rede
---
# Virtual Interface

Uma interface virtual (VIF) é a camada lógica, com sessão BGP, criada sobre uma conexão física do Direct Connect. A VIF privada alcança VPCs (por Virtual Private Gateway ou Direct Connect Gateway), a pública alcança serviços públicos da AWS por IPs públicos, e a de trânsito alcança um Transit Gateway pelo Direct Connect Gateway.

> [!example] Exemplo
> Uma conexão física tem uma VIF privada para a VPC de produção e uma pública para o S3.

Veja também: [[BGP]], [[Direct Connect]], [[Direct Connect Gateway]], [[Transit Gateway]]

## Onde aparece

- **Módulo 6:** [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.03 - Transit Gateway|7.3]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
