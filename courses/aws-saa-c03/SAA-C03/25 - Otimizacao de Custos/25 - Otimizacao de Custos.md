---
aliases:
  - Módulo 25
modulo: 25
parte: "VIII Custo, projeto e prova"
tags:
  - modulo
  - saa-c03
---

# Módulo 25: Otimização de Custos

O João já recebe a fatura da AWS no BidChex e sabe que "o custo subiu" nunca vem com explicação. Este módulo ensina a ler a conta pela fonte: **como a AWS cobra** (alocado ou consumido, por hora, por requisição, por GB e por rota de dados), **como enxergar e dar dono ao gasto**, e **como cortar o desperdício** em computação, armazenamento, bancos de dados e rede sem violar o requisito que o enunciado impõe.

O Domínio 4 da prova (Design de arquiteturas de custo otimizado) pesa cerca de 20% e se resume a uma pergunta repetida em formas diferentes: qual é a solução mais econômica **que ainda atende todos os requisitos**? Este módulo é o dono das ferramentas de custo ([[Cost Explorer]], Budgets, [[Cost and Usage Report|CUR]], [[Compute Optimizer]], [[Trusted Advisor]], [[Cost Optimization Hub]]) e das Tasks 4.1 a 4.4. Os preços que aparecem são ilustrativos (ordem de grandeza) e as regras de cobrança foram verificadas na documentação oficial em novembro de 2026; os valores exatos mudam, então confira a página de preços antes de decidir de verdade.

> [!info] Como estudar este módulo
> Leia as onze aulas em ordem: as quatro primeiras ensinam a **enxergar** o custo, as seis seguintes a **cortá-lo** por área e a última junta tudo em um método de prova. Em cada aula, responda ao `[!question]` do topo com suas palavras antes de ler o `Resumo`. Os laboratórios são opcionais e devem ser feitos em uma [[Conta AWS|conta AWS]] pessoal separada, nunca na de produção.

## Aulas

1. [[25.01 - Como a AWS Cobra e o Pilar de Custos]]: as quatro dimensões de cobrança, alocado contra consumido, recursos que cobram parados, regras de [[Data Transfer|transferência de dados]] e as quatro áreas do pilar de custo do [[Well-Architected Framework|Well-Architected]].
2. [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias]]: [[Cost Explorer]] (histórico, previsão, granularidade horária), Budgets (seis tipos, alertas, ações e seus limites) e [[Cost Anomaly Detection]].
3. [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports]]: tags de alocação (ativação e backfill), [[Cost Categories]], [[Consolidated Billing|cobrança consolidada]] e compartilhamento de [[Reserved Instance|RIs]] e [[Savings Plans]], [[Data Exports|CUR 2.0]] e [[Pricing Calculator]].
4. [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor]]: [[Rightsizing|rightsizing]] com [[Compute Optimizer]], checks de custo do [[Trusted Advisor]] e a lista consolidada do [[Cost Optimization Hub]].
5. [[25.05 - Computacao Modelos de Compra e a Decisao]]: On-Demand, [[Savings Plans]], [[Reserved Instance|Reserved Instances]], [[Spot Instance|Spot]], Capacity Reservations e a árvore de decisão para cada perfil de carga.
6. [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados]]: dimensionar antes de comprometer, desligar fora do horário, [[Graviton]], [[EC2]] contra [[Container|containers]] contra Lambda e o custo dos balanceadores.
7. [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos]]: classes de armazenamento e o que cada uma cobra, [[S3 Intelligent-Tiering|Intelligent-Tiering]], [[Lifecycle Policy|regras de ciclo de vida]] e custos escondidos do [[S3]].
8. [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo]]: [[gp3]] contra [[gp2]], [[Snapshot|snapshots]] e a camada Archive, [[EFS]] com ciclo de vida, [[FSx]] e a retenção do [[Backup|AWS Backup]].
9. [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta]]: [[Multi-AZ]] e réplicas no [[RDS]], [[Aurora]] ([[Aurora I O-Optimized|I/O-Optimized]] e [[Serverless]] v2), [[DynamoDB]] (on-demand, provisionado, [[S3 Standard-IA|Standard-IA]]), cache e a escolha do banco certo.
10. [[25.10 - Rede e Transferencia de Dados]]: regras de direção da transferência, [[NAT Gateway]], gateway e [[Interface Endpoint|interface endpoints]], [[CloudFront]], VPN contra [[Direct Connect]] e peering contra [[Transit Gateway]].
11. [[25.11 - Decisao de Custo na Prova e Revisao]]: o método "filtrar, depois escolher o mais barato", o mapa de decisões do módulo, os conflitos clássicos e casos integrados.

