---
aliases:
  - "Dockerfile"
  - "docker"
  - "dockerfile"
tags:
  - glossario
  - servico
---
# Docker

Docker é a ferramenta que popularizou os containers: o Dockerfile descreve como construir uma imagem e o motor executa os containers. A AWS usa o formato aberto de imagem (OCI), então imagens construídas com Docker rodam no ECS, no EKS e no Lambda com imagem de container. Entender o Dockerfile ajuda a reduzir o tamanho da imagem e o tempo de inicialização.

> [!example] Exemplo
> Um Dockerfile parte de uma imagem base enxuta, copia o código, instala dependências e define o comando de inicialização.

Veja também: [[Container]], [[ECR]], [[Imagem de Container]]

## Onde aparece

- **Módulo 3:** [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]]
- **Módulo 6:** [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 16:** [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
