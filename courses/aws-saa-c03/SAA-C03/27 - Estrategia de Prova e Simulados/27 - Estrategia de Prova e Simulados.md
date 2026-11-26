---
aliases:
  - Módulo 27
modulo: 27
parte: "VIII Custo, projeto e prova"
tags:
  - modulo
  - saa-c03
---

# Módulo 27: Estratégia de prova e simulados

Você chegou ao último módulo com 25 módulos de conteúdo e um projeto prático no currículo. O conhecimento está feito; falta convertê-lo em **pontos sob pressão de tempo**, em inglês, com 65 questões e um relógio. Este módulo responde a três perguntas: **o que fazer antes e durante a prova para que a logística não custe pontos**, **como transformar o que você sabe em decisões rápidas e corretas**, e **como revisar de forma ordenada e medir sua prontidão** com dois simulados completos.

A SAA-C03 pesa Domínio 1 (arquiteturas seguras) em 30%, Domínio 2 (resilientes) em 26%, Domínio 3 (alto desempenho) em 24% e Domínio 4 (custo otimizado) em 20%. O exam guide v1.1 (29 de outubro de 2026) traz 65 questões, das quais 50 são pontuadas, [[Nota Escalonada|nota escalonada de 100 a 1.000]] e mínimo de 720. A prova não pede definições: ela apresenta um cenário e pede a **melhor decisão por um critério**. Por isso a revisão final aqui é organizada por **requisitos e pares que confundem**, não por serviço isolado.

> [!info] Como estudar este módulo
> Leia as três aulas em ordem (logística, técnica, revisão), peça já o [[Acomodacao ESL|ESL +30]] se for fazer em inglês e depois faça os **simulados** em condições reais: cronometrados, em inglês, sem consulta e sem pausa. Depois de cada simulado, classifique cada erro (conhecimento, par, leitura ou tempo) e volte **só** ao que o erro apontou. Este módulo não ensina serviço novo.

## Aulas

1. [[27.01 - Logistica da Prova de Ponta a Ponta]]: roteiro de cinco fases (conta e [[Acomodacao ESL|ESL +30]], idioma e modalidade, agendar e testar o ambiente, véspera e dia, resultado e renovação), com as regras oficiais datadas.
2. [[27.02 - Tecnica de Resolucao Tempo e Eliminacao]]: orçamento de tempo em três passadas, hierarquia de decisão, os sete tipos de alternativa errada, múltipla resposta e o dicionário de palavras-chave.
3. [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem]]: mapa requisito para serviço por domínio, os pares que mais confundem com o critério único de cada um, números para decorar e plano de sete dias.
4. [[27.04 - Simulado 1]]: primeiro simulado completo, 65 questões em inglês, com gabarito comentado e autoavaliação por domínio.
5. [[27.05 - Simulado 2]]: segundo simulado completo, questões inéditas, para medir a evolução.

## Cobertura do exam guide

Este módulo é o de **revisão**: cada task statement foi ensinado no módulo indicado como dono, e a [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|aula 27.3]] revisa os **pares mais cobrados** de cada task (não cada serviço in-scope). A tabela mostra onde reestudar a fundo cada task; a 27.3 cobre, por exemplo, [[Cognito]] ([[User Pool|user pool]] e identity pool), [[Egress-Only Internet Gateway|egress-only internet gateway]], [[MSK]], [[Lake Formation]], [[Amazon Quick]], [[Elastic Disaster Recovery]] e as [[Routing Policy|políticas de roteamento]] do [[Route 53]].