## Cobertura do exam guide

Este módulo é o dono do Domínio 4 inteiro e das ferramentas de custo.

| Task statement | Onde está |
|---|---|
| Task 4.1: soluções de armazenamento de custo otimizado (classes de [[S3]], ciclo de vida, tipos de [[EBS]], [[Snapshot\|snapshots]], [[EFS]], [[FSx]], backup) | [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos\|Aula 25.7]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo\|Aula 25.8]] |
| Task 4.1: ferramentas de gerenciamento de custo ([[Cost Explorer]], Budgets, [[Cost and Usage Report\|CUR]]), tags de alocação, [[Consolidated Billing\|faturamento consolidado]], [[Pricing Calculator]] | [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias\|Aula 25.2]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports\|Aula 25.3]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor\|Aula 25.4]] |
| Task 4.2: computação de custo otimizado (modelos de compra, [[Savings Plans]], [[Reserved Instance\|RIs]], [[Spot Instance\|Spot]], [[Rightsizing\|rightsizing]], [[Graviton]], [[Serverless\|serverless]], balanceadores) | [[25.05 - Computacao Modelos de Compra e a Decisao\|Aula 25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados\|Aula 25.6]] |
| Task 4.3: bancos de dados de custo otimizado (modos de capacidade, [[Multi-AZ]], réplicas, cache, escolha do banco) | [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta\|Aula 25.9]] |
| Task 4.4: redes de custo otimizado ([[Data Transfer\|transferência de dados]], [[NAT]], endpoints, [[CDN]], conectividade híbrida, peering e [[Transit Gateway]]) | [[25.10 - Rede e Transferencia de Dados\|Aula 25.10]], [[25.01 - Como a AWS Cobra e o Pilar de Custos\|Aula 25.1]] |
| Pilar de custo do [[Well-Architected Framework\|Well-Architected]] e método de decisão da prova | [[25.01 - Como a AWS Cobra e o Pilar de Custos\|Aula 25.1]], [[25.11 - Decisao de Custo na Prova e Revisao\|Aula 25.11]] |

## Checklist de saída do módulo

Marque quando conseguir responder sem consultar, com suas palavras e incluindo o porquê.

- [ ] Por que computação cobra o que está alocado e armazenamento o que está consumido, e quais recursos cobram mesmo parados?
- [ ] Qual é a diferença entre [[Cost Explorer]], Budgets e [[Cost Anomaly Detection]], e por que o Budgets não é uma trava de gasto?
- [ ] Por que uma tag aplicada ao recurso não aparece no relatório sem ativação, e o que o backfill resolve?
- [ ] O que [[Compute Optimizer]], [[Trusted Advisor]] e [[Cost Optimization Hub]] respondem, e qual plano de suporte libera todos os checks (Business Support+ ou antigo Business, ou superior)?
- [ ] Qual é a diferença entre Compute [[Savings Plans]], [[EC2]] Instance Savings Plans, [[Reserved Instance|RI]] Standard, RI Convertible e [[Spot Instance|Spot]], e por que Savings Plan não reserva capacidade?
- [ ] Por que dimensionar antes de comprometer, e por que parar uma instância não zera o custo?
- [ ] Como escolher a classe de [[S3]] pelo padrão de acesso, e por que objetos pequenos podem sair mais caros no [[S3 Standard-IA|Standard-IA]]?
- [ ] Por que o [[Gateway Endpoint|gateway endpoint]] reduz o custo do [[NAT Gateway]], e quando o [[Interface Endpoint|interface endpoint]] compensa?
- [ ] Quando [[DynamoDB]] on-demand, provisionado e [[S3 Standard-IA|Standard-IA]] fazem sentido, e por que [[Multi-AZ]] não entra em desenvolvimento e teste?
- [ ] Como a regra "filtrar o que viola o requisito, depois escolher o mais barato" muda a resposta de uma questão de custo?

## Teste-se

Dezesseis questões integradoras: cada uma cruza duas ou mais aulas do módulo (as aulas citadas ficam no gabarito).

