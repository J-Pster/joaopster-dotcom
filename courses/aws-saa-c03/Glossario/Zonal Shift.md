---
aliases:
  - "deslocamento zonal"
  - "zonal autoshift"
tags:
  - glossario
  - rede
---
# Zonal Shift

O zonal shift desvia o tráfego de um balanceador, de um Auto Scaling group ou de um cluster EKS para fora de uma AZ com problema. É manual e expira em até 3 dias, podendo ser renovado; o autoshift é o mesmo desvio iniciado pela AWS. Só é seguro quando as outras AZs têm capacidade de sobra, e fica ineficaz se o balanceador estiver em fail open.

> [!example] Exemplo
> Uma falha parcial na AZ-a faz o time ativar um zonal shift no ALB para parar de enviar tráfego a ela.

Veja também: [[Application Load Balancer]], [[Application Recovery Controller]], [[Estabilidade Estatica]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 18:** [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
