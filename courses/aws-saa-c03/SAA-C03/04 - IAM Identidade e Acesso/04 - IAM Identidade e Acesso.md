---
aliases:
  - Módulo 4
modulo: 4
parte: "II Identidade, rede e dados"
tags:
  - modulo
  - saa-c03
---

# Módulo 4: IAM, identidade e acesso

Toda chamada à AWS, do Console, da CLI ou de um serviço falando com outro, passa por uma pergunta: **quem é você e o que você pode fazer?** O [[IAM]] responde as duas. Este módulo é o dono do IAM no curso e cobre o coração da Task 1.1 do exam guide ("projetar acesso seguro a recursos AWS"): quem são os [[Principal|principals]], como as policies são escritas e avaliadas, como [[Credencial Temporaria|credenciais temporárias]] substituem chaves de longo prazo, como contas e serviços se acessam sem compartilhar segredo e como impor tetos (guardrails) e chegar ao [[Menor Privilegio|menor privilégio]]. Ele vem no início da Parte II porque tudo o que vem depois, de [[S3]] a Lambda, usa policies e roles em cada configuração.

É um módulo **conceitual com prática**: cada aula tem um laboratório opcional que usa só [[IAM]] (sem custo), sempre em uma conta pessoal. O [[05 - Multiconta Governanca e Federacao|Módulo 5]] em diante assume que você domina o que está aqui; o próximo detalha [[SCP|SCPs]], Organizations e [[Federacao|federação]] em escala.

> [!info] Pré-requisitos
> O [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] mostrou [[Regiao AWS|Regiões]], contas e o [[Modelo de Responsabilidade Compartilhada|modelo de responsabilidade compartilhada]], e o [[02 - Well-Architected e o Formato da Prova|Módulo 2]], o pilar de segurança e o formato dos enunciados. Aqui você os aplica à identidade.

## Aulas

1. [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|Aula 4.1: Por que IAM, autenticação, autorização e principals]]: o fluxo de uma requisição, os tipos de principal, os dez tipos de policy e o que o [[Usuario Root|usuário root]] pode (e só ele).
2. [[04.02 - Usuarios Grupos Credenciais e MFA|Aula 4.2: Usuários, grupos, credenciais e MFA]]: por que credencial de longo prazo é o problema, higiene de chaves, [[Account Password Policy|política de senha da conta]] e os tipos de [[MFA]].
3. [[04.03 - Anatomia de uma Policy IAM|Aula 4.3: Anatomia de uma policy IAM]]: Effect, Action, Resource, Principal, NotAction, variáveis e policies gerenciadas versus inline.
4. [[04.04 - Conditions e Condition Keys|Aula 4.4: Conditions e condition keys]]: operadores, modificadores e os padrões de [[TLS]], organização, Região, [[MFA]] e tags.
5. [[04.05 - Logica de Avaliacao de Policies|Aula 4.5: Lógica de avaliação de policies]]: negação implícita, deny explícito, união e interseção, cross-account e como depurar AccessDenied.
6. [[04.06 - Roles e STS Credenciais Temporarias|Aula 4.6: Roles e STS, credenciais temporárias]]: [[Trust Policy|trust policy]], [[AssumeRole]] e variantes, durações, [[Role Chaining|role chaining]], [[Instance Profile|instance profile]], [[Task Role|task role]] e `iam:PassRole`.
7. [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|Aula 4.7: Acesso entre contas, resource policies e confused deputy]]: role cross-account, [[Resource-Based Policy|resource-based policies]] (inclusive as duas metades da Lambda), `ExternalId` e `aws:SourceArn`.
8. [[04.08 - Guardrails e Menor Privilegio na Pratica|Aula 4.8: Guardrails e menor privilégio na prática]]: [[Permissions Boundary|permissions boundary]], [[Session Policy|session policy]], [[ABAC]], [[IAM Access Analyzer|Access Analyzer]], [[Credential Report|credential report]] e [[Policy Simulator|policy simulator]].

