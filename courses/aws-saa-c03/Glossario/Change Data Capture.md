---
aliases:
  - "CDC"
  - "captura de dados alterados"
  - "captura de mudanças"
tags:
  - glossario
  - dados
---
# Change Data Capture

O Change Data Capture (CDC) captura as alterações feitas em um banco depois de uma carga inicial e as aplica no destino de forma contínua. Existe para que a migração de um banco em produção termine com uma indisponibilidade pequena: o destino fica quase em dia e o corte leva só o tempo de aplicar o resto.

> [!example] Exemplo
> O DMS faz a carga completa de uma tabela e depois replica os inserts e updates novos até o dia do corte.

Veja também: [[Cutover]], [[DMS]], [[Full Load]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
