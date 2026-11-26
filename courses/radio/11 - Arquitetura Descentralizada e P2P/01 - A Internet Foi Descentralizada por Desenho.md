# Aula 1: A internet foi descentralizada por desenho

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que a internet foi construída sem um centro, que problema técnico isso resolvia, e quais partes dela, mesmo assim, sempre tiveram um ponto de controle?*

## O problema que Baran tentou resolver

No início dos anos 1960, o problema de Paul Baran, na RAND Corporation, era de sobrevivência: como manter comunicação entre estações depois que parte da rede é destruída. A rede telefônica da época era **hierárquica**: cada telefone ligava a uma central local, as centrais ligavam a centrais regionais, e assim por diante. Destruir poucas centrais nos níveis altos isolava milhões de telefones.

Baran publicou em 1964 o memorando *On Distributed Communications* (RAND, RM-3420). A ideia central cabe em uma frase: em vez de poucos nós importantes, use **muitos nós ordinários, cada um ligado só a alguns vizinhos**, e faça as mensagens encontrarem o caminho que sobrou. O memorando classifica as redes em três formas (Figura 1 do original), que a Aula 3 usa como base da taxonomia do módulo: (a) **centralizada** (estrela), (b) **descentralizada** (estrelas ligadas entre si, hierarquia) e (c) **distribuída** (grade ou malha). Aqui interessa o que ele mediu.

O que a simulação de Baran mostrou (do texto do memorando):

- A rede centralizada é "obviamente vulnerável": destruir o nó central destrói a comunicação entre todas as estações.
- Em uma rede distribuída, **uma redundância moderada basta**. Ele define o "nível de redundância" como a razão entre o número de enlaces e o número mínimo necessário para conectar tudo (nível 1 é uma árvore, sem enlace sobrando). Com nível **3 ou 4** (três a quatro vezes os enlaces do mínimo), a rede aguenta ataques pesados com perda de comunicação desprezível além da perda dos próprios nós destruídos. Ele testou uma grade de 18 x 18 estações (324 nós).
- Enlaces **pouco confiáveis** servem: com nós perfeitos e enlaces que ficam fora do ar **50% do tempo**, a degradação da rede foi pequena. Isso importa muito para rádio, porque enlaces de rádio são exatamente assim (Módulo 2, Aula 4, desvanecimento).
- Há um ponto de quebra abrupto: a rede resiste até certo nível de dano e então se desfaz rápido. Mais redundância além do necessário compra pouco.
- A vantagem depende de **comutação flexível**: cada nó decide o caminho a cada mensagem. Se os caminhos são pré-atribuídos (a "diversidade de atribuição" do texto), a rede perde muito mais capacidade de comunicação, mesmo com nós e enlaces melhores.

Esse último ponto é o coração técnico do que se seguiu: uma rede distribuída só funciona se os nós **decidem localmente para onde encaminhar** e as mensagens são pequenas o bastante para serem tratadas como unidades independentes.

*(Do desenvolvimento histórico geral, sem fonte primária desta pesquisa: Donald Davies, no Reino Unido, chegou a ideias semelhantes de forma independente e cunhou o termo "packet"; a ARPANET entrou em operação em 1969. O que este módulo cita com fonte é o memorando de Baran e os RFCs abaixo.)*

## Comutação de pacotes: o mecanismo

Na **comutação de circuitos** (telefone clássico) a rede reserva um caminho de uma ponta à outra durante toda a chamada. Se um nó do caminho cai, a chamada cai. Na **comutação de pacotes**, a mensagem é fatiada em pedaços (**pacotes**), cada um com o endereço do destino no cabeçalho; cada roteador olha o endereço e escolhe o próximo salto. Pacotes da mesma conversa podem seguir caminhos diferentes, e se um roteador some, os seguintes simplesmente não passam mais por ele.

Três consequências, todas relevantes para rádio:

1. **Nenhum nó precisa conhecer a rede inteira.** Cada roteador só precisa saber o próximo salto para cada destino (Módulo 9, Aula 2, roteamento).
2. **Qualquer meio físico serve**, desde que consiga levar pacotes. Ethernet, fibra, Wi-Fi, LoRa.
3. **A capacidade é compartilhada estatisticamente.** Quem não está falando não ocupa nada. Por isso o meio de rádio, que é raro, pode ser dividido entre muitos.

## O princípio ponta a ponta: onde fica a inteligência

O artigo de 1984 de Saltzer, Reed e Clark, *End-to-End Arguments in System Design*, deu nome ao segundo pilar. O argumento: uma função (confiabilidade da entrega, criptografia, eliminação de duplicatas, confirmação de recebimento) que só pode ser implementada **completa e corretamente com o conhecimento e a ajuda da aplicação nas pontas** não deve ser tratada como recurso da rede. A rede pode oferecer uma versão incompleta como otimização de desempenho, mas a garantia final vem das pontas.

Exemplo dos próprios autores: transferir um arquivo. A rede pode checar cada salto, mas um bit ainda pode ser corrompido dentro da memória de um roteador; só uma checagem do arquivo inteiro pelas duas pontas garante correção. Se as pontas de qualquer modo precisam fazer essa checagem, a rede não precisa gastar esforço em garantias perfeitas.

O RFC 1958 (*Architectural Principles of the Internet*, IAB, 1996) resume a tradição em uma frase que vale ler no original: "o objetivo é a conectividade, a ferramenta é o Internet Protocol, e a inteligência é ponta a ponta, em vez de escondida na rede". Mais duas ideias do mesmo documento:

- **Um único protocolo no nível da internet.** O IP é a "cintura fina": tudo desce até ele (Wi-Fi, LoRa, fibra) e tudo sobe dele (web, e-mail, voz). Isso permite interconectar redes de tecnologias e donos diferentes sem que ninguém precise de permissão de um centro.
- **A conectividade vale por si.** O RFC afirma que a conectividade "é sua própria recompensa" e mais valiosa que qualquer aplicação isolada.

O TCP/IP, que Cerf e Kahn projetaram, aplica isso: o IP só entrega pacotes "no melhor esforço" (sem garantia), e o **TCP** nas pontas cuida de ordem, retransmissão e controle de congestionamento. O roteador do meio não guarda estado de conversa. Ponto que volta na Aula 8: essa suposição, de que existe um caminho contínuo entre as pontas, é o que falha em redes de rádio intermitentes.

Consequência de projeto que o aluno de software reconhece: **quem inventa aplicação nova não pede permissão**. Basta dois computadores nas pontas e dois pacotes. A web, o e-mail e o BitTorrent nasceram assim. O Módulo 10 mostrou o mesmo princípio aplicado a rádio: o Reticulum coloca a inteligência (criptografia, roteamento por announces) nos nós, sem servidor central (Módulo 10, Aula 1).

## Roteamento e nomes: distribuídos, mas com hierarquia

A internet real é uma **rede de redes**, e cada camada de coordenação foi feita descentralizada, com uma âncora de autoridade em algum ponto.

**Roteamento entre redes (BGP).** A internet se divide em milhares de **sistemas autônomos** (ASes): redes administradas por uma organização (provedor, universidade, empresa). Dentro de cada AS o operador usa o protocolo que quiser. Entre ASes, o protocolo é o **BGP-4** (RFC 4271, 2006): cada AS anuncia aos vizinhos quais faixas de endereços consegue alcançar, junto com a lista de ASes por onde o caminho passa; cada roteador escolhe pelo critério local (política do operador, não só o caminho mais curto). Ninguém tem o mapa completo e ninguém manda no todo. O preço: o BGP se baseia em **confiança entre operadores**. Quando um AS anuncia por engano ou de má-fé um prefixo que não é dele, os vizinhos tendem a acreditar (o protocolo em si não valida quem é dono do quê; mecanismos de validação existem, mas não os cobri aqui).