**Por que 8 aulas e nesta ordem.** A sequência é "por quê, depois como": o problema da identidade e quem são os [[Principal|principals]] (4.1), as credenciais que eles carregam (4.2), a linguagem de policy (4.3 e 4.4), as regras que decidem permitir ou negar (4.5), as [[Credencial Temporaria|credenciais temporárias]] que resolvem o problema das chaves (4.6), o acesso que cruza fronteiras (4.7) e, por fim, os tetos e as ferramentas que levam ao [[Menor Privilegio|menor privilégio]] (4.8). A avaliação (4.5) vem antes das roles porque o [[Trust Policy|trust policy]] e o cross-account só fazem sentido quando você sabe que as duas pontas precisam permitir.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 1.1: boas práticas de segurança para [[IAM User\|usuários IAM]] e root ([[MFA]], política de senha) | [[04.01 - Por que IAM Autenticacao Autorizacao e Principals\|Aula 4.1]] e [[04.02 - Usuarios Grupos Credenciais e MFA\|Aula 4.2]] |
| Task 1.1: modelo de autorização flexível (usuários, grupos, roles, policies) | [[04.03 - Anatomia de uma Policy IAM\|Aula 4.3]], [[04.04 - Conditions e Condition Keys\|Aula 4.4]] e [[04.05 - Logica de Avaliacao de Policies\|Aula 4.5]] |
| Task 1.1: estratégia de [[RBAC]] ([[STS]], troca de role, `iam:PassRole`, acesso cross-account) | [[04.06 - Roles e STS Credenciais Temporarias\|Aula 4.6]] e [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy\|Aula 4.7]] |
| Task 1.1: uso adequado de [[Resource-Based Policy\|resource policies]] | [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy\|Aula 4.7]] e [[04.03 - Anatomia de uma Policy IAM\|Aula 4.3]] |
| Task 1.1: quando federar um diretório com roles do [[IAM]] | [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy\|Aula 4.7]] (visão geral; detalhe no Módulo 5) |
| Task 1.1: princípio do [[Menor Privilegio\|menor privilégio]] | [[04.08 - Guardrails e Menor Privilegio na Pratica\|Aula 4.8]] |
| Task 1.2: segurança multiconta ([[SCP\|SCPs]], guardrails) | [[04.05 - Logica de Avaliacao de Policies\|Aula 4.5]] e [[04.08 - Guardrails e Menor Privilegio na Pratica\|Aula 4.8]] (base; o resto no Módulo 5) |
| Task 1.3: proteção de credenciais e segredos | [[04.02 - Usuarios Grupos Credenciais e MFA\|Aula 4.2]] e [[04.06 - Roles e STS Credenciais Temporarias\|Aula 4.6]] |

O [[IAM Identity Center|Identity Center]], o [[Control Tower]], as [[SCP|SCPs]] em detalhe e a [[Federacao|federação]] em escala ficam no [[05 - Multiconta Governanca e Federacao|Módulo 5]]; a criptografia e o [[KMS]], no [[08 - Criptografia e Protecao de Dados|Módulo 8]].

> [!warning] Fatos que mudam
> Valores citados com "verificado em novembro de 2026" vêm da documentação oficial da AWS na data indicada. Quotas e comportamentos mudam: confira a página oficial antes de decidir algo em produção.

## Checklist de saída do módulo

