---
aliases:
  - "Server Name Indication"
tags:
  - glossario
  - seguranca
---
# SNI

SNI (Server Name Indication) é uma extensão do TLS em que o cliente informa o nome do site já no início do handshake. Ele existe para que um mesmo endereço IP sirva vários domínios com certificados diferentes: o servidor lê o nome e escolhe o certificado certo. No CloudFront é o modo padrão e gratuito, e o IP dedicado é a alternativa legada para clientes sem SNI. O ALB e o NLB também suportam SNI, com uma lista de certificados no listener.

> [!example] Exemplo
> Um navegador pede `www.exemplo.com` e o CloudFront responde com o certificado desse domínio, embora milhares de outros domínios usem o mesmo endereço de borda.

Veja também: [[ACM]], [[Application Load Balancer]], [[Certificado Digital]], [[CloudFront]], [[TLS]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
