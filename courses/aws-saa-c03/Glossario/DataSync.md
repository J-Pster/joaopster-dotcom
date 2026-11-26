---
aliases:
  - "AWS DataSync"
tags:
  - glossario
  - servico
---
# DataSync

O DataSync é um serviço de transferência de dados online que copia e sincroniza grandes volumes de arquivos e objetos entre o armazenamento local e a AWS (S3, EFS, FSx), ou entre serviços da AWS. Usa um agente no local, faz transferências incrementais, verifica a integridade, criptografa em trânsito e pode ser agendado. Existe para substituir scripts de cópia manuais, lentos e difíceis de verificar, e a prova o escolhe para migração online recorrente.

> [!example] Exemplo
> Mover 80 TB de um NAS para o S3 e sincronizar as alterações toda noite até o corte.

Veja também: [[S3]], [[Snowball Edge]], [[Storage Gateway]], [[Transfer Family]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 10:** [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.09 - Outposts e Computacao no Local|23.9]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
