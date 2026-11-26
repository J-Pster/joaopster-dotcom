# Aula 6: P2P clássico e moderno: DHT, BitTorrent e IPFS

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: se não há servidor central com o índice, como um nó encontra outro nó ou um dado em uma rede com milhões de pares, e o que BitTorrent, IPFS e libp2p fazem com essa ideia?*

O P2P tem um problema de "encontrar" que o cliente-servidor não tem. No cliente-servidor, o endereço do servidor é conhecido (via DNS). Em P2P não há endereço conhecido, e os pares entram e saem o tempo todo (*churn*). A solução mais usada é a **tabela hash distribuída** (DHT). Esta aula explica a ideia em nível conceitual, com um exemplo numérico, e mostra três sistemas que a usam.

## Da indexação central à DHT

A evolução, resumida:

1. **Índice central** (o Napster, 1999, do conhecimento geral; não o pesquisei aqui): os arquivos ficam nos pares, mas um servidor guarda "quem tem o quê". É rápido, mas o servidor é um ponto único de falha e de controle (Aula 2), e foi por ele que a rede foi derrubada.
2. **Inundação** (a Gnutella, também do conhecimento geral): a busca é repassada a todos os vizinhos, que repassam aos seus. Não há centro, mas o custo de cada busca cresce com o tamanho da rede (o mesmo problema da mesh de LoRa: Módulo 9, Aula 2).
3. **Tracker + pares** (BitTorrent clássico): um servidor leve, o *tracker*, apenas lista os pares de cada arquivo; os dados vão direto entre pares.
4. **DHT**: sem servidor algum, os próprios pares guardam o índice, dividido entre eles por uma regra matemática.

## Como uma DHT funciona (Kademlia)

Uma **tabela hash** guarda pares `(chave, valor)` e acha o valor pela chave. Em uma **DHT**, a tabela é dividida entre os nós: cada um guarda um pedaço e sabe encaminhar um pedido ao nó certo. O algoritmo mais usado é o **Kademlia** (Maymounkov e Mazières, 2002). Os elementos:

- **Identificadores de 160 bits.** Cada nó escolhe um ID aleatório de 160 bits ao entrar. As **chaves** (por exemplo, o hash de um arquivo) vivem no mesmo espaço de 160 bits.
- **Distância = XOR.** A distância entre dois IDs `x` e `y` é `x XOR y` (ou exclusivo bit a bit), lida como número inteiro. Propriedades úteis: é simétrica (`d(x, y) = d(y, x)`), é zero só entre iguais e obedece à desigualdade triangular. Nada a ver com distância física: é só uma régua consistente do espaço de IDs.
- **Regra de armazenamento:** o par `(chave, valor)` é guardado nos `k` nós cujos IDs estão **mais próximos** da chave (`k` costuma ser 8 a 20).
- **Tabela de roteamento em "baldes".** Cada nó guarda contatos organizados por distância: **muitos** contatos próximos do seu ID e **poucos** contatos muito distantes (um punhado por faixa de distância). Cada balde guarda no máximo `k` contatos.
- **Busca iterativa.** Para achar a chave, o nó pergunta aos contatos que conhece **mais próximos** dela; cada um responde com os que conhece **ainda mais próximos**; repete até não achar ninguém mais perto. A cada passo, a distância cai pelo menos à metade em média, então o número de passos cresce com o **logaritmo** do número de nós: em uma rede de um milhão de nós, algo da ordem de vinte passos, não um milhão.
- **Paralelismo.** O Kademlia manda `α` consultas ao mesmo tempo (o artigo cita `α = 3`), para não esperar por nós que sumiram.
- **Republicação.** Cada nó republica os pares que guarda a cada hora, e o publicador original a cada 24 horas; sem republicação, o par expira em 24 horas. Isso mantém a rede saudável sem coordenação central.

### Exemplo numérico em miniatura

Use IDs de 4 bits (16 valores) em vez de 160. Sejam os nós `0010`, `0111`, `1010`, `1100` e a chave `1000`. Distâncias (XOR, em decimal):

```
chave 1000 XOR nó 0010 = 1010 = 10
chave 1000 XOR nó 0111 = 1111 = 15
chave 1000 XOR nó 1010 = 0010 = 2   <- o mais próximo
chave 1000 XOR nó 1100 = 0100 = 4   <- o segundo
```

