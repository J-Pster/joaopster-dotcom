---
aliases:
  - "Infraestrutura Imutável"
  - "immutable infrastructure"
  - "imutável"
  - "infraestrutura imutavel"
  - "infraestrutura imutável"
tags:
  - glossario
  - conceito
---
# Infraestrutura Imutável

Infraestrutura imutável é a prática de nunca alterar um servidor em produção: para mudar, cria-se um novo a partir de uma imagem ou código atualizado e termina-se o antigo. Existe para evitar deriva de configuração e tornar recuperação e rollback previsíveis, e combina com AMIs prontas, Auto Scaling e implantações blue/green. Na prova, patch por SSH em cada instância é a resposta errada.

> [!example] Exemplo
> Gerar uma nova AMI com a correção e substituir as instâncias, em vez de corrigir cada uma por SSH.

Veja também: [[CloudFormation]], [[Elasticidade]], [[Operacoes como Codigo]], [[Stateless]]

## Onde aparece

- **Módulo 1:** [[01.01 - Por que a Nuvem Existe|1.1]]
- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
