---
aliases:
  - Módulo 19
modulo: 19
parte: "V Arquiteturas modernas"
dominios:
  - 1
  - 2
lida: false
tags:
  - modulo
  - saa-c03
  - modulo-19
---

# Módulo 19: Segurança de aplicações e detecção de ameaças

Este módulo responde a uma pergunta de arquitetura: **quando a aplicação já está no ar, o que impede o ataque, o que avisa que ele aconteceu e o que prova quem é cada usuário?** Você vai ver as ameaças externas ([[DDoS]], [[SQL Injection|SQL injection]], [[Cross-Site Scripting|XSS]], bots, credenciais vazadas) e a [[Defesa em Profundidade|defesa em profundidade]], a proteção de borda com [[Shield]] e [[WAF]], a inspeção de rede com [[Network Firewall]] e o [[Route 53 Resolver DNS Firewall|DNS Firewall]], a gestão central com [[Firewall Manager]], a detecção com [[GuardDuty]], [[Inspector]], [[Detective]] e [[Security Hub]], a identidade dos usuários da aplicação com [[Cognito]] e, por fim, as credenciais da própria aplicação.

> [!info] O que este módulo assume
> As permissões do [[04 - IAM Identidade e Acesso|Módulo 4]], a rede privada do [[06 - VPC a Fundo|Módulo 6]], a criptografia e o [[Secrets Manager]] do [[08 - Criptografia e Protecao de Dados|Módulo 8]] e a borda do [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|Módulo 18]] (o [[CloudFront]] é onde o [[WAF]] mais aparece). A segurança de contas e organizações, como [[SCP|SCPs]] e [[Control Tower]], está no [[05 - Multiconta Governanca e Federacao|Módulo 5]].

> [!warning] Preços e funcionalidades mudam
> Os serviços deste módulo ganharam recursos e mudaram de nome nos últimos anos (o console do [[WAF]] fala em "[[Web ACL|protection pack]]", o [[Security Hub]] se dividiu em [[CSPM]] e a nova versão unificada, o [[Network Firewall]] ganhou políticas de nova geração). O módulo marca o que foi confirmado na documentação oficial (verificado em novembro de 2026) e deixa sem número o que não foi. Preços de WAF, [[GuardDuty]] e Network Firewall: confira as páginas oficiais.

## Aulas

