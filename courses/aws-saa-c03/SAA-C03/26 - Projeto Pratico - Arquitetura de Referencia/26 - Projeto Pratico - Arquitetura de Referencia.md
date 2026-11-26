---
aliases:
  - Módulo 26
modulo: 26
parte: "VIII Custo, projeto e prova"
tags:
  - modulo
  - saa-c03
---

# Módulo 26: Projeto Prático, Arquitetura de Referência

Os vinte e cinco módulos anteriores ensinaram as peças. A prova, porém, não cobra peças soltas: cobra **decisões em contexto**, em que três ou quatro serviços competem e o enunciado traz uma restrição que elimina a maioria. Este módulo é o capstone: desenha do zero uma plataforma [[Multi-Tenant|multi-tenant]] chamada **PropDesk** (um SaaS de gestão de chamados e documentos para administradoras de condomínios), em **quatro iterações**, e depois a coloca em uma organização multiconta, com plano de DR, estimativa de custo e revisão [[Well-Architected Framework|Well-Architected]].

O método é o de uma [[Arquitetura de Referencia|arquitetura de referência]]: cada decisão nasce de um requisito, vem com um [[ADR|registro curto de decisão]] e declara o que foi sacrificado. A versão inicial (v0) tem dez defeitos propositais, e cada iteração conserta uma família deles (segurança, resiliência, desempenho, custo). O módulo termina com quatro exercícios no formato da prova: o requisito muda e você precisa descobrir quais camadas o novo requisito toca.

> [!warning] Cenário fictício, preços ilustrativos
> O PropDesk, seus números e todos os preços deste módulo são **fictícios e redondos**, escolhidos para que a aritmética seja conferível, não para refletir a tabela de preços da AWS. Os fatos de serviço (limites, comportamentos, regras de cobrança) foram verificados na documentação oficial; os valores em dólar, não. Antes de decidir de verdade, use o [[Pricing Calculator]].

> [!info] Como estudar este módulo
> Leia as nove aulas em ordem: a 26.1 fixa o caso, as quatro seguintes o constroem, e as quatro últimas o governam, o protegem, o revisam e o testam com mudanças de requisito. Antes de ler cada iteração, **desenhe a sua própria resposta** em um papel, depois compare. Sem uma resposta própria para comparar, a leitura vira passividade.

## Aulas

1. [[26.01 - O Projeto PropDesk e os Requisitos]]: o caso, a tabela de requisitos, o modelo de tenancy ([[Modelo Bridge|bridge]]), o método das iterações e a v0 com seus dez defeitos.
2. [[26.02 - Iteracao 1 Seguranca em Camadas]]: [[VPC]] em três camadas e três [[Zona de Disponibilidade|AZs]], cadeia de [[Security Group|security groups]], endpoints, roles da tarefa, [[KMS]], [[Secrets Manager]], URLs pré-assinadas e [[WAF]].
3. [[26.03 - Iteracao 2 Resiliencia e Desacoplamento]]: tabela de falhas, conta de capacidade N-1, [[Multi-AZ]] contra [[Point-in-Time Recovery|PITR]], [[SQS]] com [[Dead-Letter Queue|DLQ]] e [[Idempotencia|idempotência]], [[Estabilidade Estatica|estabilidade estática]].
4. [[26.04 - Iteracao 3 Desempenho e Elasticidade]]: borda, escala por [[Metrica|métrica]] e agendada, cache, réplica e [[RDS Proxy]], [[TTL]] no [[DynamoDB]] e consultas no [[Data Lake|data lake]].
5. [[26.05 - Iteracao 4 Custo Otimizado]]: mapa de custo, comprometer só o piso, [[Spot Instance|Spot]] nos trabalhadores, [[Lifecycle Policy|ciclo de vida do S3]], endpoints contra [[NAT]] e ambientes não produtivos.
6. [[26.06 - Multiconta Governanca e Auditoria]]: estrutura de OUs, [[Control Tower]], [[SCP|SCPs]], [[IAM Identity Center|Identity Center]], trilha da organização e detecção centralizada.
7. [[26.07 - Plano de DR e Estimativa de Custo]]: camadas de criticidade, [[Pilot Light|pilot light]], tabela por componente, cofre imutável, [[Runbook|runbook]] de [[Failover|failover]] e [[Failback|failback]], e a estimativa de custo.
8. [[26.08 - Revisao Well-Architected e Trade-offs]]: arquitetura consolidada, revisão pelos seis pilares, alarmes, [[Trade-off|trade-offs]], serviços não usados, quadro de pegadinhas que o projeto não exercitou e o método de cinco passos.
9. [[26.09 - Mudancas de Requisito no Estilo da Prova]]: soberania na Europa, pico de 10 vezes, auditoria e migração de um sistema legado, com soluções comentadas.

