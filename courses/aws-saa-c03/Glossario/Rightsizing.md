---
aliases:
  - "Right-sizing"
  - "dimensionamento"
  - "dimensionar o recurso"
tags:
  - glossario
  - custo
---
# Rightsizing

Prática de ajustar o tipo e o tamanho de um recurso, como instância, volume ou função Lambda, ao que a carga realmente usa, com margem de segurança. Reduz o desperdício de pagar por capacidade alocada e ociosa, e deve vir antes de comprar compromissos de longo prazo. Na AWS é apoiada pelo Compute Optimizer e pelo Cost Optimization Hub.

> [!example] Exemplo
> Uma m5.2xlarge com 8% de CPU no pico vira uma m5.large, cortando cerca de 75% do custo daquela instância.

Veja também: [[Compute Optimizer]], [[Graviton]], [[Savings Plans]]

## Onde aparece

- **Módulo 2:** [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
