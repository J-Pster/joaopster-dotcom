---
aliases:
  - "política weighted"
  - "registros ponderados"
  - "roteamento ponderado"
tags:
  - glossario
  - conceito
---
# Weighted Routing

No roteamento ponderado, cada registro recebe um peso e a fração de respostas de cada um é o seu peso dividido pela soma dos pesos. Serve para canary, blue/green gradual e migrações. Peso zero interrompe o tráfego daquele registro, e a divisão é estatística, afetada pelo cache de DNS.

> [!example] Exemplo
> Pesos 95 e 5 enviam cerca de 5% das consultas à versão nova.

Veja também: [[Failover Routing]], [[Health Check]], [[Routing Policy]]

## Onde aparece

- **Módulo 13:** [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]]
- **Módulo 16:** [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
