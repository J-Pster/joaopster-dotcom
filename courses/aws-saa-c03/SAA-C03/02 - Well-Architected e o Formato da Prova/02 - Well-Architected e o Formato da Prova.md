---
aliases:
  - Módulo 2
modulo: 2
parte: "I Fundamentos"
tags:
  - modulo
  - saa-c03
---

# Módulo 2: Well-Architected e o Formato da Prova

Você já viu no [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] por que a nuvem existe e como a AWS se organiza fisicamente ([[Regiao AWS|Regiões]], zonas, borda). Antes de entrar nos serviços, falta uma ferramenta de decisão: toda a prova pede "a **melhor** solução", e "melhor" só existe em relação a requisitos. Este módulo responde a duas perguntas. Primeira: **que critérios a AWS usa para dizer que uma arquitetura é boa** (o [[Well-Architected Framework]], seus seis pilares, a revisão com a [[Well-Architected Tool]]). Segunda: **como a SAA-C03 transforma esses critérios em questões** (formato, pontuação, domínios, anatomia de uma questão, princípios que se repetem e plano de estudo).

Ele vem agora porque organiza tudo o que vem depois: quando o Módulo 6 ensinar [[NAT Gateway|NAT gateways]], você vai saber que a escolha entre um por zona ou um compartilhado é um [[Trade-off|trade-off]] de confiabilidade contra custo, e que o enunciado dirá qual vence. Fatos que mudam (preço, regras de agendamento, estrutura do Framework) foram conferidos em fontes oficiais da AWS em **novembro de 2026** e estão datados nas aulas.

> [!info] O Framework mudou há poucos dias
> Em 16 de novembro de 2026 a AWS consolidou os seis whitepapers de pilares em um único documento, com as áreas Cloud Foundations e Cloud Workloads. O exam guide da SAA-C03 ainda fala apenas em "[[Well-Architected Framework]]" e nos seis pilares. A aula 2.1 explica o que mudou; as aulas 2.2 a 2.4 ensinam os pilares com a estrutura nova e o vocabulário clássico (princípios de design), que continua sendo o que os simulados usam.

## Aulas

1. [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|Aula 2.1: Por que um Framework e Como Revisar uma Arquitetura]]: por que arquitetura é [[Trade-off|trade-off]], como o Framework está organizado (Cloud Foundations e Cloud Workloads), os princípios gerais, a [[Well-Architected Tool]], [[Well-Architected Lens|lenses]] e o Agent.
2. [[02.02 - Excelencia Operacional e Seguranca|Aula 2.2: Excelência Operacional e Segurança]]: os dois primeiros pilares, suas capacidades e princípios de design, e a [[Modelo de Responsabilidade Compartilhada|responsabilidade compartilhada]].
3. [[02.03 - Confiabilidade e Eficiencia de Desempenho|Aula 2.3: Confiabilidade e Eficiência de Desempenho]]: projetar para falhar sem que o usuário perceba e escolher recursos pelo padrão de acesso.
4. [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|Aula 2.4: Custos, Sustentabilidade e Tensões entre Pilares]]: o que "otimizar custo" significa, onde entra a sustentabilidade e como decidir quando pilares divergem.
5. [[02.05 - A Prova por Dentro|Aula 2.5: A Prova por Dentro]]: tipos de questão, 65 questões (50 pontuadas), [[Nota Escalonada|nota escalonada]], [[Modelo Compensatorio|modelo compensatório]], preço, idiomas, [[Acomodacao ESL|ESL +30]], online versus centro de testes.
6. [[02.06 - Dominios Pesos e o Mapa para os Pilares|Aula 2.6: Domínios, Pesos e o Mapa para os Pilares]]: os quatro domínios (30/26/24/20), os 14 task statements, serviços no escopo e como transformar pesos em prioridade.
7. [[02.07 - Anatomia de uma Questao|Aula 2.7: Anatomia de uma Questão]]: cenário, requisito, restrição e [[Qualificador|qualificador]]; o que cada qualificador elimina; como os [[Distrator|distratores]] são construídos.
8. [[02.08 - Principios das Respostas Certas e Plano de Estudo|Aula 2.8: Princípios das Respostas Certas e Plano de Estudo]]: os nove princípios que se repetem (com seus limites) e o plano de estudo, laboratórios e agenda.

