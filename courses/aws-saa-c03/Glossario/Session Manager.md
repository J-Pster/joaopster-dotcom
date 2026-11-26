---
aliases:
  - "AWS Systems Manager Session Manager"
  - "SSM Session Manager"
tags:
  - glossario
  - servico
---
# Session Manager

O Session Manager é o recurso do Systems Manager que abre um shell ou túnel em uma instância sem porta de entrada (22 ou 3389), sem chave SSH e sem bastion host. O SSM Agent liga para fora, e o acesso é controlado por IAM e registrado, por isso é a resposta típica para acesso administrativo sem expor portas. Em sub-redes sem internet, exige interface endpoints do SSM.

> [!example] Exemplo
> A equipe remove a regra TCP 22 do security group e passa a entrar nas instâncias privadas pelo Session Manager.

Veja também: [[Bastion Host]], [[EC2 Instance Connect Endpoint]], [[Interface Endpoint]], [[Menor Privilegio]], [[Security Group]], [[Systems Manager]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.05 - Security Groups|6.5]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]], [[07.03 - Transit Gateway|7.3]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12.07 - Politicas de Escala|12.7]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