- [ ] Sei explicar por que uma requisição passa por autenticação e depois autorização, e quais são os tipos de principal?
- [ ] Sei explicar por que [[Credencial Temporaria|credenciais temporárias]] de uma role são mais seguras do que [[Access Key|chaves de acesso]] de um [[IAM User|usuário IAM]]?
- [ ] Sei explicar por que, no mesmo acesso, [[Resource-Based Policy|resource policy]] e [[Identity-Based Policy|identity policy]] fazem união e a [[Permissions Boundary|boundary]], a [[SCP]] e a [[Session Policy|session policy]] fazem interseção?
- [ ] Sei explicar por que o `ExternalId` não é um segredo e mesmo assim previne o [[Confused Deputy|confused deputy]]?
- [ ] Sei explicar por que, em acesso cross-account, as duas contas precisam permitir, e quando uma [[Resource-Based Policy|resource policy]] evita [[AssumeRole|assumir uma role]]?
- [ ] Sei explicar por que `BoolIfExists` é necessário na condição de [[MFA]] e como o `aws:RequestedRegion` precisa de `NotAction` para serviços globais?
- [ ] Sei explicar por que uma [[Permissions Boundary|permissions boundary]] e a condição `iam:PermissionsBoundary` resolvem a delegação de criação de roles?
- [ ] Sei explicar por que o [[ABAC]] escala melhor do que o [[RBAC]] e qual é o risco de quem pode editar tags?
- [ ] Sei explicar por que `iam:PassRole` é o furo clássico de [[Escalada de Privilegio|escalada de privilégio]] e como restringi-lo?
- [ ] Sei dizer qual ferramenta responde a cada pergunta: [[IAM Access Analyzer|Access Analyzer]], last accessed, [[Credential Report|credential report]] ou [[Policy Simulator|policy simulator]]?

## Teste-se

**1.** Uma empresa com 30 contas em [[Organizations|AWS Organizations]] encontra credenciais de root esquecidas nas contas membro e quer que os engenheiros acessem as contas sem criar [[IAM]] users. Qual combinação atende?

- [ ] a) Acesso root centralizado para remover as credenciais do root, e Identity Center com roles temporárias
- [ ] b) Um IAM user administrador com MFA em cada conta membro, com as senhas entregues aos engenheiros de cada equipe
- [ ] c) Uma SCP que bloqueie o root e um par de chaves de acesso por engenheiro em cada conta membro da organização
- [ ] d) O root de cada conta mantido com MFA e a senha dele compartilhada em um cofre central da equipe de infraestrutura

**2.** Um pipeline de deploy assume uma role para lançar [[EC2|instâncias EC2]] com o [[Instance Profile|instance profile]] `app-backend` e falha com `not authorized to perform iam:PassRole`. Qual correção segue o [[Menor Privilegio|menor privilégio]]?

- [ ] a) Conceder `iam:*` em todos os recursos à role do pipeline, para evitar novos erros de permissão no futuro e nos deploys seguintes
- [ ] b) Conceder `iam:PassRole` só no ARN das roles de aplicação, com `iam:PassedToService` igual a `ec2.amazonaws.com`
- [ ] c) Anexar `AdministratorAccess` à role do pipeline e remover o acesso depois que o deploy terminar com sucesso
- [ ] d) Mover as roles de aplicação para outra conta e conceder acesso a elas pelo usuário root da conta original

**3.** Quinhentos [[IAM User|usuários IAM]] devem gravar apenas no próprio prefixo `home/NOME/` de um [[Bucket|bucket]], com uma única policy anexada a um grupo. Qual recurso torna isso possível?

- [ ] a) Uma policy inline por usuário, com o nome da pasta escrito no `Resource`
- [ ] b) Uma bucket policy pública, com uma ACL individual por objeto do bucket
- [ ] c) Uma policy com a variável `${aws:username}` no ARN do `Resource`
- [ ] d) Uma SCP anexada a cada conta, com o nome do bucket e dos usuários

**4.** Uma empresa exige [[MFA]] para encerrar [[EC2|instâncias EC2]], e alguns scripts usam [[Access Key|chaves de acesso]] de [[IAM]] users sem MFA. Qual condição, em um Deny, cobre também esses scripts?

