---
aliases:
  - "container image"
  - "imagem OCI"
  - "imagem de container"
  - "imagens de container"
tags:
  - glossario
  - conceito
---
# Imagem de Container

A imagem de container é o pacote imutável, formado por camadas empilhadas, que contém o sistema de arquivos e os metadados necessários para criar containers. Ela é construída uma vez e executada em qualquer lugar, o que elimina o problema do "na minha máquina funciona". As camadas são compartilhadas e reaproveitadas, o que economiza espaço e tempo de download.

> [!example] Exemplo
> A CI constrói a imagem `api:1.4.2` e a envia ao ECR; o ECS baixa essa mesma imagem em cada tarefa, em qualquer AZ.

Veja também: [[Container]], [[Docker]], [[ECR]]

## Onde aparece

- **Módulo 1:** [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]]
- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 18:** [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
