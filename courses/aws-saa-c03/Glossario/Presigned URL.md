---
aliases:
  - "URL assinada do S3"
  - "URL pré-assinada"
  - "presigned URLs"
tags:
  - glossario
  - seguranca
---
# Presigned URL

Presigned URL é um link temporário que concede a quem o tiver o direito de baixar ou enviar um objeto específico do S3, usando as permissões de quem o assinou. Expira no prazo definido ou quando as credenciais temporárias que a assinaram expiram. Permite acesso por tempo limitado sem tornar o objeto público e sem dar credenciais AWS ao cliente.

> [!example] Exemplo
> Um app gera um link de download válido por uma hora para o cliente baixar a fatura privada.

Veja também: [[Bucket Policy]], [[IAM Role]], [[S3]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
