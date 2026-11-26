---
aliases:
  - "ID lógico"
  - "logical ID"
tags:
  - glossario
  - conceito
---
# Logical ID

Logical ID é o nome de um recurso dentro do template do CloudFormation. Existe para que os recursos se refiram uns aos outros. Mudar o logical ID de um recurso faz o CloudFormation entender que é outro recurso, apagando o antigo e criando um novo.

> [!example] Exemplo
> Renomear Banco para BancoPrincipal no template causa a substituição do banco de dados.

Veja também: [[Physical ID]], [[Stack]], [[Template]]

## Onde aparece

- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
