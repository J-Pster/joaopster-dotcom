---
aliases:
  - "EC2 auto recovery"
  - "auto recovery"
  - "recuperação automática do EC2"
tags:
  - glossario
  - servico
---
# EC2 Auto Recovery

A recuperação automática do EC2 usa um alarme do CloudWatch sobre a verificação de status do sistema para recuperar a instância em outro hardware, preservando o ID, os endereços IP e os metadados. Protege contra falha do host subjacente, mas não contra a perda de uma AZ inteira nem contra falha do sistema operacional.

> [!example] Exemplo
> Um servidor de licença única é recuperado sozinho depois de uma falha de hardware do host.

Veja também: [[Auto Scaling Group]], [[CloudWatch]], [[EC2]], [[Ponto Unico de Falha]]

## Onde aparece

- **Módulo 20:** [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
