---
aliases:
  - "S3 Transfer Acceleration"
  - "aceleração de transferência"
tags:
  - glossario
  - dados
---
# Transfer Acceleration

Transfer Acceleration é um recurso do S3 que acelera uploads e downloads de longa distância: o cliente fala com a edge location mais próxima, e dali o dado segue pelo backbone da AWS até o bucket. Usa um endpoint próprio, exige nome de bucket compatível com DNS e sem pontos, e cobra adicional por GB. Não faz cache, ao contrário do CloudFront.

> [!example] Exemplo
> Clientes na Ásia enviam vídeos para um bucket em Virgínia pelo endpoint de aceleração e a velocidade sobe.

Veja também: [[CloudFront]], [[Multipart Upload]], [[S3]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 3:** [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
