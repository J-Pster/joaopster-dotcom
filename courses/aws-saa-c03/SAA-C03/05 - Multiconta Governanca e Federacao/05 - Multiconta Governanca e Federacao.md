---
aliases:
  - Módulo 5
modulo: 5
parte: "II Identidade, rede e dados"
tags:
  - modulo
  - saa-c03
---

# Módulo 5: Multiconta, governança e federação

Uma [[Conta AWS|conta AWS]] é uma fronteira de segurança, de cobrança, de cotas e de [[Raio de Impacto|blast radius]]. Empresas de verdade têm dezenas ou centenas delas, e isso levanta perguntas que o [[04 - IAM Identidade e Acesso|Módulo 4]] não responde sozinho: como organizar e limitar tantas contas, como cobrar, como criar contas novas já com tudo configurado, como dar acesso às pessoas sem criar usuários em cada uma, como compartilhar recursos sem copiá-los, e como saber quem fez o quê e se tudo está em conformidade. Este módulo é o dono do **Organizations, dos [[SCP|SCPs]], do [[Control Tower]], do [[IAM Identity Center]], do [[Directory Service]], do [[RAM]], do [[CloudTrail]] e do Config**, e cobre a parte multiconta da Task 1.1 do exam guide, com ecos na Task 4.x (custos entre contas).

É um módulo **conceitual com um pouco de prática**: as aulas [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]] e [[05.09 - AWS Config e Conformidade Continua|5.9]] trazem laboratório opcional com avisos de custo e limpeza, sempre em conta pessoal, e nenhum comando precisa de produção. As demais aulas são conceituais, porque mexer em Organizations ou no [[IAM Identity Center|Identity Center]] altera a organização inteira. O próximo módulo, [[06 - VPC a Fundo|VPC a fundo]], retoma o [[VPC Sharing|compartilhamento de sub-redes]] e o [[Transit Gateway]] já com redes multiconta em mente.

> [!info] Pré-requisitos
> O [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] apresentou contas, [[Regiao AWS|Regiões]] e [[Modelo de Responsabilidade Compartilhada|responsabilidade compartilhada]], o [[02 - Well-Architected e o Formato da Prova|Módulo 2]] o pilar de segurança, e o [[04 - IAM Identidade e Acesso|Módulo 4]] policies, roles e [[STS]]. Aqui você aplica tudo isso à escala de uma organização.

## Aulas

1. [[05.01 - Por que Varias Contas e Como o Organizations Organiza|Aula 5.1: Por que várias contas e como o Organizations organiza]]: a conta como fronteira, OUs, [[Management Account|conta de gerenciamento]] e [[Member Account|contas membros]].
2. [[05.02 - SCPs e Politicas de Organizacao|Aula 5.2: SCPs e políticas de organização]]: [[SCP|SCPs]] como teto, [[Deny List|deny-list]] e [[Allow List|allow-list]], [[RCP|RCPs]] e os outros tipos de política.
3. [[05.03 - Cobranca Consolidada e Custos Multiconta|Aula 5.3: Cobrança consolidada e custos multiconta]]: descontos por volume, compartilhamento de [[Reserved Instance|RIs]] e [[Savings Plans]], tags de alocação.
4. [[05.04 - Control Tower e Landing Zone|Aula 5.4: Control Tower e landing zone]]: controles, [[Account Factory]], drift e a escolha entre [[Control Tower]] e Organizations puro.
5. [[05.05 - IAM Identity Center|Aula 5.5: IAM Identity Center]]: instâncias, [[Identity Source|fontes de identidade]], [[SCIM]] e [[Permission Set|permission sets]].
6. [[05.06 - Federacao com IAM e Directory Service|Aula 5.6: Federação com IAM e Directory Service]]: [[SAML]], [[OIDC]], [[Directory Service|Managed AD]], [[AD Connector]] e [[Simple AD]].
7. [[05.07 - RAM e Compartilhamento entre Contas|Aula 5.7: RAM e compartilhamento entre contas]]: [[Resource Share|resource shares]], [[VPC Sharing|sub-redes compartilhadas]] e [[Managed Permission|permissões gerenciadas]].
8. [[05.08 - CloudTrail e a Trilha de Auditoria|Aula 5.8: CloudTrail e a trilha de auditoria]]: tipos de evento, [[Trail|trails]], [[Organization Trail|trail da organização]] e integridade dos logs.
9. [[05.09 - AWS Config e Conformidade Continua|Aula 5.9: AWS Config e conformidade contínua]]: [[Configuration Item|itens de configuração]], regras, [[Remediacao Automatica|remediação]], pacotes e agregadores.

