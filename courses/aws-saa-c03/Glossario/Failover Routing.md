---
aliases:
  - "política de failover"
  - "registro de failover"
  - "roteamento de failover"
tags:
  - glossario
  - conceito
---
# Failover Routing

O roteamento de failover do Route 53 liga um registro primário e um secundário: enquanto o primário estiver saudável (por health check), ele é o único devolvido; quando falha, o Route 53 passa a devolver o secundário. É o desenho ativo-passivo, e o secundário pode ser uma página estática de manutenção. O tempo de recuperação soma a detecção e o TTL do registro.

> [!example] Exemplo
> O site principal em us-east-1 tem como reserva uma página de manutenção em um bucket S3 website.

Veja também: [[Application Recovery Controller]], [[Health Check]], [[Routing Policy]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
