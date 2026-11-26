---
aliases:
  - "Compartilhamento de Sub-redes"
  - "VPC compartilhada"
  - "VPC sharing"
  - "compartilhamento de VPC"
  - "compartilhar sub-redes"
  - "sub-rede compartilhada"
  - "sub-redes compartilhadas"
tags:
  - glossario
  - rede
---
# VPC Sharing

O VPC sharing permite que a conta dona da VPC compartilhe sub-redes com outras contas da mesma AWS Organization usando o AWS RAM. As contas participantes criam seus recursos (EC2, RDS, Lambda em VPC) direto nessas sub-redes, sem precisar de VPC própria nem de peering. Cada conta continua dona e responsável pelos próprios recursos, enquanto a rede, as rotas e os NACLs ficam com a conta dona.

> [!example] Exemplo
> Uma empresa mantém uma VPC de rede na conta de rede e compartilha duas sub-redes privadas com as contas de aplicação, que lançam suas instâncias ali sem criar nenhuma VPC.

Veja também: [[PrivateLink]], [[RAM]], [[Resource Share]], [[Transit Gateway]], [[VPC Peering]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
