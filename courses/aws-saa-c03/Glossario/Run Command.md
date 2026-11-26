---
aliases:
  - "executar comando do SSM"
tags:
  - glossario
  - servico
---
# Run Command

O Run Command executa comandos ou scripts em vários nós gerenciados ao mesmo tempo, sem login. Permite alvo por tag, controle de concorrência e limite de erros, e envia a saída ao S3 ou ao CloudWatch Logs.

> [!example] Exemplo
> Um comando atualiza um pacote em todas as instâncias com a tag Ambiente=prod, 10% por vez.

Veja também: [[Patch Manager]], [[State Manager]], [[Systems Manager]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
