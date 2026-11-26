---
aliases:
  - "Intelligent-Tiering"
  - "classe Intelligent-Tiering"
tags:
  - glossario
  - dados
---
# S3 Intelligent-Tiering

O Intelligent-Tiering é a classe do S3 que move cada objeto sozinha entre camadas de acesso frequente, infrequente e arquivo conforme o padrão real de leitura. Não cobra taxa de recuperação, mas cobra uma taxa de monitoramento por objeto, e objetos menores que 128 KB não são movidos para camadas mais baratas. Serve a dados de acesso imprevisível.

> [!example] Exemplo
> Um data lake com consultas esporádicas usa Intelligent-Tiering e paga menos nos arquivos que ninguém lê há 30 dias, sem escrever regra nenhuma.

Veja também: [[Lifecycle Policy]], [[S3]], [[Storage Class]]

## Onde aparece

- **Módulo 10:** [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 22:** [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
- **Módulo 23:** [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