Com `k = 2`, o par `(1000, valor)` é guardado em `1010` e `1100`. Um nó que começa em `0010` e conhece só `0111` e `1100` pergunta a `1100`; `1100` responde "conheço `1010`, que está mais perto"; o nó pergunta a `1010`, que tem o valor. Duas perguntas, sem servidor central.

## BitTorrent: DHT para achar pares

No **BitTorrent**, um arquivo (ou pasta) é descrito por um metadado cujo hash de 160 bits é o **infohash**. A **BEP 5** (proposta oficial de extensão do protocolo, "DHT Protocol") diz que o BitTorrent usa uma "tabela hash distribuída sloppy" (frouxa) para guardar **informação de contato de pares** em torrents sem tracker: "na prática, cada par vira um tracker". Ela é baseada em Kademlia e roda sobre UDP.

Mecânica, segundo a BEP 5:

- Cada cliente inclui um **nó DHT** com ID aleatório no mesmo espaço de 160 bits dos infohashes.
- Quatro consultas existem: `ping`, `find_node`, `get_peers` e `announce_peer`.
- Para achar quem baixa um torrent, o nó faz `get_peers` com o infohash, aos nós mais próximos que conhece. Quem sabe de pares devolve a lista; quem não sabe devolve nós mais próximos, e a busca segue iterativamente.
- Ao terminar, o nó faz `announce_peer` nos nós mais próximos do infohash, registrando a si mesmo como par daquele torrent. O anúncio exige um **token** recebido na consulta anterior, atrelado ao IP do consultante, para impedir que um hostil cadastre terceiros.
- O tamanho do balde (`K`) na BEP 5 é 8. Para funcionar atrás de NAT (Aula 2), o `announce_peer` tem o parâmetro `implied_port`, que manda usar a porta de origem do pacote UDP.

O que a DHT do BitTorrent **não** faz: ela só diz **quem** tem o arquivo. A troca de blocos entre os pares segue o protocolo BitTorrent, com estratégias de reciprocidade (quem envia mais recebe preferência, do conhecimento geral do protocolo; não conferido aqui). E um ponto crítico para a Aula 5: a DHT do BitTorrent **guarda o IP do par** por desenho, então qualquer um consegue ver quem está baixando o quê. É P2P, não é anonimato.

## IPFS: endereçar pelo conteúdo

O **IPFS** (InterPlanetary File System) muda o que a rede endereça. Na web, uma URL diz **onde** o conteúdo está (`servidor.com/arquivo`); se o servidor troca o arquivo ou some, o endereço quebra ou mente. No IPFS, o endereço é um **CID** (*content identifier*), derivado do **hash criptográfico do conteúdo**. Segundo a documentação oficial:

- O CID "não indica onde o conteúdo está armazenado", mas forma um endereço baseado no próprio conteúdo. Qualquer diferença no conteúdo gera outro CID; o mesmo conteúdo adicionado com as mesmas configurações gera o mesmo CID.
- O CID inclui o hash (SHA-256 por padrão) e informação de codec. Arquivos grandes são **fatiados em blocos** (tipicamente 256 KiB a 1 MiB), organizados em um **grafo acíclico dirigido** (uma árvore de Merkle: cada nó contém os hashes dos filhos); o hash do bloco raiz vira o CID. Logo, o CID **não é** o hash do arquivo inteiro.
- Consequência: você **verifica** o que recebeu recomputando o hash, não importa de quem veio. A confiança sai do servidor e vai para a matemática. Essa é a mesma ideia do endereço-hash de chave do Reticulum, aplicada a dados.

Como o IPFS acha quem tem um CID (roteamento de conteúdo), segundo a documentação: usa a **DHT Kademlia** para localizar pares que anunciaram ter o conteúdo; o **Bitswap** pergunta diretamente aos pares conectados (com listas de desejos), sem passar pela DHT; e o **mDNS** (descoberta multicast) acha nós **na rede local, sem internet e sem nós de arranque**. Para transferir sem rede, o IPFS aceita arquivos **CAR** movidos por disco ou cartão ("sneakernet", Aula 8): o CID é o mesmo dos dois lados.

Limites honestos, que a documentação não esconde e que importam para o seu projeto:

- **Endereçar por conteúdo dá integridade, não disponibilidade.** Se ninguém guarda o bloco, o CID não resolve. É preciso que alguém **fixe** (*pin*) o conteúdo.
- Conteúdo imutável não combina com dados que mudam: por isso existe o **IPNS** (nomes mutáveis), com suas próprias complicações.
- Assim como no BitTorrent, os pares que anunciam conteúdo na DHT ficam associados ao seu endereço de rede. Não é anonimato.

