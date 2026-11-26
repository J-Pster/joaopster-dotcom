---
aliases:
  - "bias de geoproximidade"
  - "geoproximidade"
  - "roteamento por geoproximidade"
tags:
  - glossario
  - conceito
---
# Geoproximity Routing

No roteamento por geoproximidade, o Route 53 escolhe o recurso mais próximo do usuário pela distância geográfica e permite um bias de -99 a +99 que aumenta ou reduz a área atendida por cada recurso. Isso permite deslocar tráfego de uma Região para outra de forma gradual. A distância com bias é a distância real multiplicada por 1 menos bias dividido por 100.

> [!example] Exemplo
> Um bias positivo em us-west-2 faz a Região atrair mais usuários, aliviando us-east-1.

Veja também: [[Geolocation Routing]], [[Latency-Based Routing]], [[Routing Policy]]

## Onde aparece

- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
