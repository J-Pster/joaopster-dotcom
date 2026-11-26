---
aliases:
  - "Balanceamento entre AZs"
  - "Balanceamento entre zonas"
  - "Cross-zone"
tags:
  - glossario
  - rede
---
# Cross-Zone Load Balancing

Opção que permite a cada nó do balanceador distribuir o tráfego entre os alvos de todas as AZs habilitadas, e não só os da própria AZ. No ALB é padrão, no NLB e no GWLB vem desligado, e no NLB e GWLB o tráfego entre AZs é cobrado quando ligado.

> [!example] Exemplo
> Com 2 alvos na AZ-A e 8 na AZ-B, o cross-zone ligado dá 10% da carga a cada alvo; desligado, cada alvo da AZ-A recebe 25% e cada da AZ-B 6,25%.

Veja também: [[Application Load Balancer]], [[Network Load Balancer]], [[Target Group]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.07 - Politicas de Escala|12.7]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
