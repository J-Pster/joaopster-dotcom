[Voltar ao módulo](./README.md)

# Aula 1: Por que o Reticulum existe

*Pergunta que esta aula responde: por que criar uma pilha de rede nova, em vez de simplesmente rodar IP sobre um rádio LoRa, e quais princípios de projeto decorrem dessa decisão?*

> Verificado em setembro de 2026 no manual oficial (reticulum.network/manual), no repositório GitHub e no PyPI. Versões e datas estão na Aula 9.

## O problema: o IP assume um mundo que o rádio de longo alcance não tem

Você é desenvolvedor, então já usa o conjunto TCP/IP, DNS, TLS e HTTP todo dia. Vale listar o que ele **pressupõe**, porque cada pressuposto quebra quando o meio é um rádio LoRa de poucos quilobits por segundo (Módulos 3 e 8):

| Pressuposto do modelo IP | O que acontece num link LoRa lento |
|---|---|
| **Endereço atribuído por autoridade.** Seu IP vem de um provedor ou de um servidor DHCP e muda quando você muda de rede | Não há provedor, roteador de borda ou DHCP no meio do mato. Endereço fixo por localização não faz sentido para um nó que anda |
| **Nomes resolvidos por DNS**, uma hierarquia com registradores no topo | Sem internet, não há DNS. Quem controla o registro controla a existência do seu nome |
| **Infraestrutura confiável.** Você confia no ISP, nos roteadores e nas autoridades certificadoras (CAs) do TLS | No ar, qualquer um escuta. Você não pode supor que o meio é confiável |
| **Banda abundante.** Um MTU de 1500 bytes (Ethernet), handshakes TCP e TLS de vários pacotes, cabeçalhos de 40 bytes por segmento (20 de IP e 20 de TCP) | Cada byte custa tempo de ar. Um handshake TLS típico carrega uma cadeia de certificados de milhares de bytes (ordem de grandeza, não valor fixo) |
| **Latência baixa.** Timeouts e retransmissões do TCP foram afinados para RTT de milissegundos | Em LoRa, um pacote pode levar segundos só de tempo no ar (Módulo 8). Timeouts de TCP disparam à toa |
| **Origem visível.** Todo pacote IP carrega o endereço de origem | Quem escuta sabe quem fala com quem |

A conclusão do projeto não é "otimizar o IP". É que **os mecanismos de roteamento tradicionais são fundamentalmente incompatíveis** com o meio e as circunstâncias-alvo. O manual diz que eles "assumem confiança na camada física e precisam de muito mais banda do que o Reticulum pode supor" (seção Reticulum Transport de *Understanding Reticulum*).

## O que é o Reticulum

Segundo o manual oficial: o **Reticulum** é uma **pilha de rede baseada em criptografia** para construir redes locais e de longa distância com hardware comum, que continua funcionando "sob condições adversas, como largura de banda extremamente baixa e latência muito alta".

Pontos que definem o que ele é:

- É uma **pilha completa**: não precisa de IP nem de camadas acima dele. IP (TCP ou UDP) é só mais um meio possível para carregá-lo, e por isso é trivial "tunelar" Reticulum pela internet.
- Roda em **userland**, sem drivers nem módulos de kernel. A implementação de referência é em Python 3 e o manual diz que roda bem até em placas pequenas como o Raspberry Pi Zero.
- É **orientado a mensagens** (não a fluxos como o TCP). Isso combina com enlaces intermitentes.
- **Não é uma rede única que você "entra"**. O manual insiste: é um kit para construir redes. Você decide meios, topologia, fronteiras de confiança. Existe uma rede global voluntária (o "backbone" e o testnet, Aula 5), mas usá-la é escolha sua.
- **Não é LoRaWAN.** LoRaWAN (Módulo 8) é um protocolo centralizado, com gateways e servidor de rede. O Reticulum usa LoRa apenas como modulação física (via RNode, Aula 6), sem LoRaWAN.

### Implementação de referência e protocolo

