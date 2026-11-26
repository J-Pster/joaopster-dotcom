---
aliases:
  - "AWS Compute Optimizer"
tags:
  - glossario
  - servico
---
# Compute Optimizer

Serviço que analisa métricas de uso (CPU, memória, rede, disco) e recomenda o tamanho ou a família ideal de instâncias EC2, volumes EBS, funções Lambda e outros recursos. Serve para identificar recursos superdimensionados ou subdimensionados e reduzir custo sem perder desempenho.

> [!example] Exemplo
> O Compute Optimizer aponta que uma instância m5.2xlarge usa 15% de CPU e sugere uma m5.large, que custa cerca de um quarto do preço.

Veja também: [[CloudWatch]], [[EC2]], [[Instance Type]], [[Savings Plans]]

## Onde aparece

- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]]
- **Módulo 16:** [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 21:** [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
