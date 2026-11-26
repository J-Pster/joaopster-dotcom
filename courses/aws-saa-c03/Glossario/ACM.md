---
aliases:
  - "AWS Certificate Manager"
  - "Certificate Manager"
tags:
  - glossario
  - servico
---
# ACM

O ACM (AWS Certificate Manager) é o serviço que emite, instala e renova certificados TLS para serviços integrados como ALB, CloudFront e API Gateway, tirando da equipe a tarefa manual e arriscada de trocar certificados vencidos. Certificados públicos para esses serviços não têm cobrança adicional, o certificado é regional (o do CloudFront precisa estar em us-east-1) e certificados importados não são renovados pelo ACM. Na prova, aparece quando o enunciado pede HTTPS com renovação automática e menor esforço operacional.

> [!example] Exemplo
> Um ALB usa um certificado do ACM validado por DNS, que se renova sozinho enquanto o registro CNAME continuar no DNS.

Veja também: [[Application Load Balancer]], [[Certificado Digital]], [[Criptografia em Transito]], [[KMS]], [[Private CA]], [[Security Group]], [[TLS]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 13:** [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
