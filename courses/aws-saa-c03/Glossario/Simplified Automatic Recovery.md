---
aliases:
  - "recuperação automática simplificada"
tags:
  - glossario
  - conceito
---
# Simplified Automatic Recovery

É o recurso do EC2 que recupera sozinho uma instância quando o host físico falha, sem alarme configurado por você. A instância volta no novo host com o mesmo ID, IP privado e volumes EBS. Existe para reduzir o trabalho de montar um alarme de recover em cada instância.

> [!example] Exemplo
> Uma instância de servidor de licenças em um host com falha de hardware reaparece em outro host com o mesmo IP privado.

## Onde aparece

- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
