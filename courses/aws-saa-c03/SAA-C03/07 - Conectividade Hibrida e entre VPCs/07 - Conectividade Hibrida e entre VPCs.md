---
aliases:
  - Módulo 7
modulo: 7
parte: "II Identidade, rede e dados"
tags:
  - modulo
  - saa-c03
---

# Módulo 7: Conectividade híbrida e entre VPCs

Uma empresa real nunca tem uma [[VPC]] só: tem uma por ambiente, por time ou por conta, mais um data center que não migrou. Tudo isso precisa conversar de forma privada, previsível e barata. Este módulo responde a uma pergunta: **dado um par de redes, qual é o mecanismo mais simples e barato que atende aos requisitos de topologia, banda, [[Latencia|latência]], segurança e prazo?**

Ele é **conceitual com decisão**: quase toda questão da prova sobre o tema é um "escolha entre X e Y", e a escolha depende de poucos critérios (quantas redes, para onde, quão rápido, quanto tráfego, [[CIDR]] sobreposto, criptografia). Os laboratórios opcionais usam só recursos baratos ou apenas lógicos, e nenhum é obrigatório. Peering, [[Transit Gateway]] e [[PrivateLink]] ligam [[VPC|VPCs]]; VPN e [[Direct Connect]] ligam a AWS ao data center; o [[Route 53 Resolver]] une o [[DNS]] dos dois lados; o [[Data Transfer|custo de transferência]] decide entre as opções.

> [!info] Pré-requisitos
> [[03 - Fundamentos de Redes para a Nuvem|Módulo 3]] ([[CIDR]], roteamento, [[BGP]] e [[DNS]]), [[05 - Multiconta Governanca e Federacao|Módulo 5]] (contas e compartilhamento por [[RAM]]) e [[06 - VPC a Fundo|Módulo 6]] ([[VPC]], [[Route Table|route tables]], endpoints e [[PrivateLink]] do lado do consumidor).

## Aulas

1. [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|Aula 7.1: O problema de ligar redes e o mapa de decisão]]: os três fatos que limitam as opções ([[CIDR]] único, sem trânsito, banda e prazo), a alternativa [[VPC Sharing|VPC sharing]] por [[RAM]] e a árvore de decisão do módulo.
2. [[07.02 - VPC Peering|Aula 7.2: VPC Peering]]: pedido e aceite, rotas nos dois lados, não [[Roteamento Transitivo|transitividade]], cotas e custo.
3. [[07.03 - Transit Gateway|Aula 7.3: Transit Gateway]]: attachments, association e propagation, segmentação, peering entre TGWs, [[ECMP]] e [[Appliance Mode|appliance mode]].
4. [[07.04 - PrivateLink e Endpoint Services|Aula 7.4: PrivateLink e endpoint services]]: provedor atrás de [[Network Load Balancer|NLB]] ou [[Gateway Load Balancer|GWLB]], unidirecional, [[CIDR]] sobreposto, cross-Region.
5. [[07.05 - Site-to-Site VPN e Client VPN|Aula 7.5: Site-to-Site VPN e Client VPN]]: dois túneis, estático contra [[BGP]], banda por túnel, [[Accelerated VPN|accelerated VPN]], [[CloudHub]].
6. [[07.06 - Direct Connect|Aula 7.6: Direct Connect]]: dedicated contra hosted, VIFs, [[Direct Connect Gateway|DX Gateway]], [[LAG]], [[MACsec]] e modelos de resiliência.
7. [[07.07 - DNS Hibrido com Route 53 Resolver|Aula 7.7: DNS híbrido com Route 53 Resolver]]: endpoints inbound e outbound, regras e compartilhamento por [[RAM]].
8. [[07.08 - Custo de Transferencia e Escolha da Conexao|Aula 7.8: Custo de transferência e escolha da conexão]]: o mapa de custo por [[Zona de Disponibilidade|AZ]], Região e internet, ponto de equilíbrio e o roteiro final.

