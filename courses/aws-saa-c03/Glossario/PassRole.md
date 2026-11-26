---
aliases:
  - "iam:PassRole"
  - "iam:PassedToService"
tags:
  - glossario
  - seguranca
---
# PassRole

Permissão do IAM que a identidade precisa ter para entregar (associar) uma role a um serviço AWS, como ao lançar uma EC2 com instance profile ou criar uma Lambda com execution role. Existe para impedir que alguém anexe a um serviço uma role mais poderosa do que as próprias permissões e, assim, escale privilégio. Deve ser restrita por Resource aos ARNs aprovados e, idealmente, pela condição iam:PassedToService.

> [!example] Exemplo
> Uma desenvolvedora com ec2:RunInstances recebe 'not authorized to perform iam:PassRole' até que a policy dela permita iam:PassRole no ARN da role app-backend, só para ec2.amazonaws.com.

Veja também: [[Escalada de Privilegio]], [[IAM Role]], [[Instance Profile]], [[Permissions Boundary]]

## Onde aparece

- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