**Por que 9 aulas e nesta ordem.** A sequência vai da estrutura ao controle, e do controle ao acesso e à evidência. Primeiro a **estrutura** (5.1): sem entender conta, OU e [[Management Account|conta de gerenciamento]], nada do resto faz sentido. Depois os **limites** (5.2, [[SCP|SCPs]]) e o **dinheiro** (5.3), que dependem dessa estrutura. O **[[Control Tower]]** (5.4) vem depois porque empacota estrutura e limites num projeto pronto, e só se aprecia o pacote conhecendo as peças. O **acesso** vem em seguida: o [[IAM Identity Center|Identity Center]] (5.5) resolve pessoas em muitas contas, e a [[Federacao|federação]] e o [[Directory Service]] (5.6) cobrem os demais caminhos de identidade. O **[[RAM]]** (5.7) trata do que se compartilha depois que as contas estão separadas. E, por fim, a **evidência**: o [[CloudTrail]] (5.8) diz quem fez, o Config (5.9) diz como está.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 1.1: controle de acesso e gerenciamento entre várias contas (Organizations, [[RAM]]) | [[05.01 - Por que Varias Contas e Como o Organizations Organiza\|Aula 5.1]], [[05.02 - SCPs e Politicas de Organizacao\|Aula 5.2]] e [[05.07 - RAM e Compartilhamento entre Contas\|Aula 5.7]] |
| Task 1.1: estratégia de segurança para múltiplas contas ([[Control Tower]], [[SCP\|SCPs]]) | [[05.02 - SCPs e Politicas de Organizacao\|Aula 5.2]] e [[05.04 - Control Tower e Landing Zone\|Aula 5.4]] |
| Task 1.1: serviços de [[Federacao\|acesso federado]] e identidade ([[IAM]], [[IAM Identity Center]]) | [[05.05 - IAM Identity Center\|Aula 5.5]] e [[05.06 - Federacao com IAM e Directory Service\|Aula 5.6]] |
| Task 1.1: quando federar um serviço de diretório com roles do [[IAM]] | [[05.06 - Federacao com IAM e Directory Service\|Aula 5.6]] |
| Task 1.1: auditoria e conformidade ([[CloudTrail]], Config) | [[05.08 - CloudTrail e a Trilha de Auditoria\|Aula 5.8]] e [[05.09 - AWS Config e Conformidade Continua\|Aula 5.9]] |
| Task 4.x: custos entre contas ([[Consolidated Billing\|cobrança consolidada]], tags, [[Reserved Instance\|RIs]] e [[Savings Plans]]) | [[05.03 - Cobranca Consolidada e Custos Multiconta\|Aula 5.3]] |

O [[VPC Sharing|compartilhamento de sub-redes]] e o [[Transit Gateway]] voltam no [[06 - VPC a Fundo|Módulo 6]]; a criptografia dos logs, com [[KMS]], no [[08 - Criptografia e Protecao de Dados|Módulo 8]]; e a otimização de custos em profundidade no [[25 - Otimizacao de Custos|Módulo 25]].

> [!warning] Fatos que mudam
> Valores e avisos marcados com "verificado em novembro de 2026" vêm da documentação oficial da AWS nessa data: o tamanho máximo de um [[SCP]], o fechamento do [[CloudTrail]] Lake e do [[Simple AD]] a novos clientes, o nome e as regras do [[IAM Identity Center]], a lista de recursos compartilháveis do [[RAM]]. Confira a página oficial antes de decidir algo em produção.

## Checklist de saída do módulo