## Cobertura do exam guide

Este módulo não introduz tasks novas: ele **integra** as que os módulos anteriores ensinaram, em um desenho só. A coluna da direita mostra a aula do projeto e a aula de origem do assunto.

| Task statement | Onde está |
|---|---|
| Task 1.1: acesso seguro a recursos (roles, contas, [[Federacao\|federação]], [[SCP]]) | [[26.02 - Iteracao 1 Seguranca em Camadas\|Aula 26.2]], [[26.06 - Multiconta Governanca e Auditoria\|Aula 26.6]]; origem em [[04.06 - Roles e STS Credenciais Temporarias\|4.6]], [[05.02 - SCPs e Politicas de Organizacao\|5.2]], [[05.05 - IAM Identity Center\|5.5]] |
| Task 1.2: cargas e aplicações seguras ([[VPC]] em camadas, endpoints, [[WAF]], Shield, [[Cognito]]) | [[26.02 - Iteracao 1 Seguranca em Camadas\|Aula 26.2]]; origem em [[06.02 - Sub-redes e Arquitetura em Camadas\|6.2]], [[06.08 - Gateway Endpoints para S3 e DynamoDB\|6.8]], [[19.03 - WAF Web ACLs Regras e Onde Associar\|19.3]], [[19.07 - Cognito User Pools e Identity Pools\|19.7]] |
| Task 1.3: controles de segurança de dados ([[KMS]], segredos, [[S3]], [[Object Lock]], auditoria) | [[26.02 - Iteracao 1 Seguranca em Camadas\|Aula 26.2]], [[26.06 - Multiconta Governanca e Auditoria\|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova\|26.9]]; origem em [[08.02 - AWS KMS Chaves e Envelope Encryption\|8.2]], [[08.08 - Secrets Manager e Parameter Store\|8.8]], [[05.08 - CloudTrail e a Trilha de Auditoria\|5.8]] |
| Task 2.1: arquiteturas escaláveis e fracamente acopladas (filas, eventos, [[Serverless\|serverless]], [[Container\|containers]]) | [[26.03 - Iteracao 2 Resiliencia e Desacoplamento\|Aula 26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade\|26.4]]; origem em [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem\|15.2]], [[12.07 - Politicas de Escala\|12.7]], [[17.07 - Migrar para Containers e Elastic Beanstalk\|17.7]] |
| Task 2.2: arquiteturas altamente disponíveis e tolerantes a falhas ([[Multi-AZ]], DR, backup, [[Failover\|failover]]) | [[26.03 - Iteracao 2 Resiliencia e Desacoplamento\|Aula 26.3]], [[26.07 - Plano de DR e Estimativa de Custo\|26.7]]; origem em [[13.03 - RDS Multi-AZ Instancia e Cluster\|13.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres\|20.4]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis\|20.5]] |
| Task 3.1 e 3.2: armazenamento e computação de alto desempenho e elásticos | [[26.04 - Iteracao 3 Desempenho e Elasticidade\|Aula 26.4]]; origem em [[11.03 - Ciclo de Vida e Custo no S3\|11.3]], [[12.06 - Auto Scaling Groups e Launch Templates\|12.6]] |
| Task 3.3: bancos de dados de alto desempenho (réplicas, proxy, cache, [[DynamoDB]]) | [[26.04 - Iteracao 3 Desempenho e Elasticidade\|Aula 26.4]]; origem em [[13.04 - RDS Read Replicas e Escala de Leitura\|13.4]], [[13.06 - RDS Proxy e Gestao de Conexoes\|13.6]], [[14.06 - Estrategias de Cache e DAX\|14.6]] |
| Task 3.4: redes de alto desempenho e escaláveis ([[CloudFront]], balanceadores, [[DNS]]) | [[26.04 - Iteracao 3 Desempenho e Elasticidade\|Aula 26.4]], [[26.09 - Mudancas de Requisito no Estilo da Prova\|26.9]]; origem em [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo\|18.1]], [[12.03 - Application Load Balancer a Fundo\|12.3]] |
| Task 3.5: ingestão e transformação de dados (Athena, [[Parquet]], [[Data Lake\|data lake]]) | [[26.04 - Iteracao 3 Desempenho e Elasticidade\|Aula 26.4]]; origem em [[22.05 - Data Lake no S3 Formatos e Particionamento\|22.5]], [[22.07 - Amazon Athena Consultas SQL no Lago\|22.7]] |
| Tasks 4.1 a 4.4: armazenamento, computação, bancos e rede de custo otimizado | [[26.05 - Iteracao 4 Custo Otimizado\|Aula 26.5]], [[26.07 - Plano de DR e Estimativa de Custo\|26.7]]; origem em [[25.05 - Computacao Modelos de Compra e a Decisao\|25.5]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos\|25.7]], [[25.10 - Rede e Transferencia de Dados\|25.10]], [[25.11 - Decisao de Custo na Prova e Revisao\|25.11]] |
| Migração de sistema legado ([[7 Rs da Migracao\|7 Rs]], [[Application Migration Service\|MGN]], [[DMS]], [[DataSync]], [[Transfer Family]]) | [[26.09 - Mudancas de Requisito no Estilo da Prova\|Aula 26.9]]; origem em [[23.01 - Por que e Como Migrar os 7 Rs e as Fases\|23.1]], [[23.03 - Migracao de Bancos com o DMS\|23.3]], [[23.10 - Arvore de Decisao do Metodo de Migracao\|23.10]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo\|20.9]] |
| Revisão pelos pilares e [[Trade-off\|trade-offs]] ([[Well-Architected Framework\|Well-Architected]]) | [[26.08 - Revisao Well-Architected e Trade-offs\|Aula 26.8]]; origem em [[02.01 - Por que um Framework e Como Revisar uma Arquitetura\|2.1]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares\|2.4]] |

