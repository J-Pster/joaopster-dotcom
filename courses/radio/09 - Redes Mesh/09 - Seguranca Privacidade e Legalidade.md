[Voltar ao módulo](./README.md)

# Aula 9: Segurança, privacidade e legalidade

*Pergunta que esta aula responde: o que a criptografia do Meshtastic e do MeshCore protege e o que não protege, quem consegue ler o quê, e dentro de que regras legais no Brasil uma rede mesh LoRa pode operar?*

> **Aviso.** Transmitir em radiofrequência no Brasil é regulado pela Anatel. Esta aula explica o raciocínio e aponta o que consegui confirmar em fontes; **não substitui a leitura da regulamentação vigente nem consulta à Anatel**. Verificado em setembro de 2026. Onde só encontrei fonte secundária (comunidades, PRs de firmware), aviso no texto. Nunca use o conhecimento daqui para burlar regras: os limites existem para que o espectro compartilhado funcione para todos.

## Parte 1: segurança e privacidade

### Comece pelo modelo de ameaça

"Seguro" só significa algo em relação a **quem** e **o quê**. Para uma rede de rádio, as perguntas são:

| O que proteger | Contra quem | Pergunta |
|---|---|---|
| **Conteúdo** das mensagens | Quem escuta o rádio ou tem acesso ao canal | Alguém que não é do grupo consegue ler? |
| **Autoria** (quem realmente enviou) | Quem entra na rede e se passa por outro | Dá para forjar uma mensagem "de" alguém? |
| **Integridade** | Quem altera pacotes | Dá para modificar sem ser notado? |
| **Metadados** (quem fala com quem, quando, de onde) | Observadores passivos | O que vaza mesmo com o conteúdo cifrado? |
| **Localização** | Qualquer um | Sua posição é publicada? |
| **Disponibilidade** | Interferência, jamming, sobrecarga | Alguém consegue derrubar a rede? |

Uma regra sobre rádio: **qualquer pessoa com um receptor na faixa (um SDR do Módulo 6 basta) recebe tudo o que você transmite**. O ar é público. Toda a segurança está em **criptografia** e em **o que você escolhe transmitir**.

### Meshtastic: o que é e o que não é criptografado

Segundo a página oficial de criptografia e a de canais:

**O que é protegido**

- O **payload** de cada pacote em um canal é cifrado com AES, com **uma chave por canal**. Só quem tem a chave lê o conteúdo.
- **Mensagens diretas** (DM) entre dispositivos com firmware **2.5.0 ou superior**, depois da troca de chaves, usam **criptografia de chave pública**: cifradas com a chave pública do destinatário, assinadas com a chave privada do remetente. Só o destinatário lê, e a assinatura autentica a origem.
- **Mensagens de administração** entre 2.5.0 ou superior têm proteção adicional e ID de sessão.

**O que NÃO é protegido, ou é fraco**

- **O cabeçalho é aberto**: destino, origem, ID do pacote, contagem de saltos, hash do canal. Isso é intencional (permite retransmitir sem decifrar), mas expõe **quem fala com quem e quando**.
- **O canal padrão é público.** A chave `AQ==` está no código-fonte. Tudo o que você manda nele, inclusive sua **posição**, que por padrão vai no canal primário, é lido por qualquer nó com a configuração padrão, ou por qualquer um que use essa chave. A documentação diz que `default` e `simple` "são ótimos para testes e canais públicos".
- **Sem sigilo futuro (forward secrecy).** Se alguém obtiver a chave do canal depois, **pode decifrar tudo o que gravou no passado** ("colher agora, decifrar depois"). A documentação lista como formas de a chave vazar: compartilhá-la com a pessoa errada, um nó roubado, ou uma falha desconhecida. Por isso recomenda **trocar as chaves de canal de tempos em tempos** e notar que tudo enviado no canal pode ser armazenado e decifrado por quem obtiver a chave.
- **Sem verificação de integridade em mensagens de canal** (a documentação referencia uma discussão pública do projeto, "issue #4030"). A própria página adverte que, com um ataque de texto conhecido, **qualquer pessoa poderia enviar mensagens em um canal mesmo que a chave seja privada e segura**, e recomenda que desenvolvedores de apps adicionem um MAC criptográfico próprio. Trate mensagens de canal como não confiáveis para decisões críticas.
- **Sem autenticação nos canais.** Os IDs de nó derivam do endereço MAC da placa, que **qualquer um com a chave do canal** pode falsificar. A documentação diz: "é trivial se passar por qualquer outro se você tem a chave do canal", e recomenda tratar o campo remetente como indicativo.
- **A troca de chaves das DM não é resistente a computadores quânticos**, diz a página; o AES-256 do canal é considerado resistente, a chave pública não. É uma limitação declarada, não um segredo.
- **Só os nós com firmware novo protegem as DM.** Mensagens para nós com versão 2.4.3 ou anterior **não** são protegidas.