| Task statement | Onde está |
|---|---|
| Task 1.1: acesso seguro a recursos AWS ([[IAM]], [[STS]], multiconta, [[SCP\|SCPs]], [[Federacao\|federação]]) | [[04.05 - Logica de Avaliacao de Policies\|4.5]], [[04.06 - Roles e STS Credenciais Temporarias\|4.6]], [[05.02 - SCPs e Politicas de Organizacao\|5.2]], [[05.05 - IAM Identity Center\|5.5]], [[05.06 - Federacao com IAM e Directory Service\|5.6]] |
| Task 1.2: workloads e aplicações seguros ([[VPC]], SG, [[Network ACL\|NACL]], [[NAT]], Shield, [[WAF]], VPN, [[Direct Connect]]) | [[06.05 - Security Groups\|6.5]], [[06.06 - Network ACLs e Defesa em Camadas\|6.6]], [[19.03 - WAF Web ACLs Regras e Onde Associar\|19.3]], [[19.08 - Credenciais da Aplicacao e Decisao Final\|19.8]], [[07.05 - Site-to-Site VPN e Client VPN\|7.5]] |
| Task 1.3: controles de segurança de dados ([[KMS]], [[ACM]], backup, retenção) | [[08.02 - AWS KMS Chaves e Envelope Encryption\|8.2]], [[08.06 - Criptografia em Repouso nos Servicos AWS\|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA\|8.7]], [[11.05 - Criptografia Versionamento e Retencao no S3\|11.5]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis\|20.5]] |
| Task 2.1: arquiteturas escaláveis e fracamente acopladas | [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions\|15.8]], [[16.08 - Padroes Serverless e Ferramentas de Front-end\|16.8]], [[17.08 - Escolhendo a Computacao Tabela de Decisao\|17.8]], [[12.10 - Application Auto Scaling e Arquiteturas Completas\|12.10]] |
| Task 2.2: arquiteturas altamente disponíveis e tolerantes a falhas | [[20.02 - Multi-AZ e Multi-Region Servico por Servico\|20.2]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres\|20.4]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo\|20.9]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao\|21.4]] |
| Task 3.1: armazenamento de alto desempenho e escalável | [[10.10 - Escolhendo o Armazenamento\|10.10]], [[11.07 - Desempenho e Transferencia de Dados no S3\|11.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido\|23.8]] |
| Task 3.2: computação de alto desempenho e elástica | [[12.07 - Politicas de Escala\|12.7]], [[16.03 - Concorrencia Escala e Cold Start\|16.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances\|17.5]], [[09.08 - AWS Batch e Computacao de Alto Desempenho\|9.8]] |
| Task 3.3: bancos de dados de alto desempenho | [[13.09 - Padroes de Arquitetura Escolha e Custo\|13.9]], [[14.06 - Estrategias de Cache e DAX\|14.6]], [[14.09 - Decisao Qual Banco para Qual Requisito\|14.9]] |
| Task 3.4: redes de alto desempenho e escaláveis | [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS\|18.10]], [[12.02 - A Familia Elastic Load Balancing\|12.2]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao\|7.1]] |
| Task 3.5: ingestão e transformação de dados | [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos\|22.1]], [[22.12 - Seguranca da Ingestao e Decisao Final\|22.12]], [[23.10 - Arvore de Decisao do Metodo de Migracao\|23.10]] |
| Task 4.1: armazenamento com custo otimizado | [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos\|25.7]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo\|25.8]] |
| Task 4.2: computação com custo otimizado | [[25.05 - Computacao Modelos de Compra e a Decisao\|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados\|25.6]] |
| Task 4.3: bancos de dados com custo otimizado | [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta\|25.9]] |
| Task 4.4: redes com custo otimizado | [[25.10 - Rede e Transferencia de Dados\|25.10]] |
| Estratégia e execução da prova (apoia todas as tasks) | [[27.01 - Logistica da Prova de Ponta a Ponta\|27.1]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao\|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem\|27.3]], [[27.04 - Simulado 1\|27.4]], [[27.05 - Simulado 2\|27.5]] |

## Checklist de saída do módulo

- [ ] Eu consigo explicar por que o pedido de [[Acomodacao ESL|ESL +30]] vem **antes** do agendamento e o que acontece se eu esquecer.
- [ ] Eu sei por que, no online, não planejo pausa, e qual regra de atraso faz perder a taxa.
- [ ] Eu sei por que a nota 720 de 1.000 não equivale a 72% e por que o [[Modelo Compensatorio|modelo compensatório]] não autoriza ignorar um domínio.
- [ ] Eu consigo explicar por que nunca deixo questão em branco e por que marco com [[Flag for Review]] em vez de comentar durante a prova.
- [ ] Eu aplico a hierarquia (restrição dura, requisito, [[Qualificador|qualificador]], princípio) e sei por que a restrição vem antes do custo.
- [ ] Eu reconheço os sete tipos de alternativa errada e nomeio o tipo ao descartar uma opção.
- [ ] Eu sei dizer o **critério único** de cada par que confunde ([[SQS]] e [[SNS]], [[Application Load Balancer|ALB]] e [[Network Load Balancer|NLB]], [[CloudFront]] e [[Global Accelerator]], gateway e [[Interface Endpoint|interface endpoint]], [[GuardDuty]] e Inspector, [[Multi-AZ]] e [[Read Replica|read replica]]).
- [ ] Eu classifico cada erro de simulado em conhecimento, par, leitura ou tempo e sei qual correção cada um pede.

## Teste-se

Quinze questões que misturam estratégia e revisão (as aulas de origem aparecem no gabarito).

