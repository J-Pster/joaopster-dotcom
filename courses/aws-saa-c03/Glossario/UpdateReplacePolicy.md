---
tags:
  - glossario
  - conceito
---
# UpdateReplacePolicy

UpdateReplacePolicy é um atributo do CloudFormation que define o que acontece com o recurso antigo quando uma atualização o substitui: Delete (padrão), Retain ou Snapshot. Existe para evitar perder dados quando uma mudança de propriedade exige substituição.

> [!example] Exemplo
> Um banco RDS com UpdateReplacePolicy Snapshot guarda um snapshot do recurso antigo ao ser substituído.

Veja também: [[Change Set]], [[DeletionPolicy]], [[Stack]]

## Onde aparece

- Ainda não é citado nas aulas.
