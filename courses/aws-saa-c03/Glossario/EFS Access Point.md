---
aliases:
  - "access point do EFS"
  - "access points do EFS"
  - "ponto de acesso do EFS"
tags:
  - glossario
  - seguranca
---
# EFS Access Point

Um access point do EFS é um ponto de entrada específico de uma aplicação em um sistema de arquivos compartilhado. Pode impor uma identidade POSIX (usuário e grupo) e um diretório raiz às requisições que passam por ele. Existe para que cada aplicação veja só a sua pasta e escreva com a identidade certa, sem confiar no código da aplicação.

> [!example] Exemplo
> Dois microsserviços compartilham um EFS; o access point do serviço A fixa o diretório /a, o usuário 1001 e as permissões 755.

Veja também: [[EFS]], [[Lambda]], [[Mount Target]]

## Onde aparece

- Ainda não é citado nas aulas.