**Por que 8 aulas e nesta ordem.** A aula 7.1 dá o mapa antes de qualquer peça, para você ler o resto sabendo o que cada uma resolve. Depois vêm as ligações entre [[VPC|VPCs]], da mais simples (peering) à mais escalável ([[Transit Gateway]]) e à que não junta redes ([[PrivateLink]]). Então as ligações com o data center, da mais rápida de contratar (VPN) à mais previsível ([[Direct Connect]]). O [[DNS]] vem depois porque depende de uma conexão já existente. O custo fecha o módulo porque exige conhecer todas as peças.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 1.2: conexão segura entre [[VPC\|VPCs]] (peering, [[Transit Gateway]]) | [[07.02 - VPC Peering\|Aula 7.2]] e [[07.03 - Transit Gateway\|Aula 7.3]] |
| Task 3.4: várias contas sem [[VPC\|VPCs]] separadas ([[VPC Sharing\|VPC sharing]] por [[RAM]]) | [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao\|Aula 7.1]] |
| Task 1.2: acesso privado a serviços ([[PrivateLink]]) | [[07.04 - PrivateLink e Endpoint Services\|Aula 7.4]] |
| Task 1.2: conexão segura com ambientes externos (VPN, [[Direct Connect]]) | [[07.05 - Site-to-Site VPN e Client VPN\|Aula 7.5]] e [[07.06 - Direct Connect\|Aula 7.6]] |
| Task 3.4: redes híbridas de alto desempenho ([[Direct Connect]], [[LAG]], [[ECMP]]) | [[07.03 - Transit Gateway\|Aula 7.3]], [[07.05 - Site-to-Site VPN e Client VPN\|Aula 7.5]] e [[07.06 - Direct Connect\|Aula 7.6]] |
| Task 3.4: [[DNS]] híbrido | [[07.07 - DNS Hibrido com Route 53 Resolver\|Aula 7.7]] |
| Task 4.4: [[Data Transfer\|custo de transferência]] e escolha da conexão | [[07.08 - Custo de Transferencia e Escolha da Conexao\|Aula 7.8]] |
| Task 2.2 (parcial): resiliência de conexões (dois túneis, [[Direct Connect\|DX]] com backup) | [[07.05 - Site-to-Site VPN e Client VPN\|Aula 7.5]] e [[07.06 - Direct Connect\|Aula 7.6]] |

> [!warning] Fatos que mudam
> Valores com "verificado em novembro de 2026" vêm da documentação oficial da AWS nessa data. Preços e cotas mudam e variam por Região: confira a página oficial antes de decidir algo em produção. Valores de preço por hora que a documentação não fixa (como o de hosted connection do [[Direct Connect]] e o de [[Interface Endpoint|interface endpoint]]) ficam sem número; consulte as páginas de preços.

## Checklist de saída do módulo

- [ ] Sei explicar por que CIDRs sobrepostos impedem peering e [[Transit Gateway]], e por que o [[PrivateLink]] escapa dessa regra?
- [ ] Sei dizer por que o peering não é transitivo e o que muda quando se usa um [[Transit Gateway]]?
- [ ] Sei explicar por que o peering exige rotas nos dois lados e o que "aceitar" o pedido significa?
- [ ] Sei dizer por que o [[Transit Gateway]] usa association e propagation, e como isso segmenta ambientes?
- [ ] Sei justificar por que o [[PrivateLink]] é unidirecional e quando é melhor que o peering?
- [ ] Sei explicar por que a VPN tem dois túneis, e por que um segundo [[Customer Gateway|customer gateway]] melhora a resiliência?
- [ ] Sei dizer por que o [[Direct Connect]] leva semanas, e por que não é criptografado por padrão?
- [ ] Sei explicar por que o [[Resolver Endpoint|inbound endpoint]] existe, e por que apontar o [[DNS]] local ao [[VPC]]+2 não é suportado?
- [ ] Sei dizer por que entrada de dados é grátis e cruzar [[Zona de Disponibilidade|AZ]], Região ou a internet custa cada vez mais?
- [ ] Sei dizer quando basta [[VPC Sharing|compartilhar sub-redes]] por [[RAM]] ([[VPC]] sharing) em vez de criar peering ou [[Transit Gateway]] entre contas?
- [ ] Sei escolher, dado um cenário, entre peering, [[Transit Gateway]], [[PrivateLink]], VPN e [[Direct Connect]], citando o critério decisivo?

