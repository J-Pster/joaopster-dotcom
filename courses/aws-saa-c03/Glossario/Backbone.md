---
aliases:
  - "backbone da AWS"
  - "rede backbone"
  - "rede global da AWS"
tags:
  - glossario
  - conceito
---
# Backbone

O backbone é a rede privada de alta capacidade que liga as Regiões e os pontos de presença da AWS entre si, fora da internet pública. Ele existe porque a internet pública passa por muitos operadores e saltos, com latência e perda variáveis. Serviços como o Global Accelerator e o CloudFront levam o tráfego para o backbone o mais cedo possível, perto do usuário.

> [!example] Exemplo
> Um jogador em Tóquio entra no POP mais próximo e o Global Accelerator leva os pacotes pelo backbone até a Região de Frankfurt.

Veja também: [[Edge Location]], [[Global Accelerator]], [[Latencia]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]], [[07.05 - Site-to-Site VPN e Client VPN|7.5]]
- **Módulo 11:** [[11.06 - Replicacao do S3|11.6]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 18:** [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