## Checklist de saída do módulo

Marque quando conseguir responder sem consultar, com suas palavras e incluindo o porquê.

- [ ] Por que o PropDesk usa o [[Modelo Bridge|modelo bridge]] e não pool puro ou silo puro, e qual camada é compartilhada e qual é dedicada?
- [ ] Por que o [[Tenant|tenant]] deve vir de um claim assinado do token e as políticas de linha no banco são uma segunda barreira?
- [ ] Como calcular a capacidade para sobreviver à perda de uma [[Zona de Disponibilidade|AZ]], e por que 3 AZs custam 50% a mais e 2 AZs custam 100%?
- [ ] Por que [[Multi-AZ]] não protege contra um `DELETE` sem filtro e qual recurso protege?
- [ ] Por que a fila padrão do [[SQS]] exige [[Idempotencia|consumidor idempotente]], e como a chave com [[TTL]] resolve?
- [ ] Qual é a ordem de defesa de um pico de 10 vezes (cache, fila, escala, cotas, [[Rate-Based Rule|limite de taxa]]) e por que o banco de escrita é o último gargalo?
- [ ] Por que comprometer só o piso da carga, e por que [[Spot Instance|Spot]] cabe nos trabalhadores idempotentes mas não na API?
- [ ] O que uma [[SCP]] faz e não faz, e por que ela não limita a [[Management Account|conta de gerenciamento]]?
- [ ] Por que o [[Pilot Light|pilot light]] cumpre o [[RPO]] de 15 minutos e o [[RTO]] de 1 hora, e o que a estimativa de 40 minutos de RTO soma?
- [ ] Diante de um requisito novo (soberania, pico, auditoria, migração), como descobrir quais camadas ele toca?

