[Voltar ao módulo](./README.md)

# Aula 6: MeshCore

*Pergunta que esta aula responde: que problema do Meshtastic o MeshCore tenta resolver, como ele encaminha mensagens de outro jeito (repetidores explícitos e caminhos aprendidos), e qual é o preço dessa escolha?*

> Fontes: repositório oficial `meshcore-dev/MeshCore` no GitHub (README, `docs/faq.md`, `docs/packet_format.md`, `docs/payloads.md`), docs.meshcore.io, blog do projeto, reportagem da LWN.net, guias de comunidades brasileiras. Verificado em setembro de 2026. O projeto é jovem e muda rápido: números de versão e presets recomendados envelhecem. Onde não confirmei algo, escrevo "não confirmado".

## O que é e de onde vem

**MeshCore** é um sistema de código aberto (licença MIT) de rede mesh por rádio LoRa para **mensagens de texto**. O repositório foi criado em janeiro de 2025 e o núcleo do firmware é desenvolvido por Scott (do "Ripple Radios"), com o aplicativo de celular de Liam Cottle e ferramentas de outros mantenedores. O README descreve o projeto como "um novo protocolo mesh de **roteamento híbrido** e leve para rádios de pacotes", e a FAQ o define como sistema multiplataforma para comunicação de texto segura sobre LoRa.

Duas ressalvas de licença que a própria FAQ faz: o firmware de rádio é livre e MIT, mas **o firmware do T-Deck e os apps móveis nativos de Liam Cottle não são código aberto**, e alguns recursos opcionais custam pouco (o app tem modelo *freemium*, e o T-Deck cobra por chave de desbloqueio de mapas mais detalhados e administração remota). Segundo a FAQ, a versão para Windows e Mac do app é gratuita e desbloqueada.

## Por que existe: o problema do Meshtastic

Das Aulas 3 e 4: no Meshtastic, o `CLIENT` **retransmite tudo** (com supressão) e o broadcast é inundação. Isso é ótimo para robustez e péssimo para escala, e cria dois problemas que o MeshCore ataca:

1. **Todo mundo repete.** Cada celular na mochila é também um retransmissor. Com muitos nós, o canal satura.
2. **Toda mensagem é inundada** (broadcast por inundação; DMs só aprendem next hop desde a 2.6).

A resposta do MeshCore, dita na FAQ: os **clientes não repetem**. A FAQ chama isso de núcleo do design voltado a mensagens, para evitar que dispositivos inundem o ar e criem colisões sem fim. Quem repete são apenas **repetidores dedicados**, colocados por pessoas em pontos altos. O ganho é previsibilidade de uso do ar. O preço é que a rede **precisa de infraestrutura de repetidores** para ir além do alcance direto entre dois clientes.

## Tipos de nó

O MeshCore tem tipos de firmware que outros sistemas LoRa não têm (FAQ):

| Tipo | Papel |
|---|---|
| **Companion** (BLE, USB serial ou Wi-Fi) | Rádio ligado ao app (celular, web, PC). É o "cliente": envia e recebe, **não repete**. |
| **Repeater** | Encaminha pacotes. **Não** reenvia tudo o que ouve, só o que a regra de roteamento manda. Vai no alto, com energia solar, tipicamente |
| **Room Server** | Um "BBS": guarda o histórico (as últimas 32 mensagens não vistas são entregues ao entrar) e permite que quem estava offline **leia depois**, como um e-mail. Diferente de um canal, onde quem estava fora do alcance perde a mensagem |
| **Sensor** | Nó remoto com telemetria e alertas |

A FAQ recomenda rodar repetidor e room server em **aparelhos separados**. Também existe firmware **Ultra** para T-Deck/T-Pager, que dispensa celular.

## Como o roteamento funciona

Segundo a FAQ (perguntas 5.3 a 5.5) e o formato de pacote:

