---
aliases:
  - "AWS Security Hub"
  - "Security Hub CSPM"
  - "painel de segurança"
tags:
  - glossario
  - seguranca
---
# Security Hub

O AWS Security Hub reúne em um só lugar os findings de segurança de vários serviços (GuardDuty, Inspector, Macie, Firewall Manager e parceiros) e avalia as contas contra padrões como o AWS Foundational Security Best Practices, o CIS e o PCI DSS por meio de controles. Os controles de postura dependem do AWS Config registrando os recursos. Existe para dar uma visão única e priorizada, com agregação entre contas e Regiões, em vez de dezenas de consoles separados.

> [!example] Exemplo
> Uma organização habilita o Security Hub com administrador delegado, ativa o padrão CIS e passa a ver, no mesmo painel, um bucket S3 sem criptografia, um finding do GuardDuty e uma CVE crítica do Inspector.

Veja também: [[CSPM]], [[Config]], [[Finding]], [[GuardDuty]], [[Inspector]], [[Macie]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
