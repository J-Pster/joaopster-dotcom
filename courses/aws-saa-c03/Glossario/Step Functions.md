---
aliases:
  - "AWS Step Functions"
  - "máquina de estados da AWS"
tags:
  - glossario
  - servico
---
# Step Functions

O AWS Step Functions é o serviço de orquestração serverless que executa workflows descritos como máquinas de estados. Existe para tirar do código a coordenação de passos, esperas, retentativas e compensações, e para mostrar o caminho de cada execução. Há dois tipos: Standard (até 1 ano, exactly-once) e Express (até 5 minutos, alto volume), e o tipo não pode ser alterado depois da criação.

> [!example] Exemplo
> Um fluxo de pedido reserva estoque, cobra o cartão, espera a aprovação de um gerente e emite a nota, com Retry e Catch em cada etapa.

Veja também: [[Lambda]], [[Orquestracao]], [[State Machine]], [[Task Token]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 9:** [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 12:** [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.07 - Amazon MQ e AppFlow|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 21:** [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 22:** [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
