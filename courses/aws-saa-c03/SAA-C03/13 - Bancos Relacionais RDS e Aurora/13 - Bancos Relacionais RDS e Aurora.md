---
aliases:
  - Módulo 13
modulo: 13
parte: "IV Bancos de dados"
lida: false
tags:
  - modulo
  - saa-c03
---

# Módulo 13: Bancos Relacionais RDS e Aurora

O banco de dados é o componente em que o erro de arquitetura custa mais caro: ele guarda estado, não pode ser recriado em segundos e costuma ser o gargalo de toda aplicação que cresce. Este módulo mostra como a AWS gerencia bancos relacionais e como escolher entre as opções. Você começa pelo porquê de um banco **gerenciado** (o que a AWS assume e o que continua sendo seu), passa pela escolha do engine, pelo dimensionamento de classe e armazenamento, e então pelos mecanismos de **resiliência e escala do [[RDS]]**: [[Multi-AZ]], read replicas, backups, [[Point-in-Time Recovery|PITR]], criptografia e o **[[RDS Proxy]]**. Depois conhece o **[[Aurora]]**, a arquitetura de volume compartilhado que muda as regras de réplicas, [[Failover|failover]] e escala, com Global Database, [[Serverless]] v2, clonagem, [[Backtrack]] e o modelo [[Aurora I O-Optimized|I/O-Optimized]]. Fecha com um quadro de decisão e as alavancas de custo.

O raciocínio do módulo é o da prova: para cada requisito de **[[Disponibilidade|disponibilidade]], desempenho, engine e custo**, qual serviço e qual configuração entregam o resultado com o menor [[Overhead Operacional|esforço operacional]].

## Aulas

1. [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|Aula 13.1: Por que banco gerenciado e escolha do engine]]
2. [[13.02 - RDS Instancias Classes e Armazenamento|Aula 13.2: Instâncias, classes e armazenamento do RDS]]
3. [[13.03 - RDS Multi-AZ Instancia e Cluster|Aula 13.3: Multi-AZ no RDS, instância e cluster]]
4. [[13.04 - RDS Read Replicas e Escala de Leitura|Aula 13.4: Read replicas e escala de leitura]]
5. [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|Aula 13.5: Backups, PITR, snapshots, criptografia e segurança do RDS]]
6. [[13.06 - RDS Proxy e Gestao de Conexoes|Aula 13.6: RDS Proxy e gestão de conexões]]
7. [[13.07 - Aurora Arquitetura Endpoints e Replicas|Aula 13.7: Aurora, arquitetura, endpoints e réplicas]]
8. [[13.08 - Aurora Global Database Serverless v2 e Recursos|Aula 13.8: Aurora Global Database, Serverless v2 e recursos]]
9. [[13.09 - Padroes de Arquitetura Escolha e Custo|Aula 13.9: Padrões de arquitetura, escolha e custo]]

## Cobertura do exam guide

| Task do exam guide | Onde é coberto |
|---|---|
| **Task 2.1**: Projetar arquiteturas escaláveis e fracamente acopladas ([[RDS Proxy]], conexões) | [[13.01 - Por Que Banco Gerenciado e Escolha do Engine\|Aula 13.1]], [[13.04 - RDS Read Replicas e Escala de Leitura\|13.4]], [[13.06 - RDS Proxy e Gestao de Conexoes\|13.6]], [[13.07 - Aurora Arquitetura Endpoints e Replicas\|13.7]] |
| **Task 2.2**: Projetar arquiteturas altamente disponíveis e tolerantes a falhas | [[13.03 - RDS Multi-AZ Instancia e Cluster\|Aula 13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca\|13.5]], [[13.07 - Aurora Arquitetura Endpoints e Replicas\|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos\|13.8]] |
| **Task 3.3**: Projetar soluções de banco de dados de alto desempenho (escolha do engine, [[Serverless\|serverless]], read replicas, [[Provisioned IOPS]], conexões e proxies) | [[13.01 - Por Que Banco Gerenciado e Escolha do Engine\|Aula 13.1]], [[13.02 - RDS Instancias Classes e Armazenamento\|13.2]], [[13.04 - RDS Read Replicas e Escala de Leitura\|13.4]], [[13.06 - RDS Proxy e Gestao de Conexoes\|13.6]], [[13.07 - Aurora Arquitetura Endpoints e Replicas\|13.7]], [[13.08 - Aurora Global Database Serverless v2 e Recursos\|13.8]] |
| **Task 4.3**: Projetar soluções de banco de dados de custo otimizado (frequência de backup e [[Snapshot\|snapshots]], escolha de engine e modelo, reservas e [[Savings Plans]]) | [[13.02 - RDS Instancias Classes e Armazenamento\|Aula 13.2]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca\|13.5]], [[13.08 - Aurora Global Database Serverless v2 e Recursos\|13.8]], [[13.09 - Padroes de Arquitetura Escolha e Custo\|13.9]] |
| Task 1.3: Controles de segurança de dados ([[Criptografia em Repouso\|criptografia em repouso]] e em trânsito, [[IAM Database Authentication\|IAM database authentication]], compartilhar [[Snapshot\|snapshots]] criptografados, eventos e [[TLS]] obrigatório) | [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca\|Aula 13.5]] |