- [ ] a) `Bool` de `aws:MultiFactorAuthPresent` igual a `true`, em um Allow comum de `ec2:TerminateInstances` na identidade
- [ ] b) `Bool` de `aws:MultiFactorAuthPresent` igual a `false`, em um Deny de `ec2:TerminateInstances` anexado a todos os usuários
- [ ] c) `Null` de `aws:MultiFactorAuthPresent` igual a `false`, em um Deny de `ec2:TerminateInstances` anexado a todos
- [ ] d) `BoolIfExists` de `aws:MultiFactorAuthPresent` igual a `false`, em um Deny de `ec2:TerminateInstances`

**5.** Uma empresa quer negar o uso de qualquer Região fora de `eu-west-1` e `eu-central-1`, sem quebrar serviços globais como [[IAM]], [[CloudFront]] e [[Route 53]]. Qual desenho funciona?

- [ ] a) Um Deny com `NotAction` listando os serviços globais e `StringNotEquals` em `aws:RequestedRegion`
- [ ] b) Um Deny de todas as ações com `StringNotEquals` em `aws:RequestedRegion`, sem exceções
- [ ] c) Um Allow com `aws:SourceIp` limitado ao escritório da empresa em todas as roles
- [ ] d) Um Allow de `s3:*` somente nas duas Regiões da empresa, sem nenhum outro statement

**6.** Uma [[Member Account|conta membro]] tem uma [[SCP]] que permite apenas `ec2:*`. Um usuário tem `AdministratorAccess`. O que acontece com `s3:PutObject`?

- [ ] a) Permitido, pois `AdministratorAccess` sobrepõe qualquer SCP da organização
- [ ] b) Negado, pois a SCP é um teto e `s3:PutObject` não está permitido nela
- [ ] c) Permitido, mas só se o usuário estiver com MFA ativo na sessão
- [ ] d) Permitido apenas se o bucket estiver na mesma Região da conta

**7.** Uma [[Bucket Policy|bucket policy]] da conta B nomeia uma role da conta A com `s3:GetObject`, e a role não tem nenhuma [[Identity-Based Policy|identity policy]]. Qual é o resultado?

- [ ] a) Permitido, pois a bucket policy da conta B basta entre contas diferentes
- [ ] b) Permitido, pois as duas contas pertencem à mesma organização
- [ ] c) Negado: em cross-account, a identity policy da conta A também precisa permitir
- [ ] d) Negado: a role de A só poderia agir depois de ser assumida por um usuário de B

**8.** Uma [[Tarefa ECS|tarefa do ECS]] precisa ler objetos do [[S3]], e as permissões do código devem ficar separadas das que o agente usa para baixar a imagem. O que configurar?

- [ ] a) A mesma role para o código e para o agente, com `s3:*` e `ecr:*` combinados
- [ ] b) Uma task role para o S3, e a execution role usada também pelo código do container
- [ ] c) Chaves de acesso no Dockerfile, com a execution role sem nenhuma permissão
- [ ] d) Uma task role com acesso ao S3 e uma execution role só para o agente

**9.** Um pipeline de CI/CD precisa implantar na AWS sem armazenar [[Access Key|chaves de acesso]] no provedor do pipeline. Qual é a solução mais segura?

- [ ] a) Confiar no provedor OIDC do pipeline na trust policy e usar `AssumeRoleWithWebIdentity`
- [ ] b) Usar `AssumeRoleWithSAML` com uma asserção gerada pelo próprio pipeline, sem nenhum IdP SAML configurado na conta
- [ ] c) Um IAM user com `GetSessionToken` chamado pelo pipeline usando as chaves de longo prazo dele a cada execução
- [ ] d) Um IAM user com permissões mínimas e as chaves guardadas no cofre de segredos do provedor do pipeline

**10.** Um fornecedor SaaS que atende vários clientes precisa [[AssumeRole|assumir uma role]] na conta da empresa. Qual elemento previne o [[Confused Deputy|confused deputy]] cross-account, e por que ele funciona?

