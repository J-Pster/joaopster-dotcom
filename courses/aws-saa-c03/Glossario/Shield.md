---
aliases:
  - "AWS Shield"
tags:
  - glossario
  - seguranca
---
# Shield

O AWS Shield é o serviço de proteção contra ataques DDoS: o Standard é automático e sem custo adicional para todas as contas, e o Advanced acrescenta equipe de resposta (DRT), proteção de custo e detecção mais rica em recursos protegidos como ALB, CloudFront e Route 53. O Standard atua nas camadas 3 e 4, e o WAF cobre a camada 7. O plano de controle do Shield Advanced fica em us-east-1.

> [!example] Exemplo
> Uma inundação de pacotes é tratada pelo Shield; uma inundação de requisições HTTP, pelo WAF.

Veja também: [[CloudFront]], [[DDoS]], [[Route 53]], [[WAF]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 18:** [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
