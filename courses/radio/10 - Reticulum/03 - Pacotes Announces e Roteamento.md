[Voltar ao módulo](./README.md)

# Aula 3: Pacotes, announces e roteamento

*Pergunta que esta aula responde: como uma rede sem servidor central, sem tabela de rotas configurada e sem DNS aprende para onde mandar cada pacote, e por que o pacote é tão pequeno?*

> Verificado em setembro de 2026 no manual oficial (*Understanding Reticulum*, *Configuring Interfaces*) e no código do RNS 1.5.4 (`RNS/Reticulum.py`, `RNS/Transport.py`, `RNS/Packet.py`) e do firmware RNode. Constantes do código podem mudar entre versões: confira na sua.

## Por que o pacote é pequeno: o custo de um byte

Os Módulos 3 e 8 mostraram que em LoRa a taxa útil vai de algumas centenas de bits por segundo a poucos quilobits por segundo, e que o tempo no ar cresce com cada byte. Além disso, um quadro LoRa carrega no máximo **255 bytes** de carga útil (limite do chip; o Módulo 8 detalha). Um projeto que queira rodar nisso precisa:

1. **Cabeçalhos mínimos**, sem campos que a rede não use.
2. **Endereços curtos** (os 16 bytes da Aula 2).
3. **Nada de handshakes longos** (a Aula 4 mostra um link em 297 bytes).
4. **Um tamanho máximo de pacote fixo e pequeno**, para que todo nó do mundo concorde sobre o que cabe em qualquer enlace da rota.

### O MTU de 500 bytes

**MTU** (*Maximum Transmission Unit*) é o maior pacote que o enlace transporta sem fragmentar. No IP típico, 1500 bytes (Ethernet). No Reticulum, o `Reticulum.MTU` é **500 bytes**, e o código comenta que todos os pares precisam usar o mesmo valor: mudar isso "quebra completamente a compatibilidade com todas as outras redes RNS". O mesmo comentário registra que um mínimo futuro provavelmente seria fixado em **251 bytes**, sendo **219 bytes** o mínimo absoluto.

**Por que 500?** O manual **define** o requisito ("MTU físico de 500 bytes") mas eu não encontrei nele nem no código uma justificativa escrita do número. O que dá para confirmar:

- 500 é bem menor que os 1500 do Ethernet, então cabe folgadamente em qualquer meio de baixa banda com fragmentação simples.
- Em LoRa, 500 não cabe em um quadro de 255 bytes. O firmware do RNode resolve isso: seu código tem `MTU = 508` para o buffer e `SINGLE_MTU = 255` para um quadro, e implementa **pacotes divididos** (*split packets*) com número de sequência e flag de "parte" (`isSplitPacket`), ou seja, um pacote Reticulum grande é enviado em **dois quadros LoRa** e remontado pelo receptor. Isso é coerente com 508 = dois quadros de até 254 bytes de dados, mas a aritmética exata do cabeçalho de cada quadro é detalhe do firmware que não verifiquei.
- Meio termo de projeto (interpretação minha, não afirmação do manual): um MTU grande demais aumenta o tempo no ar de cada tentativa e a chance de perder o pacote inteiro por um erro; um MTU pequeno demais aumenta a fração de cabeçalho. Perto de 500 dá cabeçalhos de 19 a 35 bytes e sobra espaço para cifra e dados.

### Anatomia de um pacote

Formato do manual (seção *Wire Format*):

```
[CABEÇALHO 2 bytes] [(IFAC opcional, 1 a 64 bytes)] [ENDEREÇOS 16 ou 32 bytes] [CONTEXTO 1 byte] [DADOS 0 a 465 bytes]
```

