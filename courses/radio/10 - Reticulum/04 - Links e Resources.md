[Voltar ao módulo](./README.md)

# Aula 4: Links e Resources

*Pergunta que esta aula responde: como se transfere dados de forma confiável, cifrada e com sigilo futuro numa rede que só oferece pacotes pequenos e não confiáveis, gastando o mínimo de banda?*

> Verificado em setembro de 2026 no manual oficial (*Understanding Reticulum*, *What is Reticulum?*) e no código do RNS 1.5.4 (`RNS/Link.py`, `RNS/Resource.py`). Constantes do código podem mudar: confira na sua versão.

## Por que pacotes avulsos não bastam

Um pacote Single (Aula 3) é cifrado com uma chave efêmera do remetente e a chave do destino. Isso é ótimo para mensagens curtas, mas tem três limites:

1. **Tamanho:** cabe cerca de 383 bytes úteis cifrados por pacote.
2. **Custo repetido:** cada pacote refaz um ECDH e carrega 32 bytes de chave efêmera mais 48 de sobrecarga do token.
3. **Sem sessão:** não há sequência, retransmissão nem controle de fluxo. Cada pacote é independente.

Para trocas maiores ou conversas bidirecionais, o Reticulum oferece o **Link** (enlace). O manual recomenda usar link quando a troca chega a "dezenas de pacotes", ou sempre que se queira os recursos mais avançados da API, mesmo entre nós diretamente alcançáveis.

## O que é um Link

O manual insiste: um link **não é uma conexão física entre dois nós**. É um **canal abstrato** que pode durar o tempo que se queira e cruzar quantos saltos forem necessários. Ele dá:

- **Cifra mais eficiente** que a de pacote avulso (uma única troca de chaves para toda a sessão);
- **Sigilo futuro** por padrão;
- **Anonimato do iniciador** (o destino não sabe quem abriu o link, a menos que o iniciador escolha se identificar);
- **Confirmação de entrega** verificável;
- Uma API mais capaz: pedidos e respostas (*request/response*), transferências grandes (*Resources*), fluxos com sequência (*Channel* e *Buffer*).

## Como um link é estabelecido (3 pacotes, 297 bytes)

Sequência do manual (seção *Link Establishment in Detail*):

1. **Link request (83 bytes).** O iniciador gera um par X25519 efêmero (mais um par de assinatura efêmero) e envia a chave pública, endereçando o pacote ao hash do destino. Cada transport node que o encaminha grava numa **tabela de links** o *link id* (hash do pacote inteiro do pedido) e por qual interface veio, marcando-o **pendente**. Se ninguém provar o link em tempo hábil, o registro cai.
2. **Link proof (115 bytes).** Se o destino aceita, gera **seu próprio** par X25519 efêmero, faz o ECDH com a chave do iniciador e deriva a chave simétrica do canal. Envia de volta um pacote endereçado ao **link id**, com a chave pública efêmera dele e uma **assinatura Ed25519 do link id e dessa chave**, feita com a chave de assinatura **de longo prazo do destino**. É isso que prova que quem respondeu é mesmo o dono do destino, e não um impostor.
3. **RTT (99 bytes).** O iniciador, ao verificar a prova, faz o ECDH do seu lado, deriva a mesma chave e envia um pacote de medição do tempo de ida e volta, que serve também para calibrar temporizadores.

Todos os transport nodes intermediários **também verificam a prova**, e só então marcam o link como ativo. A partir daí o link é referenciado só pelo **link id** (16 bytes): nenhum nó precisa repetir o endereço do destino.

**Custo total: 83 + 115 + 99 = 297 bytes.** Em 1,30 kbps (exemplo de taxa do manual) são `297 x 8 / 1300 = 1,8 s` de tempo no ar somados, sem contar preâmbulo LoRa, esperas de canal ou retransmissões. Compare com um handshake TCP mais TLS sobre IP (Aula 1): a mesma função (autenticar o outro lado e negociar chaves) em uma fração dos bytes.

### Sigilo futuro, na prática

As chaves privadas efêmeras de cada lado só existem na memória durante a sessão. Ao fechar o link, elas são descartadas. Quem gravou o tráfego e depois roubar a chave de longo prazo do destino **não consegue** decifrar a sessão, porque a chave da sessão veio de valores efêmeros. Esse é o motivo pelo qual o manual diz que links têm sigilo futuro "por padrão". Modo de cifra atual: AES-256-CBC (constante `MODE_DEFAULT = MODE_AES256_CBC` em `Link.py`).

### Anonimato do iniciador e identificação opcional

O link request não leva identidade do iniciador. Se a aplicação precisa saber quem chama (como o `rncp --listen` só aceitar certas identidades), o iniciador chama `link.identify(identidade)` **dentro** do canal cifrado. Essa informação só chega ao destino verificado, e nenhum intermediário a vê.

### Manutenção do link: keepalive e expiração

Um link aberto envia **keepalives** de 20 bytes. O intervalo é calculado pelo RTT medido: `keepalive = clamp(RTT x 360 / 1,75, 5 s, 360 s)` (código de `__update_keepalive`, com `KEEPALIVE_MAX = 360` e `KEEPALIVE_MIN = 5`). Para RTT de 1,75 s ou mais o intervalo é de **360 s**. O custo, `20 bytes x 8 / 360 s = 0,44 bps`, bate com o **0,44 bit por segundo** do manual (a página *Understanding* escreve 0,45).

Exemplo do manual: num canal de packet radio de 1200 bps, 100 links abertos consomem `100 x 0,44 = 44 bps`, cerca de 3,7% da capacidade, deixando 96% para dados.

Se as respostas param de vir por certo tempo, o link fica *stale* e é fechado (`STALE_TIME = 2 x keepalive`, com folga adicional no código).

