---
aliases:
  - "IEEE 802.1AE"
tags:
  - glossario
  - servico
---
# MACsec

MACsec é o padrão IEEE 802.1AE de criptografia na camada de enlace (camada 2), usado no Direct Connect para cifrar o tráfego entre o seu roteador e o ponto de conexão da AWS em conexões dedicadas compatíveis. Existe porque o Direct Connect não cifra o tráfego por padrão. Protege apenas o enlace físico; a alternativa é uma VPN IPsec sobre o Direct Connect, que cifra de ponta a ponta.

> [!example] Exemplo
> Uma empresa com conexão dedicada de 10 Gbps habilita MACsec para cifrar o trecho até a AWS sem montar túneis IPsec.

Veja também: [[Criptografia em Transito]], [[Direct Connect]], [[IPsec]], [[Site-to-Site VPN]]

## Onde aparece

- **Módulo 3:** [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.06 - Direct Connect|7.6]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
