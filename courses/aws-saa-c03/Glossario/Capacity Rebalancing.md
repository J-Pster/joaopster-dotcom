---
aliases:
  - "Rebalanceamento de capacidade"
tags:
  - glossario
  - custo
---
# Capacity Rebalancing

Recurso do Auto Scaling Group que, ao receber o sinal de recomendação de rebalanceamento de uma instância Spot em risco, lança uma substituta primeiro e só depois termina a antiga, em vez de esperar o aviso de 2 minutos da interrupção.

> [!example] Exemplo
> A AWS sinaliza risco em uma Spot, o ASG já sobe outra instância e só então encerra a que estava em risco.

Veja também: [[Auto Scaling Group]], [[Instance Refresh]], [[Mixed Instances Policy]], [[Spot Instance]]

## Onde aparece

- **Módulo 12:** [[12.09 - Instance Refresh Termination e Spot|12.9]]
