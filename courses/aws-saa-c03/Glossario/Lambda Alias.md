---
aliases:
  - "Lambda alias"
  - "alias de função"
  - "alias do Lambda"
  - "aliases do Lambda"
tags:
  - glossario
  - conceito
---
# Lambda Alias

Um alias do Lambda é um ponteiro nomeado (como prod ou beta) para uma versão publicada da função. Ele permite que clientes e gatilhos apontem para um nome estável enquanto você troca a versão por trás, e suporta roteamento ponderado entre duas versões para deploys canário e rollback rápido. Concorrência provisionada também é configurada por alias ou versão.

> [!example] Exemplo
> O alias prod aponta 90% do tráfego para a versão 12 e 10% para a versão 13; se houver erros, basta voltar o peso para a versão 12.

Veja também: [[Concorrencia Provisionada]], [[Lambda]]

## Onde aparece

- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