## Teste-se

Dezesseis questões integradoras: cada uma cruza duas ou mais aulas do módulo (as aulas citadas ficam no gabarito).

**1.** Em uma plataforma [[Multi-Tenant|multi-tenant]] em pool, um desenvolvedor esquece o filtro por [[Tenant|tenant]] em uma consulta nova. Qual combinação impede o vazamento mesmo com esse esquecimento?

- [ ] a) Aumentar o cache de leitura para que menos consultas cheguem ao banco de dados principal
- [ ] b) Criptografar o volume do banco com uma chave gerenciada pelo cliente no KMS
- [ ] c) Derivar o tenant do token assinado e aplicar políticas de linha no banco
- [ ] d) Colocar o banco em uma sub-rede privada, sem rota para a internet

**2.** Uma API precisa de 12 tarefas [[Fargate]] para o pico e deve manter essa capacidade se uma [[Zona de Disponibilidade|AZ]] falhar. A Região tem 3 AZs. Qual distribuição usa o menor número total de tarefas?

- [ ] a) Duas AZs com 12 tarefas cada, somando 24 tarefas
- [ ] b) Três AZs com 6 tarefas cada, somando 18 tarefas
- [ ] c) Três AZs com 4 tarefas cada, somando 12 tarefas
- [ ] d) Uma AZ com 12 tarefas e backups diários em outra Região

**3.** Uma [[Lambda|função Lambda]] consome uma [[SQS|fila SQS]] padrão e envia e-mails, mas alguns clientes recebem a mesma mensagem duas vezes. Qual solução corrige a causa?

- [ ] a) Trocar o Lambda por uma instância EC2 que consome a fila continuamente com long polling
- [ ] b) Reduzir o tamanho do lote para 1, já que a fila padrão não duplica mensagens de lotes pequenos
- [ ] c) Aumentar o timeout de visibilidade para 12 horas e desativar a DLQ
- [ ] d) Gravar uma chave por mensagem, com condição de unicidade e TTL de 24 horas

**4.** (Escolha DUAS.) O banco relacional de uma plataforma tem CPU alta por leituras repetidas dos mesmos dados. Quais ações reduzem a carga com a menor mudança na aplicação?

- [ ] a) Cache cache-aside com ElastiCache para as consultas repetidas
- [ ] b) Trocar a classe da instância e desativar o Multi-AZ para liberar recursos
- [ ] c) Read replica para relatórios e consultas que toleram um pequeno atraso
- [ ] d) Aumentar o TTL do DNS do endpoint do banco
- [ ] e) Substituir o banco relacional por arquivos em um bucket S3

**5.** Tarefas [[Fargate]] em [[Sub-rede Privada|sub-redes privadas]], sem rota para a internet, precisam baixar a imagem do [[ECR]], ler um [[Bucket|bucket]] [[S3]] e enviar logs ao [[CloudWatch Logs]]. Qual conjunto de endpoints atende?

- [ ] a) Somente um gateway endpoint para o S3, que cobre também o ECR e o CloudWatch Logs na mesma VPC
- [ ] b) Gateway endpoint do S3 e interface endpoints do ECR (api e dkr) e dos Logs
- [ ] c) Um único interface endpoint para o ECR, pois o S3 e os logs usam o mesmo caminho
- [ ] d) Um Internet Gateway nas sub-redes de aplicação, com security groups restritivos

**6.** Para que administradores de contas-membro não consigam desligar a trilha de uma conta individual nem apagar os logs, qual combinação é a mais forte?

