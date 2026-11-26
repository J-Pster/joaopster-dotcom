---
aliases:
  - "allowed prefixes list"
  - "prefixos permitidos"
tags:
  - glossario
  - rede
---
# Allowed Prefixes

Allowed prefixes são a lista de CIDRs que um Direct Connect gateway anuncia para o roteador on-premises quando associado a um Transit Gateway. Ela define quais redes da AWS o ambiente local enxerga por BGP. O limite é de 200 prefixos por associação com Transit Gateway, e ultrapassá-lo exige resumir os CIDRs.

> [!example] Exemplo
> Ao associar o Direct Connect gateway ao TGW, a equipe lista 10.0.0.0/16 e 10.1.0.0/16 como allowed prefixes, e só essas duas redes aparecem para o roteador local.

Veja também: [[Direct Connect Gateway]], [[Transit Gateway]], [[Virtual Interface]]

## Onde aparece

- **Módulo 7:** [[07.06 - Direct Connect|7.6]]
