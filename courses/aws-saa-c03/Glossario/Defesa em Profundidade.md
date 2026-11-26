---
aliases:
  - "camadas de segurança"
  - "defense in depth"
  - "defesa em profundidade"
  - "segurança em camadas"
tags:
  - glossario
  - conceito
---
# Defesa em Profundidade

Defesa em profundidade é proteger o sistema com várias camadas de controle independentes, de modo que a falha de uma não exponha tudo. Na AWS combina contas separadas, SCPs, policies IAM, criptografia, rede (rotas, security groups, NACLs, endpoints) e monitoramento. Existe porque um erro de configuração isolado inevitavelmente acontece, e a camada seguinte o contém; é o que o princípio "aplique segurança em todas as camadas" do Well-Architected descreve.

> [!example] Exemplo
> Mesmo que alguém abra uma porta no security group, a NACL da sub-rede de dados ainda barra o acesso de fora, e a criptografia protege os dados se o acesso vazar.

Veja também: [[Controle Preventivo]], [[Menor Privilegio]], [[Network ACL]], [[Raio de Impacto]], [[SCP]], [[Security Group]]

## Onde aparece

- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]], [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]]
- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]]
- **Módulo 8:** [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]]