1. [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1 Ameaças externas e defesa em profundidade]]: [[DDoS]] nas camadas 3, 4 e 7, [[SQL Injection|SQL injection]], [[Cross-Site Scripting|XSS]], bots, [[Credential Stuffing|credential stuffing]] e o mapa "ataque para serviço".
2. [[19.02 - Shield DDoS Standard e Advanced|19.2 Shield: DDoS Standard e Advanced]]: o que é gratuito e automático, o que o Advanced acrescenta ([[Shield Response Team|SRT]], proteção de custo, grupos) e como desenhar para resistir.
3. [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3 WAF: web ACLs, regras e onde associar]]: ações, prioridade, [[Managed Rule Group|managed rule groups]], [[Rate-Based Rule|rate-based rules]], capacidade e recursos associáveis.
4. [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4 Network Firewall, DNS Firewall e Firewall Manager]]: inspeção stateful na [[VPC]], filtro por domínio e política central em toda a organização.
5. [[19.05 - GuardDuty e Deteccao de Ameacas|19.5 GuardDuty e detecção de ameaças]]: fontes de dados, planos de proteção, [[Finding|findings]], severidade e automação.
6. [[19.06 - Inspector Detective e Security Hub|19.6 Inspector, Detective e Security Hub]]: vulnerabilidades, investigação de causa raiz, agregação de postura e revisão rápida de [[Macie]] e Config.
7. [[19.07 - Cognito User Pools e Identity Pools|19.7 Cognito: user pools e identity pools]]: autenticação, tokens [[JWT]], [[Federacao|federação]], [[Credencial Temporaria|credenciais temporárias]] e integração com [[Application Load Balancer|ALB]] e [[API Gateway]].
8. [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8 Credenciais da aplicação e decisão final]]: nunca hardcode, roles, [[Secrets Manager]], [[Instance Metadata Service|IMDSv2]] e a tabela mestra de decisão do módulo.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 1.2: Projetar arquiteturas seguras de carga de trabalho. Ameaças externas e defesa em camadas | [[19.01 - Ameacas Externas e Defesa em Profundidade\|Aula 19.1]] |
| Task 1.2: Integrar serviços AWS para proteger aplicações (Shield, [[WAF]]) | [[19.02 - Shield DDoS Standard e Advanced\|Aula 19.2]] e [[19.03 - WAF Web ACLs Regras e Onde Associar\|Aula 19.3]] |
| Task 1.2: Segurança de rede da carga de trabalho e gestão central de proteções | [[19.04 - Network Firewall DNS Firewall e Firewall Manager\|Aula 19.4]] |
| Task 1.2: Detecção de ameaças, vulnerabilidades e postura de segurança | [[19.05 - GuardDuty e Deteccao de Ameacas\|Aula 19.5]] e [[19.06 - Inspector Detective e Security Hub\|Aula 19.6]] |
| Task 1.2: Acesso seguro de usuários às aplicações ([[Cognito]]) | [[19.07 - Cognito User Pools e Identity Pools\|Aula 19.7]] |
| Task 1.2: Segurança de configuração e credenciais da aplicação ([[Secrets Manager]], [[Instance Metadata Service\|IMDSv2]]) | [[19.08 - Credenciais da Aplicacao e Decisao Final\|Aula 19.8]] |
| Task 1.2: Segurança de conexões externas (VPN, [[Direct Connect]]) e endpoints de serviço | [[19.08 - Credenciais da Aplicacao e Decisao Final\|Aula 19.8]], com o detalhe no [[07 - Conectividade Hibrida e entre VPCs\|Módulo 7]] e no [[06 - VPC a Fundo\|Módulo 6]] |
| Task 1.1: acesso seguro a recursos AWS ([[IAM]], roles, [[Federacao\|federação]]) | [[04 - IAM Identidade e Acesso\|Módulo 4]] e [[19.07 - Cognito User Pools e Identity Pools\|Aula 19.7]] |
| Task 1.3: proteção de [[Criptografia em Repouso\|dados em repouso]] e em trânsito ([[KMS]], [[Macie]]) | [[08 - Criptografia e Protecao de Dados\|Módulo 8]] |
| Task 2.2: tolerar falhas e resistir a picos ([[DDoS]] como risco de [[Disponibilidade\|disponibilidade]]) | [[19.02 - Shield DDoS Standard e Advanced\|Aula 19.2]] e [[20 - Alta Disponibilidade e Recuperacao de Desastres\|Módulo 20]] |

## Checklist de saída do módulo

Marque cada item quando conseguir explicar a resposta com as suas palavras, sem consultar a aula.

- [ ] Por que um único firewall na porta de entrada não basta, e o que a [[Defesa em Profundidade|defesa em profundidade]] acrescenta?
- [ ] Por que o Shield Standard cobre ataques das camadas 3 e 4, mas não um flood [[HTTP]] bem formado, e quem cobre esse caso?
- [ ] Por que uma [[Rate-Based Rule|rate-based rule]] do [[WAF]] protege o login contra [[Credential Stuffing|credential stuffing]] sem bloquear usuários legítimos?
- [ ] Por que o [[WAF]] não pode ser associado direto a um [[Network Load Balancer|NLB]] ou a uma [[EC2|instância EC2]], e o que se coloca na frente?
- [ ] Por que o [[GuardDuty]] detecta comportamento suspeito sem agente e sem você ativar os logs de origem?
- [ ] Por que o [[GuardDuty]], o Inspector e o [[Macie]] respondem a perguntas diferentes e nenhum substitui os outros?
- [ ] Por que o Detective existe se o [[GuardDuty]] já gera [[Finding|findings]], e o que ele faz que o GuardDuty não faz?
- [ ] Por que o [[Firewall Manager]] exige o Organizations e o Config, e o que ele garante para contas novas?
- [ ] Por que um [[User Pool|user pool]] autentica o usuário, mas só um identity pool entrega credenciais AWS temporárias?
- [ ] Por que o [[Instance Metadata Service|IMDSv2]] dificulta o roubo de credenciais por [[SSRF]], e por que o [[Menor Privilegio|menor privilégio]] continua necessário?

## Teste-se

Dezesseis questões de cenário cobrindo o módulo inteiro. Responda antes de abrir o gabarito.

