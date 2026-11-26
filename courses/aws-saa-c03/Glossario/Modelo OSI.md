---
aliases:
  - "L3"
  - "L4"
  - "L7"
  - "camada 3"
  - "camada 4"
  - "camada 7"
  - "camadas OSI"
  - "modelo OSI"
tags:
  - glossario
  - conceito
---
# Modelo OSI

Modelo de referência que divide a comunicação em camadas, cada uma resolvendo um problema e escondendo o resto. As que mais aparecem na AWS são a 3 (rede, IP), a 4 (transporte, TCP e UDP) e a 7 (aplicação, HTTP). A camada em que um serviço opera define o que ele consegue enxergar e decidir.

> [!example] Exemplo
> O ALB opera na camada 7 e roteia por caminho de URL; o NLB opera na camada 4 e só enxerga IP e porta.

Veja também: [[Application Load Balancer]], [[Gateway Load Balancer]], [[HTTP]], [[Network Load Balancer]], [[TCP]], [[UDP]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.07 - TLS HTTPS e Certificados|3.7]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.03 - Transit Gateway|7.3]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.04 - Visao e Documentos com Rekognition e Textract|24.4]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
