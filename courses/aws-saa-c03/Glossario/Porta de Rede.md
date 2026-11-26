---
aliases:
  - "número de porta"
  - "porta de rede"
  - "portas de rede"
tags:
  - glossario
  - rede
---
# Porta de Rede

Número de 0 a 65535 usado por TCP e UDP para entregar o pacote ao programa certo dentro de uma máquina. O servidor escuta em uma porta conhecida (443, 5432) e o cliente usa uma porta efêmera de origem. Security groups e network ACLs filtram por esse número.

> [!example] Exemplo
> Um PostgreSQL escuta na porta 5432; o security group do banco libera só essa porta para a aplicação.

Veja também: [[Porta Efemera]], [[Security Group]], [[TCP]], [[UDP]]

## Onde aparece

- Ainda não é citado nas aulas.