**Nomes (DNS).** O DNS (RFC 1034 e 1035, de 1987) é um banco de dados **hierárquico e delegado**. Um nome como `exemplo.com.br` é lido da direita para a esquerda: a raiz delega `br` a seu operador, `br` delega `com.br`, e assim por diante. Cada nível administra sua zona e delega as de baixo; nenhuma máquina guarda todos os nomes. Isso escalou de milhares para bilhões de nomes. Mas note a forma: é uma **árvore**, e árvores têm raiz. A raiz do DNS e a alocação de endereços IP em nível mundial têm entidades coordenadoras (ICANN/IANA e registros regionais). É descentralizado no sentido de Baran (Figura 1b): hierarquia de estrelas, sem que um único ponto seja necessário para cada consulta (graças a caches e a muitos servidores raiz), mas com **autoridade concentrada no topo da árvore**.

## O balanço honesto

| Camada | Como foi descentralizada | Onde ainda há centro |
|---|---|---|
| Transporte de pacotes | Roteadores independentes, cada um decide o próximo salto | Nenhum roteador é essencial, mas os grandes cabos e pontos de troca de tráfego concentram muito caminho |
| Endereços | Faixas delegadas a registros regionais e a provedores | Coordenação mundial de IANA e registros |
| Rotas entre redes | BGP, sem dono | Confiança mútua entre operadores |
| Nomes | DNS hierárquico com delegação | Raiz e domínios de topo |
| Aplicações | Qualquer um implementa | (Aula 2: aqui a história mudou) |

A internet, portanto, foi **descentralizada por desenho no nível de transporte**, e **hierárquica por desenho no nível de nomes e endereços**. O que a Aula 2 mostra é que a centralização que hoje incomoda não está nessas camadas: está **acima delas**, onde o desenho permitiu tudo e a economia decidiu.

## Resumo

- Baran (RAND, 1964) mostrou que uma rede **distribuída** sobrevive a danos pesados com redundância modesta (nível 3 ou 4) e até com enlaces que caem metade do tempo, desde que cada nó decida localmente o caminho. A rede **centralizada** morre com o nó central.
- **Comutação de pacotes**: cada pacote carrega o destino e cada roteador escolhe o próximo salto; nenhum nó precisa do mapa completo.
- **Princípio ponta a ponta** (Saltzer, Reed e Clark, 1984): funções que só as pontas conseguem garantir por inteiro ficam nas pontas; a rede é simples e não pede permissão a quem cria aplicações novas.
- **BGP** (entre redes) e **DNS** (nomes) são distribuídos na operação, mas o DNS é uma árvore com raiz e o BGP depende de confiança entre operadores.
- A descentralização original é de **transporte**; nomes, endereços e (Aula 2) aplicações acumularam pontos de controle.

## Para aprofundar

- [ ] [On Distributed Communications: I. Introduction to Distributed Communications Networks](https://www.rand.org/pubs/research_memoranda/RM3420.html) (Paul Baran, RAND, 1964): o memorando original, curto, com a Figura 1 e as curvas de sobrevivência. Leitura obrigatória do módulo.
- [ ] [End-to-End Arguments in System Design](https://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.pdf) (Saltzer, Reed, Clark, MIT): o artigo que fundamenta a "inteligência nas pontas".
- [ ] [RFC 1958: Architectural Principles of the Internet](https://www.rfc-editor.org/rfc/rfc1958) (IAB): o retrato da arquitetura em 1996, em texto curto.
- [ ] [The Internet: Crash Course Computer Science #29](https://www.youtube.com/watch?v=AEaKrq3SpW8) (CrashCourse): visão geral em vídeo de pacotes, roteamento e camadas; título e canal confirmados, não assisti.

[Próxima aula: Por que a internet se centralizou](./02%20-%20Por%20que%20a%20Internet%20se%20Centralizou.md)