**1.** Uma API em [[EC2]] atrás de um [[Application Load Balancer|ALB]] tem base estável de 8 instâncias, e picos de 2 horas por dia que chegam a 30 instâncias, com cargas sem estado. A empresa quer o menor custo mantendo a [[Alta Disponibilidade|alta disponibilidade]]. Qual estratégia usar?

- [ ] a) Savings Plans de 3 anos para a capacidade do pico máximo de 30 instâncias, mantendo todas ligadas para evitar atrasos de escala
- [ ] b) Todas as instâncias em Spot, sem capacidade mínima no Auto Scaling, aceitando indisponibilidade durante as interrupções da AWS
- [ ] c) Savings Plans na base de 8 instâncias e Auto Scaling com Spot e On-Demand para o excedente
- [ ] d) 30 instâncias On-Demand fixas, com o Budgets configurado para alertar quando o gasto previsto passar do limite

**2.** Um [[Bucket|bucket]] de 300 TB tem padrão de acesso desconhecido e é lido por instâncias em [[Sub-rede Privada|sub-redes privadas]] por meio de [[NAT Gateway]]. Quais duas mudanças reduzem mais o custo, com o menor [[Overhead Operacional|esforço operacional]]?

- [ ] a) S3 Intelligent-Tiering para o padrão desconhecido e um gateway endpoint gratuito para o S3
- [ ] b) S3 Standard-IA em todos os objetos e um NAT Gateway por AZ para dividir o tráfego pesado
- [ ] c) S3 Glacier Flexible Retrieval para todos os objetos e um interface endpoint para o S3
- [ ] d) S3 One Zone-IA para todos os objetos e um Transit Gateway ligando as sub-redes privadas ao bucket

**3.** O financeiro precisa dividir a fatura entre cinco projetos que compartilham contas e quer ser avisado quando o gasto previsto do mês passar do orçamento de cada um. Hoje as tags existem nos recursos, mas nada foi ativado. Qual conjunto de ações atende?

- [ ] a) Usar o Pricing Calculator para recalcular a fatura de cada projeto e enviar relatórios semanais por e-mail
- [ ] b) Habilitar o Compute Optimizer em todas as contas e acompanhar as recomendações de rightsizing por projeto
- [ ] c) Criar monitores de Cost Anomaly Detection por serviço, dispensando as tags e os orçamentos por projeto
- [ ] d) Ativar as tags de alocação de custo e criar um orçamento por projeto com alerta de valor previsto

**4.** (Escolha DUAS.) A equipe quer localizar recursos ociosos e instâncias superdimensionadas. Quais ferramentas fornecem essas informações?

- [ ] a) AWS Pricing Calculator, que estima o custo de arquiteturas ainda não criadas
- [ ] b) AWS Trusted Advisor, com os checks de custo, em planos que liberem o conjunto completo
- [ ] c) AWS Cost Anomaly Detection, que acompanha o custo e não avalia a utilização dos recursos
- [ ] d) AWS Compute Optimizer, que recomenda tamanhos a partir das métricas de uso
- [ ] e) Tag Policies, que padronizam chaves e valores de tags na organização

**5.** Um cluster [[Aurora]] de produção tem I/O pesado e uma fatura imprevisível de I/O. O ambiente de homologação é uma cópia exata, com réplicas, ligada 24x7 e usada só em horário comercial. Quais ações reduzem o custo sem afetar a produção?

- [ ] a) Aurora I/O-Optimized em todos os ambientes, e réplicas de leitura adicionais na homologação para os testes terminarem mais cedo
- [ ] b) Aurora I/O-Optimized na produção, e na homologação uma instância menor, sem réplicas, parada fora do expediente
- [ ] c) Aurora Standard em todos os ambientes, mantendo as réplicas para preservar a paridade com a produção
- [ ] d) Reserved Instances de 3 anos para a homologação, e Aurora Serverless v2 na produção, com uma capacidade mínima alta

**6.** Uma empresa guarda [[Snapshot|snapshots]] diários de [[EBS|volumes EBS]] por 7 anos por exigência legal e quase nunca restaura. Hoje a retenção é feita à mão e há snapshots de instâncias que já não existem. Qual combinação reduz custo e esforço?

