---
aliases:
  - "conjunto de permissões"
  - "conjuntos de permissões"
  - "permission sets"
tags:
  - glossario
  - seguranca
---
# Permission Set

Um permission set é o modelo de permissões do IAM Identity Center: um conjunto de policies com uma duração de sessão, atribuído a um usuário ou grupo em uma ou mais contas da organização. O Identity Center cria em cada conta uma role gerenciada (prefixo AWSReservedSSO) que a pessoa assume no login, recebendo credenciais temporárias sem IAM user. A duração da sessão vai de 1 a 12 horas, com padrão de 1 hora.

> [!example] Exemplo
> O permission set ReadOnlyDev é atribuído ao grupo Developers nas contas de desenvolvimento e homologação, mas não na de produção.

Veja também: [[Federacao]], [[IAM Identity Center]], [[IAM Role]], [[Identity Source]], [[STS]]

## Onde aparece

- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
