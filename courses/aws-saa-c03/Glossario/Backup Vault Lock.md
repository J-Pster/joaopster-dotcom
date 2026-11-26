---
tags:
  - glossario
  - dados
---
# Backup Vault Lock

Recurso do AWS Backup que torna um cofre imutável (WORM): ninguém, nem o administrador, apaga recovery points antes do fim da retenção. Tem modos governance e compliance, e no compliance a trava vira definitiva depois do período de cooling-off (grace time).

> [!example] Exemplo
> Contra ransomware, a empresa liga o Vault Lock em compliance no cofre de produção; um administrador comprometido não consegue apagar os backups.

Veja também: [[Modo Compliance]], [[Object Lock]], [[WORM]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
