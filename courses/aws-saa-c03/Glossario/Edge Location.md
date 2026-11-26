---
aliases:
  - "POP"
  - "POPs"
  - "Point of Presence"
  - "Ponto de Presença"
  - "Pontos de Presença"
  - "edge location"
  - "edge locations"
  - "ponto de presença"
  - "pontos de presença"
tags:
  - glossario
  - rede
---
# Edge Location

Edge location (ponto de presença, ou POP) é um ponto da rede global da AWS, bem mais numeroso que as Regiões, usado para cache e entrada de rede perto do usuário. O CloudFront, o Route 53 e o Global Accelerator usam essa rede para aproximar o conteúdo e o DNS de quem acessa, e os regional edge caches ficam entre as edge locations e a origem. Ela não executa seus servidores de aplicação, então não é onde se roda EC2.

> [!example] Exemplo
> Um usuário em Tóquio recebe uma imagem do POP de Tóquio, sem buscar o bucket S3 na Virgínia.

Veja também: [[CloudFront]], [[Global Accelerator]], [[Local Zone]], [[Regional Edge Cache]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
