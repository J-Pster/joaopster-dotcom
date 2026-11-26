---
aliases:
  - "controle proativo"
  - "controles proativos"
  - "proactive control"
tags:
  - glossario
  - seguranca
---
# Controle Proativo

Controle que avalia o que será criado antes da implantação, validando o modelo de infraestrutura, e não a ação em si. No Control Tower, os controles proativos usam hooks do CloudFormation para recusar implantações que violem a regra. Ficam entre o preventivo, que bloqueia a ação, e o detectivo, que age depois.

> [!example] Exemplo
> Um template do CloudFormation que cria um volume sem criptografia é recusado antes de os recursos serem provisionados.

Veja também: [[CloudFormation]], [[Controle Detectivo]], [[Controle Preventivo]]

## Onde aparece

- **Módulo 5:** [[05.04 - Control Tower e Landing Zone|5.4]]