## Cobertura do exam guide

Este é um módulo de método: ele **não ensina os serviços** de cada task statement (isso é dos módulos 4 a 25), mas dá o raciocínio de decisão que atravessa os quatro domínios e a estrutura da prova. A tabela mostra onde cada task statement é tocada aqui e em que módulo o assunto é ensinado a fundo.

| Task statement | Onde está neste módulo | Onde é ensinado a fundo |
|---|---|---|
| 1.1 Acesso seguro a recursos | [[02.02 - Excelencia Operacional e Seguranca\|2.2]] (identidade forte, [[Modelo de Responsabilidade Compartilhada\|responsabilidade compartilhada]], [[Menor Privilegio\|menor privilégio]]), [[02.08 - Principios das Respostas Certas e Plano de Estudo\|2.8]] | [[04 - IAM Identidade e Acesso\|4]], [[05 - Multiconta Governanca e Federacao\|5]] |
| 1.2 Cargas e aplicações seguras | [[02.02 - Excelencia Operacional e Seguranca\|2.2]] ([[Defesa em Profundidade\|defesa em profundidade]]) | [[06 - VPC a Fundo\|6]], [[07 - Conectividade Hibrida e entre VPCs\|7]], [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas\|19]] |
| 1.3 Controles de dados | [[02.02 - Excelencia Operacional e Seguranca\|2.2]] (proteção de dados), [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]] (backup e recuperação) | [[05 - Multiconta Governanca e Federacao\|5]], [[08 - Criptografia e Protecao de Dados\|8]], [[11 - Amazon S3 a Fundo\|11]], [[20 - Alta Disponibilidade e Recuperacao de Desastres\|20]] |
| 2.1 Escalável e fracamente acoplado | [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]], [[02.08 - Principios das Respostas Certas e Plano de Estudo\|2.8]] (desacoplar, [[Stateless\|stateless]], propósito específico) | [[12 - Balanceamento de Carga e Auto Scaling\|12]] a [[18 - Borda e DNS CloudFront Global Accelerator e Route 53\|18]] |
| 2.2 [[Alta Disponibilidade\|Alta disponibilidade]] e [[Tolerancia a Falhas\|tolerância a falhas]] | [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]] (Confiabilidade, quotas, [[Zona de Disponibilidade\|AZs]]), [[02.08 - Principios das Respostas Certas e Plano de Estudo\|2.8]] ([[Infraestrutura Imutavel\|infraestrutura imutável]]) | [[20 - Alta Disponibilidade e Recuperacao de Desastres\|20]], [[21 - Observabilidade Automacao e Operacoes\|21]] |
| 3.1 Armazenamento de alto desempenho | [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]] (padrão de acesso) | [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx\|10]], [[11 - Amazon S3 a Fundo\|11]] |
| 3.2 Computação elástica | [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]] (simpatia mecânica) | [[09 - EC2 a Fundo\|9]], [[12 - Balanceamento de Carga e Auto Scaling\|12]], [[16 - Serverless Lambda e API Gateway\|16]], [[17 - Containers ECS EKS e Fargate\|17]] |
| 3.3 Bancos de alto desempenho | [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]] (escolha pelo padrão de acesso) | [[13 - Bancos Relacionais RDS e Aurora\|13]], [[14 - DynamoDB Cache e Bancos de Proposito Especifico\|14]] |
| 3.4 Redes de alto desempenho | [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]] ([[Latencia\|latência]] e borda) | [[06 - VPC a Fundo\|6]], [[07 - Conectividade Hibrida e entre VPCs\|7]], [[18 - Borda e DNS CloudFront Global Accelerator e Route 53\|18]] |
| 3.5 Ingestão e transformação de dados | [[02.03 - Confiabilidade e Eficiencia de Desempenho\|2.3]] (serviço de propósito específico) | [[22 - Dados Analytics e Ingestao\|22]], [[24 - Servicos de IA Gerenciados\|24]] |
| 4.1 Armazenamento com custo otimizado | [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares\|2.4]] (consumo e ciclo de vida) | [[11 - Amazon S3 a Fundo\|11]], [[25 - Otimizacao de Custos\|25]] |
| 4.2 Computação com custo otimizado | [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares\|2.4]] (modelo de consumo, desligar o ocioso) | [[09 - EC2 a Fundo\|9]], [[25 - Otimizacao de Custos\|25]] |
| 4.3 Bancos com custo otimizado | [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares\|2.4]] (gerenciado e dimensionamento) | [[13 - Bancos Relacionais RDS e Aurora\|13]], [[14 - DynamoDB Cache e Bancos de Proposito Especifico\|14]], [[25 - Otimizacao de Custos\|25]] |
| 4.4 Redes com custo otimizado | [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares\|2.4]] ([[Trade-off\|trade-offs]] entre pilares) | [[06 - VPC a Fundo\|6]], [[07 - Conectividade Hibrida e entre VPCs\|7]], [[25 - Otimizacao de Custos\|25]] |
| Formato, pontuação e logística da prova | [[02.05 - A Prova por Dentro\|2.5]] | [[27 - Estrategia de Prova e Simulados\|27]] |
| Domínios, pesos e escopo de serviços | [[02.06 - Dominios Pesos e o Mapa para os Pilares\|2.6]] | Todo o curso |
| Leitura de questões e [[Qualificador\|qualificadores]] | [[02.07 - Anatomia de uma Questao\|2.7]] | [[27 - Estrategia de Prova e Simulados\|27]] |
| Princípios das respostas e plano de estudo | [[02.08 - Principios das Respostas Certas e Plano de Estudo\|2.8]] | [[27 - Estrategia de Prova e Simulados\|27]] |

