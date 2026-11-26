---
aliases:
  - "afinidade de zona de disponibilidade"
  - "roteamento com afinidade de AZ"
tags:
  - glossario
  - conceito
---
# AZ-Affinity Routing

A política de afinidade de AZ roteia a consulta a endpoints na mesma zona de disponibilidade do cliente, usando o ID da AZ, e recua para a Região e para o registro global se não houver correspondência. Reduz latência e custo de transferência entre AZs. Funciona com consultas vindas do resolvedor da VPC e exige sempre um registro global.

> [!example] Exemplo
> Uma aplicação resolve o serviço interno e recebe o endpoint da mesma AZ da instância que consultou.

Veja também: [[Route 53 Resolver]], [[Routing Policy]], [[Zona de Disponibilidade]]

## Onde aparece

- Ainda não é citado nas aulas.