**1.** Uma loja online atrás de um [[Application Load Balancer]] sofre picos de milhares de requisições [[HTTP]] idênticas ao endpoint de login, vindas de muitos IPs. A equipe quer reduzir o impacto com o menor [[Overhead Operacional|overhead operacional]]. O que fazer?

- [ ] a) Trocar o ALB por um Network Load Balancer, que é mais rápido e não sofre ataques de camada 7.
- [ ] b) Aumentar o tamanho das instâncias do grupo de Auto Scaling.
- [ ] c) Associar um web ACL do WAF ao ALB com uma rate-based rule no caminho de login.
- [ ] d) Fechar a porta 443 do security group.

**2.** Uma empresa quer receber ajuda de especialistas da AWS durante um [[DDoS|ataque DDoS]] e ficar protegida contra o aumento de custo causado por ele. Qual opção atende?

- [ ] a) Shield Advanced, com plano de suporte Business ou Enterprise.
- [ ] b) Shield Standard, que já é automático e cobre também a resposta de especialistas da AWS.
- [ ] c) GuardDuty com plano de proteção de S3.
- [ ] d) Network Firewall com regras stateless.

**3.** Uma aplicação exposta pelo [[CloudFront]] sofre [[SQL Injection|injeção de SQL]] em formulários. Quais DUAS ações bloqueiam o ataque com menor esforço? (Escolha DUAS.)

- [ ] a) Associar um web ACL global do WAF à distribuição.
- [ ] b) Habilitar o Shield Standard e esperar que ele filtre.
- [ ] c) Adicionar o managed rule group de SQL database ao web ACL.
- [ ] d) Associar o Route 53 Resolver DNS Firewall à VPC da origem.
- [ ] e) Ativar o Inspector na distribuição.

**4.** Uma empresa com 60 contas em uma organização precisa garantir que todo [[Application Load Balancer|ALB]] novo, em qualquer conta, receba o mesmo conjunto de regras do [[WAF]] automaticamente. Qual serviço?

- [ ] a) AWS Config com uma regra gerenciada.
- [ ] b) AWS Firewall Manager com uma política de WAF.
- [ ] c) Amazon GuardDuty com administrador delegado.
- [ ] d) AWS Control Tower com um guardrail de região.

**5.** Instâncias em [[Sub-rede Privada|sub-redes privadas]] precisam ter o tráfego de saída filtrado por nome de domínio, permitindo apenas alguns sites da lista da empresa. O que usar?

- [ ] a) Um security group com a lista de domínios permitidos, aplicado às instâncias da sub-rede privada.
- [ ] b) Um NAT gateway, que filtra por nome.
- [ ] c) O WAF associado à instância.
- [ ] d) Network Firewall com regra stateful de lista de domínios e rotas até o endpoint.

**6.** Uma equipe quer ser avisada quando uma [[EC2|instância EC2]] consultar um domínio de comando e controle conhecido, sem instalar agentes e sem ativar logs manualmente. Qual serviço?

- [ ] a) AWS Config.
- [ ] b) Amazon Inspector.
- [ ] c) Amazon GuardDuty.
- [ ] d) AWS Shield Advanced.

**7.** Uma empresa quer identificar quais [[EC2|instâncias EC2]] e [[Imagem de Container|imagens de container]] têm vulnerabilidades de software conhecidas (CVEs) e reavaliar sozinho quando uma nova CVE surgir. Qual serviço?

- [ ] a) Amazon Macie.
- [ ] b) Amazon Detective.
- [ ] c) AWS Security Hub.
- [ ] d) Amazon Inspector.

**8.** Depois de um [[Finding|finding]] de severidade alta no [[GuardDuty]], a equipe precisa reconstruir a sequência de eventos, os recursos e as contas envolvidos. Qual serviço ajuda a investigar a causa raiz?

- [ ] a) Amazon Detective, com o grafo de comportamento.
- [ ] b) AWS Shield.
- [ ] c) Amazon Inspector.
- [ ] d) AWS WAF.

**9.** Uma empresa quer um painel único com [[Finding|findings]] de [[GuardDuty]], Inspector e [[Macie]] e uma checagem contínua de conformidade com o padrão CIS. Quais DUAS condições são necessárias para os controles de postura funcionarem? (Escolha DUAS.)

- [ ] a) Habilitar o AWS Security Hub.
- [ ] b) Instalar o agente do Security Hub em cada instância.
- [ ] c) Habilitar o registro do AWS Config nas contas e Regiões.
- [ ] d) Migrar todos os logs para o Amazon S3 Glacier.
- [ ] e) Criar uma VPN entre as contas.