## Checklist de saída do módulo

- [ ] Sei explicar por que arquitetura é uma escolha entre [[Trade-off|trade-offs]] e por que o requisito de negócio, e não a preferência por um pilar, decide.
- [ ] Sei dizer o que mudou no Framework em 16 de novembro de 2026 e como Cloud Foundations e Cloud Workloads se dividem.
- [ ] Sei descrever, para cada um dos seis pilares, o problema que ele resolve e pelo menos dois princípios de design.
- [ ] Sei explicar por que "MOST cost-effective" não significa "o mais barato" e como ele se combina a um requisito de [[Disponibilidade|disponibilidade]].
- [ ] Sei dizer por que a nota de 720 não é "72% de acertos" e o que o [[Modelo Compensatorio|modelo compensatório]] permite e não permite.
- [ ] Sei por que devo responder todas as questões e tratar as 15 não pontuadas como pontuadas.
- [ ] Sei por que requisitos e restrições eliminam alternativas e o [[Qualificador|qualificador]] desempata.
- [ ] Sei reconhecer os tipos de [[Distrator|distrator]] e perguntar "isso resolve porque ... (mecanismo)".
- [ ] Sei dar, para cada um dos nove princípios, o contexto em que a regra se inverte.
- [ ] Sei por que praticar em conta pessoal com orçamento, e o que o Free plan faz ao entrar no Organizations.

## Teste-se

**1.** Uma carga gera 10.000 dólares de receita por hora. A equipe avalia gastar 1.000 dólares por mês em redundância para reduzir o risco de uma indisponibilidade de quatro horas. Segundo a lógica do Framework, o que concluir?

