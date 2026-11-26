---
aliases:
  - "criptografia de envelope"
  - "envelope encryption"
tags:
  - glossario
  - conceito
---
# Envelope Encryption

Técnica em que os dados são cifrados localmente com uma data key e essa data key é cifrada por outra chave, a KMS key, guardada no KMS. Existe porque a chamada Encrypt do KMS aceita no máximo 4.096 bytes e porque mandar dados grandes pela rede a um serviço central seria lento e caro. Guarda-se a data key cifrada junto dos dados, e só o KMS consegue abri-la.

> [!example] Exemplo
> Para cifrar um arquivo de 200 MB, a aplicação pede uma data key ao KMS, cifra o arquivo localmente e guarda a data key cifrada ao lado do arquivo.

Veja também: [[Chave Simetrica]], [[Customer Managed Key]], [[KMS]]

## Onde aparece

- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