**10.** Um aplicativo web precisa de cadastro, login com e-mail e senha, [[MFA]] e login social, e deve receber tokens [[JWT]]. Qual recurso do [[Cognito]]?

- [ ] a) Identity pool com acesso de convidado.
- [ ] b) User pool.
- [ ] c) IAM Identity Center.
- [ ] d) AWS Directory Service.

**11.** Um aplicativo móvel, depois do login no [[User Pool|user pool]], precisa que cada usuário envie arquivos direto para o próprio prefixo no [[S3]], [[Serverless|sem servidor]] intermediário. Qual solução?

- [ ] a) Compartilhar uma chave de acesso do IAM no aplicativo, rotacionando-a a cada nova versão publicada na loja de aplicativos.
- [ ] b) Abrir o bucket para escrita pública.
- [ ] c) Trocar o token do user pool no identity pool por credenciais temporárias de uma role restrita ao prefixo.
- [ ] d) Guardar a senha do usuário no Secrets Manager.

**12.** Uma API no [[API Gateway]] REST deve aceitar só chamadas de usuários autenticados em um [[User Pool|user pool]] do [[Cognito]], sem escrever código de validação. O que usar?

- [ ] a) Um authorizer do tipo Cognito user pool no método.
- [ ] b) Uma chave de API no método.
- [ ] c) Uma regra de security group no API Gateway.
- [ ] d) Um endpoint de VPC para a API.

**13.** Uma aplicação em [[EC2]] lê um segredo de banco de dados, e o time quer que a senha rotacione automaticamente sem reimplantar o código. Qual solução?

- [ ] a) Um arquivo cifrado no repositório, com a chave guardada no mesmo repositório do código.
- [ ] b) Variável de ambiente na AMI.
- [ ] c) Parameter Store sem rotação.
- [ ] d) Secrets Manager com rotação automática, lido em tempo de execução.

**14.** Após uma falha de [[SSRF]] numa aplicação, um atacante obteve credenciais da role de instância. Quais DUAS medidas reduzem esse risco no futuro? (Escolha DUAS.)

- [ ] a) Exigir IMDSv2, com tokens obrigatórios.
- [ ] b) Mover a instância para uma sub-rede pública com security group restritivo.
- [ ] c) Aplicar menor privilégio na role da instância.
- [ ] d) Habilitar o GuardDuty para bloquear as chamadas ao serviço de metadados.
- [ ] e) Armazenar uma chave de acesso fixa em variável de ambiente da instância.

**15.** Um banco precisa bloquear consultas [[DNS]] das [[VPC|VPCs]] para domínios maliciosos conhecidos, incluindo tentativas de tunelamento por DNS. Qual serviço?

- [ ] a) AWS WAF.
- [ ] b) AWS Shield Standard.
- [ ] c) Security group de saída.
- [ ] d) Route 53 Resolver DNS Firewall.

**16.** Um aplicativo atrás de um [[Network Load Balancer|NLB]] sofre um ataque volumétrico de [[Modelo OSI|camada 3]] e 4. Qual afirmação descreve a proteção que já existe sem custo adicional?

- [ ] a) O WAF filtra o tráfego no NLB por padrão.
- [ ] b) O Shield Standard protege sozinho contra ataques comuns de camadas 3 e 4.
- [ ] c) O Shield Advanced está ativo em toda conta, sem necessidade de assinatura ou registro.
- [ ] d) O GuardDuty bloqueia os pacotes na borda.

