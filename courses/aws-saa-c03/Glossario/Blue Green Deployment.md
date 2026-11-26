---
aliases:
  - "Blue/Green Deployments"
  - "blue/green deployment"
  - "blue/green deployments"
  - "implantação blue/green"
tags:
  - glossario
  - conceito
---
# Blue Green Deployment

O blue/green deployment do RDS cria um ambiente de teste (green) idêntico à produção (blue) e permite trocar entre eles com indisponibilidade tipicamente inferior a um minuto. Ele existe para atualizar versões, mudar parâmetros ou criptografar um banco com risco menor. Também aparece junto com o RDS Proxy na troca de ambientes.

> [!example] Exemplo
> A equipe atualiza o engine no ambiente green, valida e promove o green a produção.

Veja também: [[Failover]], [[RDS]], [[RDS Proxy]]

## Onde aparece

- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