## Teste-se

**1.** Três [[VPC|VPCs]] na mesma Região precisam trocar muito tráfego entre si, sem previsão de crescer. O que atende com o menor custo?

- [ ] a) Um Transit Gateway com três attachments, cobrado por hora e por GB processado
- [ ] b) Um endpoint service do PrivateLink em cada VPC, atrás de um NLB
- [ ] c) Peering entre cada par, com rotas nos dois lados
- [ ] d) Uma VPN Site-to-Site entre cada par de VPCs, sobre a internet

**2.** Uma empresa tem 60 [[VPC|VPCs]] em 15 contas e quer roteamento central, com ambientes de produção e desenvolvimento isolados entre si. O que usar?

- [ ] a) Transit Gateway com route tables separadas por ambiente
- [ ] b) Um peering completo entre as 60 VPCs, com 1.770 conexões
- [ ] c) Uma VPN Site-to-Site de cada VPC para as demais, em malha completa
- [ ] d) Um único security group compartilhado entre as 60 VPCs, sem rotas

**3.** Um provedor quer expor uma API a clientes cujos CIDRs se sobrepõem entre si, sem juntar redes. Qual arquitetura?

- [ ] a) Peering entre o provedor e cada cliente, com rotas nos dois lados
- [ ] b) Transit Gateway compartilhado com todos os clientes por RAM
- [ ] c) Uma VPN Site-to-Site por cliente, com NAT para corrigir a sobreposição
- [ ] d) Endpoint service do PrivateLink atrás de um NLB

**4.** Uma empresa precisa ligar um escritório à [[VPC]] em poucas horas, com baixo custo inicial. O que escolher?

- [ ] a) Direct Connect dedicado, pedido a um parceiro de colocation
- [ ] b) Site-to-Site VPN com dois túneis
- [ ] c) Direct Connect hospedado, via parceiro do programa APN
- [ ] d) Peering entre a VPC e a rede do escritório

**5.** Uma carga move 15 TB por mês ao data center e exige [[Latencia|latência]] estável e uma conexão que não use a internet. O que atende?

- [ ] a) Site-to-Site VPN com túneis em dois customer gateways sobre a internet
- [ ] b) Uma VPN acelerada, que usa o Global Accelerator
- [ ] c) Direct Connect, com VPN sobre ele se for preciso criptografar
- [ ] d) Peering entre a VPC e o data center, por rotas estáticas

**6.** O tráfego sobre um [[Direct Connect]] precisa ser criptografado. Quais as opções corretas?

- [ ] a) MACsec em portas dedicadas compatíveis, ou VPN Site-to-Site sobre o DX
- [ ] b) Nenhuma, porque o Direct Connect já criptografa tudo por padrão em qualquer velocidade
- [ ] c) Habilitar o security group para criptografia no virtual interface
- [ ] d) Trocar a conexão para um peering entre VPCs, que é criptografado

**7.** Uma [[VPC]] precisa alcançar VPCs em várias [[Regiao AWS|Regiões]] por meio de um [[Direct Connect]]. O que usar?

- [ ] a) Um virtual interface público por Região, ligado a cada VPC da Região por rotas estáticas
- [ ] b) Um peering de VPC entre cada Região e o data center
- [ ] c) Um customer gateway por Região, com BGP estático em cada um
- [ ] d) Um Direct Connect Gateway com virtual interface privado ou de trânsito

**8.** Uma varejista tem um [[Direct Connect]] de 10 Gbps em um único location e quer tolerar a falha desse location com o MENOR custo, aceitando banda menor durante a falha. O go-live é em duas semanas. O que atende?

- [ ] a) Um segundo Direct Connect dedicado em outro location, pedido agora e provisionado dentro do prazo
- [ ] b) Uma Site-to-Site VPN como backup, com BGP preferindo o Direct Connect
- [ ] c) Um LAG com mais quatro portas no mesmo location, em outro dispositivo
- [ ] d) Uma hosted connection no mesmo location e no mesmo dispositivo da principal

