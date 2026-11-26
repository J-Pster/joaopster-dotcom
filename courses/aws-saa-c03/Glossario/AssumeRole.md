---
aliases:
  - "assume-role"
  - "assumir a role"
  - "assumir role"
  - "assumir uma role"
  - "sts:AssumeRole"
tags:
  - glossario
  - seguranca
---
# AssumeRole

Chamada do STS em que um principal pede para atuar como uma role, desde que a trust policy da role o permita e sua própria identidade tenha sts:AssumeRole. A resposta traz credenciais temporárias, e enquanto o principal usa a role ele deixa de ter as permissões originais. A duração padrão é de 1 hora.

> [!example] Exemplo
> Um engenheiro da conta de ferramentas assume a role de auditoria na conta de produção para ler configurações.

Veja também: [[External ID]], [[IAM Role]], [[Role Chaining]], [[STS]], [[Trust Policy]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
