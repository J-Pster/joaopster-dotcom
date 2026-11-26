---
aliases:
  - "Amazon Detective"
  - "behavior graph"
  - "grafo de comportamento"
tags:
  - glossario
  - seguranca
---
# Detective

O Amazon Detective é o serviço de investigação de segurança da AWS: ele coleta automaticamente CloudTrail, VPC Flow Logs e findings do GuardDuty e monta um grafo de comportamento que mostra quem fez o quê, em quais recursos e quando, com até um ano de histórico. Existe porque um finding isolado diz que algo suspeito aconteceu, mas não conta a história inteira; o Detective responde 'como isso começou e até onde foi' sem você montar consultas manuais em logs.

> [!example] Exemplo
> O GuardDuty alerta que uma role foi usada de um IP incomum; no Detective você abre o perfil da role e vê as chamadas de API das últimas semanas, os recursos tocados e os outros findings ligados ao mesmo ator.

Veja também: [[CloudTrail]], [[Finding]], [[GuardDuty]], [[Security Hub]], [[VPC Flow Logs]]

## Onde aparece

- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