**1.** Aos 60 minutos de uma prova de 130 minutos (sem [[Acomodacao ESL|ESL +30]]), um candidato respondeu só 20 das 65 questões e tem 45 por responder, com 70 minutos restantes. Qual é a melhor conduta?

- [ ] a) Continuar no mesmo ritmo e deixar em branco as últimas questões, pois não há como terminar a tempo
- [ ] b) Reler as 20 respondidas para garantir os acertos antes de seguir
- [ ] c) Acelerar para cerca de 90 s por questão, marcando as difíceis, sem deixar nenhuma em branco
- [ ] d) Pedir mais tempo ao supervisor, pois a prova permite extensão sob demanda durante o exame

**2.** Uma candidata tem 40 horas de estudo restantes e decide distribuí-las em proporção ao peso dos domínios da prova. Quantas horas devem ir para o Domínio 1 (arquiteturas seguras, 30%)?

- [ ] a) 8 horas
- [ ] b) 12 horas
- [ ] c) 15 horas
- [ ] d) 20 horas

**3.** Um candidato acerta 72% em um simulado, calcula que 720 de 1.000 equivale a 72% de acertos e agenda a prova para amanhã, parando de estudar. Qual é a correção correta?

- [ ] a) A conta está certa, pois a escala é linear e proporcional ao número de acertos de cada candidato
- [ ] b) A prova exige 72% em cada domínio separadamente, e não apenas na nota geral do candidato
- [ ] c) Os 15 itens não pontuados reduzem o mínimo para cerca de 60% de acertos na nota final
- [ ] d) A nota é escalonada e a conversão em acertos não é publicada; busque margem acima de 72%

**4.** Uma empresa executa a mesma aplicação em us-east-1 e eu-west-1. Ela quer enviar cada usuário à Região com a menor [[Latencia|latência]] de rede e retirar do [[DNS]] a Região que falhar. Qual configuração atende?

- [ ] a) Route 53 com política de latency e health checks nos endpoints de cada Região
- [ ] b) Route 53 com política geolocation, uma regra por continente, sem health checks
- [ ] c) Route 53 com política weighted 50/50 entre as duas Regiões
- [ ] d) Route 53 com política simple devolvendo os dois endereços na mesma resposta

**5.** Uma [[Lambda|função Lambda]] atrás de uma API abre muitas conexões curtas a um banco [[RDS]] PostgreSQL e esgota as conexões nos picos. A equipe quer resolver sem reescrever a lógica de negócio. Qual solução atende?

- [ ] a) Trocar o RDS por DynamoDB, reescrevendo as consultas
- [ ] b) Aumentar a instância do banco a cada pico de tráfego
- [ ] c) Criar uma read replica e distribuir as conexões de escrita
- [ ] d) Colocar o RDS Proxy entre a função e o banco

**6.** Uma empresa tem [[RPO]] de 15 minutos e [[RTO]] de 1 hora para uma aplicação crítica, com orçamento limitado de DR. Qual estratégia atende com o menor custo?

- [ ] a) Pilot light: replicação contínua do banco e computação desligada na Região de recuperação
- [ ] b) Backup and restore, com cópia diária dos backups para outra Região e restauração sob demanda
- [ ] c) Multi-site active-active, com o tráfego dividido entre as duas Regiões o tempo todo
- [ ] d) Apenas Multi-AZ no banco e no balanceador, mantendo tudo na mesma Região única

**7.** Uma política exige que todas as requisições ao [[Bucket|bucket]] usem HTTPS. Qual é o mecanismo correto?

- [ ] a) Habilitar o versionamento do bucket para registrar cada requisição recebida
- [ ] b) Criar uma network ACL na VPC bloqueando a porta 80 de todas as sub-redes
- [ ] c) Bucket policy que nega as requisições quando aws:SecureTransport é false
- [ ] d) Habilitar o S3 Transfer Acceleration no bucket para todas as requisições

**8.** Uma empresa executa 10 instâncias 24 horas por dia, com uso estável há dois anos, mas pretende trocar de [[Instance Type|família de instâncias]] (inclusive para [[Graviton]]) no próximo ano e quer o menor custo. Qual compra atende?

- [ ] a) Reserved Instances Standard de 3 anos para a família de instâncias atual
- [ ] b) Compute Savings Plans de 1 ou 3 anos para o valor de uso por hora
- [ ] c) Spot Instances para todas as 10 instâncias, aproveitando o desconto máximo
- [ ] d) On-Demand para todas as instâncias, pois a família de instâncias vai mudar