- [ ] a) Evitar a redundância, pois custo é sempre o pilar que prevalece
- [ ] b) Rejeitar a redundância, pois qualquer aumento mensal de custo é injustificável
- [ ] c) A decisão é justificada: o custo mensal é pequeno diante da perda potencial de receita
- [ ] d) Decidir pelo serviço mais popular, sem comparar custo e impacto

**2.** Uma equipe precisa registrar o estado da arquitetura em design, testes, go live e produção, para comparar a evolução e o número de riscos em cada etapa. Qual recurso da [[Well-Architected Tool]] atende?

- [ ] a) Milestones, salvos na workload a cada etapa
- [ ] b) Um novo custom lens para cada etapa do ciclo de vida
- [ ] c) Um tool profile diferente para cada ambiente
- [ ] d) Excluir e recriar a workload a cada etapa

**3.** Uma aplicação em [[Container|contêineres]] [[ECS]] usa [[Access Key|access keys]] de longo prazo, gravadas no código, para acessar o [[S3]]. Qual correção está alinhada ao pilar de Segurança?

- [ ] a) Rotacionar manualmente as chaves todo mês e manter o código como está
- [ ] b) Cifrar as chaves no repositório e deixar a chave de cifragem no mesmo lugar
- [ ] c) Mover as chaves para variáveis de ambiente da tarefa
- [ ] d) Usar uma IAM role da tarefa, com credenciais temporárias

**4.** Uma empresa executa uma aplicação em [[EC2|instâncias EC2]] e precisa que ela continue disponível se uma zona falhar. Segundo a [[Modelo de Responsabilidade Compartilhada|responsabilidade compartilhada]] de resiliência, o que é correto?

- [ ] a) A AWS distribui automaticamente as instâncias do cliente entre várias zonas
- [ ] b) A AWS fornece Regiões isoladas com várias AZs, e o cliente decide usá-las, distribuindo as instâncias
- [ ] c) O cliente é responsável pela rede entre as zonas e pela energia dos data centers da AWS em cada Região
- [ ] d) A AWS garante que nenhuma falha afetará qualquer workload do cliente

**5.** (Escolha DUAS.) Segundo o mapa didático da aula 2.6 (não publicado no exam guide), quais pilares NÃO correspondem ao nome de nenhum dos quatro domínios da prova?

- [ ] a) Segurança
- [ ] b) Excelência Operacional
- [ ] c) Confiabilidade
- [ ] d) Sustentabilidade
- [ ] e) Otimização de Custos

**6.** Os ambientes de desenvolvimento e teste de uma empresa só são usados em dias úteis, das 9h às 17h, mas ficam ligados o tempo todo. Qual medida reduz o custo com a menor mudança na arquitetura?

- [ ] a) Agendar o desligamento dos ambientes fora do horário de uso
- [ ] b) Replicar os ambientes em outra Região para ganhar resiliência
- [ ] c) Comprar compromisso de uso de três anos para os ambientes
- [ ] d) Migrar todas as instâncias para tamanhos maiores

**7.** Um catálogo recebe 50.000 leituras por segundo, sempre por identificador do produto, sem junções. Qual escolha segue o princípio de simpatia mecânica?

- [ ] a) Uma instância relacional cada vez maior, a cada pico
- [ ] b) Arquivos no S3 consultados por varredura
- [ ] c) Um armazenamento chave-valor gerenciado e particionado
- [ ] d) Um data warehouse colunar para consultas analíticas ad hoc sobre grandes volumes de dados

**8.** Faltam 3 minutos e 6 questões sem resposta. O candidato não sabe responder a nenhuma. Qual é a melhor conduta?

- [ ] a) Deixar em branco para não correr o risco de errar
- [ ] b) Responder apenas as que reconhece e deixar as outras para não arriscar erros
- [ ] c) Responder só se tiver pelo menos 50% de certeza
- [ ] d) Marcar uma alternativa em cada, sem penalidade

**9.** Um candidato que fará a prova em inglês ainda não agendou. Como obter os 30 minutos adicionais para falantes não nativos?