- [ ] Sei explicar por que uma conta é uma fronteira de segurança, de cobrança e de [[Raio de Impacto|raio de impacto]], e por que isso justifica várias contas?
- [ ] Sei explicar por que um [[SCP]] é um teto e nunca uma concessão, e por que ele não afeta a [[Management Account|conta de gerenciamento]]?
- [ ] Sei explicar por que a [[Consolidated Billing|cobrança consolidada]] reduz o custo (volume, [[Reserved Instance|RIs]] e [[Savings Plans]] compartilhados) sem tirar a separação entre contas?
- [ ] Sei explicar por que o [[Control Tower]] existe se o Organizations já cria contas e aplica [[SCP|SCPs]], e qual é o papel dos [[Controle Preventivo|controles preventivos]] e detectivos?
- [ ] Sei explicar por que o [[IAM Identity Center|Identity Center]] substitui [[IAM User|usuários IAM]] por conta, e por que o [[Permission Set|permission set]] vira um role em cada conta?
- [ ] Sei explicar por que a [[Federacao|federação]] troca uma prova de identidade por [[Credencial Temporaria|credenciais temporárias]], e quando usar [[SAML]], [[OIDC]], [[IAM Identity Center|Identity Center]] ou [[Cognito]]?
- [ ] Sei explicar por que o [[AD Connector]] não guarda dados e não é compartilhável, e quando o [[Directory Service|Managed Microsoft AD]] é a resposta?
- [ ] Sei explicar por que o [[RAM]] evita duplicar recursos, e por que [[Sub-rede|sub-redes]] só vão para contas da mesma organização?
- [ ] Sei explicar por que uma [[Organization Trail|trail da organização]] com [[Log File Validation|validação de integridade]] e [[SCP]] protege o registro de auditoria?
- [ ] Sei dizer qual serviço responde a cada pergunta: [[CloudTrail]] (quem fez), Config (como está) ou [[CloudWatch]] (como se comporta)?

## Teste-se

**1.** Uma empresa roda cargas de produção e de desenvolvimento na mesma conta, e uma mudança errada em desenvolvimento já derrubou produção. A empresa também quer separar os custos por ambiente. Qual é a abordagem mais alinhada às boas práticas?

- [ ] a) Criar mais VPCs na mesma conta e separar o acesso entre produção e desenvolvimento por tags e security groups
- [ ] b) Separar os ambientes por Região, mantendo uma única conta, para que um incidente em uma Região não alcance a outra
- [ ] c) Criar contas separadas para produção e desenvolvimento, agrupadas em OUs do Organizations
- [ ] d) Manter uma conta única e aplicar um SCP em cada recurso

**2.** Um administrador da [[Management Account|conta de gerenciamento]] do Organizations tenta usar uma ação bloqueada por um [[SCP]] anexado à raiz da organização. O que acontece?

- [ ] a) A ação é permitida, porque os SCPs não afetam a conta de gerenciamento
- [ ] b) A ação é negada, porque o SCP da raiz vale para todas as contas, sem exceção
- [ ] c) A ação é permitida apenas com MFA na sessão
- [ ] d) A ação é negada somente nas contas membros e liberada em Regiões que a empresa escolher

**3.** A OU mantém o [[FullAWSAccess|SCP padrão]] `FullAWSAccess` (Allow para `*`). Um usuário de uma conta dessa OU não tem nenhuma [[Identity-Based Policy|identity policy]]. Qual é o resultado de um `s3:GetObject`?

- [ ] a) Permitido, porque o `FullAWSAccess` concede a permissão ao usuário
- [ ] b) Negado: o SCP só define o teto, não concede nada, e falta a identity policy
- [ ] c) Permitido, porque o S3 aceita qualquer principal que pertença à mesma OU, mesmo sem identity policy anexada
- [ ] d) Negado, porque o SCP bloqueia toda a conta até que outro SCP seja anexado para liberar explicitamente o acesso ao S3

**4.** Duas contas de uma organização usam [[EC2|instâncias EC2]] sob demanda e uma delas tem [[Reserved Instance|Reserved Instances]] com capacidade ociosa. Como a [[Consolidated Billing|cobrança consolidada]] ajuda?

- [ ] a) A capacidade ociosa é perdida, pois cada conta paga apenas pelo que contratou
- [ ] b) O desconto só vale se as duas contas forem movidas para a mesma Região
- [ ] c) Os descontos de volume funcionam, mas o compartilhamento de RIs exige um contrato separado
- [ ] d) O desconto das Reserved Instances pode ser aplicado ao uso elegível de outras contas da organização, e o volume é somado entre as contas

