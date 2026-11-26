---
aliases:
  - "Amazon Macie"
tags:
  - glossario
  - seguranca
---
# Macie

Serviço que usa aprendizado de máquina e correspondência de padrões para descobrir dados sensíveis, como dados pessoais, números de cartão e credenciais, em buckets do Amazon S3. Também avalia a segurança dos buckets e envia achados ao EventBridge e ao Security Hub. Atua apenas no S3.

> [!example] Exemplo
> O Macie encontra números de cartão de crédito em um bucket esquecido e envia um achado que dispara uma função Lambda de correção.

Veja também: [[EventBridge]], [[GuardDuty]], [[Object Lock]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 23:** [[23.09 - Outposts e Computacao no Local|23.9]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.02 - Texto com Comprehend e Translate|24.2]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