- [ ] a) Pedir ao supervisor, no dia da prova, antes de o relógio começar a contar
- [ ] b) Solicitar o ESL +30 na conta de certificação antes de agendar
- [ ] c) Pagar uma taxa adicional no momento do check-in
- [ ] d) Escolher a prova em português para recebê-los automaticamente

**10.** (Escolha DUAS.) Sobre a pontuação da SAA-C03, quais afirmações estão corretas?

- [ ] a) As 15 questões não pontuadas não são identificadas na prova
- [ ] b) O modelo é compensatório: não é preciso passar em cada seção
- [ ] c) É preciso acertar 70% das questões em cada domínio
- [ ] d) A aprovação exige nota mínima em cada seção do relatório
- [ ] e) A nota mínima de 720 equivale a 72% de acertos

**11.** Uma empresa quer receber arquivos enviados por clientes e processar cada um quando chegar, com o MENOR [[Overhead Operacional|overhead operacional]]. Qual solução atende?

- [ ] a) Uma instância EC2 que verifica o bucket a cada minuto com um script
- [ ] b) Um servidor SFTP em EC2 com uma tarefa agendada do sistema operacional
- [ ] c) O S3 com uma notificação de evento que aciona uma função Lambda
- [ ] d) Um cluster Hadoop autogerenciado que lê o bucket continuamente

**12.** Um enunciado exige que a aplicação sobreviva à falha de uma zona. Entre as alternativas, qual é um [[Distrator|distrator]] do tipo "repete palavras do enunciado", isto é, soa certo sem descrever um mecanismo?

- [ ] a) Uma solução altamente disponível e tolerante a falhas
- [ ] b) Um Auto Scaling group em duas AZs atrás de um balanceador, que remove a instância com falha
- [ ] c) Um volume EBS em uma só AZ, com snapshots diários
- [ ] d) Um Classic Load Balancer, tecnologia legada, na frente de uma só instância

**13.** Um candidato estima seu nível por domínio: D1 = 70%, D2 = 60%, D3 = 80% e D4 = 50%. Usando "pontos em jogo = peso x (1 - nível)", qual domínio deve ter prioridade?

- [ ] a) Domínio 1, por ter o maior peso
- [ ] b) Domínio 2, com o maior valor de pontos em jogo
- [ ] c) Domínio 3, por ter o maior nível de domínio
- [ ] d) Domínio 4, por ter o menor nível de domínio entre os quatro avaliados

**14.** Um servidor de produção sofreu alterações manuais ao longo do tempo e ninguém sabe reproduzi-lo. Qual prática do Framework resolve o problema na raiz?

- [ ] a) Conectar por SSH e aplicar cada patch manualmente, anotando as mudanças
- [ ] b) Tirar um snapshot mensal do servidor e guardá-lo
- [ ] c) Documentar o servidor em uma wiki e atualizar após cada mudança
- [ ] d) Substituir o servidor por instâncias novas, criadas a partir de uma imagem ou template versionado

**15.** (Escolha DUAS.) Sobre a estrutura do [[Well-Architected Framework]] após novembro de 2026, quais afirmações estão corretas?

- [ ] a) Cloud Foundations reúne capacidades de nível de organização, como ambiente multiconta e identidade
- [ ] b) Cloud Workloads cobre como projetar, construir e operar cada workload, organizado nos seis pilares
- [ ] c) Os seis whitepapers de pilares continuam como única fonte, publicados separadamente
- [ ] d) Cloud Foundations substituiu os seis pilares
- [ ] e) A Well-Architected Tool passou a ser um serviço pago

**16.** Um estudante de conta nova (Free plan) quer praticar [[Organizations|AWS Organizations]]. O que ele precisa saber antes?

- [ ] a) Entrar no AWS Organizations migra a conta do Free plan para o Paid plan
- [ ] b) Nada muda: o Free plan inclui todos os serviços, sem nenhuma restrição de uso ou de conta
- [ ] c) O Organizations encerra a conta imediatamente ao ser habilitado
- [ ] d) Os créditos de 100 dólares são dobrados ao criar a organização

