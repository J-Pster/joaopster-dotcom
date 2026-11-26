---
aliases:
  - "multi-inquilino"
  - "multi-tenancy"
  - "multitenant"
tags:
  - glossario
  - conceito
---
# Multi-Tenant

Arquitetura em que uma única plataforma atende vários clientes (tenants) ao mesmo tempo, compartilhando total ou parcialmente código, infraestrutura e banco. Existe porque operar uma pilha inteira por cliente custa caro e não escala para centenas de clientes pequenos. O preço é a obrigação de garantir que nenhum cliente enxergue ou degrade o que é de outro, o que se resolve com isolamento de tenant em cada camada.

> [!example] Exemplo
> O PropDesk atende 120 condomínios com o mesmo serviço em containers e o mesmo banco; cada linha de dados carrega o identificador do condomínio, e a API só devolve linhas do tenant que consta no token do usuário.

Veja também: [[Raio de Impacto]]

## Onde aparece

- **Módulo 4:** [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 8:** [[08.05 - CloudHSM e Custom Key Stores|8.5]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]]
- **Módulo 18:** [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
