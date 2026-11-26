---
aliases:
  - Módulo 1
modulo: 1
parte: "I Fundamentos"
tags:
  - modulo
  - saa-c03
---

# Módulo 1: Nuvem e Infraestrutura Global AWS

O João já opera [[ECS]], [[RDS]], [[VPC]], [[S3]] e [[CloudFront]] na AWS, mas "usar" não é o mesmo que entender a fonte. Este módulo é o chão de tudo: **por que a nuvem existe, como a AWS é organizada fisicamente, onde cada recurso vive, quem é responsável pelo quê, como toda ação vira uma chamada de API e por que a conta é a fronteira mais forte**. Ele vem primeiro porque quase toda questão da prova assume esses conceitos: "[[Multi-AZ|multi-AZ]]", "[[Residencia de Dados|residência de dados]]", "serviço gerenciado", "cota na [[Regiao AWS|Region]] de DR", "conta de produção separada". Os módulos seguintes aplicam cada um deles a serviços específicos.

A prova cobra esses temas de forma transversal (Task 1.1, 2.2, 3.2 e 4.2 como base) e todo domínio depende deles. Fatos que mudam, como a contagem de [[Regiao AWS|Regions]] e [[Zona de Disponibilidade|AZs]], estão marcados com a data da verificação (novembro de 2026).

> [!info] Como estudar este módulo
> Leia as sete aulas em ordem. Em cada uma, responda ao `[!question]` do topo com suas palavras antes de ler o `Resumo`. Os questionários seguem o estilo da prova (cenário, [[Qualificador|qualificadores]] como LEAST [[Overhead Operacional|operational overhead]], múltipla resposta). Os laboratórios, quando existem, são opcionais, sempre em **conta pessoal separada**.

## Aulas

1. [[01.01 - Por que a Nuvem Existe]]: o problema da capacidade como aposta, [[Capex|capex]] para [[Opex|opex]], [[Elasticidade|elasticidade]] e os hábitos do arquiteto (projetar para falha, recursos descartáveis, [[Stateless|stateless]], tudo é API, gerenciado).
2. [[01.02 - Regions e Availability Zones]]: por que [[Zona de Disponibilidade|AZs]] e [[Regiao AWS|Regions]] existem, distâncias e [[Latencia|latência]], [[AZ ID]], Regions opt-in e partições, quanto custa cruzar cada fronteira (AZ, Region, internet) e como escolher uma Região (conformidade, latência, serviços, preço).
3. [[01.03 - Borda e Extensoes da Infraestrutura]]: [[Edge Location|edge locations]], [[Regional Edge Cache|regional edge caches]], [[Local Zone|Local Zones]], [[Wavelength]] e Outposts, [[Transfer Acceleration|S3 Transfer Acceleration]], e quando usar cada um.
4. [[01.04 - Escopo dos Recursos Global Regional e Zonal]]: o que é zonal, regional e global (inclui [[AMI]], [[Snapshot|snapshot]], [[KMS]], [[NAT Gateway]] zonal e regional), [[Plano de Controle|plano de controle]] e de dados, [[Estabilidade Estatica|estabilidade estática]].
5. [[01.05 - Modelo de Responsabilidade Compartilhada]]: segurança DA e NA nuvem, como a fronteira muda entre [[EC2]], [[RDS]], Lambda e [[S3]], controles herdados e compartilhados, [[Artifact|AWS Artifact]].
6. [[01.06 - Tudo e API Endpoints Quotas e Health]]: [[SigV4]], endpoints (regional, [[Dual-Stack|dual-stack]], FIPS), [[Service Quotas]] (e como monitorá-las), [[Throttling|throttling]] e o [[Health Dashboard|AWS Health Dashboard]] e a Health API.
7. [[01.07 - A Conta AWS como Fronteira]]: segurança, cobrança e cotas por conta; o [[Usuario Root|usuário root]] e o acesso root centralizado.

## Cobertura do exam guide

Este módulo é a base transversal; ele **não é o dono** de um task statement inteiro, mas cobre os conhecimentos listados abaixo.