## Checklist de saída do módulo

Antes de seguir, você deveria conseguir responder, sem consultar:

- [ ] Por que o banco relacional escala a escrita só para cima e a leitura para os lados, e o que isso muda na escolha entre [[RDS]] e [[DynamoDB]]?
- [ ] Por que o [[Storage Autoscaling|storage autoscaling]] nunca reduz o disco, e por que a [[DB Instance Class|classe da instância]] pode limitar as [[IOPS]] provisionadas?
- [ ] Por que o standby do [[Multi-AZ DB Instance|Multi-AZ DB instance]] não atende leitura, e o que o [[Multi-AZ DB Cluster|Multi-AZ DB cluster]] muda nisso?
- [ ] Por que uma [[Read Replica|read replica]] não é uma solução de [[Failover|failover automático]], e por que o dado nela pode estar atrasado?
- [ ] Por que o [[Multi-AZ]] não protege contra um `DROP TABLE`, e o que o [[Point-in-Time Recovery|PITR]] e o [[DB Snapshot|snapshot manual]] resolvem?
- [ ] Por que a criptografia do [[RDS]] só se define na criação, e qual o caminho para criptografar um banco que já existe?
- [ ] Por que o [[RDS Proxy]] resolve o excesso de conexões do Lambda, e o que é [[Session Pinning|session pinning]]?
- [ ] Por que o [[Aurora]] tem réplicas com lag de milissegundos, e qual endpoint usar para escrita e para leitura?
- [ ] Quando o [[Aurora Global Database]], o [[Serverless]] v2, o clone, o [[Backtrack]] e o [[Aurora I O-Optimized|I/O-Optimized]] são a resposta certa?
- [ ] Como alinhar o perfil de carga (estável, variável, ociosa, I/O alto) à alavanca de custo correta?

## Teste-se

**1.** Uma API usa [[Lambda|funções Lambda]] e um [[RDS]] for PostgreSQL em [[Multi-AZ]]. Nos picos aparece "too many connections" e, depois de [[Failover|failovers]], a reconexão demora. A equipe criou um [[RDS Proxy]], mas a função, que não está em nenhuma [[VPC]], dá [[Timeout|timeout]] ao conectar nele. Qual conjunto de ações resolve tudo?

- [ ] a) Tornar o proxy público e trocar o Multi-AZ por uma read replica com promoção manual
- [ ] b) Colocar a função na VPC, apontar para o endpoint do proxy e manter o Multi-AZ
- [ ] c) Aumentar a classe do banco e apontar a função para o endpoint do standby
- [ ] d) Criar um cache ElastiCache e manter a função fora da VPC, conectando direto no banco

**2.** Uma empresa mantém um cluster [[Aurora]] PostgreSQL criptografado em us-east-1 e precisa de DR em eu-west-1, com perda de dados de poucos segundos e leitura local na Europa. Qual combinação atende?

- [ ] a) Cross-Region read replica de RDS, promovida manualmente, com a mesma chave KMS de us-east-1
- [ ] b) Cópia diária de snapshot para eu-west-1, restaurado só quando houver desastre
- [ ] c) Aurora Global Database com a secundária usando a chave KMS da Região de origem
- [ ] d) Aurora Global Database com secundária em eu-west-1 e uma chave KMS dessa Região

**3.** Uma empresa precisa entregar a um parceiro, em outra [[Conta AWS|conta AWS]], uma cópia de um [[Snapshot|snapshot]] de [[RDS]] criptografado com a chave padrão `aws/rds`. O que fazer?

- [ ] a) Copiar o snapshot com uma CMK e compartilhar a chave e a cópia com o parceiro
- [ ] b) Compartilhar o snapshot original e conceder acesso à chave `aws/rds` por uma key policy
- [ ] c) Tornar o snapshot público por um dia e remover o acesso depois que o parceiro copiar
- [ ] d) Exportar o snapshot para o S3 sem criptografia e conceder acesso ao bucket

