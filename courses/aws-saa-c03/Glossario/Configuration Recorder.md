---
aliases:
  - "configuration recorder"
  - "gravador"
  - "gravador do Config"
tags:
  - glossario
  - servico
---
# Configuration Recorder

Componente do Config que detecta mudanças nos recursos da conta e registra cada uma como item de configuração, entregando-o ao bucket S3. A gravação pode ser contínua (a cada mudança) ou diária (ao fim de cada período de 24 horas, se houve mudanças), e pode cobrir todos os tipos de recurso ou só alguns.

> [!example] Exemplo
> Uma equipe exclui instâncias Spot do gravador para evitar milhares de itens de configuração por dia.

Veja também: [[Config]], [[Configuration Item]]

## Onde aparece

- Ainda não é citado nas aulas.
