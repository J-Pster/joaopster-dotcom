---
aliases:
  - "acesso confiável"
  - "trusted access"
tags:
  - glossario
  - conceito
---
# Acesso Confiavel

Permissão que um serviço da AWS recebe para operar em todas as contas de uma organização em seu nome. É habilitado a partir da conta de gerenciamento e é pré-requisito para vários serviços integrados ao Organizations. No RAM, habilitar o compartilhamento pelo próprio serviço cria o role necessário, enquanto ativar só o acesso confiável pelo Organizations não cria.

> [!example] Exemplo
> O Config e o CloudTrail usam acesso confiável para operar em todas as contas da organização.

Veja também: [[Delegated Administrator]], [[Organizations]], [[RAM]]

## Onde aparece

- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