- [ ] a) Uma SCP na conta da empresa que bloqueie os outros clientes do fornecedor ao chamar a API de assunção
- [ ] b) O `sts:ExternalId` na trust policy, único por cliente e controlado pelo SaaS, mesmo sem ser secreto
- [ ] c) MFA obrigatório na trust policy, exigido do usuário do SaaS a cada assunção da role pelo fornecedor
- [ ] d) `aws:SourceArn` na trust policy, com o ARN da conta do fornecedor como origem da chamada de assunção

**11.** O [[CloudTrail]] de várias contas grava em um [[Bucket|bucket]] central. Como impedir que outra conta configure o CloudTrail para gravar nesse bucket?

- [ ] a) Remover o service principal do CloudTrail da bucket policy e usar só roles
- [ ] b) Bloquear o acesso público ao bucket e manter a policy do serviço sem condições
- [ ] c) Condicionar o service principal com `aws:SourceArn` e `aws:SourceAccount`
- [ ] d) Criar uma role de escrita em cada conta de origem do CloudTrail

**12.** Uma [[SQS|fila SQS]] da conta B deve receber mensagens de um tópico [[SNS]] da conta A, e somente desse tópico. Qual policy na fila atende?

- [ ] a) `Principal` `*` com `sqs:SendMessage` e uma condição `aws:SourceIp` com os IPs do SNS
- [ ] b) Uma role em B assumida pelo tópico SNS, com `sqs:*` na fila
- [ ] c) `Principal` com a conta A inteira, sem condições, e `sqs:SendMessage`
- [ ] d) `Principal` `sns.amazonaws.com` com `sqs:SendMessage` e `aws:SourceArn` do tópico

**13.** Os desenvolvedores devem criar roles para as próprias aplicações e entregá-las a instâncias, sem que nenhuma role passe do teto aprovado nem que alguém use uma role poderosa já existente. O que usar?

- [ ] a) Boundary obrigatória via `iam:PermissionsBoundary` e `iam:PassRole` restrito às roles aprovadas
- [ ] b) Um grupo com `AdministratorAccess` e MFA obrigatório para os desenvolvedores criarem roles
- [ ] c) Uma session policy anexada ao usuário de cada desenvolvedor e `iam:PassRole` em `*`
- [ ] d) Uma SCP que negue todas as ações de IAM na organização inteira, inclusive para quem administra as roles

**14.** Uma empresa adotou [[ABAC]] com a tag `projeto` em [[Principal|principals]] e recursos. Qual é o risco principal e o controle correspondente?

- [ ] a) O risco é o tamanho da policy; o controle é trocar as managed policies por inline policies em cada identidade
- [ ] b) Quem edita tags passa a controlar o acesso; o controle é negar ou condicionar as ações de tag
- [ ] c) As tags só valem em resource policies; o controle é migrar todas as permissões para bucket policies
- [ ] d) As tags de sessão expiram com a role; o controle é recriá-las manualmente a cada hora de trabalho

**15.** Uma role tem permissões amplas e a equipe quer reduzi-las ao que a role realmente usa. Qual recurso gera uma policy a partir da atividade observada?

- [ ] a) O credential report, ordenado pela data do último uso das chaves de acesso
- [ ] b) O policy simulator, com todas as ações de IAM selecionadas para a role
- [ ] c) A geração de policy do Access Analyzer, a partir da atividade do CloudTrail
- [ ] d) Uma regra do AWS Config que marca policies com `Action` `*` como não conformes

**16.** A equipe de segurança quer saber quais buckets, roles e chaves do [[KMS]] estão acessíveis a principais fora da organização. O que usar?

- [ ] a) O credential report do IAM, filtrando as contas pela coluna de MFA ativo
- [ ] b) A regra `s3-bucket-public-read-prohibited` do AWS Config, aplicada a toda a organização
- [ ] c) O policy simulator, testando as ações de cada bucket da organização
- [ ] d) O Access Analyzer de acesso externo, com a organização como zona de confiança