A própria documentação pergunta se o Meshtastic é tão seguro quanto WPA3, TLS 1.3 ou Signal e responde: **"Não."**. É uma frase que vale internalizar: AES é uma peça; segurança moderna precisa de mais peças que o Meshtastic não tem.

**Recomendações oficiais para canais privados**

- Não configure a chave privada em **nós sem vigilância** (roteadores no alto de um poste): quem pegar o aparelho extrai a chave. Nós retransmitem tráfego mesmo sem poder decifrá-lo, então esse nó não precisa da chave para ser útil.
- Troque as chaves de tempos em tempos.
- Considere que **o sender é indicativo**.

**Vazamento por convite.** O QR code ou a URL do canal contém a **chave**. Quem o fotografar ou receber tem acesso. Trate como uma senha.

### Posição e localização

- Por padrão a posição vai no canal primário. A documentação avisa que, se o canal primário for o padrão, "sua localização será compartilhada com todos os nós ao alcance que estejam no canal padrão".
- Há **precisão de posição por canal** (0 a 32 bits): 0 não envia posição, e valores menores borram a localização (por exemplo, 13 bits corresponde a granularidade de cerca de 2,9 km, 16 bits a cerca de 364 m, segundo a tabela oficial).
- Em firmware 2.7.1 ou superior, é possível compartilhar a posição em um **canal secundário privado** e deixar a posição desligada no primário.
- **MQTT**: conectar ao servidor público pode publicar a posição de todos os nós da sua mesh (aviso da página de dicas). O servidor público filtra posições precisas (só 10 a 16 bits), mas um **broker privado** vê tudo o que passa. A opção `OK to MQTT` é, segundo a documentação, "um pedido educado, não uma solução criptográfica".

### MeshCore: o que confirmei

- **Identidade por chave pública**, com adverts **assinados** (Ed25519): reduz a falsificação de identidade em relação ao Meshtastic de canal.
- Mensagens diretas têm **MAC de 2 bytes** na versão 1 do formato (a especificação prevê MAC de 4 bytes em versões futuras). Um MAC curto é um compromisso por ar economizado. **Não confirmei o algoritmo de cifra** nas páginas que li: confira em docs.meshcore.io antes de fazer afirmações.
- O **canal público** tem chave **publicada na FAQ**: não é privado.
- **Repetidores** veem o caminho (hashes) e o tipo de pacote, e o payload permanece cifrado para eles.
- Metadados de posição em adverts são opcionais, controlados pelo usuário.

### Metadados e observação

Mesmo com criptografia forte, um observador com SDR ou um nó qualquer na área vê:

- **Que existe transmissão**, quando, quanto tempo no ar (duração revela tamanho aproximado), em que frequência e preset.
- **Quem transmite**: no Meshtastic, IDs de origem e destino no cabeçalho; no MeshCore, hashes de 1 a 3 bytes.
- **De onde**: a **direção de chegada** do sinal pode ser estimada com antenas direcionais (radiogoniometria). Não é preciso decodificar nada para localizar um transmissor persistente. Isto vale para qualquer rádio.
- Padrões de tráfego: um nó que transmite a cada 15 minutos em horário fixo é um nó fixo com GPS.