1. **Primeira mensagem para um destino sem rota: inundação por repetidores.** O pacote sai marcado como *flood* e só os **repetidores** o retransmitem.
2. **O destino devolve a lista dos repetidores por onde o pacote passou** (um pacote de "caminho retornado", que pode levar junto a confirmação de entrega). Esse retorno também é inundado até voltar.
3. **A rota fica guardada na lista de contatos do remetente.**
4. **As mensagens seguintes levam o caminho embutido no pacote** (tipo de rota *direct*). Cada repetidor compara: "sou o próximo salto do caminho?". Se sim, retransmite; se não, **cala**. Só a cadeia certa usa o ar.
5. **Se o caminho quebrar** (um repetidor móvel sumiu): a mensagem é enviada pelo caminho antigo, falha após 3 tentativas, e por padrão o app **zera o caminho e reenvia como flood** na última tentativa. Se o destino for alcançável, o novo caminho é aprendido.
6. **Canais de grupo sempre inundam**, pois não há destino único e, portanto, nenhum caminho. Mas o administrador de cada repetidor pode **recusar inundações acima de certo número de saltos** (comando `set flood.max`).

É exatamente o **roteamento híbrido** da Aula 2: descoberta reativa por inundação, e depois rota dirigida. A diferença de fundo para o Meshtastic é que a inundação passa **só por repetidores**, e o caminho aprendido é **explícito no pacote** (roteamento pela origem, *source routing*).

### Anúncios (adverts)

Para que os outros saibam que você existe, o nó faz um **advert**: transmite nome, posição opcional e **chave pública**, tudo assinado (Ed25519) para evitar falsificação. Há dois modos: **zero-hop** (só quem ouve direto) e **flood** (repetido pelos repetidores). Clientes só fazem advert **quando o usuário manda**, ao contrário do Meshtastic, que anuncia periodicamente. Repetidores fazem um advert por inundação a cada 12 horas por padrão (configurável). Menos anúncios automáticos significa menos ar gasto com o que a Aula 3 mostrou ser a parte que mais pesava.

### O pacote

Segundo `docs/packet_format.md` (versão 1 do protocolo, firmware 1.12.0 na página consultada):

```
[cabeçalho 1 B][códigos de transporte opcionais 4 B][tamanho do caminho 1 B][caminho][payload até 184 B]
```

- O cabeçalho de 1 byte junta **tipo de rota** (flood, direct, com ou sem códigos de transporte), **tipo de payload** (mensagem de texto, ACK, advert, requisição, mensagem de grupo, caminho retornado, traço com SNR por salto) e versão.
- O **caminho** tem um identificador por repetidor (**hash**, os primeiros bytes da chave pública do nó). Por padrão o hash tem **1 byte**, ou seja, apenas 256 valores possíveis. Firmware atual aceita **2 ou 3 bytes**.
- Destino e origem, dentro do payload, também são **hashes de 1 byte**, e o MAC da criptografia tem **2 bytes** na versão 1; versões futuras prevêem hashes e MAC maiores.

Cálculo de sobrecarga: uma mensagem direta por 3 repetidores carrega `1 + 1 + 3 = 5 bytes` de roteamento, mais 4 bytes no payload (hash de destino, hash de origem e MAC de 2 bytes), total de `9 bytes`, contra **16 bytes fixos** do cabeçalho do Meshtastic. Em canais de baixa taxa isso é ar economizado em todo pacote (comparação de ordem de grandeza: os dois formatos carregam campos diferentes).

Limite de saltos: a FAQ diz que o firmware tem um máximo interno de **64** saltos. No formato de pacote, o campo de contagem tem 6 bits (0 a 63) e o caminho ocupa no máximo 64 bytes, então, dividindo 64 bytes pelo tamanho do hash, cabem cerca de 64 saltos com hash de 1 byte, 32 com 2 bytes e 21 com 3 bytes (conta minha). Na prática, a FAQ diz que será difícil chegar perto do limite.

### Colisão de hash: o preço da compactação

