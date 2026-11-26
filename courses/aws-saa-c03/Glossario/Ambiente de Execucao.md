---
aliases:
  - "ambiente de execução"
  - "ambientes de execução"
  - "execution environment"
tags:
  - glossario
  - conceito
---
# Ambiente de Execucao

O ambiente de execução é o contêiner isolado e gerenciado pelo Lambda em que o código da função roda. Seu ciclo de vida tem as fases Init (baixar código e rodar a inicialização), Invoke (tratar cada evento) e Shutdown. Um mesmo ambiente pode ser reutilizado em invocações seguidas, por isso o código fora do handler é reaproveitado, mas nenhum estado deve ser assumido como persistente.

> [!example] Exemplo
> Uma conexão aberta fora do handler é reutilizada pelas invocações seguintes no mesmo ambiente, mas pode ter sumido quando um ambiente novo for criado.

Veja também: [[Cold Start]], [[Lambda]], [[Stateless]]

## Onde aparece

- **Módulo 1:** [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 17:** [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