| Task statement | Onde está |
|---|---|
| Task 1.1: infraestrutura global ([[Zona de Disponibilidade\|AZs]], [[Regiao AWS\|Regions]]), [[Modelo de Responsabilidade Compartilhada\|modelo de responsabilidade compartilhada]], boas práticas de root ([[MFA]]), múltiplas contas | [[01.02 - Regions e Availability Zones\|Aula 1.2]], [[01.05 - Modelo de Responsabilidade Compartilhada\|Aula 1.5]], [[01.07 - A Conta AWS como Fronteira\|Aula 1.7]] |
| Task 1.2: endpoints de serviços AWS | [[01.06 - Tudo e API Endpoints Quotas e Health\|Aula 1.6]] |
| Task 1.3: alinhar tecnologias AWS a requisitos de conformidade | [[01.05 - Modelo de Responsabilidade Compartilhada\|Aula 1.5]], [[01.02 - Regions e Availability Zones\|Aula 1.2]] |
| Task 2.1: aceleradores de borda ([[CDN]]), tipos de armazenamento e multi-tier no contexto de escopo | [[01.03 - Borda e Extensoes da Infraestrutura\|Aula 1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal\|Aula 1.4]] |
| Task 2.2: infraestrutura global, cotas e [[Throttling\|throttling]], evitar [[Ponto Unico de Falha\|pontos únicos de falha]], projetar para falha | [[01.01 - Por que a Nuvem Existe\|Aula 1.1]], [[01.02 - Regions e Availability Zones\|Aula 1.2]], [[01.04 - Escopo dos Recursos Global Regional e Zonal\|Aula 1.4]], [[01.06 - Tudo e API Endpoints Quotas e Health\|Aula 1.6]] |
| Task 3.2: computação distribuída com infraestrutura global e serviços de borda; [[Elasticidade\|elasticidade]] | [[01.01 - Por que a Nuvem Existe\|Aula 1.1]], [[01.03 - Borda e Extensoes da Infraestrutura\|Aula 1.3]] |
| Task 3.3: infraestrutura global em decisões de bancos de dados | [[01.02 - Regions e Availability Zones\|Aula 1.2]], [[01.04 - Escopo dos Recursos Global Regional e Zonal\|Aula 1.4]] |
| Task 3.4: serviços de borda ([[CloudFront]], [[Global Accelerator]]) | [[01.03 - Borda e Extensoes da Infraestrutura\|Aula 1.3]] |
| Task 4.1: faturamento multiconta e custo por conta | [[01.07 - A Conta AWS como Fronteira\|Aula 1.7]] |
| Task 4.2: infraestrutura global, computação híbrida (Outposts), processamento na borda, [[Elasticidade\|elasticidade]] | [[01.01 - Por que a Nuvem Existe\|Aula 1.1]], [[01.03 - Borda e Extensoes da Infraestrutura\|Aula 1.3]] |
| Task 4.4: [[CDN]] para custo de rede, [[Data Transfer\|custo de transferência]] entre [[Regiao AWS\|Regions]], [[Zona de Disponibilidade\|AZs]] e internet, [[Regional NAT Gateway\|NAT regional]] versus zonal, estratégia de [[Throttling\|throttling]] | [[01.02 - Regions e Availability Zones\|Aula 1.2]], [[01.03 - Borda e Extensoes da Infraestrutura\|Aula 1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal\|Aula 1.4]], [[01.06 - Tudo e API Endpoints Quotas e Health\|Aula 1.6]] |

## Checklist de saída do módulo

Marque quando conseguir responder sem consultar, com suas palavras e incluindo o porquê.

