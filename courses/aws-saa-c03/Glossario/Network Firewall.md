---
aliases:
  - "AWS Network Firewall"
  - "IPS gerenciado"
  - "firewall de rede gerenciado"
tags:
  - glossario
  - seguranca
---
# Network Firewall

O AWS Network Firewall é um firewall gerenciado, com inspeção stateful e sistema de prevenção de intrusão (IPS) compatível com regras Suricata, que fica dentro da VPC por meio de endpoints em sub-redes dedicadas (um por zona de disponibilidade). O tráfego só passa por ele se as route tables o encaminharem ao endpoint. Existe porque security groups e NACLs não leem domínios nem assinaturas de ataque, e o WAF só olha HTTP; ele filtra tráfego de saída por nome de domínio e bloqueia padrões maliciosos em qualquer protocolo.

> [!example] Exemplo
> Uma VPC com sub-redes privadas roteia o tráfego de saída para o Network Firewall, que permite apenas os domínios da lista aprovada e descarta o resto antes do NAT gateway.

Veja também: [[Firewall Manager]], [[Network ACL]], [[Route 53 Resolver DNS Firewall]], [[Security Group]], [[Suricata]], [[WAF]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 7:** [[07.03 - Transit Gateway|7.3]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
