---
aliases:
  - Início SAA-C03
  - Solutions Architect Associate
tags:
  - inicio
  - moc
  - saa-c03
---
# Aprendendo AWS Solutions Architect Associate (SAA-C03): Trilha de Aprendizado

Objetivo final: passar na prova **AWS Certified Solutions Architect - Associate (SAA-C03)** com folga,
entendendo o porquê de cada decisão de arquitetura, e não decorando "serviço X serve para Y". O curso
cobre todos os task statements do exam guide oficial (versão 1.1) e os serviços in-scope, com
profundidade proporcional ao peso de cada domínio na prova.

| Domínio da prova | Peso |
|------------------|------|
| 1. Design Secure Architectures | 30% |
| 2. Design Resilient Architectures | 26% |
| 3. Design High-Performing Architectures | 24% |
| 4. Design Cost-Optimized Architectures | 20% |

A prova tem 65 questões (50 contam nota e 15 não contam e não são identificadas), nota em escala de 100
a 1.000, aprovação com 720 e pontuação compensatória: não é preciso passar em cada domínio, só no total.
Logística, preço, [[Acomodacao ESL|acomodação ESL]] e agendamento estão na [[27.01 - Logistica da Prova de Ponta a Ponta|aula 27.1]].

> [!warning] Laboratórios só na sua conta pessoal
> Todo laboratório do curso deve ser feito numa [[Conta AWS|conta AWS]] pessoal, com [[Budgets|AWS Budgets]] e alerta de custo
> configurados antes de criar qualquer recurso, e com limpeza ao final de cada aula. Nunca use a conta da
> empresa, e muito menos a conta de produção: um teste de [[NAT Gateway]], um cluster esquecido ou uma
> política [[IAM]] aberta numa conta real custa dinheiro e pode virar incidente de segurança. Preços e
> limites citados nas aulas foram verificados em novembro de 2026 e mudam; confira a página oficial antes
> de criar recursos pagos.

## Painel de progresso

Cada aula tem a propriedade **lida** (caixinha no topo da nota). Marque quando terminar e o painel abaixo
atualiza sozinho: "Por módulo" mostra quantas você já leu em cada módulo, "Próximas a ler" mostra por
onde continuar, "Por parte" agrupa pelas 8 partes e as quatro visões por domínio mostram o avanço em
cada domínio da prova (uma aula pode servir a mais de um domínio).

![[Progresso SAA-C03.base]]

## Como estudar este curso

> [!tip] Hábitos que fazem o curso render
> - **Passe o mouse** sobre qualquer termo sublinhado para ver a definição do glossário sem sair da aula.
> - Cada nota do glossário lista em "Onde aparece" as aulas que usam o termo.
> - Nos questionários, marque a sua alternativa e abra o **Gabarito** (recolhido) só depois.

## Filosofia da trilha: o porquê antes do como

Toda resposta certa da SAA-C03 é consequência de poucos princípios: falhas acontecem, então nada pode
depender de uma única [[Zona de Disponibilidade]]; todo acesso começa negado, então permissão é uma
decisão explícita; dado que cruza fronteira (de [[Zona de Disponibilidade|AZ]], de Região, para a internet) custa e demora; e a AWS
prefere o serviço gerenciado que tira trabalho operacional de você. Por isso o curso sobe em camadas:
primeiro a infraestrutura global, o jeito de pensar da prova e as redes; depois identidade, rede e
proteção de dados; depois computação e armazenamento; bancos de dados; arquiteturas modernas
(desacopladas, [[Serverless|serverless]], [[Container|containers]], borda); resiliência e operações; dados, migração e IA; e por fim
custo, um projeto integrado e a estratégia de prova com simulados.

## Estrutura: 27 módulos em 8 partes

O conteúdo principal é **texto escrito para este curso**. Cada módulo tem uma nota de índice com o nome
do módulo (lista das aulas, cobertura do exam guide, checklist de saída e teste com gabarito) e várias
aulas. Cada aula traz o problema (por quê), o mecanismo (como funciona por dentro), a decisão (como se
faz), uma seção "Como isso cai na prova", resumo, erros comuns, um questionário de múltipla escolha com
gabarito comentado e links para aprofundar.

### Parte I: Fundamentos

