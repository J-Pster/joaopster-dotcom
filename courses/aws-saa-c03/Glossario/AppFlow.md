---
aliases:
  - "Amazon AppFlow"
tags:
  - glossario
  - servico
---
# AppFlow

O Amazon AppFlow é um serviço gerenciado e sem código que transfere dados entre aplicações SaaS (como Salesforce, Zendesk, SAP e Slack) e serviços AWS como S3 e Redshift. Existe para evitar que cada integração vire um script a manter. Cada flow define origem, destino, mapeamento, filtros ou transformações simples e um gatilho (sob demanda, por evento ou em agenda, completo ou incremental), e conectores compatíveis usam PrivateLink para manter o tráfego fora da internet.

> [!example] Exemplo
> Um flow agendado copia toda noite as oportunidades alteradas do Salesforce para um bucket do S3, para análise.

Veja também: [[Amazon MQ]], [[Data Firehose]], [[EventBridge]], [[PrivateLink]], [[Redshift]], [[S3]], [[SNS]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