**17.** Uma auditoria revisa uma conta e lista oito descobertas. Quais DUAS violam as boas práticas de identidade? (Escolha DUAS.)

- [ ] a) O root tem MFA registrado com uma chave de segurança FIDO
- [ ] b) Existe uma chave de acesso ativa do usuário root
- [ ] c) As instâncias EC2 da aplicação usam instance profile
- [ ] d) As funções Lambda usam execution roles com permissões específicas
- [ ] e) O pipeline usa chaves de um IAM user guardadas como segredo do repositório

**18.** Uma equipe revisa defesas contra o [[Confused Deputy|confused deputy]] em sua arquitetura. Quais DUAS configurações previnem o problema? (Escolha DUAS.)

- [ ] a) `sts:ExternalId` único por cliente na trust policy de uma role assumida por um terceiro
- [ ] b) `aws:SourceArn` e `aws:SourceAccount` na resource policy que autoriza um service principal
- [ ] c) MFA registrado no usuário root da conta que contrata o terceiro
- [ ] d) Block Public Access ativado em todos os buckets da conta
- [ ] e) Uma permissions boundary anexada ao usuário root da conta que contrata o terceiro

**19.** Uma desenvolvedora recebe `AccessDenied` ao ler um objeto do [[S3]], apesar de a [[Identity-Based Policy|identity policy]] dela permitir `s3:GetObject`. Quais DUAS causas são plausíveis? (Escolha DUAS.)

- [ ] a) A permissions boundary dela não inclui `s3:GetObject`
- [ ] b) A policy dela ser uma customer managed policy, e não uma inline
- [ ] c) Uma SCP da OU nega a ação ou não a permite
- [ ] d) A requisição usar HTTPS em vez de HTTP
- [ ] e) O bucket estar em uma Availability Zone diferente da dela

