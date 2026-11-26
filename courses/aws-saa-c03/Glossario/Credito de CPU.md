---
aliases:
  - "Burstable"
  - "CPU Credit"
  - "CPU credits"
  - "Créditos de CPU"
  - "Instância burstable"
tags:
  - glossario
  - conceito
---
# Credito de CPU

Mecanismo das instâncias burstable (família T): a instância acumula créditos quando usa pouca CPU, abaixo de um nível de base, e os gasta para exceder essa base em picos. Sem créditos, a CPU cai ao nível de base, a menos que o modo Unlimited esteja ativo, quando o excesso é cobrado.

> [!example] Exemplo
> Um site com tráfego baixo na maior parte do dia usa uma t3.medium: acumula créditos de madrugada e os gasta no pico da tarde.

Veja também: [[CloudWatch]], [[Compute Optimizer]], [[Graviton]], [[Instance Type]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.07 - Placement Groups|9.7]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 17:** [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
