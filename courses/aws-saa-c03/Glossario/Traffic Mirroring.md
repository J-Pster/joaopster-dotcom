---
aliases:
  - "VPC Traffic Mirroring"
  - "espelhamento de tráfego"
tags:
  - glossario
  - rede
---
# Traffic Mirroring

O Traffic Mirroring copia o tráfego de rede de uma ENI de instância EC2 e o envia a um alvo de inspeção, como uma appliance de detecção de intrusão ou um Network Load Balancer. Ele existe para analisar o conteúdo real dos pacotes, o que os VPC Flow Logs (só metadados) e o Reachability Analyzer (só configuração) não fazem.

> [!example] Exemplo
> Para investigar uma instância suspeita, a equipe de segurança espelha a ENI dela para um IDS que inspeciona os pacotes.

Veja também: [[ENI]], [[Reachability Analyzer]], [[VPC Flow Logs]]

## Onde aparece

- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