**5.** Uma empresa quer que o [[Control Tower]] detecte quando um [[Bucket|bucket]] [[S3]] se torna público em qualquer conta, sem impedir a criação. Qual tipo de controle usar, e como ele é implementado?

- [ ] a) Preventivo, implementado como um SCP
- [ ] b) Detectivo, implementado com uma regra do AWS Config
- [ ] c) Proativo, implementado com um bloqueio na criação
- [ ] d) Um alarme do CloudWatch, sem qualquer relação com o Control Tower

**6.** Uma empresa precisa criar contas novas com a mesma base de segurança, a mesma rede e o mesmo conjunto de controles, de forma repetível e com autoatendimento. O que usar?

- [ ] a) O Account Factory do Control Tower
- [ ] b) Criar a conta manualmente e copiar a configuração a cada vez
- [ ] c) Um script que cria contas e aplica as configurações por tentativa e erro
- [ ] d) Um usuário IAM em cada conta com permissões de administrador

**7.** Uma empresa com 30 contas e um [[Identity Provider|IdP]] corporativo quer SSO para console e CLI com [[Credencial Temporaria|credenciais temporárias]], e a menor carga de manutenção. O que escolher?

- [ ] a) Um provedor SAML do IAM e roles criados à mão em cada conta
- [ ] b) Usuários IAM por pessoa em cada conta, com MFA habilitado
- [ ] c) Cognito identity pool para os funcionários
- [ ] d) IAM Identity Center com o IdP como fonte de identidade

**8.** (Escolha DUAS.) Quais afirmações sobre o [[IAM Identity Center]] estão corretas?

- [ ] a) A organization instance é a que gerencia o acesso às contas da organização
- [ ] b) Um permission set é um usuário IAM criado em cada conta
- [ ] c) Quando um permission set é atribuído, o serviço cria um role correspondente na conta alvo
- [ ] d) O Identity Center serve para os clientes finais de um aplicativo
- [ ] e) A sessão de um permission set é fixa em 24 horas

**9.** Uma empresa quer que usuários do Amazon [[WorkSpaces]] entrem com as credenciais do [[Active Directory]] local, sem manter nenhum diretório nem domain controller na AWS. Qual serviço atende?

- [ ] a) AWS Managed Microsoft AD, com uma relação de confiança para o AD local, que mantém um diretório na AWS
- [ ] b) Simple AD, criado em cada conta
- [ ] c) AD Connector
- [ ] d) Cognito user pool, com os funcionários importados

**10.** Um pipeline do GitHub Actions precisa publicar uma imagem na AWS sem armazenar chaves. Qual é a solução mais segura?

- [ ] a) Provedor OIDC no IAM e um role com política de confiança restrita ao repositório
- [ ] b) Um usuário IAM com a access key guardada como segredo do repositório
- [ ] c) As credenciais root restritas por IP do pipeline
- [ ] d) Uma chave compartilhada por toda a equipe de desenvolvimento

**11.** Uma conta de rede possui um [[Transit Gateway]] que 30 contas da organização precisam usar, sem duplicar o recurso. O que fazer?

- [ ] a) Criar um Transit Gateway em cada conta e ligar todos entre si
- [ ] b) Exportar a configuração do Transit Gateway para cada conta por script e recriar o recurso em cada uma delas
- [ ] c) Enviar o ARN do Transit Gateway por e-mail aos administradores de cada conta, para que eles anexem as suas VPCs
- [ ] d) Habilitar o compartilhamento com o Organizations no RAM e compartilhar o Transit Gateway com a organização

**12.** Uma equipe de aplicação recebe uma [[VPC Sharing|sub-rede compartilhada]] pelo [[RAM]] e tenta criar um [[NAT Gateway|NAT gateway]] nela. A operação é negada. Por quê?

- [ ] a) O RAM só compartilha sub-redes públicas
- [ ] b) NAT gateways, rotas, NACLs e gateways são gerenciados pelo dono da VPC
- [ ] c) O compartilhamento expirou após 24 horas
- [ ] d) Falta um SCP específico para NAT gateways

