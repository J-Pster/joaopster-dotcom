---
aliases:
  - "hot standby"
  - "standby quente"
tags:
  - glossario
  - conceito
---
# Hot Standby

O hot standby é uma variação do warm standby em que o ambiente de recuperação roda em capacidade total, mas ainda de forma ativo-passiva, sem receber o tráfego de produção por padrão. Existe quando o RTO precisa ser quase imediato e o negócio aceita pagar uma frota completa parada, sem ir até o ativo-ativo.

> [!example] Exemplo
> Uma frota completa na Região B recebe replicação contínua e só passa a receber usuários se a Região A cair.

Veja também: [[Multi-Site Active-Active]], [[Pilot Light]], [[Warm Standby]]

## Onde aparece

- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]]