- [ ] Por que a nuvem converte [[Capex|capex]] em [[Opex|opex]], e por que isso muda o risco de errar a previsão de capacidade?
- [ ] Qual a diferença entre escalabilidade e [[Elasticidade|elasticidade]], e por que uma aplicação precisa ser [[Stateless|stateless]] para aproveitar a segunda?
- [ ] Por que as [[Zona de Disponibilidade|AZs]] ficam a até cerca de 100 km umas das outras, e não no mesmo prédio nem em países diferentes?
- [ ] Por que os dados criados em uma [[Regiao AWS|Region]] não aparecem em outra, e como isso se liga à [[Residencia de Dados|residência de dados]]?
- [ ] Em que ordem se avaliam os critérios para escolher uma [[Regiao AWS|Region]], e por que conformidade vem primeiro?
- [ ] Quando [[CloudFront]], [[Local Zone]], [[Wavelength]] e Outposts são a resposta, e que palavra-chave do enunciado aponta para cada uma?
- [ ] Por que [[EC2]], [[EBS]] e [[Sub-rede|subnet]] são zonais, [[S3]] e [[DynamoDB]] regionais, e [[IAM]] e [[Route 53]] globais, e o que cada escopo muda na resiliência?
- [ ] Por que um plano de DR não deve depender de operações de [[Plano de Controle|plano de controle]] de um serviço global durante o incidente?
- [ ] Onde passa a fronteira da [[Modelo de Responsabilidade Compartilhada|responsabilidade compartilhada]] em [[EC2]], em Lambda e em [[S3]], e o que nunca muda de dono?
- [ ] Por que tráfego entre [[Zona de Disponibilidade|AZs]] e entre [[Regiao AWS|Regions]] é cobrado, e o que isso muda na escolha entre mais [[Disponibilidade|disponibilidade]] e menos custo?
- [ ] Por que a conta é fronteira de segurança, cobrança e cotas, e por que o root não deve ser usado no dia a dia?

## Teste-se

Quinze questões integradoras: cada uma cruza duas ou mais aulas do módulo (as aulas citadas ficam no gabarito).

**1.** Uma fintech precisa manter os dados de clientes no Brasil e tolerar a falha de uma [[Zona de Disponibilidade|AZ]], com o MENOR [[Overhead Operacional|overhead operacional]]. Qual desenho atende?

- [ ] a) Instâncias em duas AZs de us-east-1, com os dados criptografados com chaves do KMS
- [ ] b) Instâncias em duas Regions fora do Brasil, para que a falha de uma delas não afete o serviço
- [ ] c) Instâncias em subnets de duas AZs de sa-east-1, atrás de um balanceador, sem replicação para fora do país
- [ ] d) Instâncias em uma única AZ de sa-east-1, com snapshots diários copiados para outra Region

**2.** (Escolha DUAS.) Um plano de DR usa [[Warm Standby|warm standby]] em us-west-2, com o ambiente principal em us-east-1. Quais práticas reduzem o risco de o [[Failover|failover]] falhar?

- [ ] a) Aumentar com antecedência as cotas de instâncias na Region de standby, conforme a capacidade do plano
- [ ] b) Editar o registro do Route 53 pelo console no momento do desastre, seguindo o runbook
- [ ] c) Criar durante o failover as IAM roles de que a aplicação precisa na Region de standby
- [ ] d) Configurar antes um health check e uma política de failover, executados pelo plano de dados do DNS
- [ ] e) Contar com a replicação automática dos recursos entre Regions, que a AWS mantém ativa

**3.** Uma empresa roda uma API em Lambda, um banco PostgreSQL no [[RDS]] e um servidor legado em uma [[EC2|instância EC2]]. Uma vulnerabilidade crítica do kernel Linux é divulgada. Em quais cargas a equipe precisa aplicar o patch do sistema operacional?

- [ ] a) Nas três, pois o patch do sistema operacional é sempre do cliente
- [ ] b) Apenas no servidor EC2; no RDS e no Lambda a AWS cuida do sistema operacional
- [ ] c) No servidor EC2 e no banco RDS, mas não no Lambda
- [ ] d) Em nenhuma, pois a AWS aplica o patch no sistema operacional convidado do EC2 na janela de manutenção

**4.** Três times compartilham uma única [[Conta AWS|conta AWS]]. Um deles esgota a cota de [[vCPU|vCPUs]], os outros ficam sem conseguir escalar, e o financeiro não sabe quanto cada time gasta. Qual mudança resolve os dois problemas?

- [ ] a) Aplicar tags de alocação de custo e pedir ao suporte o aumento da cota de vCPUs da conta
- [ ] b) Criar um orçamento no AWS Budgets por time e um alarme do CloudWatch para a cota
- [ ] c) Criar um usuário IAM por time, com policies que limitem o número de instâncias lançadas
- [ ] d) Separar os times em contas de uma organização, com faturamento consolidado

**5.** Uma plataforma de vídeo recebe uploads de arquivos grandes de criadores do mundo todo para um [[Bucket|bucket]] em us-east-1 e entrega os vídeos publicados a espectadores também do mundo todo. Qual combinação melhora as duas direções com o MENOR esforço?

