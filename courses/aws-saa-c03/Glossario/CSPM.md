---
aliases:
  - "Cloud Security Posture Management"
  - "gestão de postura de segurança na nuvem"
tags:
  - glossario
  - conceito
---
# CSPM

CSPM (Cloud Security Posture Management) é a prática de verificar continuamente se a configuração dos recursos na nuvem segue boas práticas e padrões de conformidade, apontando desvios como bucket público, security group aberto ou MFA ausente. Existe porque a maior parte dos incidentes em nuvem vem de configuração errada, não de falha do provedor. Na AWS, o Security Hub CSPM faz essa avaliação usando controles e o registro do AWS Config.

> [!example] Exemplo
> O controle de CSPM acusa que um security group libera a porta 22 para 0.0.0.0/0 e o time corrige a regra antes de qualquer ataque.

Veja também: [[Config]], [[Finding]], [[Security Hub]]

## Onde aparece

- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.06 - Inspector Detective e Security Hub|19.6]]
