---
aliases:
  - "AWS IAM Identity Center"
  - "AWS SSO"
  - "AWS Single Sign-On"
  - "Identity Center"
tags:
  - glossario
  - seguranca
---
# IAM Identity Center

O IAM Identity Center é o serviço de acesso da força de trabalho (workforce) a várias contas AWS e a aplicações, com login único (single sign-on). A identidade vem de uma fonte (o diretório do próprio serviço, o Active Directory ou um provedor externo por SAML, com provisionamento por SCIM), e o acesso às contas é dado por permission sets. O usuário recebe credenciais temporárias, sem usuário IAM por conta, e a AWS o recomenda no lugar do usuário root para o dia a dia.

> [!example] Exemplo
> Uma pessoa entra no portal com o login da empresa, escolhe a conta Prod com o permission set ReadOnly e acessa o console sem criar usuário IAM.

Veja também: [[IAM]], [[Identity Source]], [[Organizations]], [[Permission Set]], [[SCIM]], [[Usuario Root]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
