---
aliases:
  - "RCPs"
  - "Resource Control Policies"
  - "Resource Control Policy"
  - "resource control policy"
tags:
  - glossario
  - seguranca
---
# RCP

A RCP (resource control policy) é um tipo de política do Organizations que define o teto de permissões sobre os recursos das contas membros, independentemente de quem os acessa. Como a SCP, não concede acesso: só limita. A SCP restringe o que os principals da organização podem fazer; a RCP restringe o que pode ser feito nos recursos, o que a torna a ferramenta para barreiras como exigir TLS ou barrar acesso de fora da organização.

> [!example] Exemplo
> Uma RCP nega o acesso ao S3 de qualquer principal de fora da organização, mesmo que a bucket policy de uma conta permita.

Veja também: [[Defesa em Profundidade]], [[Organizations]], [[Permissions Boundary]], [[Resource-Based Policy]], [[SCP]]

## Onde aparece

- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.04 - Control Tower e Landing Zone|5.4]]