- [ ] a) Data Lifecycle Manager para criar e expirar os snapshots recentes, e EBS Snapshots Archive para os que ficam por anos
- [ ] b) Manter todos os snapshots na camada padrão e habilitar o Fast Snapshot Restore para acelerar eventuais restaurações
- [ ] c) Copiar todos os snapshots para outra Região, na camada padrão, para ter uma segunda cópia de segurança
- [ ] d) Mover os snapshots para a Lixeira (Recycle Bin) pelo prazo de 7 anos, onde não são cobrados

**7.** Uma empresa precisa garantir 100 instâncias em uma [[Zona de Disponibilidade|AZ]] durante um evento de 3 dias, cobrir a base estável do ano inteiro e usar o excedente tolerante a interrupção pelo menor custo. Qual combinação escolher?

- [ ] a) Compute Savings Plans de 3 anos para o pico do evento e Spot para a base estável do ano inteiro, sem tratar interrupções
- [ ] b) Compute Savings Plans na base, On-Demand Capacity Reservation para o evento e Spot para o excedente tolerante
- [ ] c) RI regional de 1 ano para o evento, para reservar a capacidade e depois devolver a reserva à AWS com reembolso integral
- [ ] d) Somente Spot com a estratégia capacity-optimized em diversas AZs, pois o desconto compensa qualquer risco de capacidade

**8.** Uma empresa envia 30 TB por dia, de forma constante, do data center para a AWS e precisa conectar três [[VPC|VPCs]] entre si ao menor custo, sem roteamento central. Qual combinação escolher?

- [ ] a) Site-to-Site VPN para o data center e um Transit Gateway para as três VPCs
- [ ] b) Site-to-Site VPN para o data center e um NAT Gateway compartilhado entre as três VPCs
- [ ] c) Direct Connect para o data center e um Transit Gateway ligando as VPCs, para simplificar a gestão
- [ ] d) Direct Connect para o data center e VPC peering entre as três VPCs

**9.** (Escolha DUAS.) Quais afirmações sobre cobrança estão corretas?

- [ ] a) Dados que saem da AWS para a internet são sempre gratuitos, e os que entram são cobrados
- [ ] b) Uma instância EC2 parada continua gerando cobrança de EBS e de Elastic IPs associados
- [ ] c) O Budgets bloqueia o consumo em tempo real assim que o limite é atingido, sem configuração
- [ ] d) Uma instância RDS parada é religada automaticamente pela AWS depois de 7 dias
- [ ] e) O tráfego entre AZs da mesma Região é sempre gratuito, desde que use IPs privados

**10.** Uma tabela [[DynamoDB]] de auditoria tem 15 TB, é lida raramente e recebe escritas em ritmo estável. O armazenamento domina a conta. Qual configuração minimiza o custo?

- [ ] a) Modo on-demand com a classe Standard e DAX na frente da tabela, para cachear todos os itens de auditoria
- [ ] b) Classe Standard-IA, capacidade provisionada com Auto Scaling e TTL para expirar itens antigos
- [ ] c) Tabela global com réplicas em três Regiões, para distribuir o armazenamento entre elas
- [ ] d) Modo on-demand com a classe Standard e leituras fortemente consistentes em todas as consultas

**11.** O time etiqueta todos os recursos com `Projeto`, mas o [[Cost Explorer]] não mostra a chave, e o financeiro precisa dos três meses anteriores agrupados por projeto. O que fazer?

- [ ] a) Aguardar 90 dias para a AWS popular a chave no Cost Explorer com o histórico anterior
- [ ] b) Habilitar a granularidade horária para que o histórico apareça junto das tags
- [ ] c) Ativar a chave como tag de alocação de custo e pedir o backfill dos meses anteriores
- [ ] d) Recriar todos os recursos com a tag, para que a cobrança volte a ser gerada com ela

**12.** Um serviço tem tráfego esporádico e imprevisível, com longos períodos sem requisições, e a equipe quer pagar só pelo uso. Qual escolha de computação é a mais adequada?

- [ ] a) AWS Lambda, ajustando a memória pelo ponto de menor custo e pagando só pelas requisições
- [ ] b) Instâncias EC2 com RI de 3 anos dimensionadas para o pico, mantendo capacidade sempre pronta
- [ ] c) Dedicated Hosts, para garantir isolamento e desempenho estável em qualquer carga
- [ ] d) Cluster ECS em EC2 com capacidade fixa, mantendo todas as tarefas ligadas 24x7