Mapa da parte, com todas as aulas: [[SAA Parte I - Fundamentos]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 1 | [[01 - Nuvem e Infraestrutura Global AWS\|Nuvem e Infraestrutura Global AWS]] | Por que a nuvem existe, [[Regiao AWS\|Regiões]], [[Zona de Disponibilidade\|AZs]], [[Edge Location\|edge locations]], [[Local Zone\|Local Zones]] e Outposts, [[Modelo de Responsabilidade Compartilhada\|modelo de responsabilidade compartilhada]] |
| 2 | [[02 - Well-Architected e o Formato da Prova\|Well-Architected e o Formato da Prova]] | Os seis pilares, [[Trade-off\|trade-offs]], como as questões são construídas e como ler um cenário |
| 3 | [[03 - Fundamentos de Redes para a Nuvem\|Fundamentos de Redes para a Nuvem]] | [[Modelo OSI]], IP e [[CIDR]], [[TCP]] e [[UDP]], [[DNS]], [[TLS]], roteamento e [[Latencia\|latência]], a base de todo o resto |

### Parte II: Identidade, rede e dados

Mapa da parte, com todas as aulas: [[SAA Parte II - Identidade rede e dados]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 4 | [[04 - IAM Identidade e Acesso\|IAM, Identidade e Acesso]] | Usuários, roles, políticas, lógica de avaliação, [[Permissions Boundary\|permissions boundary]], [[Credencial Temporaria\|credenciais temporárias]] |
| 5 | [[05 - Multiconta Governanca e Federacao\|Multiconta, Governança e Federação]] | Organizations, [[SCP]] e [[RCP]], [[Control Tower]], [[IAM Identity Center]], [[Federacao\|federação]], [[RAM]], [[CloudTrail]] e Config |
| 6 | [[06 - VPC a Fundo\|VPC a Fundo]] | [[Sub-rede\|Sub-redes]], [[Route Table\|route tables]], Internet e [[NAT Gateway]], [[Security Group\|security group]] e [[Network ACL\|NACL]], [[VPC Endpoint\|VPC endpoints]] |
| 7 | [[07 - Conectividade Hibrida e entre VPCs\|Conectividade Híbrida e entre VPCs]] | Peering, [[Transit Gateway]], [[PrivateLink]], [[Site-to-Site VPN]], [[Direct Connect]], [[DNS]] híbrido, [[Data Transfer\|custo de transferência]] |
| 8 | [[08 - Criptografia e Protecao de Dados\|Criptografia e Proteção de Dados]] | [[KMS]] e [[Envelope Encryption\|envelope encryption]], [[CloudHSM]], [[ACM]], [[Secrets Manager]] e [[Parameter Store]], [[Macie]], [[Criptografia em Repouso\|dados em repouso]] e em trânsito |

### Parte III: Computação e armazenamento

Mapa da parte, com todas as aulas: [[SAA Parte III - Computacao e armazenamento]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 9 | [[09 - EC2 a Fundo\|EC2 a Fundo]] | Famílias de instância, opções de compra, [[Placement Group\|placement groups]], [[Instance Store\|instance store]], Batch |
| 10 | [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx\|Armazenamento em Bloco e Arquivos]] | [[EBS]] e seus tipos de volume, [[Snapshot\|snapshots]], [[EFS]], a [[FSx\|família FSx]] |
| 11 | [[11 - Amazon S3 a Fundo\|Amazon S3 a Fundo]] | Classes de armazenamento, ciclo de vida, [[Versionamento\|versionamento]], replicação, segurança e desempenho do [[S3]] |
| 12 | [[12 - Balanceamento de Carga e Auto Scaling\|Balanceamento de Carga e Auto Scaling]] | [[Application Load Balancer\|ALB]], [[Network Load Balancer\|NLB]] e [[Gateway Load Balancer\|GWLB]], [[Health Check\|health checks]], políticas de [[Auto Scaling Group\|Auto Scaling]], [[Elasticidade\|elasticidade]] |

### Parte IV: Bancos de dados

Mapa da parte, com todas as aulas: [[SAA Parte IV - Bancos de dados]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 13 | [[13 - Bancos Relacionais RDS e Aurora\|Bancos Relacionais: RDS e Aurora]] | [[Multi-AZ]], read replicas, backups, [[RDS Proxy]], arquitetura do [[Aurora]] e Global Database |
| 14 | [[14 - DynamoDB Cache e Bancos de Proposito Especifico\|DynamoDB, Cache e Bancos de Propósito Específico]] | Modelagem e capacidade do [[DynamoDB]], [[DAX]], [[ElastiCache]], e quando usar [[DocumentDB]], [[Neptune]], [[Keyspaces]] e outros |

### Parte V: Arquiteturas modernas

Mapa da parte, com todas as aulas: [[SAA Parte V - Arquiteturas modernas]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 15 | [[15 - Desacoplamento Filas Eventos e Workflows\|Desacoplamento: Filas, Eventos e Workflows]] | [[SQS]], [[SNS]], [[EventBridge]], [[Step Functions]], [[Amazon MQ]], [[Fan-out\|fan-out]] e [[Idempotencia\|idempotência]] |
| 16 | [[16 - Serverless Lambda e API Gateway\|Serverless: Lambda e API Gateway]] | Modelo de execução do Lambda, concorrência, tipos de API, autorização e [[Throttling\|throttling]] |
| 17 | [[17 - Containers ECS EKS e Fargate\|Containers: ECS, EKS e Fargate]] | Quando [[Container\|container]], [[ECS]] versus [[EKS]], [[Fargate]] versus [[EC2]], [[ECR]], [[Elastic Beanstalk]] |
| 18 | [[18 - Borda e DNS CloudFront Global Accelerator e Route 53\|Borda e DNS]] | [[CloudFront]], [[Global Accelerator]], [[Routing Policy\|políticas de roteamento]] e [[Health Check\|health checks]] do [[Route 53]] |
| 19 | [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas\|Segurança de Aplicações e Detecção de Ameaças]] | [[WAF]], Shield, [[Firewall Manager]], [[Network Firewall]], [[GuardDuty]], Inspector, [[Security Hub]], [[Cognito]] |

### Parte VI: Resiliência e operações

Mapa da parte, com todas as aulas: [[SAA Parte VI - Resiliencia e operacoes]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 20 | [[20 - Alta Disponibilidade e Recuperacao de Desastres\|Alta Disponibilidade e Recuperação de Desastres]] | [[RPO]] e [[RTO]], as quatro estratégias de DR, [[Backup\|AWS Backup]], [[Elastic Disaster Recovery]], padrões de resiliência |
| 21 | [[21 - Observabilidade Automacao e Operacoes\|Observabilidade, Automação e Operações]] | [[CloudWatch]], [[X-Ray]], [[CloudFormation]], [[Systems Manager]], [[Trusted Advisor]], Health |

### Parte VII: Dados, migração e IA

Mapa da parte, com todas as aulas: [[SAA Parte VII - Dados migracao e IA]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 22 | [[22 - Dados Analytics e Ingestao\|Dados, Analytics e Ingestão]] | Kinesis, [[Data Firehose]], [[MSK]], Glue, Athena, [[Lake Formation]], [[Redshift]], [[EMR]], [[OpenSearch Service\|OpenSearch]] |
| 23 | [[23 - Migracao e Transferencia de Dados\|Migração e Transferência de Dados]] | [[7 Rs da Migracao\|7 Rs]], [[DMS]] e [[Schema Conversion Tool\|SCT]], [[Application Migration Service]], [[DataSync]], [[Transfer Family]], [[Snow Family]], [[Storage Gateway]] |
| 24 | [[24 - Servicos de IA Gerenciados\|Serviços de IA Gerenciados]] | [[Rekognition]], [[Textract]], [[Comprehend]], [[Transcribe]], Polly, Translate, Lex, [[Kendra]], [[SageMaker AI]]: qual problema cada um resolve |

### Parte VIII: Custo, projeto e prova

Mapa da parte, com todas as aulas: [[SAA Parte VIII - Custo projeto e prova]]

| # | Módulo | Do que trata |
|---|--------|--------------|
| 25 | [[25 - Otimizacao de Custos\|Otimização de Custos]] | Modelos de compra, ferramentas de custo, custo de armazenamento, de banco e de rede |
| 26 | [[26 - Projeto Pratico - Arquitetura de Referencia\|Projeto Prático: Arquitetura de Referência]] | Uma arquitetura completa construída em iterações, um pilar por vez, com mudanças de requisito no estilo da prova |
| 27 | [[27 - Estrategia de Prova e Simulados\|Estratégia de Prova e Simulados]] | Logística da prova, técnica de resolução, revisão final e dois simulados completos de 65 questões |

## Por que essa ordem

- **Parte I antes de tudo:** a infraestrutura global explica por que toda resposta resiliente espalha
  recursos por [[Zona de Disponibilidade|AZs]]; o [[Well-Architected Framework|Well-Architected]] é a régua que a prova usa para escolher entre alternativas; e
  redes (IP, [[CIDR]], [[DNS]], [[TLS]]) são pré-requisito de quase todo serviço que vem depois.
- **Parte II é o Domínio 1 (30%), o mais pesado:** identidade vem antes de rede porque toda chamada à
  AWS passa por [[IAM]]; multiconta vem logo depois porque [[SCP|SCPs]] e [[Control Tower]] são extensões do IAM; [[VPC]] e
  conectividade híbrida montam o perímetro de rede; criptografia fecha a proteção de dados e depende de
  [[IAM]] ([[Key Policy|key policies]]) e de rede (endpoints).
- **Parte III** usa a rede já entendida para colocar computação e armazenamento dentro dela: [[EC2]] antes
  dos discos, discos antes do [[S3]] (que é outro modelo de armazenamento) e balanceamento por último, porque
  depende de [[EC2]], [[Sub-rede|sub-redes]] e [[Health Check|health checks]].
- **Parte IV** separa bancos em relacionais e não relacionais, porque a prova cobra exatamente essa
  escolha antes de cobrar detalhes de cada um.
- **Parte V** junta as peças em arquiteturas modernas: desacoplar primeiro (filas e eventos), depois
  executar [[Serverless|sem servidor]] e em [[Container|containers]], depois levar para a borda e protegê-la.
- **Parte VI** trata o que acontece quando algo falha (DR) e como enxergar e automatizar a operação.
- **Parte VII** cobre ingestão e análise de dados, migração para a AWS e os serviços de IA, que a prova
  cobra como "qual serviço resolve este problema".
- **Parte VIII** fecha com custo (o Domínio 4 atravessa todos os módulos, aqui ele é consolidado), um
  projeto que integra tudo e a preparação final para o dia da prova.

## Como usar esta trilha

1. Siga os módulos na ordem: cada um assume só o que veio antes.
2. Dentro de cada pasta, leia as aulas na ordem da nota do módulo e responda o **Pratique** de cada aula
   antes de abrir o gabarito. Errou? Leia o comentário do gabarito, ele explica por que cada alternativa
   errada está errada, que é exatamente o raciocínio da prova.
3. Ao fim do módulo, responda o **Teste-se** e o checklist de saída sem consultar.
4. Faça os laboratórios na conta pessoal, com Budgets configurado e limpeza ao final.
5. Antes do módulo 27, revise os resumos de todas as aulas (é a seção feita para releitura).
6. Faça os dois simulados do módulo 27 em condição de prova (130 minutos, sem consulta) e só agende a
   prova quando estiver acertando com folga nos dois.

## Sobre o formato e a curadoria

- **Texto baseado em pesquisa.** As aulas foram escritas a partir do exam guide oficial da SAA-C03
  (versão 1.1), da documentação oficial da AWS, de whitepapers ([[Well-Architected Framework|Well-Architected]] e lentes, estratégias de
  DR) e de artigos técnicos. Onde uma fonte não pôde ser confirmada, o texto marca **"não confirmado"**.
- **Revisão em várias rodadas.** Cada módulo passou por revisão técnica de AWS e revisão de formato, com
  correção e reverificação; depois houve uma rodada de consistência entre módulos, de cobertura do exam
  guide e de revisão do glossário.
- **A AWS muda rápido.** Limites, preços, nomes de serviço e recursos foram verificados em novembro de
  2026. A prova costuma ficar atrás das novidades: se um recurso muito novo contradiz o que a questão
  espera, a resposta da prova é a recomendação consolidada.
- **Vídeos não assistidos.** Os vídeos de apoio tiveram título e canal confirmados, mas ninguém assistiu
  ao conteúdo. Vídeos antigos podem mostrar telas ou limites superados; na dúvida, vale o texto da aula e a
  documentação.
- **Questões escritas para o curso.** Os questionários e os simulados imitam o estilo da prova, mas não
  são questões reais da AWS (que são confidenciais). Os simulados estão em inglês, como a prova que você
  vai fazer.
- **Glossário.** Os termos técnicos linkados levam a notas da pasta `Glossario`, compartilhada por todo o
  vault, para que futuras certificações reaproveitem as mesmas definições.

Veja também: [[Certificacoes Recomendadas]] (por que começar pela SAA-C03 e qual certificação vem depois).