- [ ] a) SCP que nega parar ou excluir a trilha e Object Lock em modo compliance no bucket
- [ ] b) Uma policy IAM de negação nas roles dos administradores de cada conta-membro, mantida manualmente por cada equipe
- [ ] c) Um alarme do CloudWatch que reinicie a trilha quando ela for parada
- [ ] d) Remover o acesso de leitura dos administradores ao bucket de logs

**7.** Uma empresa aceita [[RPO]] de 4 horas e [[RTO]] de 24 horas para um sistema interno e quer o menor custo de DR. Qual estratégia atende?

- [ ] a) Multi-site ativo-ativo, com a aplicação completa servindo em duas Regiões
- [ ] b) Warm standby, com a aplicação em escala reduzida já rodando
- [ ] c) Backup and restore, com cópias periódicas dos backups em outra Região
- [ ] d) Pilot light, com o banco replicado e a aplicação desligada

**8.** Uma equipe copia [[Snapshot|snapshots]] criptografados do [[RDS]] para a Região de DR. O que a cópia exige?

- [ ] a) Uma chave KMS da Região de destino, com a qual o snapshot é recriptografado
- [ ] b) Reutilizar a mesma chave KMS da Região de origem, pois as chaves KMS valem em todas as Regiões
- [ ] c) Descriptografar o snapshot e criptografá-lo de novo manualmente
- [ ] d) Nada, pois snapshots criptografados não podem ser copiados entre Regiões

**9.** (Escolha DUAS.) Uma plataforma precisa manter os dados de clientes europeus na União Europeia, inclusive no DR. Quais medidas atendem?

- [ ] a) SCP na OU das contas europeias negando ações fora das Regiões da UE
- [ ] b) Réplica do banco em `us-east-1`, para aproveitar o menor custo
- [ ] c) Roteamento por geolocalização do IP do usuário para escolher a pilha
- [ ] d) Backups e réplicas em outra Região também da UE, como `eu-west-1`
- [ ] e) CloudFront com cache de todas as respostas dinâmicas

**10.** Um e-mail para 20.000 usuários será enviado em horário marcado e o login em massa preocupa. Qual ação reduz o risco de limitação no login?

- [ ] a) Aumentar a validade dos tokens de acesso para vários anos, para ninguém precisar entrar de novo
- [ ] b) Chamar o Cognito em toda requisição da API para validar o token com mais segurança
- [ ] c) Desativar o WAF para evitar a latência extra das regras de proteção
- [ ] d) Pedir aumento das cotas de taxa do Cognito com antecedência e testar a carga

**11.** O ambiente de homologação fica ligado 24x7, mas é usado 10 horas por dia útil, com [[Multi-AZ]] e réplicas iguais à produção. Qual ação reduz mais o custo sem afetar a produção?

- [ ] a) Savings Plans de 3 anos cobrindo toda a homologação
- [ ] b) Mais instâncias para que os testes terminem mais cedo
- [ ] c) Desligar fora do expediente e usar instância única, sem Multi-AZ nem réplicas
- [ ] d) Mover a homologação para a conta de produção, dividindo os recursos

**12.** Por que os workloads do PropDesk não devem rodar na [[Management Account|conta de gerenciamento]] da organização?

- [ ] a) As SCPs não limitam a conta de gerenciamento, então os guardrails não a alcançam
- [ ] b) A conta de gerenciamento não consegue criar VPCs nem sub-redes privadas
- [ ] c) O Organizations cobra uma taxa extra por workload executado na conta de gerenciamento
- [ ] d) Ela só tem acesso à Região principal, sem as demais Regiões

**13.** Uma empresa migra 5 TB de compartilhamentos [[SMB]] de um datacenter com link dedicado de 100 Mbps, prazo de 6 meses e [[Active Directory]]. Qual é a escolha de menor esforço?

