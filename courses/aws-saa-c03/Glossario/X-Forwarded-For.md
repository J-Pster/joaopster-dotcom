---
aliases:
  - "Cabeçalho X-Forwarded-For"
  - "XFF"
tags:
  - glossario
  - rede
---
# X-Forwarded-For

Cabeçalho HTTP que o ALB acrescenta com o IP original do cliente, já que o alvo vê apenas o IP do nó do balanceador na conexão. Pode conter uma lista de IPs quando há vários proxies. O ALB devolve erro 463 se a lista passar de 30 endereços.

> [!example] Exemplo
> O servidor lê X-Forwarded-For para registrar nos logs o IP real do visitante atrás do ALB.

Veja também: [[Application Load Balancer]], [[Proxy Protocol]], [[Target Group]], [[WAF]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
