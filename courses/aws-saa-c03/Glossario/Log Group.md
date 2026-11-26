---
aliases:
  - "grupo de logs"
  - "log group"
tags:
  - glossario
  - servico
---
# Log Group

Log group é o contêiner de logs do CloudWatch Logs que reúne fluxos de log com a mesma política de retenção, criptografia e permissões. Existe para organizar logs por aplicação ou ambiente e aplicar configuração em um só lugar. A retenção padrão é nunca expirar, o que pode gerar custo crescente.

> [!example] Exemplo
> O grupo /aws/lambda/pedidos reúne os logs de todas as execuções da função, com retenção de 30 dias.

Veja também: [[CloudWatch Logs]], [[Log Stream]], [[Metric Filter]]

## Onde aparece

- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
