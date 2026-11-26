---
aliases:
  - "modelo de responsabilidade compartilhada"
  - "responsabilidade compartilhada"
  - "shared responsibility"
  - "shared responsibility model"
tags:
  - glossario
  - seguranca
---
# Modelo de Responsabilidade Compartilhada

O modelo de responsabilidade compartilhada é a divisão de deveres de segurança entre a AWS e o cliente: a AWS cuida da segurança da nuvem (instalações, hardware, rede e serviços de base) e o cliente, da segurança na nuvem (dados, identidades e configuração). A fronteira muda com o serviço: quanto mais gerenciado, maior a parte da AWS. Evita a suposição de que a nuvem é segura por padrão em tudo, e a prova o usa para decidir quem aplica patches e quem configura acessos.

> [!example] Exemplo
> No EC2 o cliente aplica patches no sistema operacional; no RDS, a AWS aplica no banco, mas o cliente ainda decide quem pode se conectar e se os dados são criptografados.

Veja também: [[Artifact]], [[Defesa em Profundidade]], [[IAM]], [[Menor Privilegio]], [[Overhead Operacional]], [[RDS]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]]
- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]], [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]]
- **Módulo 8:** [[08.01 - Por que Criptografar e os Fundamentos|8.1]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
