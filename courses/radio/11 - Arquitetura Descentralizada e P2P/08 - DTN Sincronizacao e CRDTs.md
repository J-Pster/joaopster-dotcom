# Aula 8: Mensagens que chegam depois: DTN, sincronização e CRDTs

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como projetar uma rede em que o destinatário está frequentemente inalcançável, como manter dados consistentes entre aparelhos que ficam offline, e por que o teorema CAP diz que redes de rádio precisam escolher?*

A internet (Aula 1) supõe que **existe um caminho contínuo entre as pontas** e que ele responde rápido. Redes de rádio pessoais violam essa suposição o tempo todo: o aparelho está desligado, o enlace só existe quando alguém passa, o sinal some atrás de um morro. Esta aula mostra a família de soluções: **guardar e encaminhar depois**, e como manter os dados coerentes quando cada aparelho trabalha sozinho por um tempo.

## Por que o TCP falha em redes intermitentes

O TCP (Aula 1) abre uma conexão com uma troca de mensagens de ida e volta, e depois confirma cada trecho de dados. Ele assume que: (a) há um caminho completo entre origem e destino **ao mesmo tempo**; (b) o tempo de ida e volta é curto e razoavelmente estável; (c) as perdas são ocasionais. Se o caminho só existe por 10 minutos por dia, ou se o atraso é de minutos, o TCP desiste, fica preso em temporizadores ou entra em colapso de desempenho.

Casos reais que violam a suposição: comunicação com sondas espaciais (atraso de propagação de minutos), sensores em zonas remotas, redes militares e de campo, redes de emergência (Aula 4) e, no seu caso, **uma malha LoRa cujos nós dormem ou saem do alcance**.

## DTN: a arquitetura

A **rede tolerante a atraso e a desconexão** (*delay- and disruption-tolerant networking*, DTN) é a resposta formal. O RFC 4838 (*Delay-Tolerant Networking Architecture*, IRTF, abril de 2007, de autores como Vint Cerf e Scott Burleigh) descreve uma arquitetura que evoluiu da **Internet Interplanetária** e trata de redes "ocasionalmente conectadas, que podem sofrer partições frequentes e ser compostas por mais de uma família de protocolos". A ideia central:

- **Sobreposição orientada a mensagens.** O DTN é uma camada **acima** do transporte das redes que interliga (as "camadas de convergência" adaptam cada rede: internet, rádio, disco). A unidade é a **mensagem inteira**, chamada **bundle** (pacote grande, com cabeçalho próprio), e não um fluxo de bytes.
- **Comutação virtual de mensagens por armazenar e encaminhar** (*store-and-forward*). Cada nó **guarda** o bundle em armazenamento persistente (não só em memória) até ter um enlace utilizável para o próximo salto, e então o **encaminha**. O nó não descarta por falta de caminho imediato.
- **Identificadores de ponto final** (*endpoint IDs*) em vez de endereços fixos de lugar.
- **Transferência de custódia** (*custody transfer*): um nó pode aceitar responsabilidade pela entrega do bundle, liberando o anterior para apagar a cópia. É uma confirmação salto a salto, complementar à ponta a ponta.
- **Prioridades, tempo de vida e opções "estilo correio"**: recibos de entrega, fragmentação e remontagem.
- **Segurança** no nível do bundle (integridade e confidencialidade da mensagem, independente do meio).

O **Bundle Protocol Version 7** é o padrão da IETF (RFC 9171, janeiro de 2022, categoria Standards Track), sucessor do RFC 5050 experimental de 2007; foi implementado em várias linguagens e plataformas. Não é o que você vai instalar no seu projeto, mas é o modelo de referência do **conceito**.

## O princípio para a sua rede: entrega assíncrona como padrão

Traduzindo o DTN em decisões de projeto que valem para qualquer rede de rádio pessoal:

1. **Mensagem é um objeto, não uma conexão.** Ela tem ID único, autor, destino, prazo de validade e corpo. Pode esperar.
2. **Quem está no caminho guarda.** Um nó com armazenamento (um Raspberry Pi, Módulo 12) fica ligado sempre e guarda mensagens para quem está offline.
3. **Confirmação por ponta e por salto.** O remetente quer saber "chegou ao destino?", não "chegou ao vizinho?". Mostre estados distintos na interface: enviada, guardada em um nó, entregue, lida.
4. **Idempotência e deduplicação.** Como a mesma mensagem pode chegar por dois caminhos ou ser reenviada, receber duas vezes não pode ter efeito duplo. O ID único permite descartar cópias (mesma ideia do TTL e da deduplicação em mesh do Módulo 9, Aula 2).
5. **Prazo de validade.** Uma mensagem "estou saindo agora" perde o sentido depois de duas horas. Defina quanto tempo cada nó guarda.
6. **Prioridade.** Em um enlace de poucos kbps, um alerta deve passar na frente de uma foto.
7. **Tamanho pequeno.** Mensagens curtas, por causa do MTU e do tempo no ar (Módulo 10, Aula 3; Módulo 8, Aula 2).

O Reticulum implementa isso no LXMF: mensagem com entrega **direta** (link), **oportunista** (um pacote) ou **propagada** para um **nó de propagação** que guarda a mensagem cifrada para quem está offline, com peering entre nós de propagação (Módulo 10, Aula 7). A analogia com o e-mail (servidores SMTP guardam e reencaminham até entregar) mostra que o modelo é antigo e funciona.

## Sneakernet: o meio físico é um enlace

**Sneakernet** ("rede de tênis") é transferir dados carregando o meio de armazenamento. Parece piada, mas é matematicamente um enlace, com **muita banda e muita latência**. Exemplo resolvido, com os números do exemplo da Aula 10:

- Um cartão microSD de **256 GB** = `256 x 10^9 bytes x 8 = 2,048 x 10^12 bits`.
- Levado de carro por 8 km em 20 minutos (`1.200 s`): `2,048 x 10^12 / 1.200 = 1,7 x 10^9 bits/s`, cerca de **1,7 Gbit/s**.
- Um enlace LoRa em SF7, BW 125 kHz, CR 4/5 tem taxa nominal `Rb = SF x (BW / 2^SF) x CR = 7 x (125.000 / 128) x 0,8 = 5.469 bit/s`, cerca de **5,5 kbit/s** (Módulo 8, Aula 2).
- Razão: `1,7 x 10^9 / 5,47 x 10^3 = 3,1 x 10^5`. O cartão no carro é cerca de **310 mil vezes mais rápido** em vazão média.

A **latência** é o preço: os 256 GB chegam todos ao mesmo tempo, depois de 20 minutos; o LoRa entrega uma mensagem de 100 bytes em fração de segundo. Conclusão de projeto: **combine os dois**: LoRa para o que é pequeno e urgente; sneakernet (ou o Wi-Fi quando a família se encontra) para o que é grande e pode esperar (álbum de fotos, mapas offline, cópias de segurança). Os sistemas modernos já pensam assim: o Briar sincroniza por **cartão de memória**, além de Bluetooth e Wi-Fi (segundo a página do projeto) e o IPFS transfere arquivos **CAR** sem rede (Aula 6).

## Sincronização: o problema de dois aparelhos que editam offline

Quando os dados **mudam** (lista de compras da família, calendário, notas), há outro problema: dois aparelhos editam a mesma coisa sem se falar, e depois se encontram. Qual versão vale?

Duas filosofias:

- **Servidor como fonte da verdade** (nuvem): toda alteração vai ao servidor, que decide a ordem. O artigo *Local-first software* (Kleppmann, Wiggins, van Hardenberg e McGranaghan, 2019) observa: nesse modelo a cópia do cliente é "apenas um cache subordinado ao servidor", e uma modificação que não chegou ao servidor "não aconteceu". Se o serviço acaba, o software para e os dados se perdem.
- **Local-first**: a cópia no **seu aparelho é a principal**; os servidores guardam cópias secundárias para ajudar no acesso de vários aparelhos. O artigo lista sete ideais: trabalho instantâneo (sem "carregando"), múltiplos dispositivos, funcionar offline, colaboração, longevidade, privacidade e segurança, e **propriedade e controle final do usuário**. A frase-chave: "a diferença entre os sistemas tradicionais e os local-first não é a ausência de servidores, mas a mudança de responsabilidade: eles têm um papel de apoio, não de fonte da verdade."

