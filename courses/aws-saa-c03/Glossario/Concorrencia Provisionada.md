---
aliases:
  - "concorrência provisionada"
  - "provisioned concurrency"
tags:
  - glossario
  - servico
---
# Concorrencia Provisionada

A concorrência provisionada mantém um número fixo de ambientes de execução do Lambda já inicializados e prontos para responder, o que praticamente elimina o cold start nas invocações que cabem nessa quantidade. Ela é cobrada enquanto está configurada, mesmo sem tráfego, e vale por versão ou alias (não pela versão não publicada). Serve para APIs com requisito de latência estável.

> [!example] Exemplo
> Uma API de checkout com picos às 9h configura 50 ambientes provisionados no alias de produção para que os primeiros clientes do dia não sintam a inicialização.

Veja também: [[Application Auto Scaling]], [[Cold Start]], [[Concorrencia Reservada]], [[Lambda]]

## Onde aparece

- **Módulo 12:** [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 18:** [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
