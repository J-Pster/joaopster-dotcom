---
aliases:
  - "coleção de faces"
  - "collection do Rekognition"
tags:
  - glossario
  - conceito
---
# Face Collection

Uma face collection é um índice de rostos guardado no Rekognition: você adiciona rostos com IndexFaces e depois busca por correspondência com SearchFacesByImage. Existe para identificar uma pessoa entre muitas sem comparar imagem por imagem. Difere do CompareFaces, que compara apenas duas imagens na hora, sem guardar nada.

> [!example] Exemplo
> Um prédio indexa os rostos dos moradores em uma coleção e consulta cada visitante contra ela na portaria.

Veja também: [[Rekognition]]

## Onde aparece

- **Módulo 24:** [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]]
