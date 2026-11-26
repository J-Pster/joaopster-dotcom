---
aliases:
  - "endpoint de inferência"
  - "endpoint do SageMaker"
tags:
  - glossario
  - conceito
---
# Inference Endpoint

Um inference endpoint é o ponto de acesso (uma URL) que recebe dados e devolve a predição de um modelo já treinado. No SageMaker AI há quatro opções: tempo real (baixa latência, sempre ligado), serverless (paga pelo uso, com partida a frio), assíncrono (payloads grandes e escala a zero) e transformação em lote (sem endpoint, para grandes conjuntos). Escolher o tipo certo é a decisão de custo e latência mais cobrada.

> [!example] Exemplo
> Um modelo que responde em milissegundos a cada compra usa endpoint em tempo real; um que pontua milhões de registros por noite usa transformação em lote.

Veja também: [[Lambda]], [[SageMaker AI]]

## Onde aparece

- **Módulo 24:** [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