- [ ] a) S3 Transfer Acceleration para os uploads e CloudFront na frente do bucket para a entrega
- [ ] b) CloudFront para os uploads e S3 Transfer Acceleration para a entrega
- [ ] c) Um bucket por continente, com replicação entre eles e roteamento por DNS conforme a origem do usuário, para uploads e entrega
- [ ] d) Uma Local Zone em cada continente, para receber os uploads e servir os vídeos

**6.** Uma empresa europeia replica todo dia os dados de clientes de eu-central-1 para us-east-1 "por segurança". Não há requisito de DR em outra [[Regiao AWS|Region]], e a lei exige que os dados permaneçam na UE. Qual é a ação correta?

- [ ] a) Manter a replicação e criptografar os dados com uma chave do KMS antes de enviá-los
- [ ] b) Interromper a replicação para fora da UE e, se precisar de DR, usar outra Region da UE, barrando as demais com SCP
- [ ] c) Reduzir a replicação para uma vez por semana, diminuindo a exposição dos dados fora da UE
- [ ] d) Manter a replicação e registrar a exceção na conta de gerenciamento do Organizations

**7.** (Escolha DUAS.) Um auditor pergunta como a empresa prova quem alterou a infraestrutura e como comprova os controles físicos do data center. Quais fontes respondem às duas perguntas?

- [ ] a) AWS Health Dashboard, que lista eventos de serviço que afetam a conta
- [ ] b) CloudTrail, que registra as chamadas de API feitas na conta
- [ ] c) Service Quotas, que mostra a utilização de cada cota
- [ ] d) AWS Trusted Advisor, que aponta recomendações de custo e segurança
- [ ] e) AWS Artifact, que entrega relatórios de conformidade da AWS, como o SOC

**8.** Uma empresa roda a aplicação em sa-east-1 e coloca o [[CloudFront]] na frente de um [[Application Load Balancer|ALB]], com HTTPS de ponta a ponta. Onde cada certificado do [[ACM]] deve ser solicitado?

- [ ] a) Os dois certificados em us-east-1, a Region do plano de controle do CloudFront
- [ ] b) Os dois certificados em sa-east-1, a Region da aplicação
- [ ] c) O do CloudFront na Region mais próxima do usuário e o do ALB em sa-east-1
- [ ] d) O do CloudFront em us-east-1 e o do ALB em sa-east-1, onde o balanceador está

**9.** Uma aplicação grava os uploads dos usuários no [[EBS|volume EBS]] da instância, em um grupo com instâncias em duas [[Zona de Disponibilidade|AZs]]. Usuários às vezes não encontram o arquivo, e a equipe perdeu arquivos quando uma AZ falhou. Qual correção segue as boas práticas?

- [ ] a) Ativar sticky sessions e o EBS Multi-Attach para compartilhar o volume entre as instâncias
- [ ] b) Aumentar o tamanho do volume EBS e agendar snapshots a cada hora
- [ ] c) Gravar os uploads em um bucket do S3, tornando a aplicação stateless
- [ ] d) Replicar os arquivos entre os volumes das duas instâncias com um script agendado

**10.** Uma produtora roda toda a carga em uma [[Local Zone]] de Los Angeles (extensão de us-west-2), sem recursos em [[Zona de Disponibilidade|AZs]] da [[Regiao AWS|Region]]. Qual afirmação sobre a resiliência desse desenho é correta?

- [ ] a) A Local Zone não substitui múltiplas AZs e depende do plano de controle da Region de origem
- [ ] b) A Local Zone é uma Region independente e sobrevive à falha de us-west-2 sem nenhuma ação
- [ ] c) A Local Zone replica automaticamente os dados para duas AZs da Region de origem
- [ ] d) A Local Zone elimina o ponto único de falha, porque tem conexões próprias com a internet

**11.** Em uma organização com acesso root centralizado, um engenheiro aplicou uma [[Bucket Policy|bucket policy]] com Deny para todos em um [[Bucket|bucket]] de uma conta-membro. Quem consegue corrigir sem usar credenciais de root da conta-membro?