**9.** (Escolha DUAS.) Uma empresa quer saber **quem apagou** um recurso e também **como era a configuração** desse recurso antes da exclusão. Quais serviços atendem?

- [ ] a) AWS CloudTrail, para registrar quem chamou a API de exclusão
- [ ] b) Amazon GuardDuty, para registrar todas as chamadas de API
- [ ] c) AWS Config, para guardar o histórico de configuração do recurso
- [ ] d) Amazon Macie, para guardar a configuração dos recursos
- [ ] e) AWS Trusted Advisor, para guardar o histórico dos recursos

**10.** (Escolha DUAS.) Quais práticas de técnica de prova estão alinhadas à recomendação do curso?

- [ ] a) Responder todas as questões, sem deixar nenhuma em branco, mesmo com chute educado
- [ ] b) Escrever comentários longos durante a prova para cada questão duvidosa
- [ ] c) Trocar a resposta sempre que sentir dúvida na revisão
- [ ] d) Marcar com Flag for Review as questões que travarem e voltar a elas na segunda passada
- [ ] e) Escolher a alternativa que cita mais serviços, por ser a mais completa

**11.** (Escolha DUAS.) Um candidato brasileiro fará a prova **online, em inglês**, e quer o tempo extra. Quais afirmações estão corretas?

- [ ] a) O pedido de ESL +30 pode ser feito no dia da prova, ao supervisor
- [ ] b) O pedido de ESL +30 é feito na conta de certificação antes de agendar
- [ ] c) Com o ESL +30 a prova passa a ter 160 minutos
- [ ] d) No online, o candidato pode fazer pausa de 10 minutos com o relógio parado
- [ ] e) O ESL +30 também se aplica a quem faz a prova em português

**12.** Consultas SQL em logs em CSV no [[S3]] estão caras no Athena, porque cada consulta lê todos os dados. Qual mudança reduz mais o custo, com o menor esforço de mudança de aplicação?

- [ ] a) Converter para Parquet e particionar por data, por exemplo com um job do Glue
- [ ] b) Mover os logs para o RDS e consultá-los com SQL em um banco relacional
- [ ] c) Trocar o Athena por um cluster EMR permanente com Spark para as consultas
- [ ] d) Compactar o CSV em um único arquivo ZIP por mês, mantendo o mesmo formato

**13.** Um sistema recebe pedidos por uma API e os processa com uma [[Lambda|função Lambda]]. Pedidos que falham devem ser tentados novamente e, depois de três falhas, ir para análise manual, sem perder nenhuma mensagem e com o MENOR código de infraestrutura. Qual combinação atende?

- [ ] a) API Gateway invocando a função de forma síncrona, com retry implementado no cliente
- [ ] b) Fila SQS com a função como consumidor e uma dead-letter queue após três recebimentos
- [ ] c) Tópico SNS entregando à função, sem fila e sem destino para falhas
- [ ] d) Função agendada a cada minuto varrendo uma tabela do DynamoDB em busca de pedidos

**14.** Um fluxo de cinco etapas (validar, enriquecer, decidir, gravar, notificar) usa uma [[Lambda|função Lambda]] por etapa, com retry e uma decisão condicional. Cada execução dura menos de 2 minutos e há milhões de execuções por dia. Qual [[Orquestracao|orquestração]] atende com o MENOR custo e overhead?

- [ ] a) Cada função invocando a próxima diretamente, com a lógica de retry dentro do código
- [ ] b) Step Functions Standard, com uma execução por evento
- [ ] c) Step Functions Express, com uma execução por evento
- [ ] d) Um script em instância EC2 chamando as funções em sequência

**15.** Os funcionários de uma empresa usam um [[Identity Provider|provedor de identidade]] externo (Okta) e precisam acessar com login único dezenas de [[Conta AWS|contas AWS]], por permissões diferentes em cada conta, sem criar [[IAM User|usuários IAM]]. Qual solução atende?

- [ ] a) Criar um usuário IAM por funcionário em cada uma das contas da empresa
- [ ] b) Compartilhar as credenciais de um único usuário IAM entre toda a equipe
- [ ] c) Cognito User Pool federando o Okta para o console da AWS nas contas
- [ ] d) IAM Identity Center com o Okta como fonte de identidade e permission sets