Consequência: **cifrar não anonimiza**. Se anonimato de localização importa, o problema é físico, não de software.

### Quem pode ler o quê (resumo prático)

| Situação | Quem lê o conteúdo |
|---|---|
| Canal padrão `LongFast`/`AQ==` (Meshtastic) | **Qualquer pessoa** com um rádio Meshtastic na região |
| Canal com chave aleatória | Quem tem a chave: quem recebeu o QR, quem roubou um nó, quem obteve a chave por qualquer outro meio |
| DM no Meshtastic 2.5.0 ou superior, entre nós com chaves trocadas | Só o destinatário |
| Canal público do MeshCore | Qualquer pessoa (a chave está publicada) |
| Pacote passando por gateway MQTT | O dono do broker (ele vê pacotes, decifrados se tiver a chave) |
| Celular com o app | Quem tem acesso ao aparelho e ao histórico |

### Higiene de segurança em uma linha cada

- Use **canal com chave aleatória** (`random`); nunca `default` ou `simple` para conteúdo sensível.
- Trate o QR do canal como senha; troque a chave se ele vazou ou se um nó foi perdido.
- Não guarde a chave privada em nó sem vigilância.
- Mantenha o firmware atualizado (o item DM protegidas exige 2.5.0 ou superior).
- Ajuste ou desligue a **posição**; nada de MQTT público com rede privada.
- **Não prometa** sigilo que não existe: para conversa realmente sensível, não use LoRa mesh como único meio.
- Disponibilidade: uma rede de um só canal é derrubada por qualquer transmissor forte na frequência. Não conte com ela para emergência crítica sem planos alternativos (a crítica de comunidades sobre a mesh pública em crise está na Aula 5).

## Parte 2: legalidade no Brasil

Esta seção continua o quadro do Módulo 5 ([Rede privada legal: PX e ISM](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md)); leia-a antes. Resumo do que ela estabeleceu, verificado por lá em setembro de 2026:

- Em **radiação restrita**, o usuário **não precisa de licença**, mas o **produto precisa de certificação (homologação) da Anatel** (Resolução 680/2017; requisitos técnicos no Ato 14448/2017 e atualizações). LoRa nas faixas de 902 a 907,5 MHz e 915 a 928 MHz se enquadra.
- Em **radioamador**, as mesmas faixas (902 a 907,5 e 915 a 928 MHz) também são amadoras (33 cm), mas com regras **incompatíveis**: identificação obrigatória, conteúdo **aberto, sem criptografia**, sem uso comercial. Ver [Radioamador é público e aberto](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md).
- Não misture: o mesmo nó não pode ser "privado cifrado" e "amador" ao mesmo tempo.

### Que região configurar no Meshtastic

A documentação de países do Meshtastic (verificada em setembro de 2026) lista para o Brasil duas opções:

| Região | Faixa (MHz) | Potência (firmware) | Duty cycle (firmware) |
|---|---|---|---|
| `ANZ` | 915,0 a 928,0 | 30 dBm | 100% |
| `BR_902` | 902,0 a 907,5 | 30 dBm | 100% |

Fatos e contexto:

- A região `BR_902` foi adicionada em julho de 2025 (pull request no repositório do firmware, que cita a Resolução 772/2025 e o Ato 14448 da Anatel e descreve "902 a 907,5 MHz, limite de 1 W, sem restrição de duty cycle"). O pull request é fonte secundária, mas a leitura do texto do Ato 14448 (atualizado em 14/10/2025) na [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md) confirma o essencial: o item 10 traz **1 W de potência de pico na saída do transmissor** e **não traz limite de duty cycle** (o "2 s por hora" é do item 6.2, só para sinais de controle). O que continua **não confirmado** é como a Anatel enquadra formalmente um canal fixo de LoRa (ver o último item desta lista).
- As comunidades brasileiras que consultei (Meshtastic Brasil, SC Mesh, Mesh Sorocaba) usam a faixa de **915 a 928 MHz** (`ANZ`, no Meshtastic; predefinição "Australia: SA, WA, Brazil" no MeshCore) e dizem que ela é liberada como radiação restrita até 1 W. O 1 W é o teto de pico do transmissor no item 10 do Ato (não é EIRP). Os guias de comunidade seguem sendo fonte secundária para o resto.
- **Não use a região `US` no Brasil.** Pelo que consta, a região `US` distribui canais por 902 a 928 MHz, **incluindo o trecho de 907,5 a 915 MHz**, que **não** aparece entre as faixas de radiação restrita para LoRa citadas acima (902 a 907,5 e 915 a 928 MHz). É uma inferência minha a partir dos números dessas fontes. A região certa evita transmitir fora da faixa permitida.
- **Canal fixo e enquadramento.** Meshtastic e MeshCore operam num canal fixo (uma frequência e uma largura, como 125 ou 250 kHz e até 62,5 kHz), sem salto em frequência e sem 500 kHz de largura a 6 dB. Segundo a leitura do texto do Ato feita na [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md), isso pode não se enquadrar claramente em nenhum dos dois caminhos do item 10 (depois da revogação do item 10.3.4.4 em 1º/10/2025). É leitura do texto, **não** posição da Anatel, e não está confirmada.
- **A mesma comunidade importa**: em rede compartilhada, siga o consenso local para não criar uma ilha e para reduzir interferência.

### Potência e antena

- O firmware trata 30 dBm como o limite da região. O valor `0` em "Transmit Power" significa "potência máxima legal contínua que não queime o rádio" (documentação). A recomendação oficial é deixar em zero na maioria dos casos.
- Os módulos comuns de placas de mesh (SX1262) entregam algo em torno de 22 dBm, segundo a documentação de presets. Já módulos com amplificador externo (a FAQ do MeshCore cita EByte E22-900M30S e M33S, de 30 e 33 dBm) **podem ultrapassar** o limite.
- Lembre do Módulo 5: em radiação restrita, o produto foi **certificado como conjunto (transmissor mais antena)**. Trocar por uma antena de ganho maior pode tirar você da conformidade, e o que vale é o certificado. No texto do Ato 14448, item 10 (lido na [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)), o teto de 1 W (30 dBm) é de **potência de pico na saída do transmissor**, e não de EIRP. O que existe para a antena é o item 10.5: com ganho direcional **acima de 6 dBi**, reduz-se a potência de pico do transmissor pelo mesmo número de dB do excesso. Exemplo: antena de 9 dBi (excesso de 3 dB) com módulo de 30 dBm exige baixar para 27 dBm; com antena de até 6 dBi não há redução pelo texto. Não confirmei se a perda no cabo entra nessa conta. Os 30 dBm do firmware são só o teto da região: o certificado do produto (por exemplo, 0,157 W, cerca de 22 dBm, nos gateways RAK que li) é a fonte da sua potência.
- **Homologação**: placas e módulos comprados de lojas estrangeiras normalmente **não têm** certificação da Anatel. O Módulo 5 diz que transmitir com produto sem homologação é problema. Use produtos com homologação brasileira quando existirem, ou, se você for radioamador, o regime amador.

### Modo radioamador no Meshtastic

Se você é radioamador licenciado, o Meshtastic tem **modo licenciado** (`is_licensed`, "ham mode"): ele levanta os limites de potência do firmware, permite frequências fora da banda padrão ("override frequency") e, segundo a documentação, exige que você **desligue a criptografia**, coerente com a regra amadora. Nesse modo, a comunicação precisa seguir as regras de radioamador (identificação, conteúdo aberto). A documentação ressalta: "respeite as leis locais".

### Uso comercial e serviço a terceiros

Radiação restrita, na leitura do Módulo 5, permite uso comercial do equipamento. **Prover rede de comunicação como serviço a terceiros** (cobrar de vizinhos, por exemplo) pode se enquadrar em regras de serviços de telecomunicações que **não pesquisei**. Consulte a Anatel antes.