> [!success]- Gabarito
> **1. c)** O exemplo da página de [[Trade-off|trade-offs]] conclui que 1.000 dólares por mês de redundância se justificam diante da perda potencial. a) e b) fazem o custo prevalecer sempre; d) popularidade não é critério.
> **2. a)** Milestones registram o estado da arquitetura ao longo do ciclo de vida. b) lens muda perguntas, não registra etapas; c) tool profile prioriza perguntas por contexto de negócio; d) apagar perde o histórico, pois excluir a workload remove os marcos.
> **3. d)** Role com [[Credencial Temporaria|credenciais temporárias]] elimina a credencial estática. a) e c) mantêm credencial de longo prazo; b) a chave de cifragem fica exposta junto.
> **4. b)** A AWS fornece a infraestrutura isolada, e o cliente decide usá-la. a) a distribuição é decisão do cliente; c) rede e energia dos data centers são da AWS; d) nenhuma garantia absoluta é dada.
> **5. b) e d)** No mapa didático da aula 2.6, Excelência Operacional e Sustentabilidade são transversais, sem domínio próprio. a), c) e e) correspondem de forma direta aos domínios 1, 2 e 4.
> **6. a)** Agendar desligamento muda só o padrão de consumo. b) aumenta custo; c) compromisso para uso parcial é desperdício; d) instâncias maiores elevam o custo.
> **7. c)** O padrão (leitura por chave em alta escala) pede chave-valor gerenciado. a) escala por mais custo e mantém ponto único de escrita; b) varredura é lenta; d) [[Armazenamento Colunar|colunar]] serve consultas analíticas, não leitura por chave.
> **8. d)** Sem penalidade por chute, todas devem ser respondidas. a), b) e c) deixam pontos na mesa ou impõem um limite sem base.
> **9. b)** O pedido é feito uma vez, na conta de certificação, antes de agendar. a) o supervisor não concede; c) não há taxa; d) o [[Acomodacao ESL|ESL +30]] vale só para a prova em inglês.
> **10. a) e b)** As não pontuadas não são identificadas e o modelo é [[Modelo Compensatorio|compensatório]]. c) e d) exigem desempenho por seção; e) a nota é escalonada, sem equivalência publicada.
> **11. c)** O evento do [[S3]] aciona a função [[Serverless|sem servidor]] para gerenciar. a), b) e d) envolvem servidores ou clusters para operar.
> **12. a)** A alternativa só reaproveita "[[Alta Disponibilidade|altamente disponível]]" e "[[Tolerancia a Falhas|tolerante a falhas]]", sem dizer o que faz isso acontecer: verifique o mecanismo, não as palavras. b) descreve um mecanismo real; c) é o [[Distrator|distrator]] de escopo errado (recurso zonal para um requisito de falha de zona); d) é o distrator legado.
> **13. b)** Pontos em jogo: D1 = 9, D2 = 10,4, D3 = 4,8 e D4 = 10; D2 é o maior. a) o peso sozinho não decide; c) D3 tem o menor valor de pontos em jogo; d) D4 tem 10, abaixo de 10,4.
> **14. d)** [[Infraestrutura Imutavel|Infraestrutura imutável]] substitui o servidor por um novo a partir de uma imagem ou template. a), b) e c) mantêm o servidor mutável e a [[Drift Detection|deriva de configuração]].
> **15. a) e b)** São as duas áreas da nova estrutura. c) foram consolidados; d) o conjunto de pilares continua; e) a Tool segue sem custo.
> **16. a)** A página de planos informa que o Free plan migra automaticamente para Paid ao entrar no Organizations. b) o Free plan exclui serviços que podem consumir créditos; c) não há encerramento imediato; d) os créditos não são dobrados.

## Próximo módulo

[[03 - Fundamentos de Redes para a Nuvem|Próximo módulo: Fundamentos de Redes para a Nuvem]]