Com hash de 1 byte, só existem 256 valores. Pelo problema do aniversário, com apenas cerca de 19 repetidores já há 50% de chance de que **dois compartilhem o mesmo primeiro byte** (`raiz(2 x 256 x ln 2)`, conta minha), e o caminho fica ambíguo quando os dois estão na mesma região. A FAQ trata explicitamente do caso e mostra como gerar outra chave. Por isso o guia de configuração do Mesh Sorocaba (comunidade brasileira, fonte secundária) manda configurar `path.hash.mode` em **2 bytes**, explicando que o padrão de fábrica de 1 byte (256 IDs) é insuficiente para redes com muitos nós. Um compromisso de projeto: cada byte de hash a mais custa ar em todo pacote, cada byte a menos aumenta a colisão.

## Parâmetros de rádio

O MeshCore não tem "presets de nome" como o Meshtastic, mas o app oferece predefinições por região. Segundo a FAQ, **desde outubro de 2025 muitas regiões adotaram o ajuste "narrow"**, com largura de banda de **62,5 kHz** e SF menor (7, 8 ou 9) no lugar do SF11 original, para "caber entre as interferências da banda ISM", com piso de ruído menor e transmissão mais rápida. Exemplo da FAQ: EUA/Canadá, 910,525 MHz, SF7, BW 62,5 kHz, CR 5.

No Brasil, o guia do Mesh Sorocaba (comunidade; não é fonte oficial do projeto) usa a predefinição "Australia: SA, WA, Brazil" com 923,125 MHz, BW 62,5 kHz, SF8 e CR 8 (4/8), e diz que 915 a 928 MHz é a faixa liberada pela Anatel para radiação restrita até 1 W (no Ato 14448 são 1 W de potência de pico na saída do transmissor, com redução dB a dB para antena acima de 6 dBi; ver [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)). Compare o desempenho com o LongFast do Meshtastic, com a fórmula da taxa bruta `Rb = SF x (BW / 2^SF) x fração_CR`:

- LongFast: `11 x (250.000 / 2048) x 0,8 = 1.074 bps` (bate com o 1,07 kbps da documentação)
- SF8, 62,5 kHz, CR 4/8: `8 x (62.500 / 256) x 0,5 = 977 bps`

A taxa é quase igual. A margem de enlace, pela regra da documentação do Meshtastic (cada passo de SF vale cerca de 2,5 dB, cada duplicação de banda cerca de 3 dB), fica próxima: SF11 dá +7,5 dB sobre SF8, e 250 kHz custa 6 dB sobre 62,5 kHz. Saldo estimado em favor do SF11 de cerca de 1,5 dB, e o CR 4/8 do exemplo brasileiro compensa parte disso com mais correção de erro. A vantagem do "narrow" não está em alcance nem em taxa, e sim em **caber entre interferências**: 62,5 kHz é uma fatia estreita que evita os sinais vizinhos da banda ISM. Isso é uma inferência minha a partir das regras práticas e da FAQ, não um teste.

Regra que vale nos dois sistemas: **todos os nós da rede precisam dos mesmos parâmetros de rádio**, e na região você deve seguir o que a **comunidade local** adotou, para não formar uma ilha.

## Escala e limites

O que o desenho promete: como só repetidores retransmitem e as conversas usam caminho fixo, o uso do ar por mensagem é **muito menor** que uma inundação total, então mais pessoas cabem na mesma rede. Relato de Liam Cottle em apresentação (outubro de 2025): uma rede na Eslováquia com cerca de 39 repetidores e algumas centenas de pessoas enviando mensagens todos os dias, considerada confiável. É um relato do desenvolvedor, não uma medição independente.

Limites reconhecidos pelo próprio projeto:

- **Depende de repetidores.** Sem repetidores, o alcance é o de um enlace direto. Quem instala e mantém repetidores (energia, altura, posição) determina a qualidade.
- **Mobilidade prejudica.** Se os usuários se movem e os caminhos quebram, o app volta a inundar. A FAQ usa isso como motivo para o **ATAK não estar no roteiro**: dispositivos constantemente em movimento entre repetidores fariam o tráfego voltar a inundar, com colisões.
- **Canais de grupo sempre inundam.** Chat de grupo tem o mesmo problema de escala de qualquer inundação, mitigado pelo `flood.max` dos repetidores.
- **Colisão de hash** e **ambiguidade de caminho** (acima).
- **Ainda é físico.** A Aula 3 vale: um canal, um receptor, colisões e nós escondidos. O MeshCore reduz o número de transmissões por mensagem, não elimina o limite.
- **Só texto.** O projeto é focado em mensagens; a FAQ descreve o produto como "comunicação de texto".

## Segurança (o que a documentação confirma)

- **Identidade por chave pública**: o advert é **assinado**, e o nó é identificado pelas chaves (Ed25519, segundo `payloads.md`).
- **Mensagens diretas cifradas com MAC** (2 bytes na versão 1). Não confirmei o algoritmo de cifra exato nas páginas que li: confira a documentação antes de afirmar algo sobre isso.
- **Canal "público" tem chave conhecida**: a FAQ publica a chave do canal público padrão. Quem tem a chave lê. O sigilo real está em canais com chave criada por você.
- Repetidores não precisam ler o conteúdo para encaminhar (só o caminho fica aberto).

Vale a mesma cautela da Aula 9: cifrar não esconde **metadados** (quem fala, quando, por onde) de quem monitora o rádio, e este módulo não afirma sigilo que a documentação não dá.

## Estado do projeto e a controvérsia de 2026

Para decidir se vale investir tempo, saiba de duas coisas:

- **Crescimento rápido** e ecossistema (mapa de nós em map.meshcore.io, flasher web, cliente web app.meshcore.nz, apps Android, iOS, Windows e Mac).
- **Uma disputa de governança.** Segundo a reportagem da LWN.net e o blog do projeto, em março e abril de 2026 um ex-integrante da comunidade (Andy Kirby, o YouTuber que promovia o projeto e mantinha o site e o servidor de Discord originais) lançou um app proprietário (MeshOS), passou a usar o nome de forma que a equipe central contesta e **depositou pedidos de marca "MeshCore"** no Reino Unido (29 de março) e na UE, sem avisar a equipe. A equipe central (Scott, Liam Cottle, Recrof, fdlamotte, Oltaco) rompeu, lançou o site meshcore.io, e em agosto de 2026 formalizou oposição ao registro no Reino Unido (segundo o Mesh America, com custos jurídicos cobertos por financiamento coletivo). Kirby, em vídeo de resposta, nega má-fé e diz que buscava proteger a marca do ecossistema, e reconhece que a comunicação "poderia ter sido melhor". A equipe também critica o uso de código gerado por IA sem aviso. Não julgo o mérito. O que importa para você: **o firmware oficial é o do repositório `meshcore-dev/MeshCore`**, e a página oficial do projeto aponta para o meshcore.io; o MeshOS é um produto separado. A NodakMesh (blog de comunidade) resume, do ponto de vista de operador, que rodar um repetidor hoje funciona como antes: a disputa é de marca, não do firmware que já está no seu hardware. Verifique a origem do firmware que você grava.

## Comparação direta

| Aspecto | Meshtastic | MeshCore |
|---|---|---|
| Quem repete | `CLIENT` também repete (com supressão), `ROUTER` sempre | Só **repetidores dedicados**; cliente não repete |
| Broadcast/grupo | Inundação gerenciada | Sempre inunda (por repetidores), com `flood.max` |
| Mensagem direta | Inundação e depois next hop aprendido (2.6+) | Inundação na 1ª, depois **caminho explícito no pacote** |
| Sobrecarga por pacote | 16 bytes fixos | 2 bytes + 1 a 3 bytes por salto, mais 4 bytes de hashes e MAC no payload |
| Hop limit | Padrão 3, máx. 7 | Até 64 no firmware, limitado por `flood.max` nos repetidores |
| Anúncios | Periódicos (NodeInfo, posição, telemetria) | Só por ação do usuário (cliente); repetidor a cada 12 h |
| Histórico offline | Não | **Room server** |
| Extras | Telemetria, MQTT, mapa, ATAK, módulos | Foco em texto; sem ATAK |
| Ponto forte | Simples de começar, muita comunidade, muito hardware | Uso do ar mais previsível; escala melhor em tese |
| Ponto fraco | Satura com muitos nós | Precisa de repetidores; mobilidade quebra caminhos; jovem, com disputa de marca |

