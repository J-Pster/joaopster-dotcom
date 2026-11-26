---
aliases:
  - "discagem de tráfego"
  - "mostrador de tráfego"
  - "traffic dial"
tags:
  - glossario
  - conceito
---
# Traffic Dial

O traffic dial do Global Accelerator é o percentual (de 0 a 100%) do tráfego direcionado a um endpoint group que ele realmente recebe; o restante é desviado para outros grupos. Colocá-lo em zero drena uma Região sem mexer em DNS, útil para manutenção e lançamentos graduais. Os pesos, diferentes do dial, dividem o tráfego entre os endpoints dentro do grupo, e alterar o dial é uma operação de plano de controle, então não deve ser a base de um failover durante um desastre.

> [!example] Exemplo
> Antes de uma manutenção em us-east-1, o time reduz o dial desse grupo a zero e o tráfego passa a ir só para eu-west-1.

Veja também: [[Endpoint Group]], [[Failover]], [[Failover Routing]], [[Global Accelerator]], [[Plano de Controle]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
