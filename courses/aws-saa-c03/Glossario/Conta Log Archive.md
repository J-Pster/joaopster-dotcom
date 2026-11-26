---
aliases:
  - "Log Archive"
  - "conta de arquivamento de logs"
  - "conta de log archive"
tags:
  - glossario
  - conceito
---
# Conta Log Archive

Conta dedicada a guardar os logs da organização, como os do CloudTrail e do Config, com acesso restrito a poucas pessoas. Separar os logs da conta que gera a atividade protege o registro contra adulteração. É criada pelo Control Tower na landing zone.

> [!example] Exemplo
> Todos os logs de auditoria da organização chegam a um bucket da conta Log Archive, que só a equipe de segurança acessa.

Veja também: [[Control Tower]], [[Landing Zone]], [[Organization Trail]]

## Onde aparece

- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