Qual escolher? Para **duas ou três pessoas próximas, alcance curto ou caminhada**, o Meshtastic dispensa infraestrutura (todo mundo é relay). Para **uma comunidade que vai instalar alguns repetidores fixos e quer muitas pessoas conversando**, o modelo do MeshCore é mais aderente. Nada impede testar os dois, em placas diferentes ou reflasheando a mesma placa (mesmos rádios, firmwares diferentes; conferir a lista de dispositivos suportados).

## Primeiros passos (confirmados na documentação oficial)

1. Abra o flasher web do projeto (flasher.meshcore.io) e escolha o dispositivo e o tipo de firmware: **Companion**, **Repeater** ou **Room Server**.
2. Para um cliente: grave o **BLE Companion**, instale o app (Android, iOS ou web) e pareie.
3. Para um repetidor: grave o firmware de repetidor, ligue por USB, e use o console do flasher web para **definir a frequência da sua região** (`set freq {frequência}`). Sem isso não é possível administrá-lo por rádio. A configuração fina de um repetidor é feita por USB em config.meshcore.io.
4. Coloque o repetidor **alto**. Configure os mesmos parâmetros de rádio do restante da comunidade.

Confira comandos e nomes na documentação da sua versão (docs.meshcore.io).

## Resumo

- MeshCore é um sistema de mensagens de **roteamento híbrido**: a 1ª mensagem inunda (só via repetidores), e as seguintes usam o **caminho embutido no pacote**.
- **Clientes não repetem**; só **repetidores dedicados** o fazem. O `Room Server` guarda mensagens para quem estava offline.
- Sobrecarga compacta (por exemplo 9 bytes numa mensagem direta por 3 repetidores, contra 16 bytes fixos do Meshtastic), ao custo de **hashes curtos** que podem colidir.
- Limites: depende de repetidores bem colocados, mobilidade quebra caminhos, canais de grupo inundam, e o limite físico da Aula 3 continua valendo.
- O projeto é jovem (2025) e enfrenta uma **disputa de marca** desde abril de 2026; o firmware oficial está no repositório `meshcore-dev/MeshCore`.

## Para aprofundar

- [ ] [MeshCore, repositório oficial](https://github.com/meshcore-dev/MeshCore) (GitHub): README com recursos, tipos de firmware e clientes.
- [ ] [MeshCore, FAQ oficial](https://docs.meshcore.io/faq/) (docs.meshcore.io): a fonte mais útil sobre roteamento, adverts, repetidores e room servers.
- [ ] [MeshCore Presentation by Liam Cottle](https://www.youtube.com/watch?v=OwmkVkZQTf4) (Liam Cottle): apresentação técnica do desenvolvedor do app, citada no README oficial.
- [ ] [There's a newcomer to the Mesh world](https://www.youtube.com/watch?v=iaFltojJrAc) (The Comms Channel): início da lista de reprodução de introdução ao MeshCore que o README oficial recomenda. Não assisti.
- [ ] [Meshtastic vs MeshCore: The Real Differences Explained](https://www.youtube.com/watch?v=BezGb65kb_c) (Hacker University): comparação em vídeo entre a inundação gerenciada e o roteamento por caminho aprendido. Só confirmei título e canal.
- [ ] [A trademark dispute over MeshCore](https://lwn.net/Articles/1070218/) (LWN.net): reportagem sobre a disputa de marca de 2026.

[Próxima aula: Outras opções em panorama](./07%20-%20Outras%20Opcoes%20em%20Panorama.md)