## Confirmação de entrega (proofs)

O destino pode **provar** que recebeu um pacote: calcula o SHA-256 do pacote recebido e o **assina com Ed25519**; os transport nodes encaminham a prova de volta à origem, que verifica a assinatura contra a chave pública conhecida. O manual chama isso de **confirmação de entrega inforjável**: ninguém no meio consegue produzir um "recebi" falso, porque não tem a chave privada do destino. Em links a prova é automática.

Diferença de IP: um ACK do TCP apenas diz "o kernel do outro lado recebeu"; um proof do Reticulum diz "**o dono da chave privada** do destino recebeu esse pacote exato".

## Resources: transferir arquivos de qualquer tamanho

Um **Resource** transfere um volume arbitrário de dados sobre um link, cuidando de tudo:

- **divisão em partes** que cabem em pacotes (cada parte usa o MDU do pacote, cerca de 464 bytes);
- **sequenciamento**, **verificação de integridade** e **reconstrução** no destino;
- **compressão automática** (o código usa bz2, para dados de até 64 MiB);
- **retransmissão** de partes perdidas (até 16 tentativas por transferência, `MAX_RETRIES`);
- **janela deslizante adaptativa**: começa com janela 4 e ajusta conforme a velocidade do enlace (mínimo 2, máximo de 10 em links lentos e 75 em links rápidos, constantes do código);
- **segmentação** de dados muito grandes: cada segmento vai até cerca de 1 MiB (`MAX_EFFICIENT_SIZE = 1 MiB - 1`), com transferência de múltiplos segmentos para arquivos maiores;
- **progresso** exposto pela API.

O manual: um Resource "lida com poucos bytes ou arquivos de muitos gigabytes", e são necessárias poucas linhas de código.

### Exemplo: quanto leva um arquivo de 100 kB em LoRa?

A 1,30 kbps: `100.000 bytes x 8 = 800.000 bits`; `800.000 / 1300 = 615 s`, ou cerca de **10 minutos** *no mínimo*, ignorando cabeçalhos por parte (cerca de 19 a 35 bytes em cada pacote de até 500), confirmações, esperas de canal e a compressão (que pode ajudar em texto e não ajuda em imagens JPEG). Na prática, mais. É por isso que o Reticulum funciona "bem" em LoRa para texto e arquivos pequenos e não para mídia pesada: a física do Módulo 3 continua valendo. Já em Wi-Fi ou TCP a mesma API transfere na velocidade do meio (no meu teste local, na Aula 9, o `rncp` reportou dezenas de Mbps entre duas instâncias na mesma máquina).

## Channel e Buffer

Para **fluxos** com ordem garantida (como um pipe ou socket), o Reticulum oferece **Channel** (mensagens tipadas em sequência) e **Buffer** (uma interface de fluxo de bytes sobre Channel). Servem para protocolos interativos sobre o link; o manual menciona que a versão 1.5.0 passou a usar o **MDU completo do link** em ambos. Detalhes de uso ficam na referência da API; não são necessários nesta trilha.

## Request/Response

O link também suporta **pedidos e respostas** leves (uma chamada com caminho e dados, e um retorno). É a base de utilitários como o `rncp --fetch` e de servidores de páginas do NomadNet (Aula 7).

## Onde isso aparece nas ferramentas e apps

| Ferramenta ou app | O que usa |
|---|---|
| `rncp` | Link + Resource (transferência de arquivos com autenticação por identidade) |
| `rnx`, `rnsh` | Link com identificação, execução remota e shell |
| **LXMF** (Aula 7) | Entrega **direta** por link (padrão), **oportunista** em um pacote só ou **propagada** por nós de propagação |
| NomadNet | Link + Request/Response para páginas e Resource para arquivos |

## Resumo

- Pacotes avulsos servem para mensagens curtas; para dezenas de pacotes ou sessões, use um **Link**, um canal abstrato que pode cruzar vários saltos.
- Estabelecer um link custa **3 pacotes e 297 bytes** (83 + 115 + 99): ECDH efêmero dos dois lados, prova assinada pelo destino, verificada também pelos transport nodes.
- O link tem **sigilo futuro** por padrão, **iniciador anônimo** (identificação opcional dentro do canal) e mantém-se com keepalives de 20 bytes: cerca de 0,44 bps.
- Um **proof** é uma confirmação de entrega assinada pelo destino, inforjável.
- **Resources** entregam qualquer volume de dados sobre um link: partes, sequência, compressão, retransmissão, janela adaptativa e verificação de integridade.
- A física manda: 100 kB a 1,3 kbps levam no mínimo cerca de 10 minutos.

## Para aprofundar

- [ ] [Understanding Reticulum: Reaching the Destination, Link Establishment in Detail, Resources](https://reticulum.network/manual/understanding.html) (manual oficial): o procedimento passo a passo e os números de bytes citados.
- [ ] [What is Reticulum? (What does Reticulum Offer?)](https://reticulum.network/manual/whatis.html) (manual oficial): resumo das capacidades de link e Resource (297 bytes, 0,44 bps, Channel e Buffer).
- [ ] [Reticulum: `RNS/Link.py` e `RNS/Resource.py`](https://github.com/markqvist/Reticulum/tree/master/RNS) (GitHub, espelho): onde conferir as constantes e o fluxo exatos.
- [ ] [Reticulum Examples (Link, Resource, Filetransfer)](https://github.com/markqvist/Reticulum/tree/master/Examples) (GitHub, espelho): programas de exemplo curtos e comentados, ótimos para quem programa.

[Próxima aula: Interfaces e como ligar meios diferentes](./05%20-%20Interfaces%20e%20Ligacao%20de%20Meios.md)
