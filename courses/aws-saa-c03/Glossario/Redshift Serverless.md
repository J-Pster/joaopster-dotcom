---
aliases:
  - "Amazon Redshift Serverless"
  - "RPU"
tags:
  - glossario
  - servico
---
# Redshift Serverless

O Redshift Serverless provisiona e escala a capacidade do warehouse automaticamente, medida em RPUs, e cobra por RPU-hora, por segundo, com mínimo de 60 segundos (verificado em novembro de 2026). Existe para cargas imprevisíveis ou intermitentes, sem escolher tipo e número de nós. Exige sub-redes em pelo menos duas Zonas de Disponibilidade, e em três quando o workgroup usa Enhanced VPC Routing.

> [!example] Exemplo
> Uma equipe que roda relatórios só em alguns horários usa o Serverless e paga apenas pelo tempo em que há consultas.

Veja também: [[RA3]], [[Redshift]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
