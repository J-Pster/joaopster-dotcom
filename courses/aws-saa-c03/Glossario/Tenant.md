---
aliases:
  - "inquilino"
  - "tenants"
tags:
  - glossario
  - conceito
---
# Tenant

Cada cliente, organização ou grupo de usuários que usa uma plataforma multi-tenant como uma unidade isolada, com seus próprios dados, configurações e, muitas vezes, contrato e fatura. Existe como conceito porque quase toda decisão de segurança, desempenho e custo de um SaaS é tomada por tenant: quem pode ler o quê, quanto cada um consome, onde os dados de cada um ficam.

> [!example] Exemplo
> Na administradora europeia que contratou o PropDesk, o tenant é a administradora inteira: seus gestores e moradores formam os usuários, e a pilha da União Europeia atende todos eles, onde quer que estejam.

Veja também: [[Multi-Tenant]], [[Residencia de Dados]]

## Onde aparece

- **Módulo 4:** [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