- [ ] a) Snowball Edge, porque 5 TB nunca cabem em um link de 100 Mbps
- [ ] b) Transfer Family com SFTP, reescrevendo as aplicações para usar o novo protocolo de transferência
- [ ] c) Storage Gateway de volume, replicando blocos de disco para o EBS
- [ ] d) DataSync para o FSx for Windows File Server, com limite de banda

**14.** Uma API por trás do [[CloudFront]] devolve dados por [[Tenant|tenant]] e foi cacheada sem o tenant na [[Cache Key|chave de cache]]. Qual é o risco e a correção?

- [ ] a) A latência aumenta, pois o cache passa a ser ignorado, e a correção é elevar o TTL padrão
- [ ] b) Um tenant pode receber a resposta de outro; incluir o tenant na cache key ou não cachear
- [ ] c) O TLS deixa de valer, e a correção é trocar o certificado da distribuição
- [ ] d) A cobrança dobra, e a correção é criar uma segunda distribuição

**15.** (Escolha DUAS.) Um auditor pede o relatório SOC da própria AWS e a evidência de que os recursos da empresa estão criptografados. Quais fontes atendem?

- [ ] a) Amazon GuardDuty, com os achados de ameaças
- [ ] b) AWS Artifact, para os relatórios de conformidade da AWS
- [ ] c) VPC Flow Logs, com o tráfego das sub-redes
- [ ] d) Regras do AWS Config sobre criptografia, com o histórico de conformidade
- [ ] e) AWS Compute Optimizer, com as recomendações de tamanho

**16.** O tráfego das tarefas para o [[S3]] e o [[DynamoDB]] passa pelo [[NAT Gateway]] e a cobrança de processamento cresce. Qual ação reduz o custo sem mudar o código?

- [ ] a) Criar um NAT Gateway por AZ para dividir o processamento entre eles
- [ ] b) Criar interface endpoints para o S3 e o DynamoDB em cada AZ
- [ ] c) Criar gateway endpoints do S3 e do DynamoDB nas route tables privadas
- [ ] d) Mover as tarefas para sub-redes públicas com IP público