**9.** Uma empresa tem 30 [[VPC|VPCs]] em 8 contas e um data center ligado por [[Direct Connect]]. As VPCs e o data center precisam se alcançar, as instâncias precisam resolver `corp.example.com` ([[DNS]] local) e o data center precisa resolver a [[Private Hosted Zone|zona privada]] `aws.example.com`. Qual arquitetura tem o MENOR [[Overhead Operacional|overhead operacional]]?

- [ ] a) Um Transit Gateway compartilhado por RAM, um Direct Connect gateway com transit VIF e, em uma VPC de rede, um inbound e um outbound endpoint com as regras compartilhadas por RAM
- [ ] b) Uma private VIF para cada VPC, peering entre elas e servidores BIND em EC2 em cada conta para o DNS híbrido
- [ ] c) Um Transit Gateway com uma VPN por VPC e um arquivo hosts em cada instância para resolver os nomes do data center
- [ ] d) Um endpoint service do PrivateLink em cada VPC e o DNS local apontado para o VPC+2 de uma das VPCs

**10.** Uma empresa quer que 12 contas de workload da mesma organização rodem em uma rede só, sem criar peering nem [[Transit Gateway]], e que cada conta veja e gerencie apenas os próprios recursos. O que atende?

- [ ] a) Um Transit Gateway com 12 attachments e route tables separadas por conta
- [ ] b) Peering completo entre as 12 VPCs, com 66 conexões
- [ ] c) Um endpoint service do PrivateLink por conta, atrás de um NLB
- [ ] d) VPC sharing: o dono da VPC compartilha sub-redes pelo RAM e cada conta lança seus recursos nelas

**11.** Um time estima a fatura de rede de uma nova arquitetura e lista quatro fluxos de dados. Qual deles é gratuito?

- [ ] a) Entre duas AZs da mesma Região
- [ ] b) Entre duas Regiões, por peering inter-Região
- [ ] c) Da AWS para a internet, acima da franquia mensal gratuita
- [ ] d) Da internet para a AWS (entrada)

**12.** Duas [[VPC|VPCs]] de [[Regiao AWS|Regiões]] diferentes têm peering ativo. As instâncias da VPC A precisam resolver nomes de uma [[Private Hosted Zone|private hosted zone]] (por exemplo `db.interno.example.com`) que aponta para instâncias da VPC B. O que fazer?

- [ ] a) Apontar o DNS da VPC A para o endereço VPC+2 da VPC B, pelo peering
- [ ] b) Associar a private hosted zone às duas VPCs
- [ ] c) Criar um inbound endpoint na VPC A e consultá-lo pelo peering
- [ ] d) Habilitar a resolução de DNS na conexão de peering, que também resolve nomes de zonas privadas

**13.** (Escolha DUAS.) Duas [[VPC|VPCs]] de contas diferentes, com CIDRs distintos, serão ligadas por [[VPC Peering|VPC peering]]. A VPC B tem um [[NAT Gateway]] e uma VPN com o escritório. Quais afirmações descrevem o resultado?

- [ ] a) Depois da aceitação, é preciso criar rotas para o CIDR do outro lado nas route tables dos dois lados
- [ ] b) As instâncias da VPC A não conseguirão usar o NAT Gateway da VPC B para sair à internet
- [ ] c) As instâncias da VPC A alcançarão o escritório pela VPN da VPC B, sem configuração adicional
- [ ] d) O peering é cobrado por hora de conexão e por GB processado, como o Transit Gateway
- [ ] e) O peering cria criptografia automática de camada 7 entre as aplicações das duas VPCs

**14.** (Escolha DUAS.) Uma filial precisa de conexão criptografada com a [[VPC]] em poucas horas e a empresa quer que a queda de um equipamento não derrube a conectividade. Quais afirmações sobre a [[Site-to-Site VPN]] estão corretas?