**4.** Uma equipe quer parar à noite um [[RDS]] for MySQL de homologação (Single-AZ, sem réplicas) para economizar durante três meses. Qual afirmação descreve corretamente o comportamento?

- [ ] a) Parada, a instância não cobra nada e pode ficar assim pelo tempo que for preciso
- [ ] b) Parada, o RDS apaga os backups automáticos e o armazenamento para reduzir a cobrança
- [ ] c) Não cobra instância, mas cobra armazenamento e backups; religa após 7 dias
- [ ] d) Parada, só a equipe de suporte da AWS consegue religá-la, depois de 24 horas

**5.** Um cluster [[Aurora]] tem um writer, duas réplicas `db.r6g.large` e uma réplica `db.r6g.4xlarge`. A equipe de BI quer rodar consultas pesadas só na réplica grande, sem afetar a aplicação nas demais. O que fazer?

- [ ] a) Criar um custom endpoint que aponte só para a réplica grande e usá-lo na ferramenta de BI
- [ ] b) Usar o reader endpoint padrão, que direciona sempre para a maior réplica do cluster
- [ ] c) Usar o cluster endpoint, pois ele reserva a maior instância para consultas analíticas
- [ ] d) Definir o promotion tier 0 na réplica grande para que ela receba as consultas pesadas

**6.** Uma [[Lambda|função Lambda]] precisa acessar um [[RDS]] for MySQL sem senha no código e abre milhares de conexões novas por segundo nos picos. Qual desenho atende com o menor [[Overhead Operacional|overhead operacional]]?

- [ ] a) Autenticação IAM do banco direto da função, sem proxy, com um token gerado a cada invocação
- [ ] b) RDS Proxy com autenticação IAM do cliente e credenciais do banco no Secrets Manager
- [ ] c) Variável de ambiente criptografada com a senha e um pool de conexões dentro da função
- [ ] d) Um usuário de banco compartilhado, com a senha rotacionada por uma Lambda agendada

**7.** Um ERP empacotado, que só roda em Oracle, exige acesso ao sistema operacional do host para instalar um agente do fornecedor. A empresa quer manter automação gerenciada de backup e monitoramento. Qual opção atende?

- [ ] a) RDS for Oracle padrão, com Multi-AZ para garantir a disponibilidade
- [ ] b) Aurora PostgreSQL, convertendo o schema com a Schema Conversion Tool
- [ ] c) RDS Custom for Oracle, com acesso ao host e automação parcial
- [ ] d) Oracle em EC2, assumindo todo o patch, backup e failover

**8.** Uma equipe definiu capacidade mínima de 0 [[Aurora Capacity Unit|ACU]] em um cluster [[Aurora]] MySQL 3.10 de desenvolvimento, esperando que ele pausasse nas horas ociosas, mas as instâncias nunca pausam e não há erro. Qual a causa mais provável?

- [ ] a) O Serverless v2 só pausa em Aurora PostgreSQL, nunca em Aurora MySQL
- [ ] b) O auto-pause exige o Multi-AZ ativado no cluster de desenvolvimento
- [ ] c) A pausa só vale depois de sete dias seguidos sem nenhuma atividade
- [ ] d) Um painel mantém conexão aberta, e a pausa só ocorre sem conexões de usuário

**9.** Um [[RDS]] [[Multi-AZ]] tem uma breve interrupção toda terça de madrugada, sem falha de hardware. A equipe quer atualizar a versão do engine com pouca interrupção e poder voltar atrás. Qual a explicação e a solução?

- [ ] a) Patches caem na janela de manutenção e causam failover; usar Blue/Green no upgrade
- [ ] b) O standby reinicia toda semana; desligar o Multi-AZ elimina qualquer interrupção
- [ ] c) O backup automático para o banco por minutos; mover a janela de backup resolve o upgrade
- [ ] d) O failover vem do storage autoscaling; desativá-lo e atualizar manualmente resolve

**10.** Um cluster [[Aurora]] de produção tem apenas uma instância writer. A empresa quer [[Alta Disponibilidade|alta disponibilidade]] contra a falha de uma [[Zona de Disponibilidade|AZ]], com o menor custo adicional. O que fazer?

- [ ] a) Habilitar o Multi-AZ no cluster Aurora, que cria um standby invisível
- [ ] b) Adicionar uma Aurora Replica em outra zona de disponibilidade
- [ ] c) Criar um Aurora Global Database com uma Região secundária
- [ ] d) Aumentar a classe do writer para acelerar a recriação da instância

