---
aliases:
  - "ARC"
  - "Amazon Application Recovery Controller"
  - "Route 53 Application Recovery Controller"
tags:
  - glossario
  - servico
---
# Application Recovery Controller

O Application Recovery Controller (ARC) reúne recursos para recuperar aplicações com segurança: routing controls, chaves liga/desliga que desviam o tráfego entre réplicas; zonal shift e autoshift, que retiram o tráfego de uma AZ com problema; e Region switch, que orquestra a troca de Região. Existe porque o failover manual é arriscado e depende de APIs de plano de controle, então o ARC usa um cluster de plano de dados e safety rules que impedem estados perigosos, como desligar todas as Regiões. Na prova aparece quando a questão pede failover deliberado e coordenado, não apenas automático.

> [!example] Exemplo
> Operadores acionam um routing control para mover o tráfego de us-east-1 a us-west-2, e uma safety rule impede desligar as duas Regiões.

Veja também: [[Failover Routing]], [[Health Check]], [[Region Switch]], [[Route 53]], [[Routing Control]], [[Zonal Shift]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