- [ ] a) Cada conexão tem dois túneis, terminados em AZs diferentes, que protegem contra falha do lado AWS
- [ ] b) Os dois túneis também protegem contra a falha do roteador de borda da filial
- [ ] c) O tráfego da VPN nunca passa pela internet
- [ ] d) A conexão leva semanas para ser provisionada, por causa do cross-connect
- [ ] e) Para proteger também o lado da filial, é preciso uma segunda conexão com um segundo customer gateway device e BGP

**15.** Uma empresa precisa de cerca de 4 Gbps de VPN até o data center, para 40 [[VPC|VPCs]], com roteamento dinâmico e sem [[Direct Connect]]. Qual arquitetura atende?

- [ ] a) Conexões VPN anexadas a um Transit Gateway, com túneis de largura de banda grande ou vários túneis em ECMP com BGP
- [ ] b) Uma VPN em um Virtual Private Gateway com túneis de largura de banda grande (5 Gbps)
- [ ] c) Várias VPNs em Virtual Private Gateways, com ECMP para somar a banda
- [ ] d) Um Client VPN para o data center, com várias sessões simultâneas

**16.** Servidores no data center, ligado por [[Direct Connect]], precisam enviar mensagens ao [[SQS]] por um caminho privado, usando o nome [[DNS]] padrão do serviço. O que configurar?

- [ ] a) Um gateway endpoint do SQS na VPC, com a rota anunciada ao data center
- [ ] b) Uma public VIF e rotas para os IPs públicos do SQS
- [ ] c) Um interface endpoint do SQS na VPC e um inbound endpoint, com o DNS local encaminhando o domínio do SQS a ele
- [ ] d) Um NAT Gateway na VPC, com o data center roteando o tráfego do SQS por ele

