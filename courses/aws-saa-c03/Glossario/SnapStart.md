---
aliases:
  - "Lambda SnapStart"
  - "snapstart"
tags:
  - glossario
  - servico
---
# SnapStart

O SnapStart é um recurso do Lambda que reduz o cold start de funções em runtimes compatíveis (como Java): ao publicar uma versão, o Lambda executa a inicialização uma vez, tira um snapshot do ambiente e passa a restaurar novas execuções a partir dele, em vez de inicializar do zero. Exige cuidado com estado único capturado no snapshot (como números aleatórios e conexões). É uma alternativa mais barata à concorrência provisionada para o problema de partida a frio.

> [!example] Exemplo
> Uma função Spring em Java que levava 6 segundos para iniciar passa a responder a partida a frio em uma fração disso depois de ativar o SnapStart na versão publicada.

Veja também: [[Cold Start]], [[Concorrencia Provisionada]], [[Lambda]]

## Onde aparece

- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