### Sobre criptografia e legalidade

O Módulo 5 registrou que não encontrou, nos textos lidos, vedação à criptografia em radiação restrita, mas mandou confirmar. Repito a cautela: **não confirmei** nem proibição nem autorização explícita. Regra segura: em radiação restrita, cifrar seu tráfego privado é o uso corrente entre as comunidades (Meshtastic e MeshCore são cifrados por padrão em canais privados); em faixa de **radioamador**, cifrar para ocultar significado **não é permitido**.

### Outros cuidados

- **Interferência**: 915 MHz é compartilhada com sensores, LoRaWAN, radioamadores (que operam em caráter secundário nessa faixa, segundo o guia do Mesh Sorocaba) e outros. Em radiação restrita, seu equipamento **não tem proteção contra interferência** e **não pode interferir em serviços primários** (Módulo 5). Se alguém prejudicado reclamar, o caminho é desligar e ajustar.
- **Dados pessoais de terceiros**: posições e nomes de outras pessoas podem ser dados pessoais. Não pesquisei a aplicação da LGPD ao caso; fique atento antes de publicar mapas de pessoas.
- **Segurança física e de RF**: potência baixa, mas antena perto de pessoas e de rede elétrica exige respeito. Módulo 1, aula sobre radiação e segurança de RF.

## Resumo

- O conteúdo do Meshtastic é cifrado por canal (AES) e as DM, desde a 2.5.0, com chave pública; mas o **cabeçalho é aberto**, o canal padrão tem **chave pública**, não há **sigilo futuro** e em canais **não há autenticação nem integridade fortes**: o remetente é só um indicativo.
- Cifrar não esconde **metadados** nem **localização física** do transmissor; posição é enviada por padrão no canal primário: ajuste a precisão, evite MQTT público.
- MeshCore: identidade e adverts assinados, canal público de chave publicada, MAC curto na versão 1; algoritmo de cifra não confirmado por mim.
- No Brasil, LoRa em 915 MHz é radiação restrita: sem licença de usuário, mas com **produto homologado** e **antena da certificação**. As regiões do Meshtastic são `ANZ` (915 a 928 MHz) e `BR_902` (902 a 907,5 MHz); `US` não deve ser usada.
- Rede privada cifrada e rede amadora aberta são regimes **diferentes**. Não misture. Potência (1 W de pico no transmissor), redução por ganho de antena acima de 6 dBi e ausência de limite de duty cycle no item 10 estão confirmados no texto do Ato (ver a [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)). Continuam **não confirmados**: o enquadramento de canal fixo e a criptografia. Confira o Ato vigente.

## Para aprofundar

- [ ] [Meshtastic Encryption](https://meshtastic.org/docs/overview/encryption/) (documentação oficial do Meshtastic): a análise honesta do projeto sobre o que a criptografia dele faz e não faz (sigilo futuro, integridade, autenticação).
- [ ] [Channel Configuration](https://meshtastic.org/docs/configuration/radio/channels/) (documentação oficial do Meshtastic): chaves, precisão de posição, uplink e downlink por canal.
- [ ] [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) (documentação oficial do Meshtastic): regiões por país, incluindo o Brasil.
- [ ] [Ato nº 14448/2017, requisitos técnicos de radiação restrita](https://informacoes.anatel.gov.br/legislacao/atos-de-certificacao-de-produtos/2017/1139-ato-14448) (Anatel): o texto oficial que rege as faixas e limites; o item 10 trata das faixas de 902 a 907,5 e 915 a 928 MHz (leitura resumida na [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)).
- [ ] [Add BR_902, Brazil 902MHz-907.5MHz](https://github.com/meshtastic/firmware/pull/7399) (repositório do firmware Meshtastic): a discussão que criou a região `BR_902`, com as referências regulatórias usadas.

Você chegou ao fim do módulo. Volte ao [README do módulo](./README.md) para o checklist de saída.