- [ ] a) O administrador de IAM da própria conta-membro, com AdministratorAccess, editando a bucket policy diretamente
- [ ] b) A conta de gerenciamento (ou um administrador delegado), por uma tarefa privilegiada de curta duração
- [ ] c) O suporte da AWS, que remove a policy a pedido do engenheiro
- [ ] d) Uma SCP aplicada à unidade organizacional, que remove o Deny automaticamente

**12.** (Escolha DUAS.) Uma empresa lança uma carga em Europe (Milan), uma [[Regiao AWS|Region]] opt-in, em uma conta criada em 2024, com um script que usa o endpoint geral ec2.amazonaws.com. Quais ações são necessárias para criar os recursos em Milan?

- [ ] a) Habilitar a Region Europe (Milan) na conta
- [ ] b) Abrir um chamado de suporte pago pedindo acesso à Region
- [ ] c) Manter o endpoint geral do EC2, que roteia para a Region configurada no script
- [ ] d) Apontar o cliente para o endpoint regional de Milan, ou configurar a Region no SDK ou na CLI
- [ ] e) Criar uma nova conta AWS exclusiva para a Region

**13.** Um site entrega vídeos curtos populares a espectadores do mundo todo, direto de instâncias em us-east-1, e o custo de saída para a internet pesa na fatura. Qual mudança reduz o custo com o MENOR esforço?

- [ ] a) Colocar o CloudFront na frente da origem para cachear os vídeos populares nos POPs
- [ ] b) Mover as instâncias para a Region com o menor preço de transferência
- [ ] c) Criar uma VPN entre a Region e cada país onde há espectadores
- [ ] d) Aumentar o número de instâncias para distribuir melhor o tráfego de saída entre várias AZs

**14.** Uma empresa cria dezenas de contas novas por ano, e cada uma precisa de uma cota de [[vCPU|vCPUs]] maior que a padrão já no primeiro dia. Qual recurso automatiza o pedido de aumento?

- [ ] a) Um alarme do CloudWatch sobre a utilização da cota em cada conta
- [ ] b) A Health API, com uma regra que pede o aumento quando há um evento
- [ ] c) O Trusted Advisor, que aumenta as cotas quando o uso passa de 80%
- [ ] d) Um quota request template do Organizations, aplicado às contas novas da organização

**15.** Uma API roda em um [[Auto Scaling Group|Auto Scaling]] group que adiciona e remove instâncias conforme a CPU, mas todas as instâncias ficam em [[Sub-rede|subnets]] de uma única [[Zona de Disponibilidade|AZ]]. Qual afirmação descreve o sistema?

- [ ] a) Tolerante a falhas, pois a capacidade acompanha a demanda automaticamente
- [ ] b) Altamente disponível, pois tem quatro instâncias em execução
- [ ] c) Elástico, mas ainda com um ponto único de falha: a AZ
- [ ] d) Escalável, mas não elástico, pois escala apenas na vertical

