---
aliases:
  - "cold start"
  - "cold starts"
  - "inicialização a frio"
  - "início a frio"
  - "partida a frio"
tags:
  - glossario
  - conceito
---
# Cold Start

Cold start é o atraso extra de uma invocação do Lambda quando não há um ambiente de execução pronto e o serviço precisa criar um: baixar o código, iniciar o runtime e executar o código de inicialização. Depois dessa primeira chamada o ambiente fica aquecido e reutilizável por um tempo. Ele afeta a latência das primeiras requisições, e pode ser reduzido com concorrência provisionada, SnapStart, pacotes menores e runtimes leves.

> [!example] Exemplo
> Uma API em Java que ficou 30 minutos sem tráfego responde a primeira chamada em vários segundos, e as seguintes em poucos milissegundos, porque a primeira pagou o cold start.

Veja também: [[Ambiente de Execucao]], [[Concorrencia Provisionada]], [[Lambda]], [[SnapStart]]

## Onde aparece

- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