**13.** Uma empresa pretende migrar parte das instâncias para [[Fargate]] e Lambda no próximo ano e quer um desconto de 3 anos que acompanhe essa mudança. Qual opção escolher?

- [ ] a) EC2 Instance Savings Plans, que dão o maior desconto para uma família fixa de instâncias
- [ ] b) Standard RIs zonais, para reservar também a capacidade em cada AZ
- [ ] c) Convertible RIs, trocando por Fargate e Lambda quando a migração acontecer
- [ ] d) Compute Savings Plans de 3 anos, que também cobrem Fargate e Lambda

**14.** Uma carga em [[Sub-rede Privada|sub-redes privadas]] de 3 [[Zona de Disponibilidade|AZs]] envia 5 TB por mês ao [[SQS]] pelo [[NAT Gateway]] (US$ 0,045 por GB processado). [[Interface Endpoint|Interface endpoints]] do SQS custam, com valores ilustrativos, cerca de US$ 7 por mês por AZ mais US$ 0,01 por GB. Qual conclusão está correta?

- [ ] a) O NAT custa cerca de US$ 71 por mês e os endpoints cerca de US$ 225, então convém manter o NAT
- [ ] b) Os dois custam praticamente o mesmo, cerca de US$ 100 por mês, e a escolha é indiferente
- [ ] c) Um gateway endpoint do SQS é gratuito e resolve o problema sem nenhum custo adicional
- [ ] d) Os interface endpoints somam cerca de US$ 71 por mês contra cerca de US$ 225 de processamento no NAT, então compensam

**15.** Duas soluções atendem a quase todos os requisitos de uma questão. A mais barata viola o [[RPO]] exigido, e a outra custa 30% mais e atende tudo. Qual é o raciocínio correto?

- [ ] a) Escolher a mais barata, pois o enunciado pede custo mínimo e o RPO pode ser negociado depois
- [ ] b) Descartar a que viola o requisito e escolher a mais barata entre as que o atendem
- [ ] c) Escolher a mais cara, pois o custo nunca deve ser considerado em questões de arquitetura
- [ ] d) Escolher a que tiver o menor número de serviços, independentemente do custo e do requisito

**16.** O gasto diário triplicou ontem por causa de um laço infinito em uma [[Lambda|função Lambda]]. A empresa não tem orçamentos por serviço e quer detecção automática, com a causa provável, sem definir limites. O que usar?

- [ ] a) AWS Budgets com um orçamento fixo para a função, e um e-mail quando o gasto passar de um valor escolhido
- [ ] b) Cost Explorer com um relatório diário salvo, revisado manualmente pela equipe financeira toda manhã
- [ ] c) Cost Anomaly Detection com um monitor gerenciado pela AWS e uma assinatura de alertas por SNS ou e-mail
- [ ] d) Compute Optimizer com histórico estendido, para dimensionar a função com base em 93 dias de uso

