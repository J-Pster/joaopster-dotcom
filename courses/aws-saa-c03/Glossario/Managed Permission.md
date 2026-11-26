---
aliases:
  - "managed permissions"
  - "permissão gerenciada"
  - "permissões gerenciadas"
tags:
  - glossario
  - seguranca
---
# Managed Permission

Modelo de política do RAM que define o que os consumidores podem fazer com um tipo de recurso compartilhado. Pode ser gerenciada pela AWS ou pelo cliente, para aplicar menor privilégio. Ela é um teto: o consumidor também precisa de política IAM na própria conta.

> [!example] Exemplo
> Uma permissão gerenciada que só permite ler e anexar o Transit Gateway impede que o consumidor altere o recurso.

Veja também: [[IAM Policy]], [[RAM]], [[Resource Share]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