## libp2p: a "caixa de peças" de rede

O **libp2p** é a biblioteca de rede P2P usada pelo IPFS. A documentação do IPFS lista, sob "conectividade entre pares", o libp2p com os transportes **TCP, QUIC, WebRTC e WebTransport**. Em termos de projeto: ele resolve as partes repetitivas (identidade do par, transportes, descoberta, atravessar NAT) para quem quer construir um sistema P2P sem reescrevê-las. Não pesquisei a arquitetura interna dele; para o seu projeto, saiba que existe como opção quando você programa em cima da internet.

## O que isso muda para a sua rede de rádio

Compare com o Reticulum (Módulo 10):

| Questão | DHT (BitTorrent, IPFS) | Reticulum |
|---|---|---|
| Como acha um destino | Consulta iterativa à DHT, com dezenas de mensagens | Announces propagados pela rede; cada nó guarda o próximo salto (Módulo 10, Aula 3) |
| Custo de banda | Aceitável na internet (Mbit/s) | O Reticulum trabalha com teto de 2% da banda para announces em enlaces de poucos kbps |
| Depende de UDP/IP e NAT | Sim (por isso `implied_port`, mDNS etc.) | Não: roda direto sobre LoRa, serial e outros meios |
| Endereço | ID no espaço de 160 bits (nós) e CID/infohash (dados) | Hash da chave pública (16 bytes) |
| Descoberta global | Sim (a DHT é global) | Não: sem DNS e sem busca global (Módulo 10, Aula 9) |

Duas conclusões:

1. **DHT é ótima para "achar o dado no mundo" com internet e banda de sobra**, e um mau encaixe para LoRa: cada busca envolve várias idas e voltas, e o tempo no ar de LoRa (Módulo 8, Aula 2) transformaria isso em minutos e canais congestionados (Módulo 9, Aula 3). Em rádio, o roteamento por **anúncio local** e por **caminho aprendido** é mais adequado.
2. **A ideia de endereçar pelo conteúdo (CID)** é útil em qualquer meio: dá verificação de integridade sem confiar em quem entrega, o que é exatamente o que uma rede de "sneakernet" e de nós intermediários precisa (Aula 8).

O Yggdrasil (Aula 7) combina as duas coisas: usa uma **árvore geradora** global para dar a cada nó uma coordenada e uma DHT para achar a coordenada de um destino cuja chave se conhece. É um exemplo de DHT em uma camada de rede em vez de camada de aplicação.

## Resumo

- Em P2P, a dificuldade é **encontrar** sem índice central; a resposta moderna é a **DHT**: os pares guardam o índice, dividido por uma regra matemática.
- **Kademlia**: IDs de 160 bits, distância `x XOR y`, um par `(chave, valor)` é guardado nos `k` nós mais próximos, buscas iterativas com número de passos proporcional ao logaritmo do tamanho da rede, republicação periódica.
- **BitTorrent (BEP 5)**: a DHT guarda contatos de pares por infohash (`get_peers`, `announce_peer`, `find_node`, `ping`); os dados vão pelo protocolo BitTorrent; a DHT expõe IPs.
- **IPFS**: endereça pelo **CID** (hash do conteúdo mais codec), verifica por recomputar o hash, usa Kademlia, Bitswap e mDNS (rede local sem internet) e transporta por CAR sem rede; integridade não é disponibilidade.
- DHT combina com internet e mal com LoRa; endereçamento por conteúdo serve em qualquer meio.

## Para aprofundar

- [ ] [Kademlia: A Peer-to-peer Information System Based on the XOR Metric](https://www.scs.stanford.edu/~dm/home/papers/kpos.pdf) (Maymounkov e Mazières): o artigo original; as seções 1 e 2 (métrica XOR e estado do nó) bastam para o nível desta aula.
- [ ] [BEP 5: DHT Protocol](https://www.bittorrent.org/beps/bep_0005.html) (BitTorrent.org): a especificação oficial da DHT do BitTorrent, curta e legível.
- [ ] [How IPFS works](https://docs.ipfs.tech/concepts/how-ipfs-works/) e [Content Identifiers (CIDs)](https://docs.ipfs.tech/concepts/content-addressing/) (documentação do IPFS): endereçamento por conteúdo, roteamento, Bitswap, mDNS e transferência sem rede.

[Próxima aula: Panorama de sistemas e o espectro](./07%20-%20Panorama%20de%20Sistemas%20e%20o%20Espectro.md)
