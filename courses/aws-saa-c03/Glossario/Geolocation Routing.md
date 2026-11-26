---
aliases:
  - "política de geolocalização"
  - "roteamento por geolocalização"
tags:
  - glossario
  - conceito
---
# Geolocation Routing

No roteamento por geolocalização, o Route 53 escolhe o registro pelo local do usuário (continente, país ou estado dos EUA), usando o mais específico que casar. É usado para localizar conteúdo e atender regras legais por país. Deve existir um registro padrão, senão quem não casa com nenhum recebe resposta vazia.

> [!example] Exemplo
> Usuários do Brasil recebem o site em português e os demais recebem o registro padrão em inglês.

Veja também: [[Geo Restriction]], [[Geoproximity Routing]], [[Routing Policy]]

## Onde aparece

- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
