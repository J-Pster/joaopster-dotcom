---
aliases:
  - "IP anycast"
  - "IPs anycast"
  - "endereços anycast"
tags:
  - glossario
  - rede
---
# Anycast

Anycast é a técnica de anunciar o mesmo endereço IP em muitos pontos do mundo, de modo que a internet entregue cada pacote ao ponto mais próximo de quem o enviou. O Global Accelerator usa dois IPs anycast estáticos para levar o tráfego do usuário à borda mais próxima e dali à rede da AWS. Isso dá IPs fixos para allow-list e entrada rápida na rede global.

> [!example] Exemplo
> Um cliente corporativo cadastra os 2 IPs do acelerador no firewall e acessa o serviço pela borda mais próxima, esteja onde estiver.

Veja também: [[Edge Location]], [[Endpoint Group]], [[Global Accelerator]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