Esse é o mesmo espírito do Reticulum e do Briar: os nós de propagação e os pubs do SSB ajudam, mas **quem manda no dado é o dono**.

### CRDTs: fundir sem coordenar

Como reunir duas cópias que divergiram, **sem** servidor decidindo? A resposta que o artigo propõe como base é a família dos **CRDTs** (*Conflict-free Replicated Data Types*, "tipos de dados replicados livres de conflito"), surgida na pesquisa de sistemas distribuídos em 2011. São estruturas de dados (mapas, listas, contadores, texto) desenhadas para serem **multiusuário desde a origem**. A propriedade que define um CRDT: a operação de **fusão** é

- **comutativa** (`A fundido com B` = `B fundido com A`),
- **associativa** (a ordem de agrupar não importa),
- **idempotente** (fundir o mesmo dado duas vezes não muda nada).

Com isso, se dois aparelhos recebem as mesmas operações **em qualquer ordem, com repetições e atrasos**, convergem para o **mesmo estado**. Não é preciso relógio comum, servidor nem ordem de entrega.

Exemplo mínimo, um **conjunto só de adição** (*grow-only set*): a lista de "coisas a levar ao sítio". No aparelho A, adiciona-se "gás". No aparelho B, sem contato com A, adiciona-se "sementes". A fusão é a **união**: `{gás} união {sementes} = {gás, sementes}`; em qualquer ordem e mesmo repetida, o resultado é o mesmo. Um problema óbvio: como **remover**? Um conjunto que só cresce não remove; variantes (com "lápides" de remoção) resolvem, com custo de memória. Para texto compartilhado, a palestra de Kleppmann mostra a ideia (em minutos, de forma didática): cada caractere ganha um **identificador único** (um contador mais o nome do nó que o criou), e uma operação diz "insira este caractere **depois do caractere com ID X**", e não "na posição 15", porque a posição muda quando alguém insere antes. Regras determinísticas de desempate para inserções simultâneas na mesma posição garantem que todos cheguem ao mesmo texto.

O artigo também admite o **limite**: quando dois usuários alteram **o mesmo campo do mesmo objeto** ao mesmo tempo, o CRDT não resolve sozinho; ele guarda os valores em conflito e deixa a aplicação ou o usuário decidir (como o Git faz ao apresentar um conflito de mesclagem). Também são pesquisa relativamente recente: os próprios autores falam em protótipos e em desafios de interface e de desempenho.

Outros mecanismos com o mesmo espírito, já vistos: **logs só de acréscimo assinados** (SSB, Aula 7), o **grafo de eventos** do Matrix (Aula 3), e o **Git**. O padrão é o mesmo: em vez de "o estado atual", replique o **histórico de operações**, deixe cada nó fundir, e aceite que a convergência é **eventual**.

## O teorema CAP em nível conceitual

O **teorema CAP** (conjectura de Eric Brewer em 2000, demonstrada por Seth Gilbert e Nancy Lynch em 2002) trata de sistemas distribuídos que guardam dados em vários nós. Três propriedades desejáveis:

- **Consistência** (*Consistency*): todo leitor vê a escrita mais recente, como se houvesse uma única cópia (no sentido formal de Gilbert e Lynch, "atômica").
- **Disponibilidade** (*Availability*): todo pedido recebido por um nó ativo recebe uma resposta.
- **Tolerância a partições** (*Partition tolerance*): o sistema continua funcionando mesmo se a rede perde mensagens ou se divide em grupos que não se comunicam.

O resultado: **em uma rede sujeita a falhas de comunicação, é impossível garantir consistência e disponibilidade ao mesmo tempo.** A prova é curta. Divida os nós em dois grupos incomunicáveis, `G1` e `G2`. Uma escrita acontece em `G1`. Depois, uma leitura acontece em `G2`. Se o sistema é disponível, `G2` **precisa responder**, mas não tem como saber da escrita (as mensagens se perderam), então devolve o valor antigo, violando a consistência. Para ser consistente, `G2` teria que **recusar responder** até se reconectar, violando a disponibilidade.

