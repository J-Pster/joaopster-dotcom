[Voltar ao módulo](./README.md)

# Aula 2: Roteamento em uma mesh

*Pergunta que esta aula responde: como uma mensagem que sai do nó A encontra o caminho até o nó D passando por nós que ninguém coordena, e por que cada método de roteamento custa o que custa?*

## O problema do roteamento

Na aula anterior, a ideia era: cada nó repassa. Mas repassar **para quem, e quando?** Isso é o **roteamento**: a decisão de por onde um pacote segue. Em uma rede de rádio há um agravante que a internet cabeada não tem: **toda transmissão é ouvida por todos os vizinhos**. Quando B repassa o pacote de A, tanto C quanto A (que já o tinha) ouvem. Sem cuidado, os pacotes ecoam para sempre.

Há três famílias de resposta, com trocas diferentes entre **custo de controle** (mensagens só para descobrir caminhos) e **custo de dados** (repetições do próprio conteúdo).

## Inundação (flooding)

A solução mais simples: **todo nó que ouve um pacote novo o retransmite uma vez**. O pacote se espalha em ondas por toda a rede.

Vantagens:

- Não precisa saber a topologia. Não há tabela de rotas, nem mensagem de controle.
- **Robusta**: se qualquer caminho existir, a mensagem chega. Nó se move, some, volta: nada a reconfigurar.
- Serve para **broadcast** (um para todos) de graça, que é o caso de posição e mensagem em grupo.

Custo: **cada pacote é transmitido por quase todos os nós**. Numa rede com N nós ao alcance uns dos outros, uma mensagem gera até N transmissões, quando o mínimo necessário para entregá-la a um destino a h saltos seria h transmissões. Exemplo: em uma malha 10 x 10 (100 nós), entregar uma mensagem a um nó a 6 saltos custa 6 transmissões com roteamento dirigido e até 100 com inundação pura.

### Os três controles que tornam a inundação viável

Inundação ingênua tem dois problemas fatais: laços infinitos e a **tempestade de broadcast (broadcast storm)**, em que cada retransmissão provoca outras e o meio satura. As defesas:

1. **Deduplicação.** Cada pacote leva um identificador (origem + número de sequência). O nó guarda os que já viu e **descarta repetições**. No Meshtastic, o campo de 32 bits *packet ID* existe para isso (Aula 4). Sem deduplicação, a rede entra em laço.
2. **TTL / limite de saltos (hop limit).** **TTL (time to live)** é um contador no cabeçalho, decrementado a cada retransmissão. Quando chega a zero, ninguém repassa. Limita o raio da inundação. No Meshtastic o padrão é 3 e o máximo 7.
3. **Supressão por escuta.** Antes de retransmitir, o nó espera um tempo aleatório e **escuta**: se outro vizinho já retransmitiu, ele cancela a sua. É a ideia da "inundação gerenciada" do Meshtastic. Em um bairro com 10 nós no mesmo alcance, só um ou dois retransmitem.

Um detalhe de contagem que confunde: com TTL 3, a origem transmite com contador 3, o primeiro relay recebe 3 e retransmite com 2, o segundo com 1, o terceiro com 0 e o quarto nó ouve mas não repassa. Ou seja, **TTL 3 permite 3 retransmissões**, e portanto 4 enlaces de rádio em cadeia, contando a transmissão da origem (derivado da regra "decrementa e retransmite se o contador não for zero" descrita na documentação do Meshtastic).

### Riscos residuais da inundação

- **Ainda custa muito em rede densa.** A supressão ajuda, mas não elimina: nós em "sombras" diferentes retransmitem o mesmo pacote.
- **Salto desperdiçado.** Um relay mal posicionado consome um salto do TTL antes de o pacote alcançar um relay melhor. É o problema de *hop consumption* que aparece no Meshtastic (Aula 4).
- **Sem noção de destino.** O pacote vai para todos mesmo quando só um destinatário importa.

## Roteamento dirigido: saber por onde ir

A alternativa é manter **rotas**: cada nó sabe, para cada destino, o **próximo salto (next hop)**. O pacote sai só por esse caminho, e só os nós da rota o retransmitem. Isso custa menos ar por mensagem, mas o nó precisa **descobrir e manter** as rotas, e isso tem custo de controle. Os grandes projetos de roteamento em redes ad hoc se dividem por quando essa informação é obtida.

### Proativo (table-driven)

Os nós trocam **mensagens de controle periodicamente** para manter uma tabela de rotas sempre atualizada, mesmo sem tráfego. Quando há um pacote a enviar, a rota já existe: latência baixa. Custo: controle constante, mesmo ocioso. Exemplos clássicos: OLSR, BATMAN, e os protocolos da internet que você já ouviu (OSPF, RIP, BGP).

Dentro do proativo há duas técnicas de cálculo de rotas:

**Vetor de distância (distance vector).** Cada nó anuncia aos vizinhos "consigo chegar a X com custo c". Cada vizinho soma o custo do enlace e repassa o melhor que ouviu. Cada nó só conhece **distâncias e o próximo salto**, não o mapa. É simples e leve, mas converge devagar e pode formar laços quando um enlace cai. Exemplos: RIP, e o BATMAN usa uma variante em que cada nó só precisa saber por qual vizinho os anúncios de X chegam melhor.

**Estado de enlace (link state).** Cada nó descobre quem são seus vizinhos e **inunda a rede com essa lista**. Com todas as listas, cada nó reconstrói o **mapa completo** e calcula os melhores caminhos (com o algoritmo de Dijkstra). Converge rápido e não forma laços, mas exige memória para o mapa e tráfego proporcional ao número de enlaces. Exemplos: OSPF, OLSR.