**11.** Uma loja usa [[RDS]] for MySQL com duas read replicas para o catálogo. Depois do checkout, a tela de confirmação, que lê de uma réplica, às vezes não mostra o pedido. Qual correção mantém as réplicas para o catálogo?

- [ ] a) Trocar a replicação para síncrona, ativando o Multi-AZ nas réplicas
- [ ] b) Promover as réplicas a bancos independentes e ler delas depois de cada escrita
- [ ] c) Ler da instância de origem nos fluxos que exigem leitura logo após a escrita
- [ ] d) Aumentar o armazenamento das réplicas para reduzir o replica lag

**12.** Um erro de dados foi descoberto em um cluster [[Aurora]] PostgreSQL. A equipe quer examinar o estado de uma hora atrás sem alterar o cluster de produção. Qual abordagem atende?

- [ ] a) Usar o Backtrack para rebobinar o cluster de produção para uma hora atrás
- [ ] b) Promover uma Aurora Replica, que guarda uma cópia do estado de uma hora atrás
- [ ] c) Reiniciar o writer com failover para desfazer as alterações da última hora
- [ ] d) Restaurar para um ponto no tempo, criando um novo cluster com os dados antigos

**13.** Uma empresa roda bancos [[Aurora]] e [[RDS]] de vários engines em carga estável, mas planeja trocar de engine e de Região nos próximos meses e quer desconto com compromisso. Qual opção atende?

- [ ] a) Reserved DB instances de 3 anos para a classe e o engine atuais
- [ ] b) Database Savings Plans de 1 ano, flexíveis em engine, tamanho e Região
- [ ] c) Aurora Capacity Reservations, que dão desconto sobre o preço On-Demand
- [ ] d) Parar os bancos fora do horário comercial com uma rotina agendada

**14.** (Escolha DUAS.) Quais recursos o [[Multi-AZ DB Cluster|Multi-AZ DB cluster]] do [[RDS]] NÃO suporta?

- [ ] a) Leitura nos readers por meio do reader endpoint
- [ ] b) Parar e iniciar o cluster para economizar
- [ ] c) Uso do RDS Proxy na frente do cluster
- [ ] d) Backups automáticos com point-in-time recovery
- [ ] e) Replicação de backups automáticos para outra Região

**15.** (Escolha DUAS.) Uma [[Lambda|função Lambda]] vai usar um [[RDS Proxy]] para acessar um [[RDS]] for PostgreSQL. O que é necessário?

- [ ] a) Tornar o proxy publicamente acessível para a função conseguir alcançá-lo
- [ ] b) Configurar a função na VPC, com sub-redes e security groups que alcancem o proxy
- [ ] c) Apontar o proxy para uma read replica de instância, para distribuir a leitura
- [ ] d) Dar ao proxy um papel IAM que permita ler o segredo das credenciais no Secrets Manager
- [ ] e) Criar o proxy em uma VPC de tenancy dedicada para isolar o tráfego

**16.** (Escolha DUAS.) Quais afirmações sobre [[Snapshot|snapshots]] e backups do [[RDS]] estão corretas?

- [ ] a) Snapshots criptografados podem ser compartilhados como públicos.
- [ ] b) O point-in-time recovery sobrescreve a instância de origem.
- [ ] c) Snapshot criptografado com a chave `aws/rds` não pode ser compartilhado com outra conta.
- [ ] d) Os backups automáticos continuam existindo depois de apagar a instância.
- [ ] e) Copiar um snapshot criptografado para outra Região exige uma chave KMS da Região de destino.

