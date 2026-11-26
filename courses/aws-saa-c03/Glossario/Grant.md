---
aliases:
  - "grants"
tags:
  - glossario
  - seguranca
---
# Grant

Permissão temporária e programática concedida sobre uma chave KMS, criada por API e que vale para uma única chave. Só permite (não nega), pode ser retirada ou revogada e é usada por serviços da AWS que precisam agir em nome do principal durante a vida de um recurso. Complementa a key policy sem exigir que ela seja editada.

> [!example] Exemplo
> Ao anexar um volume EBS cifrado a uma instância, o EBS cria um grant na chave para a instância poder usá-la enquanto estiver anexada.

Veja também: [[Customer Managed Key]], [[KMS]], [[Key Policy]]

## Onde aparece

- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
