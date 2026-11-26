---
aliases:
  - "AWS Transfer Family"
tags:
  - glossario
  - servico
---
# Transfer Family

O Transfer Family é um serviço gerenciado que expõe endpoints SFTP, FTPS, FTP e AS2 e grava os arquivos no S3 ou no EFS. Existe para que parceiros e sistemas legados continuem usando os protocolos de sempre, sem que a empresa precise manter servidores de transferência de arquivos.

> [!example] Exemplo
> Parceiros enviam extratos diários por SFTP, e eles caem direto em um bucket do S3.

Veja também: [[DataSync]], [[Storage Gateway]], [[Transfer Acceleration]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.09 - Outposts e Computacao no Local|23.9]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