> [!success]- Gabarito
> **1. a)** o acesso root centralizado remove as credenciais do root das contas membro e o [[IAM Identity Center|Identity Center]] entrega roles temporárias; b) cria credenciais permanentes em cada conta; c) a [[SCP]] não remove credenciais e as chaves por conta são de longo prazo; d) compartilhar a senha do root é o oposto da boa prática.
> **2. b)** `PassRole` restrito aos [[ARN|ARNs]] aprovados e ao serviço de destino fecha o erro sem abrir escalada; a) `iam:*` em `*` é privilégio excessivo; c) administrador no pipeline é o oposto do [[Menor Privilegio|menor privilégio]]; d) o root não é caminho de acesso e mover roles não resolve a permissão.
> **3. c)** `${aws:username}` é resolvida por requisição, então uma policy serve a todos; a) não escala; b) [[Bucket|bucket]] público não isola ninguém; d) [[SCP]] não concede acesso nem trata prefixos.
> **4. d)** `BoolIfExists` com `false` em um Deny também pega a chave ausente das chaves de longo prazo; a) Allow não nega nada; b) `Bool` não casa com a chave ausente, então os scripts passam; c) `Null` igual a `false` casa quando a chave existe, ou seja, nega quem tem [[MFA]].
> **5. a)** sem us-east-1 na lista, o endpoint global de [[IAM]], [[CloudFront]] e [[Route 53]] cairia fora e seria negado, por isso o `NotAction`; b) o Deny sem exceções quebraria os serviços globais; c) restringe origem, não Região; d) um Allow não nega o resto.
> **6. b)** a [[SCP]] é um teto e `s3:PutObject` não está permitido nela; a) nada sobrepõe a SCP; c) [[MFA]] não muda o teto; d) a Região não importa.
> **7. c)** em cross-account as duas contas precisam permitir; a) a [[Bucket Policy|bucket policy]] sozinha não basta; b) a mesma organização não dispensa a [[Identity-Based Policy|identity policy]]; d) a role citada na bucket policy já é o principal e não depende de um usuário de B.
> **8. d)** a [[Task Role|task role]] serve ao código e a execution role ao agente; a) mistura os papéis e viola o [[Menor Privilegio|menor privilégio]]; b) o código não deve usar a execution role; c) chaves no [[Docker|Dockerfile]] são risco.
> **9. a)** [[OIDC]] com `AssumeRoleWithWebIdentity` dispensa chaves estáticas; b) `AssumeRoleWithSAML` exige uma asserção de um [[Identity Provider|IdP]] [[SAML]] configurado, não do pipeline; c) `GetSessionToken` ainda parte de chaves de longo prazo; d) as chaves ficam guardadas no provedor.
> **10. b)** o `ExternalId` único por cliente, controlado pelo SaaS, impede que outro cliente use o [[ARN]] da role; a) a [[SCP]] não distingue clientes do fornecedor; c) o [[MFA]] do usuário do SaaS não indica de qual cliente é o pedido; d) `aws:SourceArn` serve a service [[Principal|principals]], não à assunção por um terceiro.
> **11. c)** condicionar o service principal à origem evita o [[Confused Deputy|confused deputy]] entre serviços; a) impediria o [[CloudTrail]] de gravar; b) bloquear acesso público não restringe o serviço; d) roles em cada conta não impedem outra conta de apontar para o [[Bucket|bucket]].
> **12. d)** o service principal do [[SNS]] com `sqs:SendMessage` e `aws:SourceArn` do tópico restringe a origem; a) `aws:SourceIp` não identifica o SNS; b) o tópico não assume roles; c) a conta A inteira abre a fila a qualquer tópico dela.
> **13. a)** a [[Permissions Boundary|boundary]] obrigatória impõe o teto nas roles novas e o `PassRole` restrito impede a entrega de roles poderosas; b) concede administrador; c) a [[Session Policy|session policy]] vale por sessão e `PassRole` em `*` abre a escalada; d) bloquearia quem precisa criar roles.
> **14. b)** no [[ABAC]] as tags são a permissão, então editar tags é editar acesso; a) o tamanho da policy não é o risco; c) tags valem em [[Identity-Based Policy|policies de identidade]] também; d) tags de sessão não exigem recriação manual.
> **15. c)** a geração de policy parte da atividade no [[CloudTrail]]; a) o relatório não gera policy; b) o simulador só testa; d) a [[Config Rule|regra do Config]] detecta curingas, mas não deriva o uso real.
> **16. d)** o [[IAM Access Analyzer|analisador de acesso]] externo mostra recursos acessíveis de fora da zona de confiança; a) o relatório trata de credenciais; b) a regra cobre só leitura pública de buckets, não roles nem chaves [[KMS]] compartilhadas; c) o simulador testa policies.
> **17. b) e e)** chave do root e chaves de [[IAM User|IAM user]] guardadas em repositório são credenciais de longo prazo expostas; a) [[MFA]] FIDO no root é boa prática; c) e d) roles para serviços são a prática correta.
> **18. a) e b)** `ExternalId` cobre o caso entre contas e `aws:SourceArn` com `aws:SourceAccount` cobre o caso entre serviços; c) e e) o root da conta que contrata não tem relação com o deputado; d) [[Block Public Access]] trata acesso público, não o uso indevido de um serviço.
> **19. a) e c)** uma [[Permissions Boundary|boundary]] sem a ação e uma [[SCP]] que não a permite limitam a [[Identity-Based Policy|identity policy]]; b) o tipo de policy (customer managed) não causa o deny; d) HTTPS é o padrão e só um Deny de [[TLS]] barraria [[HTTP]]; e) [[Zona de Disponibilidade|AZ]] não entra na avaliação de acesso.

## Próximo módulo

[[05 - Multiconta Governanca e Federacao|Próximo módulo: Multiconta, governança e federação]]