> [!success]- Gabarito
> **1. c)** peering não tem taxa horária nem por GB própria, só a transferência entre [[Zona de Disponibilidade|AZs]] ou [[Regiao AWS|Regiões]]; a) o hub cobra por hora e por GB, b) [[PrivateLink]] expõe serviços e cobra por GB, d) VPN sai pela internet e custa mais em volume.
> **2. a)** o [[Transit Gateway]] centraliza o roteamento e as [[Route Table|route tables]] separadas isolam produção e desenvolvimento; b) 60 [[VPC|VPCs]] exigiriam 1.770 peerings, c) uma malha de VPNs é inviável e cara, d) [[Security Group|security groups]] não criam rotas.
> **3. d)** o [[PrivateLink]] tolera CIDRs sobrepostos e não junta redes; a) e b) exigem CIDRs sem sobreposição, c) [[NAT]] por cliente é complexo e frágil.
> **4. b)** a VPN sobe em minutos e não exige porta física; a) e c) levam semanas, d) peering liga [[VPC|VPCs]], não escritórios.
> **5. c)** o [[Direct Connect]] dá [[Latencia|latência]] estável e não usa a internet, e a VPN sobre ele criptografa; a) e b) usam a internet, d) peering não liga a data center.
> **6. a)** [[MACsec]] nas portas dedicadas compatíveis ou VPN sobre o [[Direct Connect|DX]]; b) o DX não criptografa por padrão, c) [[Security Group|security groups]] não criptografam virtual interfaces, d) peering não é um meio de criptografar o DX.
> **7. d)** o [[Direct Connect Gateway]] liga virtual interfaces a [[VPC|VPCs]] de várias [[Regiao AWS|Regiões]]; a) o [[Virtual Interface|virtual interface]] público é para serviços públicos, b) peering não liga a data center, c) [[Customer Gateway|customer gateway]] é conceito da VPN.
> **8. b)** a VPN sobe em horas, custa muito menos que um segundo [[Direct Connect|DX]] e, com [[BGP]], o DX continua preferido; a) erra porque um segundo DX leva semanas a meses e é caro, c) erra porque um [[LAG]] fica no mesmo location e não protege contra a queda dele, d) erra porque mesmo location e mesmo dispositivo mantêm o [[Ponto Unico de Falha|ponto único de falha]]. (O modelo de maximum resiliency, com quatro conexões em dois locations, é a resposta quando o requisito é 99,99% sem restrição de custo e prazo.)
> **9. a)** o [[Transit Gateway|TGW]] compartilhado por [[RAM]], o [[Direct Connect Gateway|DX gateway]] com transit [[Virtual Interface|VIF]] e um par de endpoints centralizados com regras compartilhadas cobrem rede e [[DNS]] com poucos componentes gerenciados; b) erra porque uma private VIF por [[VPC]] e BIND em cada conta multiplicam o trabalho, c) erra porque uma VPN por VPC é cara e hosts files não escalam, d) erra porque [[PrivateLink]] não liga redes e o VPC+2 não é suportado para consultas externas.
> **10. d)** com [[VPC Sharing|VPC sharing]] as contas usam [[Sub-rede|sub-redes]] da mesma [[VPC]], sem peering, [[Transit Gateway|TGW]] ou taxa por GB, e cada participante vê só os próprios recursos; a) erra porque o TGW liga VPCs separadas e cobra por attachment e por GB, b) erra porque 66 peerings são o problema que se quer evitar, c) erra porque [[PrivateLink]] expõe serviços e não compõe uma rede.
> **11. d)** a entrada de dados é grátis; a) erra porque cruzar [[Zona de Disponibilidade|AZ]] é cobrado, b) erra porque entre [[Regiao AWS|Regiões]] é cobrado, c) erra porque a saída para a internet é cobrada: só a franquia mensal inicial (100 GB, agregada entre serviços) é gratuita, e acima dela vale a tarifa.
> **12. b)** a [[Private Hosted Zone|private hosted zone]] associada às duas [[VPC|VPCs]] resolve o nome nas duas; a) erra porque não se consulta o VPC+2 de uma VPC peerada, c) erra porque o [[Resolver Endpoint|inbound endpoint]] serve consultas vindas de fora da VPC e não resolve o problema entre VPCs, d) erra porque a resolução de [[DNS]] no peering só faz nomes DNS públicos de instâncias da outra VPC resolverem para [[RFC 1918|IP privado]], não cria visibilidade de zonas privadas.
> **13. a) e b)** as rotas nos dois lados são manuais e o peering não repassa o [[NAT Gateway]]; c) erra porque a VPN da [[VPC]] B não é usável pelo par, d) erra porque o peering não tem taxa por hora nem por GB processado, e) erra porque não há criptografia automática de [[Modelo OSI|camada 7]].
> **14. a) e e)** dois túneis em [[Zona de Disponibilidade|AZs]] diferentes cobrem o lado AWS, e um segundo [[Customer Gateway|customer gateway]] device com [[BGP]] cobre o lado da filial; b) erra porque os dois túneis terminam no mesmo roteador da filial, c) erra porque a VPN trafega pela internet (cifrada), d) erra porque a VPN sobe em minutos a horas.
> **15. a)** a VPN no [[Transit Gateway|TGW]] permite túnel de [[Largura de Banda|largura de banda]] grande (até 5 Gbps) ou [[ECMP]] com [[BGP]]; b) erra porque o túnel de 5 Gbps não existe em [[Virtual Private Gateway|VGW]], c) erra porque o VGW não suporta ECMP, d) erra porque [[Client VPN]] é para usuários e não liga redes.
> **16. c)** o [[Interface Endpoint|interface endpoint]] dá um [[RFC 1918|IP privado]] na [[VPC]] e o [[Resolver Endpoint|inbound endpoint]] permite que o [[DNS]] local resolva o nome padrão do serviço para esse IP; a) erra porque o [[SQS]] não usa [[Gateway Endpoint|gateway endpoint]] (só [[S3]] e [[DynamoDB]]), b) erra porque a public [[Virtual Interface|VIF]] usa IPs públicos, d) erra porque [[NAT Gateway]] leva o tráfego pela internet e não atende o data center.

## Próximo módulo

[[08 - Criptografia e Protecao de Dados|Módulo 8: Criptografia e proteção de dados]] ([[KMS]], certificados, segredos e cifragem em trânsito e em repouso). Para o desenho completo de uma arquitetura que junta redes, dados e segurança, o [[26 - Projeto Pratico - Arquitetura de Referencia|Módulo 26]] retoma as decisões deste módulo.