> [!success]- Gabarito
> **1. c)** é um flood de [[Modelo OSI|camada 7]], que o [[WAF]] trata com uma [[Rate-Based Rule|rate-based rule]]; a troca por [[Network Load Balancer|NLB]] e o aumento de instâncias só deslocam o custo, e fechar a 443 derruba o site.
> **2. a)** o Advanced dá acesso à [[Shield Response Team]] (com suporte Business ou Enterprise, verificado em novembro de 2026 na [documentação do Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-summary-capabilities.html)) e proteção de custo; o Standard não tem nenhum dos dois; [[GuardDuty]] detecta e o [[Network Firewall]] não é antiDDoS.
> **3. a) e c)** o [[Web ACL|web ACL]] global associado ao [[CloudFront]] e o [[Managed Rule Group|managed rule group]] de SQL database bloqueiam o padrão de ataque; o Standard não olha a [[Modelo OSI|camada 7]], o [[Route 53 Resolver DNS Firewall|DNS Firewall]] filtra consultas [[DNS]], não requisições [[HTTP]], e o Inspector escaneia vulnerabilidades, não tráfego.
> **4. b)** o [[Firewall Manager]] aplica a política de [[WAF]] a recursos existentes e novos de toda a organização; o Config avalia mas não implanta o WAF, o [[GuardDuty]] detecta e o guardrail do [[Control Tower]] trata de região.
> **5. d)** a lista de domínios no [[Network Firewall]] filtra pelo cabeçalho Host e pelo [[SNI]] do [[TLS]]; [[Security Group|security group]] não filtra por nome, [[NAT Gateway|NAT gateway]] não filtra e o [[WAF]] não se associa a instâncias.
> **6. c)** o [[GuardDuty]] analisa logs de [[DNS]], fluxo da [[VPC]] e [[CloudTrail]] e alerta sobre domínios maliciosos; o Inspector vê vulnerabilidades, o Config vê configuração e o Shield trata [[DDoS]].
> **7. d)** o Inspector escaneia [[EC2]], imagens no [[ECR]] e [[Lambda|funções Lambda]] e reavalia ao surgir uma CVE; o [[Macie]] olha dados sensíveis no [[S3]], o Detective investiga e o [[Security Hub]] agrega.
> **8. a)** o Detective monta o [[Detective|grafo de comportamento]] a partir de [[CloudTrail]], fluxos da [[VPC]] e [[Finding|findings]] do [[GuardDuty]]; Shield e [[WAF]] protegem, o Inspector não investiga incidentes.
> **9. a) e c)** o [[Security Hub]] precisa estar habilitado e o registro do Config é requisito dos controles de postura; ele não usa agente e logs em Glacier e VPN são irrelevantes.
> **10. b)** o [[User Pool|user pool]] é o diretório com cadastro, login, [[MFA]], [[Federacao|federação]] social e emissão de [[JWT]]; o identity pool entrega credenciais AWS, o [[IAM Identity Center|Identity Center]] é para a força de trabalho e o [[Directory Service]] é diretório corporativo.
> **11. c)** o identity pool troca o token por [[Credencial Temporaria|credenciais temporárias]] da role, restritas ao prefixo do usuário; chave embutida e [[Bucket|bucket]] público são inseguros e senha no [[Secrets Manager]] não resolve acesso ao [[S3]].
> **12. a)** o authorizer de [[Cognito]] [[User Pool|user pool]] valida o token no próprio [[API Gateway]]; [[Usage Plan|chave de API]] não identifica usuários, [[Security Group|security group]] não existe nele e [[VPC Endpoint|endpoint de VPC]] não autentica.
> **13. d)** o [[Secrets Manager]] rotaciona e a aplicação lê em tempo de execução, sem redeploy; variável na [[AMI]] e arquivo no repositório são estáticos, e o [[Parameter Store]] não rotaciona nativamente.
> **14. a) e c)** o [[Instance Metadata Service|IMDSv2]] exige um token de sessão e o [[Menor Privilegio|menor privilégio]] limita o dano de credenciais vazadas; b não impede [[SSRF]] vindo da própria aplicação; d erra porque o [[GuardDuty]] detecta e não bloqueia; e troca [[Credencial Temporaria|credencial temporária]] por chave fixa, pior.
> **15. d)** o [[Route 53 Resolver DNS Firewall|DNS Firewall]] bloqueia consultas por domínio, inclusive com regras avançadas para tunelamento; o [[WAF]] só atua em [[HTTP]], o [[Security Group|security group]] não vê nomes e o Standard é antiDDoS.
> **16. b)** o Shield Standard é gratuito e automático nas camadas 3 e 4; o [[WAF]] não se associa ao [[Network Load Balancer|NLB]], o Advanced exige assinatura e o [[GuardDuty]] detecta, não bloqueia.

## Próximo módulo

O módulo seguinte une segurança e resiliência: como manter a aplicação no ar quando uma zona, uma Região ou um componente falha, e como recuperar depois de um desastre. [[20 - Alta Disponibilidade e Recuperacao de Desastres|Módulo 20: alta disponibilidade e recuperação de desastres]].