> [!success]- Gabarito
> **1. b)** O proxy é privado e vive na [[VPC]], então a função precisa estar nela; o proxy mantém o pool e acelera o [[Failover|failover]], e o [[Multi-AZ]] continua dando a [[Disponibilidade|disponibilidade]]. Tornar o proxy público (a) não é possível; classe maior e endpoint do standby (c) não resolvem conexões; cache (d) não reduz conexões.
> **2. d)** Global Database dá [[RPO]] de segundos e leitura local, e a secundária de um cluster criptografado usa uma chave [[KMS]] da própria Região (chaves são regionais). Réplica de [[RDS]] (a) não se aplica ao [[Aurora]] e tem promoção manual; [[Snapshot|snapshot]] diário (b) perde horas; a chave de origem (c) não vale na outra Região.
> **3. a)** Chave `aws/rds` não é compartilhável: copie com uma [[Customer Managed Key|CMK]], compartilhe a chave e a cópia. A [[Key Policy|key policy]] da chave AWS managed não se edita (b), [[Snapshot|snapshot]] criptografado não pode ser público (c) e exportar sem criptografia (d) é um caminho inseguro e diferente do pedido.
> **4. c)** Parada, a instância não cobra hora de instância, mas cobra armazenamento e backups, e o [[RDS]] a religa após 7 dias. Não é gratuita nem ilimitada (a), não apaga backups (b) e não depende do suporte (d).
> **5. a)** Um [[Custom Endpoint|custom endpoint]] agrupa as réplicas escolhidas. O [[Reader Endpoint|reader endpoint]] (b) distribui por conexão entre todas as réplicas, o [[Cluster Endpoint|cluster endpoint]] (c) aponta para o writer e o [[Promotion Tier|promotion tier]] (d) define prioridade de [[Failover|failover]], não roteamento de consultas.
> **6. b)** O [[RDS Proxy]] absorve as conexões, autentica o cliente por [[IAM]] e guarda as credenciais do banco no [[Secrets Manager]]. IAM direto (a) abre muitas conexões novas e consome recursos do banco; variável de ambiente e pool (c) mantêm senha e multiplicam conexões; usuário compartilhado (d) dá trabalho de rotação.
> **7. c)** [[RDS Custom|RDS Custom for Oracle]] dá acesso ao host com automação parcial. O [[RDS]] padrão (a) bloqueia o host; [[Aurora]] PostgreSQL (b) exige [[Migracao Heterogenea|migração heterogênea]] e não roda o ERP; Oracle em [[EC2]] (d) descarta a automação pedida.
> **8. d)** O auto-pause só ocorre sem conexões iniciadas por atividade de usuário; um painel conectado impede a pausa, sem erro. O recurso existe em [[Aurora]] MySQL 3.08.0 ou superior (a), não exige [[Multi-AZ]] (b) e não espera sete dias (c).
> **9. a)** Patch de SO e upgrade de minor na [[Maintenance Window|janela de manutenção]] causam [[Failover|failover]] em [[Multi-AZ]]; o [[Blue Green Deployment|Blue/Green Deployment]] testa o upgrade em uma cópia e troca com pouca interrupção, permitindo voltar atrás. O standby não reinicia por semana (b), a janela de backup (c) não causa o upgrade e o [[Storage Autoscaling|storage autoscaling]] (d) não causa failover.
> **10. b)** No [[Aurora]] a [[Alta Disponibilidade|alta disponibilidade]] vem de ter uma [[Aurora Replica]] em outra zona, que também atende leitura. Não existe checkbox de [[Multi-AZ]] no cluster (a), o Global Database (c) cobre perda de Região e custa mais, e classe maior (d) não cria alvo de [[Failover|failover]].
> **11. c)** A réplica é assíncrona e pode estar atrasada; fluxos que exigem leitura após escrita devem ler da origem. Réplica não vira síncrona com [[Multi-AZ]] (a), promover (b) as desconecta da origem e mais armazenamento (d) não reduz o lag.
> **12. d)** O [[Point-in-Time Recovery|PITR]] cria um novo cluster com o estado antigo, sem tocar a produção. O [[Backtrack]] (a) é só do [[Aurora]] MySQL e alteraria a produção; a réplica (b) não guarda estado antigo; o [[Failover|failover]] (c) não desfaz alterações.
> **13. b)** [[Database Savings Plans]] são flexíveis em engine, tamanho e Região, com compromisso de 1 ano. Reserva de 3 anos (a) é específica; Capacity Reservations (c) reservam capacidade sem desconto; parar (d) não é compromisso de desconto.
> **14. b), e)** O cluster não suporta stop/start nem [[Cross-Region Automated Backups|cross-Region automated backups]]. Ele atende leitura nos readers (a), suporta o [[RDS Proxy]] (c) e tem [[Automated Backup|backups automáticos]] com [[Point-in-Time Recovery|PITR]] (d).
> **15. b), d)** A função precisa estar na [[VPC]] para alcançar o proxy, e o proxy precisa de um papel [[IAM]] para ler o segredo. O proxy não pode ser público (a), em instâncias [[RDS]] só fala com o writer (c) e VPCs de tenancy dedicada não são suportadas (e).
> **16. c), e)** A chave `aws/rds` impede o compartilhamento entre contas, e a cópia entre [[Regiao AWS|Regiões]] exige chave [[KMS]] da Região de destino. [[Snapshot|Snapshots]] criptografados não podem ser públicos (a), o [[Point-in-Time Recovery|PITR]] cria uma instância nova (b) e os [[Automated Backup|backups automáticos]] saem com a instância (d).

## Próximo módulo

[[14 - DynamoDB Cache e Bancos de Proposito Especifico|Próximo módulo: DynamoDB, cache e bancos de propósito específico]]