### Reativo (on-demand)

Só se procura a rota **quando há algo a enviar**. O nó de origem inunda a rede com uma **requisição de rota** ("quem sabe chegar a D?"), a resposta volta pelo caminho, e a rota é guardada e reaproveitada. Sem tráfego, sem controle. Custo: a **primeira mensagem** sofre a latência da descoberta, e a rota guardada pode ficar obsoleta se os nós se moverem. Exemplos: AODV, DSR.

Repare: **a descoberta reativa é uma inundação**. O que muda é que ela acontece uma vez, e as mensagens seguintes seguem por um caminho só.

### Híbrido

Muita rede combina: **inundação para descobrir/transmitir em grupo, rota aprendida para conversa entre dois nós**. É o padrão dos dois sistemas que você vai estudar:

- **Meshtastic**: broadcast por inundação gerenciada. Desde a versão 2.6, mensagens diretas começam por inundação e depois passam a usar **next hop** aprendido (Aula 4).
- **MeshCore**: a primeira mensagem inunda, o destino devolve o caminho percorrido, e as seguintes levam o **caminho embutido** (Aula 6).

## Gossip

**Gossip** (fofoca, ou *epidemic protocol*) é a ideia de espalhar informação como boato: cada nó, periodicamente, repassa o que sabe a alguns vizinhos escolhidos ao acaso, em vez de a todos. A informação chega a toda a rede com alta probabilidade em poucas rodadas, com custo por nó baixo e constante. É a base de bancos distribuídos (Cassandra, por exemplo) e de várias redes P2P, e volta no Módulo 11. Em rádio compartilhado, a versão "retransmita com probabilidade p" (**inundação probabilística**) é usada para reduzir a tempestade de broadcast: quanto menor o p, menos ecos, e maior o risco de o pacote morrer no caminho.

## Comparação em uma tabela

| Método | Controle | Latência da 1ª mensagem | Custo por mensagem | Mobilidade | Bom para |
|---|---|---|---|---|---|
| Inundação | Nenhum | Baixa | Alto (quase todos retransmitem) | Excelente | Broadcast, redes pequenas, nós móveis |
| Proativo (DV/LS) | Constante | Baixa | Baixo | Média (rota estragada até a próxima atualização) | Redes maiores e estáveis, com banda folgada |
| Reativo | Só sob demanda | Alta (descoberta) | Baixo depois da descoberta | Média | Tráfego esparso |
| Híbrido | Pouco | Média | Baixo em conversa, alto em broadcast | Boa | Chat em rede de banda baixa |
| Gossip | Baixo, periódico | Variável | Baixo por nó | Excelente | Sincronizar estado, não tempo real |

## Por que as redes LoRa quase nunca usam OSPF/BGP

A documentação do Meshtastic diz explicitamente que, **por causa da banda extremamente limitada, não usa algoritmos complexos que dependem de comunicação adicional entre nós**, e cita que não há equivalente a OSPF ou BGP. Faz sentido com o número: no preset padrão, um pacote de 56 bytes ocupa o ar por cerca de 0,68 s (Aula 3). Um protocolo proativo em que cada nó anunciasse a sua lista de vizinhos a cada minuto, numa rede de 100 nós, gastaria `100 x 0,68 s = 68 s` de ar por minuto só com controle: **mais que 100% do tempo disponível**, antes de qualquer mensagem de usuário. Por isso os projetos LoRa ficam com inundação controlada, rotas aprendidas de graça (a partir de respostas que passam de qualquer forma) e papéis fixos para poucos nós.

## Rotas aprendidas "de carona"

Um truque relevante: o nó aprende rotas **sem gastar pacotes de controle**, olhando o que já passa. No MeshCore, o destino devolve o caminho na confirmação de entrega. No Meshtastic 2.6+, o nó anota qual vizinho retransmitiu o pacote de ida, e se a resposta volta por esse mesmo vizinho, ele vira o *next hop* daquele destino. Esse tipo de aprendizado passivo é a saída típica para o dilema "rota barata versus controle caro".

## Resumo

- Roteamento é decidir por onde o pacote segue. Em rádio, toda transmissão é ouvida pelos vizinhos, então repassar sem cuidado provoca laços e **tempestade de broadcast**.
- **Inundação** é simples e robusta, mas cara: tem três controles essenciais, **deduplicação**, **TTL** e **supressão por escuta**.
- **Proativo** (vetor de distância, estado de enlace) mantém rotas com controle constante; **reativo** descobre sob demanda e a descoberta é uma inundação; **híbrido** mistura, e é o que Meshtastic e MeshCore fazem.
- **Gossip** espalha informação por vizinhos aleatórios, com custo baixo por nó.
- Em LoRa, o controle é proibitivo (a Aula 3 mostra os números), por isso se usa inundação gerenciada, rotas aprendidas passivamente e papéis fixos.

## Para aprofundar

- [ ] [Meshtastic Explained - Flood Routing & Upcoming Changes!](https://www.youtube.com/watch?v=7v6UbC5blJU) (Meshtastic, canal oficial): explicação curta do flooding controlado e do hop limit aplicada ao protocolo que a Aula 4 detalha. O vídeo é anterior a mudanças recentes de firmware, então confira a Aula 4 para o comportamento atual.
- [ ] [Mesh Broadcast Algorithm](https://meshtastic.org/docs/overview/mesh-algo/) (documentação oficial do Meshtastic): a descrição do algoritmo em camadas, com o cabeçalho dos pacotes e a lógica de retransmissão. É a fonte usada para a Aula 4.

[Próxima aula: Limites físicos da mesh sobre LoRa](./03%20-%20Limites%20Fisicos%20da%20Mesh%20sobre%20LoRa.md)
