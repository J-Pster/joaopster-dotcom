---
aliases:
  - "instance status check"
  - "status checks"
  - "system status check"
  - "verificação de status"
tags:
  - glossario
  - servico
---
# Status Check

Verificações automáticas de saúde do EC2, a cada minuto. O system status check detecta problemas no host da AWS, como hardware ou rede, e o instance status check detecta problemas dentro da instância, como o sistema operacional. Um alarme do CloudWatch pode disparar a ação recover para falhas de sistema, mantendo ID, IP privado, Elastic IP e metadados.

> [!example] Exemplo
> Um alarme no system status check com ação de recover traz a instância de volta em outro host, com o mesmo ID e o mesmo IP privado.

Veja também: [[EC2]], [[Elastic IP]], [[Hibernacao de EC2]]

## Onde aparece

- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 20:** [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