> [!success]- Gabarito
> **1. c)** (aulas 25.5 e 25.6) o compromisso cobre a base estável, e o [[Auto Scaling Group|Auto Scaling]] com [[Spot Instance|Spot]] e On-Demand cobre o excedente sem perder a [[Disponibilidade|disponibilidade]]; a) compromete o pico inteiro e paga ocioso, b) Spot sem capacidade mínima arrisca a disponibilidade, d) paga o preço cheio por 30 instâncias o tempo todo.
> **2. a)** (aulas 25.7 e 25.10) o [[S3 Intelligent-Tiering|Intelligent-Tiering]] cobre o padrão desconhecido e o [[Gateway Endpoint|gateway endpoint]] gratuito tira o tráfego do [[NAT]]; b) [[S3 Standard-IA|Standard-IA]] cobra recuperação e o NAT por [[Zona de Disponibilidade|AZ]] multiplica o custo fixo, c) Glacier exige restauração e o [[Interface Endpoint|interface endpoint]] cobra, d) One Zone-IA arrisca o dado e o [[Transit Gateway|TGW]] não conecta ao [[S3]].
> **3. d)** (aulas 25.2 e 25.3) a ativação das tags dá o dono do gasto e o Budgets com alerta de previsão avisa antes de estourar; a) é estimativa, não fatura real, b) dimensiona, não atribui custo, c) não dá o dono nem o limite por projeto.
> **4. b), d)** (aulas 25.4 e 25.6) o [[Trusted Advisor]] aponta ociosidade e o [[Compute Optimizer]] recomenda tamanhos; a) estima custo futuro, c) não avalia utilização, e) padroniza tags.
> **5. b)** (aulas 25.9 e 25.6) o [[Aurora I O-Optimized|I/O-Optimized]] elimina o custo de I/O da produção, e a homologação ganha classe menor, sem réplicas e parada agendada; a) aumenta custo, c) mantém o I/O cobrado e as réplicas, d) [[Reserved Instance|RIs]] em ambiente temporário e capacidade mínima alta aumentam o custo.
> **6. a)** (aulas 25.8 e 25.11) o [[Data Lifecycle Manager|DLM]] automatiza criação e retenção, e o Archive reduz cerca de 75% o armazenamento de longa retenção; b) aumenta o custo, c) duplica o armazenamento e a transferência, d) a Lixeira continua cobrando.
> **7. b)** (aula 25.5) o compromisso cobre a base, a [[Capacity Reservation]] garante a capacidade do evento sem contrato longo e o [[Spot Instance|Spot]] atende ao excedente tolerante; a) inverte os papéis e deixa a base em Spot, c) a [[Reserved Instance|RI]] regional não reserva capacidade e não há reembolso, d) Spot não garante capacidade e pode ser interrompido.
> **8. d)** (aulas 25.10 e 25.5) o [[Direct Connect]] compensa em volume alto e constante, e o peering é o mais barato para poucas [[VPC|VPCs]]; a) a VPN para esse volume usa a taxa da internet, b) o [[NAT]] não conecta VPCs, c) o [[Transit Gateway|TGW]] cobra por anexo e por GB sem necessidade de roteamento central.
> **9. b), d)** (aulas 25.1, 25.6 e 25.9) [[EBS]] e [[Elastic IP]] seguem cobrando com a instância parada, e o [[RDS]] parado volta depois de 7 dias; a) está invertido, c) o Budgets só age com ação configurada e com atraso, e) o tráfego entre [[Zona de Disponibilidade|AZs]] é cobrado dos dois lados.
> **10. b)** (aulas 25.9 e 25.7) a [[S3 Standard-IA|Standard-IA]] reduz o armazenamento que domina, o provisionado com [[Auto Scaling Group|Auto Scaling]] atende ao ritmo estável e o [[TTL]] expira itens antigos; a) [[DAX]] não serve para 15 TB e on-demand encarece escrita estável, c) replicar aumenta o armazenamento, d) leituras fortes custam mais.
> **11. c)** (aula 25.3) a ativação é o passo que falta e o backfill traz os meses anteriores; a) não há espera de 90 dias, b) a granularidade não traz tags, d) recriar não altera a cobrança passada.
> **12. a)** (aulas 25.6 e 25.9) a Lambda cobra por uso e não tem custo parado, e a memória define o custo por execução; b), c) e d) pagam capacidade ociosa.
> **13. d)** (aula 25.5) o Compute [[Savings Plans]] cobre [[EC2]], [[Fargate]] e Lambda; a) fixa a família e não cobre Fargate e Lambda, b) zonais não acompanham a mudança, c) Convertible [[Reserved Instance|RI]] não cobre Fargate nem Lambda.
> **14. d)** (aula 25.10) o [[NAT]] cobra 5.000 GB x 0,045 = US$ 225, e os endpoints somam 3 x 7 + 5.000 x 0,01 = cerca de US$ 71; a) inverte os números, b) os valores não são parecidos, c) o [[SQS]] só tem [[Interface Endpoint|interface endpoint]], não gateway.
> **15. b)** (aula 25.11) primeiro filtra o que viola o requisito, depois escolhe o mais barato; a) viola o [[RPO]], c) o custo é critério da prova, d) ignora requisito e custo.
> **16. c)** (aulas 25.2 e 25.1) o [[Anomaly Detection]] detecta padrão fora do normal sem limite prévio e lista causas prováveis; a) exige conhecer o valor, b) é manual e tardio, d) dimensiona e não detecta picos.

## Próximo módulo

[[26 - Projeto Pratico - Arquitetura de Referencia|Próximo módulo: Projeto Prático, Arquitetura de Referência]]
