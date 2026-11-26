---
aliases:
  - "EC2 hibernation"
  - "Hibernate"
  - "Hibernação"
  - "Hibernação de instância"
tags:
  - glossario
  - conceito
---
# Hibernacao de EC2

Recurso que salva o conteúdo da memória RAM no volume raiz EBS e desliga a instância, para retomar depois do mesmo ponto, com os processos como estavam. Exige ser habilitada no lançamento, raiz EBS criptografada e família compatível. Serve para aplicações com aquecimento longo.

> [!example] Exemplo
> Um analista hiberna a instância com 60 GiB de dados carregados às 19h e a retoma às 8h exatamente no mesmo estado, pagando só o EBS à noite.

Veja também: [[Auto Scaling Group]], [[EBS]], [[EC2]], [[Instance Store]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.03 - Rede e Disco da Instancia|9.3]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 10:** [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 14:** [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
