---
aliases:
  - "backpressure"
  - "contrapressão"
tags:
  - glossario
  - conceito
---
# Backpressure

Backpressure é o mecanismo pelo qual um consumidor lento sinaliza ou força o produtor a reduzir o ritmo, para que o sistema não seja sobrecarregado. Existe porque produtores e consumidores raramente têm a mesma velocidade. Uma fila como o SQS absorve o excesso e aplica essa pressão de forma natural: o consumidor puxa no seu ritmo e a profundidade da fila mostra o atraso.

> [!example] Exemplo
> Em um pico de vendas, a fila acumula 50 mil pedidos e os workers os consomem no ritmo que suportam, sem derrubar o banco.

Veja também: [[Desacoplamento]], [[SQS]], [[Scaling Policy]]

## Onde aparece

- Ainda não é citado nas aulas.
