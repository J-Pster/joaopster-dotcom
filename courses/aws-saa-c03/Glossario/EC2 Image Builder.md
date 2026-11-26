---
aliases:
  - "Image Builder"
  - "image builder"
tags:
  - glossario
  - servico
---
# EC2 Image Builder

Serviço gerenciado que automatiza a criação, o teste e a distribuição de AMIs e imagens de contêiner em pipelines. Você descreve os componentes e o pipeline roda sozinho, inclusive para várias Regiões e contas. Existe para trocar a rotina manual de instalar, criar a imagem e testar por um fluxo repetível, mantendo as imagens corrigidas; na prova é a resposta para "AMI de ouro atualizada com o mínimo de esforço operacional".

> [!example] Exemplo
> Todo mês um pipeline do Image Builder aplica os patches do sistema, roda testes e publica uma AMI nova em três Regiões.

Veja também: [[AMI]], [[Automation]], [[Infraestrutura Imutavel]], [[Launch Template]], [[Systems Manager]]

## Onde aparece

- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]]
- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 21:** [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
