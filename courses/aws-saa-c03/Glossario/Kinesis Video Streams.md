---
aliases:
  - "KVS"
  - "Kinesis Video Stream"
tags:
  - glossario
  - servico
---
# Kinesis Video Streams

O Kinesis Video Streams é o serviço para capturar, guardar e processar fluxos de vídeo e outros dados temporais de dispositivos, como câmeras e sensores. Ele existe porque vídeo exige tratamento próprio (fragmentos, índice por tempo, reprodução), que um stream genérico de registros não oferece. Serve a cenários como monitoramento por câmeras e análise de imagem com serviços de IA.

> [!example] Exemplo
> Câmeras de uma fábrica enviam vídeo ao Kinesis Video Streams, e um modelo de visão detecta pessoas em áreas restritas.

Veja também: [[Kinesis Data Streams]], [[Streaming de Dados]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 24:** [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]]