> [!success]- Gabarito
> **1. c)** restam 70 min para 45 questões (70 x 60 / 45 = cerca de 93 s por questão), então o ritmo é de cerca de 90 s; a saída é acelerar, marcar as difíceis e responder tudo (não há penalidade por chute). A deixa pontos sem tentar; B gasta tempo em questões já respondidas; D não existe como recurso durante a prova. Aula 27.2.
> **2. b)** 30% de 40 horas são 12 horas. A é 20%; C é 37,5%; D é 50%. Aula 2.6.
> **3. d)** a nota é escalonada e não há conversão publicada em número de acertos; busque margem. A trata a escala como proporcional; B confunde [[Modelo Compensatorio|modelo compensatório]] com mínimo por domínio; C inventa uma redução. Aulas 2.5 e 27.1.
> **4. a)** [[Latencia|latency]] escolhe a menor latência de rede e o [[Health Check|health check]] tira do [[DNS]] o endpoint com falha. B: geolocation decide por localização do usuário, não por latência, e sem health check não retira a Região com falha; C: weighted divide por percentual, sem olhar latência; D: simple devolve os dois endereços sem critério de latência nem de saúde. Aula 18.8.
> **5. d)** o [[RDS Proxy]] agrupa conexões e protege o banco, quase sem mudar o código. A reescreve tudo; B só adia o problema; C: a réplica atende leitura, não resolve conexões de escrita. Aula 13.6.
> **6. a)** [[Pilot Light|pilot light]]: [[RPO]] de minutos e [[RTO]] de dezenas de minutos, com custo baixo (computação desligada). B tem RPO de horas; C é a mais cara; D não cobre a falha de uma Região. Aula 20.4.
> **7. c)** a condição aws:SecureTransport em uma [[Bucket Policy|bucket policy]] com Deny força HTTPS. A não afeta o transporte; B atua na camada da rede e não impede [[HTTP]] em outras origens; D acelera uploads e não impõe HTTPS. Aulas 8.6, 8.7 e 11.5.
> **8. b)** Compute [[Savings Plans]] oferecem desconto com flexibilidade de família e de serviço (inclui [[Graviton]]). A prende na família atual; C não serve para carga 24 horas estável que não pode ser interrompida; D paga o preço cheio sem necessidade. Aula 25.5.
> **9. a, c)** [[CloudTrail]] registra quem chamou a API e Config guarda o histórico de configuração. B: o [[GuardDuty]] detecta ameaças, não é o registro de API; D: o [[Macie]] descobre dados sensíveis; E: o [[Trusted Advisor]] sugere boas práticas, não guarda histórico. Aulas 5.8 e 5.9.
> **10. a, d)** responder tudo e marcar para a segunda passada são recomendações do curso. B consome o relógio; C: trocar por insegurança tende a piorar; E é heurística sem base. Aula 27.2.
> **11. b, c)** o [[Acomodacao ESL|ESL +30]] é pedido na conta antes de agendar e eleva a prova a 160 minutos. A erra o momento e o canal; D: no online não há pausa; E: só vale para prova em inglês. Aula 27.1.
> **12. a)** [[Parquet]] [[Armazenamento Colunar|colunar]] mais partições reduz os dados lidos, e o Glue faz a conversão. B muda toda a arquitetura; C aumenta o custo fixo; D compacta, mas o Athena ainda lê tudo (e um ZIP não é um formato dividível para consulta eficiente). Aulas 22.5 a 22.7.
> **13. b)** [[SQS]] com Lambda mais [[Dead-Letter Queue|DLQ]] (maxReceiveCount de 3) dá retry, retenção e destino para falhas sem código de infraestrutura. A depende de retry no cliente e perde pedido se o cliente cair; C não retém mensagem nem tem DLQ configurada; D é polling com mais código e custo. Aulas 15.2 e 15.3.
> **14. c)** Express suporta alto volume e execuções curtas (até 5 minutos), com cobrança por execução e duração. B: o Standard cobra por transição de estado e, em milhões de execuções por dia, sai mais caro; A espalha a [[Orquestracao|orquestração]] no código; D cria servidor para gerenciar. Aula 15.6 e 15.8.
> **15. d)** o [[IAM Identity Center]] faz login único em várias contas com [[Identity Provider|IdP]] externo e [[Permission Set|permission sets]]. A e B são práticas inseguras e trabalhosas; C: o [[Cognito]] [[User Pool]] serve para usuários da aplicação, não para o acesso dos funcionários às contas. Aulas 5.5 e 19.7.

## Próximo módulo

Este é o **último módulo do curso**. O que falta é praticar sob condições reais: faça o [[27.04 - Simulado 1]], classifique os erros, reforce o que eles apontaram, faça o [[27.05 - Simulado 2]] e só então agende (ou confirme) a data da prova. Para voltar ao começo do curso e usar o painel de progresso, abra [[SAA-C03 - Inicio]]. Boa prova.
