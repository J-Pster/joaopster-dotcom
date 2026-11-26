---
aliases:
  - "AWS MGN"
  - "MGN"
tags:
  - glossario
  - servico
---
# Application Migration Service

O Application Migration Service (MGN) replica servidores físicos, virtuais ou de outras nuvens para a AWS de forma contínua e, no momento do corte, os converte para rodar em instâncias EC2. É a opção de rehost ("lift and shift") com a menor mudança na aplicação. Quando o objetivo é modernizar para containers, é preciso reprojetar, e não só replicar.

> [!example] Exemplo
> Um servidor on-premises é replicado para a AWS e, no fim de semana do corte, passa a rodar em EC2 com o mínimo de alterações.

Veja também: [[EC2]], [[Elastic Beanstalk]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 17:** [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