**13.** (Escolha DUAS.) Quais afirmações sobre a [[Organization Trail|trail da organização]] do [[CloudTrail]] estão corretas?

- [ ] a) Registra a conta de gerenciamento e todas as contas membros
- [ ] b) As contas membros podem desligar o registro da trail
- [ ] c) As contas membros veem a trail, mas não conseguem alterá-la
- [ ] d) Só registra a conta de gerenciamento
- [ ] e) Cada conta membro precisa criar uma trail separada manualmente

**14.** Um auditor quer saber quem deletou um objeto específico do [[S3]]. A trail só usa a configuração padrão. Qual é o problema?

- [ ] a) O CloudTrail não registra atividade do S3 em nenhuma situação, porque o S3 tem o seu próprio sistema de logs
- [ ] b) Só trails de Região única registram atividade do S3
- [ ] c) Operações em objetos são eventos de dados, que não são registrados por padrão
- [ ] d) O Event history foi desligado por um SCP

**15.** Uma empresa quer ver, num só lugar, o estado de conformidade de 40 contas e de várias [[Regiao AWS|Regiões]]. O que usar?

- [ ] a) Um agregador do AWS Config
- [ ] b) Uma trail do CloudTrail em cada conta, consultada manualmente
- [ ] c) Um pacote do CloudWatch Logs em cada conta
- [ ] d) Um agregador que implanta regras nas contas de origem

**16.** Qual combinação garante que ninguém use [[Regiao AWS|Regiões]] fora das aprovadas e, ao mesmo tempo, detecta buckets [[S3]] públicos e os corrige?

- [ ] a) Somente uma regra do Config com remediação automática, que também restringe as Regiões usadas pelas contas
- [ ] b) Somente o CloudTrail com Insights habilitado
- [ ] c) Um SCP que restringe as Regiões e uma regra do Config com remediação para os buckets públicos
- [ ] d) Somente o Event history, consultado toda semana

**17.** (Escolha DUAS.) Quais afirmações sobre os [[SCP|SCPs]] estão corretas?

- [ ] a) Um SCP define o teto de permissões e nunca concede acesso por si só
- [ ] b) Um SCP vale também para o usuário root das contas membros
- [ ] c) Um SCP vale para a conta de gerenciamento
- [ ] d) Um SCP substitui as identity policies dos usuários
- [ ] e) Um SCP restringe os service-linked roles das contas

**18.** Uma empresa precisa provar a um auditor que os arquivos de log do [[CloudTrail]] não foram alterados depois da entrega ao [[S3]]. O que habilitar na trail?

- [ ] a) O CloudTrail Insights, que detecta anomalias de volume de chamadas
- [ ] b) A validação de integridade dos arquivos de log, que gera arquivos digest assinados
- [ ] c) O Event history, que mantém os eventos por 90 dias
- [ ] d) Um agregador do Config, que compara as versões dos logs

