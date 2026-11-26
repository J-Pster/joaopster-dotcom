---
aliases:
  - "Dados de usuário"
  - "Script de inicialização"
  - "user-data"
tags:
  - glossario
  - conceito
---
# User Data

Bloco de texto, normalmente um script, que a instância EC2 executa no primeiro boot para se configurar sozinha, com limite de 16 KB. Não vai para a AMI e não é protegido por criptografia, portanto não deve guardar segredos.

> [!example] Exemplo
> Um user data de poucas linhas baixa de um bucket o arquivo de configuração do ambiente e inicia o serviço, deixando a AMI genérica.

Veja também: [[AMI]], [[Instance Metadata Service]], [[Launch Template]], [[Secrets Manager]]

## Onde aparece

- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]]
- **Módulo 20:** [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]]
