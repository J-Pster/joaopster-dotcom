---
aliases:
  - "allow-list"
  - "lista de permissão"
tags:
  - glossario
  - seguranca
---
# Allow List

Estratégia de SCP em que se remove o acesso total padrão e se permitem explicitamente só os serviços aprovados. Dá controle fino, mas exige manter a lista sempre atualizada. Costuma ser usada em ambientes muito regulados.

> [!example] Exemplo
> Uma OU de teste só permite EC2, S3 e Lambda, e qualquer outro serviço é bloqueado pelo SCP.

Veja também: [[Deny List]], [[SCP]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