Leituras corretas do teorema, que evitam o erro comum de "escolha 2 de 3":

- **Partição não é opcional.** Em uma rede real (e mais ainda em rádio), partições acontecem. A escolha real é: **durante uma partição**, você prefere **recusar (consistência)** ou **responder com possível desatualização (disponibilidade)**?
- Em uma rede sem falhas, você pode ter as duas. O teorema fala do que acontece **quando há partição**.
- O texto de Gilbert e Lynch conclui que sistemas reais aceitam "a maior parte dos dados, a maior parte do tempo".

**Para a rede de rádio:** as partições são normais (o enlace some, o nó dorme). Um serviço que **recusa** funcionar até ver o outro lado seria inútil para emergência. Escolhe-se **disponibilidade**: cada lado continua operando com o que tem, e as cópias **convergem depois** (consistência eventual), o que é exatamente o que CRDTs e logs só de acréscimo fazem. O preço: dois lados podem ter visões diferentes por um tempo, e a interface deve ser honesta sobre isso ("última atualização às 14h").

Onde a escolha oposta (consistência em vez de disponibilidade) é necessária: saldo de conta bancária, estoque de um item único, reserva de assento. Para uma família, calendário e lista de compras aceitam convergência eventual; "quem está com a chave da casa agora" pode não aceitar, e a resposta é combinar uma regra humana.

## Resumo

- O TCP supõe caminho contínuo e atraso curto. Redes de rádio intermitentes exigem **DTN**: mensagens inteiras (**bundles**), armazenar e encaminhar, custódia, prazo de validade (RFC 4838; RFC 9171 para o Bundle Protocol v7).
- Projete a entrega como **assíncrona por padrão**: mensagem é objeto com ID, nós guardam, confirmações por salto e ponta, deduplicação, prazo, prioridade, tamanho pequeno. O LXMF do Reticulum faz isso com nós de propagação.
- **Sneakernet** é um enlace de muita banda e muita latência: 256 GB em 20 minutos equivalem a cerca de 1,7 Gbit/s, cerca de 310 mil vezes o LoRa SF7 (5,47 kbit/s), mas com atraso de 20 minutos. Use LoRa para o pequeno e urgente, e cartão ou Wi-Fi para o grande.
- **Local-first**: a cópia local é a principal; servidores só ajudam. **CRDTs** fundem cópias divergentes com operação comutativa, associativa e idempotente, convergindo sem servidor; não resolvem sozinhos a alteração simultânea do mesmo campo.
- **CAP**: em partição, ou se recusa (consistência) ou se responde possivelmente desatualizado (disponibilidade). Rede de rádio deve escolher **disponibilidade e convergência eventual**.

## Para aprofundar

- [ ] [RFC 4838: Delay-Tolerant Networking Architecture](https://www.rfc-editor.org/rfc/rfc4838) (Cerf et al., IRTF): a arquitetura completa; a seção 2 ("Why an Architecture for Delay-Tolerant Networking?") e a 3.1 (armazenar e encaminhar) bastam para esta aula. O padrão atual do protocolo é o [RFC 9171](https://www.rfc-editor.org/rfc/rfc9171) (Bundle Protocol v7).
- [ ] [Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/) (Kleppmann, Wiggins, van Hardenberg, McGranaghan; Ink & Switch, 2019): o artigo mais claro sobre os sete ideais e o papel dos CRDTs.
- [ ] [CRDTs and the Quest for Distributed Consistency](https://www.youtube.com/watch?v=B5NULPSiOGw) (Martin Kleppmann, QCon London 2018, InfoQ): palestra de cerca de 43 minutos, com o exemplo dos identificadores únicos por caractere e da regra de desempate; título, canal e duração confirmados por metadados, não assisti inteira.
- [ ] [Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services](https://www.cs.princeton.edu/courses/archive/spr22/cos418/papers/cap.pdf) (Gilbert e Lynch, 2002): a prova do teorema, curta; a seção 1 e a conclusão são acessíveis sem formalismo.

[Próxima aula: Limites reais da descentralização e custo de operar a própria rede](./09%20-%20Limites%20da%20Descentralizacao%20e%20Custo%20de%20Operar.md)