O manual separa duas coisas: o **protocolo** (dedicado ao domínio público em 2016) e a **implementação de referência** em Python (licença própria, a *Reticulum License*, discutida na Aula 9). O protocolo é definido "de forma completa e autoritativa" por essa implementação e pelo manual. Existem reimplementações independentes (em Rust e C++, Aula 9), o que é possível justamente porque o protocolo é público. O manual também afirma que "todos os recursos centrais do protocolo estão implementados" e que API e formato de fio "podem ser considerados completos e estáveis, mas poderiam mudar se absolutamente necessário".

## Os objetivos de projeto (do manual, seção Goals)

Cada objetivo explica uma decisão técnica que você vai ver nas próximas aulas:

1. **Agnosticismo de meio físico.** Qualquer coisa que carregue um fluxo digital: rádio de dados, modem, LoRa, serial, Ethernet, Wi-Fi, TNC de packet radio. O custo de um nó deveria ficar abaixo de US$ 100 (meta declarada no manual).
2. **Banda mínima.** Funcionar de forma confiável a partir de **5 bits por segundo** (o código-fonte tem uma constante `MINIMUM_BITRATE = 5`).
3. **Criptografia por padrão** em toda comunicação.
4. **Anonimato do iniciador.** Deve ser possível se comunicar sem revelar informação identificadora sobre você. Na prática: pacotes **não têm endereço de origem** (Aula 2).
5. **Uso sem licença.** Deve funcionar sobre meios que não exigem licença de uso, como as faixas ISM, com LoRa ou Wi-Fi. Isso liga diretamente ao Módulo 5, Aula 6 (radiação restrita) e será retomado na Aula 8.
6. **Software de suporte.** Junto com a pilha, ferramentas básicas de comunicação como exemplo e aprendizado (Aulas 6 e 7).
7. **Facilidade de uso** e **baixo custo.** Python para ser legível, e hardware que o usuário já possa ter.
8. **Código aberto** (*open source*, palavras do manual): a pilha deve rodar apenas com software aberto. A licença tem cláusulas atípicas, ver Aula 9.

### Requisitos mínimos do meio

Para o Reticulum operar, o meio precisa oferecer: **semiduplex** (pelo menos um sentido por vez), **vazão média de 5 bits por segundo ou mais** e **MTU físico de 500 bytes** (a Aula 3 explica o que isso implica em LoRa, cujo quadro máximo é de 255 bytes).

## A filosofia: o "Zen do Reticulum"

O projeto tem um texto de princípios, o *Zen of Reticulum*, escrito em tom de manifesto. Resumo fiel das ideias (não são fatos técnicos, são posições de projeto):

- **Não existe "nuvem".** Existe "o computador de outra pessoa". O modelo cliente-servidor é apontado como o principal obstáculo mental para entender o Reticulum. Você "está entre" os pares, não "se conecta a" um servidor.
- **Não centralizável (*uncentralizability*).** O texto distingue isso de "descentralizado". O projeto assume que todo par é potencialmente hostil e todo enlace pode estar comprometido, e busca uma rede sem nós privilegiados. Transport nodes só sabem do que está ao redor e roteiam por prova criptográfica, não por privilégio administrativo.
- **"Morte ao endereço".** Endereço IP é lugar; endereço Reticulum é o hash de uma identidade, portátil entre Wi-Fi, LoRa e packet radio (Aula 2).
- **Física da confiança.** Criptografia não é recurso, é "gravidade": sem ela o roteamento quebra, porque os nós intermediários usam a criptografia dos pacotes para provar que rotas são válidas. Confiança vem de prova matemática, não de instituição.
- **Mérito da escassez.** "5 bits por segundo é uma velocidade válida." Restrição obriga a transmitir o mínimo de informação, e a pensar em tempo assíncrono (armazenar e encaminhar) como modo primário, não como exceção.
- **Soberania por infraestrutura.** Ser seu próprio operador de rede, sobre hardware barato e espectro de uso livre.
- **Ética da ferramenta.** A licença do código de referência proíbe uso em sistemas que possam causar dano a seres humanos e uso no treino de modelos de IA (texto da licença, Aula 9).

