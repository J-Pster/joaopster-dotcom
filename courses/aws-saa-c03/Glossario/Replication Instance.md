---
aliases:
  - "instância de replicação"
  - "replication instance"
tags:
  - glossario
  - dados
---
# Replication Instance

A instância de replicação é a máquina gerenciada em que o DMS executa as tarefas de migração: ela lê da origem, transforma e grava no destino. Existe porque alguém precisa de CPU, memória e rede para mover os dados, e seu tamanho influencia o tempo da migração. Pode ser Multi-AZ para maior disponibilidade.

> [!example] Exemplo
> Uma tarefa de migração lenta é resolvida aumentando a classe da instância de replicação.

Veja também: [[DMS]], [[Full Load]], [[Multi-AZ]]

## Onde aparece

- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.03 - Migracao de Bancos com o DMS|23.3]]