- **Byte 1 do cabeçalho:** flags. Bit de IFAC (rede com autenticação, Aula 5), tipo de cabeçalho (1 ou 2 endereços), flag de contexto, tipo de propagação (broadcast ou transport), tipo de destino (single, group, plain, link) e tipo de pacote (dados, announce, link request, prova).
- **Byte 2:** número de saltos (*hops*), incrementado a cada retransmissão.
- **Endereços:** hashes de 16 bytes. **Cabeçalho tipo 2** traz dois: no código, o primeiro é o **hash de identidade do transport node** que deve retransmitir o pacote e o segundo é o destino final. É assim que um pacote diz "leve isto ao próximo nó do caminho". **Cabeçalho tipo 1** traz só o destino.
- **Contexto:** 1 byte usado pelo Reticulum para saber o que o pacote significa (por exemplo, parte de um Resource, keepalive de link).
- **Dados:** o código define `Reticulum.MDU = MTU - HEADER_MAXSIZE - IFAC_MIN_SIZE = 500 - 35 - 1 = 464` bytes. O manual escreve 0 a 465; a diferença de um byte é a forma como cada texto trata o campo IFAC. Vou usar **cerca de 464**.

Note que **não há campo de origem** (Aula 2) e **não há checksum de IP nem porta**.

### Tamanhos completos na rede (manual)

| Pacote | Bytes |
|---|---|
| Path request | 51 |
| **Announce** | **167** |
| Link request | 83 |
| Link proof | 115 |
| Link RTT | 99 |
| Link keepalive | 20 |

Verificação do announce de 167 bytes (sem dados de aplicação nem ratchet), com a estrutura do código: 19 (cabeçalho de 2 + endereço de 16 + contexto de 1) + 64 (chave pública) + 10 (hash do nome) + 10 (valor aleatório) + 64 (assinatura Ed25519) = **167**. Com um ratchet anunciado, +32 bytes. Dados de aplicação (ex.: nome de exibição) somam-se depois.

### Quanto cabe cifrado em um só pacote

Pela fórmula de `Packet.ENCRYPTED_MDU` no código: `floor((MDU - 48 - 32) / 16) x 16 - 1`, ou seja, `floor((464 - 48 - 32) / 16) x 16 - 1 = 24 x 16 - 1 =` **383 bytes** de dados úteis por pacote cifrado. (É um cálculo meu a partir das constantes do código, confira na sua versão.) O que passar disso vira **Resource** em um link (Aula 4).

## Announces: como a rede descobre destinos

Sem DNS nem servidor de rotas, como o nó A descobre que existe um destino D e por onde chegar nele? Pelo **announce**.

Um announce é um pacote de difusão com:

1. hash do destino e **chave pública** completa;
2. hash do nome (aplicação e aspects, 10 bytes);
3. um **valor aleatório de 10 bytes** (5 aleatórios mais um carimbo de tempo de 5 bytes, no código), que torna cada announce único;
4. **dados de aplicação** opcionais (ex.: apelido);
5. **assinatura Ed25519** de tudo acima.

Quem o recebe verifica a assinatura, memoriza a chave pública e sabe **de qual vizinho** o announce veio. O manual observa que os aspects não vão no announce (economia de banda): a aplicação receptora já os conhece.

Um announce faz duas coisas ao mesmo tempo: **distribui a chave pública** e **cria o caminho** em cada transport node por onde passa.

Destinos são portáteis: para se tornar alcançável em uma nova rede ou meio, o destino simplesmente **anuncia de novo** ali. Sem renumeração, sem DHCP.

## Transport nodes e a propagação dos announces

Todo nó rodando Reticulum é uma **instância**. Alguns são também **transport nodes**, habilitados com `enable_transport = Yes` no arquivo de configuração (padrão `No`). Um transport node retransmite announces, mantém a tabela de caminhos, atende pedidos de caminho e funciona como "livro de chaves" distribuído. O manual recomenda usar transport em nós **fixos e sempre ligados**. **Todos os nós virarem transport degrada a rede**: gastam memória, banda e desestabilizam o conjunto.

### As regras de retransmissão (manual, *The Announce Mechanism in Detail*)

Quando um transport node recebe um announce:

1. Se esse announce exato já foi recebido, **ignora**.
2. Senão, registra numa tabela **de qual transport node veio** e **quantas vezes já foi retransmitido** (contagem de saltos).
3. Se já foi retransmitido `m+1` vezes, **para de encaminhar**. Padrão `m = 128` saltos (`PATHFINDER_M = 128` no código).
4. Após um **atraso aleatório**, retransmite em todas as interfaces que tenham **banda disponível para announces**. O padrão é **2% da banda** da interface (`announce_cap`).
5. Se a interface não tem banda, o announce entra numa **fila com prioridade inversamente proporcional ao número de saltos**: quando há banda, **os mais próximos saem primeiro**.
6. Depois de retransmitido, se ninguém for ouvido retransmitindo com hop maior, tenta mais `r` vezes (padrão 1).
7. Um announce mais novo do mesmo destino que chegue com outro idêntico na fila **descarta o novo**, a menos que os dados de aplicação mudem (aí substitui).

**Por que essas regras?** A regra de prioridade por proximidade e o teto de 2% existem para que uma rede rápida e grande conectada a um segmento LoRa **não afogue o LoRa com announces**. O segmento lento privilegia a conectividade local. Segundo o manual, segmentos lentos não precisam de conhecimento total da rede: caminhos para destinos distantes são resolvidos *sob demanda* a partir de segmentos que os conhecem (pedidos de caminho, abaixo).

### Exemplo numérico: quantos announces cabem numa interface LoRa?

Suponha um RNode a **1,30 kbps** (o valor que o manual mostra como exemplo na saída do `rnstatus`; a taxa real depende da sua configuração LoRa, Módulo 8):

- Orçamento de announces: `2% de 1300 bps = 26 bps`.
- Um announce de 167 bytes tem `167 x 8 = 1336 bits`.
- Tempo mínimo entre announces retransmitidos: `1336 / 26 = 51 s`, ou cerca de **70 announces por hora**.
- Só transmitir um único announce ocupa `1336 / 1300 = 1,03 s` de ar.

Com 70 announces por hora, uma rede com centenas de destinos anunciando a cada poucos minutos **não cabe** nesse enlace: a fila cresce e vale a prioridade por proximidade. Por isso o manual recomenda, para aplicações, anunciar **ao iniciar e depois só a cada cerca de 6 horas**, e diz que "se você acha que precisa anunciar mais de uma vez por hora, provavelmente está fazendo algo errado". Destinos que reanunciam rápido demais são **despriorizados**: tentar furar a fila faz o efeito oposto.

O manual também dá controles mais finos por interface: `announce_rate_target`, `announce_rate_grace` e `announce_rate_penalty` (tempo mínimo entre announces retransmitidos de um mesmo destino), e limites de entrada para novos destinos e de pedidos de caminho, ativados por padrão (`ingress_control`, `ic_*`). O objetivo é conter *spam* de announces sem configuração manual.

### Convergência

O manual afirma que mesmo redes com o máximo de 128 saltos convergem para conectividade completa em **cerca de um minuto**, **se houver banda suficiente** para processar os announces. Em redes lentas, a convergência completa pode nem acontecer, e por isso o esquema de "resolver sob demanda" existe.

## Como o caminho é usado: a tabela de caminhos e o pedido de caminho

**Nenhum nó conhece o caminho completo até o destino.** Cada transport node só sabe **o próximo salto** e quantos saltos faltam. Isso vem do manual e do Zen: transport nodes "só conhecem a vizinhança imediata".

Quando o nó A quer enviar a D:

1. Se A tem D na sua tabela de caminhos (aprendeu por announce), envia o pacote como cabeçalho tipo 2, endereçado ao transport node do próximo salto.
2. O transport node olha D na sua tabela, troca o campo para o próximo salto e retransmite (e assim adiante), até o último salto, que entrega em cabeçalho tipo 1.
3. Se A **não** tem caminho, envia um **pedido de caminho** (*path request*, 51 bytes). Transport nodes que conhecem D respondem retransmitindo o announce guardado. O código espera respostas por padrão `PATH_REQUEST_TIMEOUT = 15` s e dá uma pequena "graça" para vizinhos diretos responderem primeiro.

**Validade de um caminho** (constantes do código): padrão **1 semana** (`PATHFINDER_E`), **1 dia** para caminhos via interface `access_point`, **6 horas** para `roaming`. Um destino que muda de lugar precisa de novo announce.

