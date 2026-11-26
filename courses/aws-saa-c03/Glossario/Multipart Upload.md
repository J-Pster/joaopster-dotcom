---
aliases:
  - "envio em partes"
  - "multipart upload"
  - "upload multipart"
tags:
  - glossario
  - dados
---
# Multipart Upload

Multipart upload é o modo de enviar um objeto grande ao S3 dividido em partes (de 5 MiB a 5 GiB, até 10.000 partes) que sobem em paralelo e depois são montadas. Dá mais velocidade, permite reenviar só a parte que falhou e é obrigatório acima de 5 GB. Partes de uploads nunca concluídos continuam cobradas até serem abortadas.

> [!example] Exemplo
> Um arquivo de 40 GB sobe em 400 partes de 100 MB em paralelo; se a conexão cair, só as partes pendentes são reenviadas.

Veja também: [[Lifecycle Policy]], [[S3]], [[Transfer Acceleration]]

## Onde aparece

- **Módulo 3:** [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 22:** [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