> [!success]- Gabarito
> **1. c)** Contas separadas isolam o [[Raio de Impacto|blast radius]] e a cobrança, e as OUs agrupam as políticas. a) [[VPC|VPCs]] na mesma conta compartilham a fronteira de segurança e de cotas; b) [[Regiao AWS|Regiões]] não são fronteira de conta; d) [[SCP]] não se anexa a recursos.
> **2. a)** [[SCP|SCPs]] não afetam a [[Management Account|conta de gerenciamento]], o que justifica não rodar cargas nela. b) a regra tem exceção; c) [[MFA]] não altera a avaliação de SCP; d) o efeito não depende da Região.
> **3. b)** O `FullAWSAccess` só deixa passar: o [[SCP]] é um teto e nunca concede permissão, e sem [[Identity-Based Policy|identity policy]] o acesso é negado. a) SCP não concede; c) o [[S3]] não funciona assim; d) um Allow no SCP não bloqueia nada.
> **4. d)** O desconto de [[Reserved Instance|RIs]] e o volume são compartilhados entre as contas da organização. a) a capacidade ociosa é aproveitada; b) a Região não é a condição; c) não há contrato separado para o compartilhamento.
> **5. b)** Um [[Controle Detectivo|controle detectivo]] identifica sem impedir e é implementado com o Config. a) o preventivo bloqueia; c) não é o tipo descrito; d) o [[Control Tower]] gerencia o controle, não um alarme avulso.
> **6. a)** O [[Account Factory]] provisiona contas com base e controles padronizados, com autoatendimento. b) manual, sujeito a erro; c) improvisado e frágil; d) administradores locais fogem do padrão.
> **7. d)** O [[IAM Identity Center|Identity Center]] configura uma vez, atribui acesso a muitas contas e entrega a CLI com [[Credencial Temporaria|credenciais temporárias]]. a) funciona, mas exige manutenção em cada conta; b) [[IAM User|usuários IAM]] por conta não escalam; c) [[Cognito]] é para usuários de aplicação.
> **8. a) e c)** A organization instance gerencia as contas, e o [[Permission Set|permission set]] vira role na conta alvo. b) permission sets não são [[IAM User|usuários IAM]]; d) o [[IAM Identity Center|Identity Center]] é para a força de trabalho; e) a sessão vai de 1 a 12 horas.
> **9. c)** O [[AD Connector]] repassa a autenticação ao [[Active Directory|AD]] local sem diretório nem domain controller na AWS. a) o [[Directory Service|Managed AD]] com trust de duas direções também serve ao [[WorkSpaces]], mas cria um diretório na AWS, o que o enunciado proíbe; b) o [[Simple AD]] é um diretório Samba, fechado a novos clientes; d) [[Cognito]] exigiria importar os funcionários.
> **10. a)** O provedor [[OIDC]] com role restrito troca o token do GitHub por [[Credencial Temporaria|credenciais temporárias]]. b) a [[Access Key|access key]] é de longo prazo; c) a credencial root nunca deve ser usada; d) uma chave compartilhada perde rastreabilidade.
> **11. d)** O [[RAM]] compartilha o [[Transit Gateway]] com a organização, sem convites. a) duplica o recurso; b) o Transit Gateway não se exporta por script; c) o [[ARN]] não concede acesso.
> **12. b)** O dono da [[VPC]] gerencia gateways, rotas e [[Network ACL|NACLs]]. a) o [[RAM]] compartilha [[Sub-rede|sub-redes]] sem esse limite; c) não há expiração de 24 horas; d) a restrição não é por [[SCP]].
> **13. a) e c)** A [[Organization Trail|trail da organização]] cobre todas as contas, e os membros a veem sem alterá-la. b) os membros não podem desligar; d) cobre os membros também; e) a cópia é criada automaticamente.
> **14. c)** Operações em objetos do [[S3]] são [[Data Event|eventos de dados]], que precisam ser habilitados. a) o [[CloudTrail]] registra o S3; b) o tipo de trail não resolve; d) o [[Event History|Event history]] não tem eventos de dados e não foi desligado por [[SCP]].
> **15. a)** O agregador dá visão central de conformidade e configuração entre contas e [[Regiao AWS|Regiões]]. b) manual e sem visão de conformidade; c) o [[CloudWatch Logs]] não avalia conformidade; d) o agregador é somente leitura, não implanta regras.
> **16. c)** O [[SCP]] impede a Região fora da lista, e o Config detecta e corrige os buckets públicos. a) o Config não impede o uso de [[Regiao AWS|Regiões]]; b) o Insights detecta anomalia de API; d) o [[Event History|Event history]] só mostra eventos.
> **17. a) e b)** O [[SCP]] é teto e alcança o root das [[Member Account|contas membros]]. c) a [[Management Account|conta de gerenciamento]] não é afetada; d) SCP não substitui [[Identity-Based Policy|identity policies]]; e) [[Service-Linked Role|service-linked roles]] não são afetados por SCPs.
> **18. b)** A [[Log File Validation|validação de integridade]] gera arquivos digest assinados que permitem detectar alteração ou remoção dos logs. a) o Insights trata de anomalias; c) o [[Event History|Event history]] não prova integridade de arquivos entregues; d) o Config não compara logs.

## Próximo módulo

[[06 - VPC a Fundo|Módulo 6: VPC a fundo]]: [[Sub-rede|sub-redes]], rotas, gateways, endpoints e topologias entre várias contas, com o [[VPC Sharing|compartilhamento de sub-redes]] e o [[Transit Gateway]] que você acabou de conhecer.
