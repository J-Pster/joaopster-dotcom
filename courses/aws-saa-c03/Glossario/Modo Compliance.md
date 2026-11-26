---
aliases:
  - "compliance mode"
  - "modo compliance"
tags:
  - glossario
  - dados
---
# Modo Compliance

Modo de retenção do Object Lock em que a versão não pode ser apagada nem ter o período encurtado por ninguém, nem pela conta root, até o fim da retenção. Só encerrar a conta AWS remove a proteção. Por não ter saída, exige cuidado ao definir o prazo.

> [!example] Exemplo
> Um registro regulatório com retenção de 7 anos em modo compliance não pode ser apagado nem pelo administrador da conta.

Veja também: [[Legal Hold]], [[Modo Governance]], [[Object Lock]]

## Onde aparece

- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