> [!success]- Gabarito
> **1. c)** (aulas 26.1 e 26.2) o [[Tenant|tenant]] vem de um claim assinado e a política de linha no banco é a segunda barreira; a) o cache não filtra dados, b) a [[Criptografia em Repouso|criptografia em repouso]] não decide quem lê as linhas, d) a [[Sub-rede Privada|sub-rede privada]] não separa tenants.
> **2. b)** (aula 26.3) com 3 [[Zona de Disponibilidade|AZs]] de 6 tarefas, perdendo uma restam 12; a) 24 tarefas custam 100% a mais, c) restariam 8, d) a falha da AZ derrubaria tudo.
> **3. d)** (aulas 26.3 e 26.4) a fila padrão entrega ao menos uma vez, então o consumidor deve ser [[Idempotencia|idempotente]], e a chave com [[TTL]] descarta a repetição; a) a [[EC2]] continua recebendo duplicatas, b) a fila padrão pode duplicar com qualquer [[Processamento em Lote|lote]], c) o [[Timeout|timeout]] alto e sem [[Dead-Letter Queue|DLQ]] não impede a duplicação.
> **4. a), c)** (aula 26.4) o cache absorve as leituras repetidas e a réplica atende consultas que toleram atraso; b) desativar o [[Multi-AZ]] prejudica a [[Disponibilidade|disponibilidade]], d) o [[TTL]] do [[DNS]] não alivia o banco, e) arquivos no [[S3]] não substituem um banco relacional.
> **5. b)** (aula 26.2) o [[S3]] usa [[Gateway Endpoint|gateway endpoint]], e o [[ECR]] (api e dkr) e os Logs usam [[Interface Endpoint|interface endpoints]]; a) o gateway endpoint cobre só o S3 e o [[DynamoDB]], c) um endpoint do ECR não cobre os Logs nem as camadas no S3, d) o [[Internet Gateway]] contradiz a ausência de rota para a internet.
> **6. a)** (aulas 26.6 e [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]) a [[SCP]] impede parar a trilha e o [[Object Lock]] em [[Modo Compliance|modo compliance]] impede apagar os logs, nem pelo root; b) a [[IAM Policy|policy IAM]] por conta é manutenção manual e pode ser alterada pelo administrador, c) o alarme reage tarde, d) tirar a leitura não impede o `StopLogging`.
> **7. c)** (aulas 26.7 e [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]]) com [[RPO]] e [[RTO]] largos, [[Backup and Restore|backup and restore]] é a estratégia de menor custo; a), b) e d) pagam capacidade em espera que a tolerância não exige.
> **8. a)** (aulas 26.7 e [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]]) chaves [[KMS]] comuns são regionais, então a cópia informa uma chave da Região de destino e recriptografa; b) a chave de origem não existe no destino, c) a recriptografia é feita pela própria cópia, d) a cópia entre [[Regiao AWS|Regiões]] é permitida.
> **9. a), d)** (aula 26.9) a [[SCP]] impede criar recursos fora da UE e o DR em outra Região da UE respeita a fronteira; b) os Estados Unidos violam o requisito, c) a geolocalização erra quando o gestor viaja, e) o cache de respostas dinâmicas com dado pessoal é um risco.
> **10. d)** (aulas 26.9 e 26.4) as cotas de taxa do [[Cognito]] são por Região e se pedem com antecedência, e o teste de carga confirma; a) o token de vários anos é falha de segurança, b) o [[JWT]] é validado localmente, sem chamar o Cognito, c) desativar o [[WAF]] tira uma proteção sem aliviar o login.
> **11. c)** (aula 26.5) em homologação, desligar fora do horário e usar instância única cortam o custo sem risco para a produção; a) comprometer 3 anos para um ambiente que desliga é desperdício, b) mais instâncias aumentam o custo, d) misturar ambientes na produção piora o isolamento.
> **12. a)** (aula 26.6) as [[SCP|SCPs]] não se aplicam à [[Management Account|conta de gerenciamento]], então ela deve ficar sem workloads; b) ela cria [[VPC|VPCs]] normalmente, c) não existe essa taxa, d) as [[Regiao AWS|Regiões]] não são restritas por ser conta de gerenciamento.
> **13. d)** (aulas 26.9 e [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]) o [[DataSync]] leva os arquivos para o [[FSx for Windows File Server]], que fala [[SMB]] e integra com o [[Active Directory|AD]], e 5 TB em 100 Mbps levam cerca de 4,6 a 6,6 dias, aceitável em 6 meses; a) 5 TB cabem no link, b) reescrever as aplicações não é o menor esforço, c) o [[Storage Gateway]] de volume replica blocos e não compartilhamentos SMB.
> **14. b)** (aulas 26.4 e [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]]) sem o [[Tenant|tenant]] na [[Cache Key|cache key]], o [[CloudFront]] pode servir a resposta de um tenant a outro; a) o [[TTL]] maior agrava o problema, c) o [[TLS]] não é afetado, d) a cobrança não dobra.
> **15. b), d)** (aula 26.9) o Artifact traz os relatórios da AWS e o Config traz a evidência de criptografia dos seus recursos; a) o [[GuardDuty]] detecta ameaças, c) o [[VPC Flow Logs|Flow Logs]] registra tráfego, e) o [[Compute Optimizer]] recomenda tamanhos.
> **16. c)** (aulas 26.5 e [[25.10 - Rede e Transferencia de Dados|25.10]]) os [[Gateway Endpoint|gateway endpoints]] do [[S3]] e do [[DynamoDB]] não têm custo e tiram o tráfego do [[NAT]]; a) mais NATs não reduzem o processamento cobrado, b) os [[Interface Endpoint|interface endpoints]] cobram por hora e por GB e o S3 e o DynamoDB têm a opção gratuita, d) [[Sub-rede Publica|sub-redes públicas]] reduzem a segurança.

## Próximo módulo

[[27 - Estrategia de Prova e Simulados|Próximo módulo: Estratégia de Prova e Simulados]]