Leia isso como o **ponto de vista do autor**, não como propriedades verificadas. Algumas afirmações do manifesto são objetivos ("impossível de bloquear") e têm limites reais: um operador pode bloquear identidades na *própria* rede (mecanismo de blackhole, Aula 6), e quem transmite em rádio pode ser localizado (Aula 8).

## Duas mudanças de mentalidade para quem vem do IP

1. **Configure interfaces, não endereços.** No Reticulum você só diz por quais meios falar. Não há sub-redes, tabelas de rotas, DHCP, DNS. O manual: "Não há necessidade de configurar espaços de endereço, sub-redes, tabelas de roteamento." A pilha descobre a topologia sozinha.
2. **Mensagem, não conexão.** Você envia dados a um **destino** (Aula 2); o pacote é cifrado para ele e a rede acha o caminho. Conexões (os *links*, Aula 4) existem, mas são opcionais e baratas (297 bytes no total para estabelecer um).

## Quando o Reticulum faz sentido (e quando não)

- **Faz sentido:** comunicação entre pessoas e máquinas sem depender de operadora, onde meios de baixa banda e alta latência precisam coexistir com meios rápidos; redes privadas e comunitárias; aplicações que aceitam entrega assíncrona.
- **Não é a ferramenta:** vídeo, navegação web comum ou qualquer coisa que exija muita banda e baixa latência em LoRa. Nada nesta pilha muda o teto físico de Shannon (Módulo 3, Aula 7).

## Resumo

- O IP pressupõe endereços atribuídos, DNS, infraestrutura confiável, banda abundante, baixa latência e origem visível. Todos esses pressupostos falham em rádio de longo alcance com banda mínima.
- O Reticulum é uma pilha completa, criptográfica e orientada a mensagens, agnóstica de meio, que funciona a partir de 5 bits por segundo, semiduplex e MTU de 500 bytes.
- Ele não é LoRaWAN, não é uma rede única e não é um serviço: é um kit para construir redes sobre qualquer combinação de meios.
- Objetivos centrais: criptografia por padrão, anonimato do iniciador (sem endereço de origem), uso sobre faixas sem licença e custo baixo.
- Você configura interfaces (por onde falar) e não endereços; a topologia é descoberta automaticamente.
- O "Zen" é a filosofia do autor: trate-o como posição de projeto, não como garantia técnica.

## Para aprofundar

- [ ] [What is Reticulum?](https://reticulum.network/manual/whatis.html) (manual oficial): resumo do que a pilha oferece, meios suportados e requisitos mínimos.
- [ ] [Understanding Reticulum](https://reticulum.network/manual/understanding.html) (manual oficial): motivação, objetivos de projeto e o funcionamento básico, a leitura central deste módulo.
- [ ] [Zen of Reticulum](https://reticulum.network/manual/zen.html) (manual oficial): o texto de filosofia do projeto, opinativo e direto.
- [ ] [38C3 - Reticulum: Unstoppable Networks for The People](https://www.youtube.com/watch?v=iHLLDnRRYKI) (media.ccc.de): a palestra do próprio criador no Chaos Communication Congress; não assisti, o título e o canal foram confirmados por oEmbed.
- [ ] [Reticulum Network: How it Works and Why it's SO GOOD](https://www.youtube.com/watch?v=q8ltLt5SK6A) (Linux in a Bit): visão geral em cerca de 10 minutos (o capítulo de Meshtastic no vídeo ajuda na Aula 9); conteúdo não conferido por mim além da descrição da busca.
- [ ] [Ghost Network: Reticulum Explained](https://www.youtube.com/watch?v=J0gTTdRBkzU) (GhostStrats): explicação introdutória alternativa; não assisti.

[Próxima aula: Destinos, identidades e criptografia](./02%20-%20Destinos%20Identidades%20e%20Criptografia.md)