Analogia para quem vem de IP: cada transport node é um roteador que só tem a *next-hop* e um *distance vector* (contagem de saltos), sem protocolo de roteamento configurado, sem AS, e com a tabela alimentada por announces assinados em vez de anúncios BGP. A diferença de fundo: o caminho é **provado criptograficamente** (assinatura do dono do destino) e não "aceito por confiança" no vizinho.

### O que o roteador do Reticulum **não** faz

- Não escolhe entre vários caminhos por métricas ricas (latência, banda, custo). O *roadmap* do projeto lista "metric-based path selection and multiple paths" como funcionalidade **ainda não implementada**. O que existe, segundo o manual, é a contagem de saltos e uma opção `gravity` por interface, que aumenta ou diminui a afinidade de caminho (padrão 0). Como o algoritmo de desempate se comporta em detalhe: não confirmado, leia `Transport.py`.
- Não prioriza tipos de tráfego: o manual diz que a priorização de pacotes é por ordem de chegada (*first-come, first-served*), por desenho, já que o conteúdo é opaco para a rede.
- Não traz um DNS distribuído. O *roadmap* lista "Distributed Destination Naming System" como trabalho futuro. Nomes legíveis hoje ficam na camada de aplicação (por exemplo, o apelido nos dados do announce do LXMF).

### Fluxo de um announce, de ponta a ponta

```
Destino D ~~LoRa~~ Transport T1 ---TCP--- Transport T2 ---Wi-Fi--- Nó A

T1 ouve o announce de D:   registra "D está a 1 salto, direto"
T2 ouve T1 retransmitir:   registra "D está a 2 saltos, via T1"
A  ouve T2 retransmitir:   registra "D está a 3 saltos, via T2"
```

Depois disso, A envia um pacote a D com o hash de D e o hash de identidade de T2 no cabeçalho; T2 o entrega a T1, e T1 a D. Cada nó só conhece "para D, o próximo é X".

## Resumo

- O pacote é pequeno por causa do custo de cada byte no ar: MTU de **500 bytes** (MDU de cerca de 464), cabeçalho de 19 a 35 bytes, sem campo de origem. Em LoRa, o firmware do RNode divide o pacote em dois quadros.
- Um announce (167 bytes sem dados) carrega chave pública, hash do nome, valor aleatório, dados de aplicação opcionais e assinatura Ed25519: distribui a chave e cria caminhos.
- Transport nodes retransmitem announces com regras: descartar repetidos, limite de **128 saltos**, atraso aleatório, teto de **2% da banda** por interface e fila que dá prioridade aos destinos mais próximos.
- Exemplo: a 1,30 kbps, o teto de 2% dá 26 bps, ou cerca de 70 announces de 167 bytes por hora: por isso anuncie pouco (a cada poucas horas).
- Nenhum nó conhece o caminho completo: só o próximo salto e a distância. Sem caminho, envia-se um pedido de caminho.
- Não há métricas múltiplas, priorização de tráfego nem DNS distribuído hoje (itens do roadmap).

## Para aprofundar

- [ ] [Understanding Reticulum: Reticulum Transport, The Announce Mechanism in Detail, Wire Format](https://reticulum.network/manual/understanding.html) (manual oficial): as regras de announce e o formato de pacote citados nesta aula.
- [ ] [Configuring Interfaces: Announce Rate Control, Common Interface Options](https://reticulum.network/manual/interfaces.html) (manual oficial): `announce_cap`, `announce_rate_*`, ingress control.
- [ ] [Reticulum, FYI | Part 1 "How do announces work in Reticulum (RNS)?"](https://www.youtube.com/watch?v=PFRS_Fqk2Go) (Ken a.k.a. Frosty): vídeo da comunidade sobre announces; não assisti.
- [ ] [RNode_Firmware (espelho oficial)](https://github.com/markqvist/RNode_Firmware): onde conferir o tratamento de pacotes divididos (`SINGLE_MTU`, `isSplitPacket`) citado acima.
- [ ] [Módulo 9: Redes Mesh](../09%20-%20Redes%20Mesh/README.md): para comparar com flooding e roteamento em Meshtastic e MeshCore.

[Próxima aula: Links e Resources](./04%20-%20Links%20e%20Resources.md)
