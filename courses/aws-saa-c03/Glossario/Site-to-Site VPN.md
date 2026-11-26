---
aliases:
  - "VPN IPsec"
  - "VPN Site-to-Site"
  - "túneis IPsec"
tags:
  - glossario
  - rede
---
# Site-to-Site VPN

A Site-to-Site VPN é uma conexão IPsec cifrada, pela internet, entre o seu data center e a AWS. Cada conexão tem dois túneis em AZs diferentes, com cerca de 1,25 Gbps por túnel, e aceita roteamento estático ou dinâmico por BGP. Existe como a opção rápida e barata (sobe em minutos), mas o desempenho varia com a internet, e por isso na prova serve de ligação provisória ou de backup de um Direct Connect.

> [!example] Exemplo
> Um escritório se liga à VPC por VPN em um dia, enquanto o Direct Connect não chega.

Veja também: [[BGP]], [[Customer Gateway]], [[Direct Connect]], [[IPsec]], [[Transit Gateway]], [[Virtual Private Gateway]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.06 - Direct Connect|7.6]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]]
- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
