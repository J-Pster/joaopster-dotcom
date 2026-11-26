---
aliases:
  - "Generic Network Virtualization Encapsulation"
tags:
  - glossario
  - rede
---
# GENEVE

Protocolo de encapsulamento que o Gateway Load Balancer usa, na porta UDP 6081, para enviar os pacotes originais aos appliances e recebê-los de volta sem alterar origem nem destino. É o que torna a inspeção transparente.

> [!example] Exemplo
> O GWLB embrulha o pacote em GENEVE, entrega ao firewall virtual, e recebe de volta o mesmo pacote já inspecionado.

Veja também: [[Gateway Load Balancer]], [[PrivateLink]], [[Target Group]], [[Transit Gateway]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
