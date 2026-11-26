---
aliases:
  - "CDNs"
  - "Content Delivery Network"
  - "rede de entrega de conteúdo"
tags:
  - glossario
  - conceito
---
# CDN

Um CDN é uma rede de servidores espalhados pelo mundo que guarda cópias de conteúdo perto dos usuários e responde por eles. Ele existe porque a distância física e o número de saltos na internet impõem uma latência que nenhum servidor único consegue eliminar. Além de acelerar, tira carga da origem e absorve picos de acesso. Na AWS o serviço de CDN é o CloudFront.

> [!example] Exemplo
> Um site de notícias usa um CDN para que um leitor em Lisboa receba as imagens de um servidor em Madri, e não de uma Região nos Estados Unidos.

Veja também: [[Cache Hit Ratio]], [[CloudFront]], [[Edge Location]], [[Latencia]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