> [!success]- Gabarito
> **1. c)** (aulas 1.2 e 1.4) duas [[Zona de Disponibilidade|AZs]] com balanceador dão [[Alta Disponibilidade|HA]], e a [[Regiao AWS|Region]] no Brasil, sem replicar para fora, cumpre a residência; a) us-east-1 não está no Brasil e criptografia não muda onde o dado reside; b) duas Regions fora do Brasil violam a residência e aumentam o custo; d) uma única AZ continua sendo [[Ponto Unico de Falha|ponto único de falha]], e a cópia vai para fora do país.
> **2. a), d)** (aulas 1.4 e 1.6) cotas da [[Regiao AWS|Region]] de standby e [[Failover|failover]] pré-configurado no [[Plano de Dados|plano de dados]] evitam depender de ações durante o incidente; b) e c) exigem [[Plano de Controle|plano de controle]] na hora; e) não há replicação automática entre Regions.
> **3. b)** (aulas 1.1 e 1.5) em [[EC2]] o SO convidado é do cliente, enquanto [[RDS]] e Lambda são gerenciados e a AWS cuida do SO; a) ignora que serviços gerenciados deslocam a fronteira; c) o SO do host do RDS é da AWS; d) a AWS não aplica patch no SO convidado do EC2.
> **4. d)** (aulas 1.6 e 1.7) contas separadas têm cotas e custos próprios, e o Organizations consolida a fatura; a) tags dão visibilidade de custo mas a cota continua compartilhada; b) Budgets e alarmes só avisam, sem separar cota; c) policies de [[IAM]] limitam ações, não criam cotas independentes.
> **5. a)** (aulas 1.3 e 1.2) o [[Transfer Acceleration]] acelera uploads longos e o [[CloudFront]] cacheia a entrega; b) inverte os papéis; c) multiplica buckets e custo de replicação entre [[Regiao AWS|Regions]]; d) [[Local Zone|Local Zones]] não são para distribuir conteúdo no mundo todo.
> **6. b)** (aulas 1.2 e 1.4) replicar para fora da UE viola a lei, e a [[SCP]] impede o uso de outras [[Regiao AWS|Regions]]; a) criptografia não muda onde os dados residem; c) reduzir a frequência mantém a violação; d) registrar exceção não cumpre a lei.
> **7. b), e)** (aulas 1.5 e 1.6) como tudo é API, o [[CloudTrail]] registra quem fez o quê, e os controles físicos da AWS se comprovam com os relatórios do Artifact; a) o Health trata de eventos de serviço; c) o [[Service Quotas]] trata de cotas; d) o [[Trusted Advisor]] traz recomendações.
> **8. d)** (aulas 1.3 e 1.4) o certificado para o [[CloudFront]] fica em us-east-1, e o do [[Application Load Balancer|ALB]], na [[Regiao AWS|Region]] do ALB; a) o ALB não usa um certificado de outra Region; b) o do CloudFront não pode estar em sa-east-1; c) o CloudFront não escolhe a Region do certificado.
> **9. c)** (aulas 1.1 e 1.4) o [[S3]] é regional, [[Multi-AZ|multi-AZ]] e torna a aplicação [[Stateless|stateless]]; a) o [[Multi-Attach]] funciona só na mesma [[Zona de Disponibilidade|AZ]], e sticky session não evita perda; b) tamanho e [[Snapshot|snapshots]] não resolvem acesso entre instâncias; d) um script entre volumes é frágil e manual.
> **10. a)** (aulas 1.3 e 1.4) a [[Local Zone]] é extensão da [[Regiao AWS|Region]] e não substitui [[Zona de Disponibilidade|AZs]]; b) não é Region independente; c) não replica sozinha; d) conexões próprias não eliminam a dependência da Region de origem.
> **11. b)** (aulas 1.4 e 1.7) o acesso root centralizado permite tarefas privilegiadas pela [[Management Account|conta de gerenciamento]]; a) o deny explícito vale para administradores; c) o suporte não faz isso a pedido; d) [[SCP|SCPs]] limitam permissões e não removem políticas de recurso.
> **12. a), d)** (aulas 1.2 e 1.6) a [[Regiao AWS|Region]] opt-in precisa ser habilitada e o cliente precisa apontar para o endpoint regional; b) não é preciso suporte pago; c) o endpoint geral do [[EC2]] envia para us-east-1; e) não é preciso outra conta.
> **13. a)** (aulas 1.2 e 1.3) o [[CloudFront]] serve os vídeos populares dos [[Edge Location|POPs]] e reduz a saída da origem; b) preço sozinho não é critério e muda dados de lugar; c) VPNs não existem para entrega ao público; d) mais instâncias não reduzem o tráfego de saída.
> **14. d)** (aulas 1.6 e 1.7) o quota request template do Organizations pede os aumentos para contas novas; a) o alarme só avisa; b) a [[Health Dashboard|Health API]] exige plano pago e não pede aumentos; c) o [[Trusted Advisor]] verifica limites, mas não os aumenta.
> **15. c)** (aulas 1.1 e 1.4) o auto scaling dá [[Elasticidade|elasticidade]], mas uma única [[Zona de Disponibilidade|AZ]] continua sendo [[Ponto Unico de Falha|ponto único de falha]]; a) elasticidade não é [[Tolerancia a Falhas|tolerância a falhas]]; b) quatro instâncias na mesma AZ não evitam a falha da AZ; d) o sistema escala na horizontal, de forma automática.

## Próximo módulo

[[02 - Well-Architected e o Formato da Prova|Próximo módulo: Well-Architected e o Formato da Prova]]
