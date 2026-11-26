---
aliases:
  - "IPSec"
tags:
  - glossario
  - seguranca
---
# IPsec

Conjunto de protocolos que cifra pacotes IP inteiros na camada 3, base da VPN. O IKE negocia chaves em UDP 500 e 4500, e o ESP (protocolo IP 50) carrega os dados cifrados.

> [!example] Exemplo
> Os túneis da Site-to-Site VPN usam IPsec sobre a internet.

Veja também: [[BGP]], [[Direct Connect]], [[Site-to-Site VPN]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 7:** [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]]
- **Módulo 8:** [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 10:** [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
