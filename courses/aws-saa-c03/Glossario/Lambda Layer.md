---
aliases:
  - "Lambda layers"
  - "camada do Lambda"
  - "camadas do Lambda"
  - "layer"
  - "layers"
tags:
  - glossario
  - conceito
---
# Lambda Layer

Uma Lambda layer é um pacote de bibliotecas, dependências ou código compartilhável que várias funções podem anexar, em vez de embutir tudo em cada pacote. Ajuda a reutilizar dependências e a manter o pacote da função pequeno, mas o tamanho total (função mais layers) continua sujeito ao limite do Lambda. Layers não se aplicam a funções empacotadas como imagem de contêiner.

> [!example] Exemplo
> Cinco funções usam a mesma biblioteca de validação; ela vira uma layer e cada função apenas a referencia.

Veja também: [[ECR]], [[Lambda]]

## Onde aparece

- **Módulo 16:** [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
