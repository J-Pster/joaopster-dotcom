# Aula 4: Resiliência, censura e redes de emergência

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que uma comunicação precisa funcionar sem infraestrutura de terceiros, o que aconteceu de fato nas enchentes do Rio Grande do Sul em 2024, e o que isso ensina sobre o projeto de uma rede própria?*

## O que "resiliência" significa aqui

**Resiliência** é a capacidade de continuar entregando o serviço essencial quando parte do sistema falha. Em comunicação, o serviço essencial em emergência é pequeno: **avisar onde há gente precisando de ajuda, e receber instruções**. Não exige vídeo, exige mensagem curta que chegue. Esse recorte é o que torna LoRa e rádio candidatos sérios (Módulos 8 a 10): baixa taxa de bits, mas sem depender de torre, de fibra ou de provedor.

Uma rede comercial de celular ou de internet depende de uma **cadeia** de elementos, e a cadeia quebra no elo mais fraco:

1. **Energia** no local: a estação rádio-base (a torre) precisa de eletricidade. Quando a rede elétrica cai, a torre passa a funcionar com bateria ou gerador, por tempo limitado (não citei valores: variam por operadora e instalação).
2. **Ligação de retorno** (*backhaul*): a torre precisa de fibra ou enlace de micro-ondas até o núcleo da operadora. Um cabo cortado ou uma central alagada isola a torre mesmo com energia.
3. **Núcleo e serviços** da operadora e do provedor de aplicação.
4. **Seu aparelho**, com bateria.

Em uma enchente, as quatro coisas falham juntas por uma causa comum: a água. Esse é o ponto: os elementos parecem redundantes, mas compartilham o **modo de falha**. É o mesmo raciocínio da Aula 2 (a falha da região US-EAST-1 derruba serviços "independentes") aplicado a infraestrutura física.

## O caso: enchentes do Rio Grande do Sul, maio de 2024

Os fatos abaixo vêm de fontes que consultei em setembro de 2026: a reportagem do GZH de 4 de maio de 2024, o texto da LABRE de 8 de maio de 2024 e o balanço do Ministério das Comunicações de 7 de maio de 2024. Números de mortos e afetados variam com a data do boletim; uso os que cada fonte deu.

**A falha de comunicação.** Segundo o GZH, na sexta-feira, 3 de maio de 2024, a Defesa Civil estadual informou que clientes da TIM de **87 cidades** estavam sem telefonia e internet, da Claro em **51 municípios** e da Vivo em **19 localidades**. As três operadoras liberaram **roaming entre si**: onde só uma rede estava de pé, clientes de qualquer operadora podiam usá-la (o que exige ativar roaming e seleção automática de operadora no aparelho). O Ministério das Comunicações disponibilizou **34 antenas de emergência da Telebras** para equipes de resgate, centros de comando, hospitais de campanha e abrigos. A LABRE descreveu: cerca de 1,4 milhão de pessoas afetadas segundo relatórios da época, mais de 300 municípios atingidos, e "muitas cidades sem serviços telefônicos ou de internet", com a perda de comunicação "particularmente crítica" na coordenação do resgate.

**O que os radioamadores fizeram.** Na tarde de sábado, 4 de maio, um grupo coordenado por Alexandre Martini, de Porto Alegre, escutava a frequência **146,520 MHz** (VHF), a **Frequência Nacional de Chamada** dos radioamadores, usada como canal de emergência. Um morador no bairro Mathias Velho, em Canoas, com um rádio portátil (HT) ouviu o grupo perguntar se alguém precisava de ajuda, respondeu com a localização de **quatro crianças e dez adultos em um telhado**, e o grupo repassou à Defesa Civil. O GZH também registra que radioamadores de outros estados retransmitiam informações de rádios locais para quem só tinha rádio de pilha e que a Universidade Feevale (LaVuRS) começou a mapear radioamadores nos municípios afetados. Havia, segundo levantamento de 2022 citado pela reportagem, **40,8 mil radioamadores no Brasil, 3,1 mil no estado**.

**O ponto técnico que a LABRE registra.** No texto de 8 de maio, a entidade afirma que, **na maior parte do RS, os repetidores VHF e UHF de radioamador estavam fora de serviço por falta de energia**. Os operadores usaram então o canal 146,520 MHz diretamente entre rádios (sem repetidor, ou seja, alcance limitado pela linha de visada, Módulo 2, Aula 3). Repare que o mesmo problema da torre celular (energia) atingiu a infraestrutura de rádio amador que **depende de repetidora**; o que continuou funcionando foi o **enlace direto entre dois rádios com bateria**. É o argumento a favor de projetar o nível mais baixo da sua rede para funcionar **sem nenhuma infraestrutura fixa** (Módulo 9, Aula 1).

**A lição organizacional (opinião da LABRE, citada como tal).** A entidade escreve que, no RS, não havia colaboração estreita entre radioamadores e Defesa Civil, ao contrário de estados como Paraná, São Paulo, Mato Grosso, Rio de Janeiro e Espírito Santo, que têm **Redes Estaduais de Emergência de Radioamadores (REER)** ligadas à Defesa Civil. A **RENER** (Rede Nacional de Emergência de Radioamadores) foi criada pela Portaria Ministerial MI-302, de 24 de outubro de 2001. A LABRE afirma, com base na experiência recente, que "pouco vale uma estrutura nacional centralizada de emergência que não tem acesso às defesas civis estaduais ou municipais", e defende redes de emergência em nível **municipal e estadual**, criadas e geridas pela própria Defesa Civil. Também relata que a Defesa Civil não recebe radioamadores desconhecidos que se apresentam no local do desastre, e que a LABRE considera essa posição correta (é a Defesa Civil quem comanda a operação).

Duas coisas para tirar disso:

1. **Técnica**: a comunicação que funcionou foi curta, de baixa taxa, direta entre pessoas e com **bateria própria**.
2. **Institucional**: a descentralização técnica sozinha não basta. O sistema da Defesa Civil é, ele mesmo, descentralizado (Secretaria Nacional, coordenadorias estaduais e municipais, segundo a LABRE), e a rede de rádio só rende quando **se liga a quem coordena o socorro**. Para o seu projeto: uma rede privada de família ajuda a família; para ajudar a comunidade, é preciso combinar antes com quem coordena.

Repare também que o conteúdo do radioamador é **aberto** (Módulo 5, Aula 5): em emergência, é o que permite que qualquer um escute. Uma rede privada cifrada (Módulo 10) atende a família, mas não substitui o serviço amador em desastre.

## Outros casos citados no README antigo do módulo

O artigo *Mesh Networks Can Connect Us During Disasters* (GovTech, comentário) reúne os exemplos mais citados: **Haiti (2010)**, com o Serval Project operando sem nenhuma torre em pé; **furacão Sandy (2012)**, com a rede mesh de Red Hook, no Brooklyn; **tufão Haiyan (2013)**, com o Commotion Project. Li o resumo indicado no README antigo; não reverifiquei cada afirmação em fonte primária. O vídeo *Gotenna Mesh developer toolkit on Wings in Puerto Rico* (canal Franklin Bryan Frank Pancho) trata de uma implantação de rádios goTenna Mesh no furacão Maria (2017); título e canal confirmados, não assisti.

## Censura e vigilância: o outro lado da mesma moeda

Resiliência trata de **falha**. Censura e vigilância tratam de **poder** (SPOC, Aula 2). O mesmo desenho que evita um ponto único de falha evita um ponto único de controle.

**Formas de censura** que dependem de centro:

| Técnica | Onde age | Contra o quê funciona |
|---|---|---|
| Bloqueio de DNS (o resolvedor não responde ou mente) | Resolvedor do provedor | Quem usa o resolvedor padrão |
| Bloqueio por IP | Roteadores do provedor | Serviços com IP fixo e conhecido |
| Inspeção de pacotes (DPI) | Equipamento do provedor | Tráfego reconhecível por padrão, mesmo cifrado |
| Remoção na plataforma (conta, aplicativo, hospedagem) | O operador do serviço | Tudo o que mora em servidor de terceiros |
| Apagão de internet | Desligar o acesso | Tudo o que depende da internet |

**Vigilância**: quem opera um ponto por onde o tráfego passa pode registrar quem fala com quem, quando e com que frequência (**metadados**), mesmo sem ler o conteúdo. A Aula 5 trata da diferença entre proteger conteúdo e proteger metadados.

O que uma arquitetura distribuída oferece contra cada uma:

- **Sem DNS central e sem ISP**: nada a bloquear no caminho. Em rádio local, o "provedor" é o ar. Mas (Módulo 10, Aula 8) o rádio é **localizável** por quem tem equipamento de radiogoniometria, e um regulador pode fiscalizar o espectro. Rádio não é anonimato.
- **Sem conta em servidor**: não há quem encerrar (a identidade é sua chave, Aula 5).
- **Sem centro para derrubar**: a malha absorve perda de nós (Aula 1).
- **Interferência deliberada (*jamming*)** continua possível contra qualquer rádio. Nenhum protocolo resolve isso (Módulo 10, Aula 8).

O projeto Briar, por exemplo, lista como objetivos de projeto resistir a bloqueio de conteúdo ("como não há servidores, não há o que bloquear") e a apagões de internet (sincronizando por Bluetooth ou Wi-Fi), além de usar Tor para esconder quem fala com quem quando há internet. É a fonte que consultei; a afirmação é do projeto, não uma garantia independente.

## Princípios de projeto que saem daqui

1. **Degradação graciosa**: cada perda de infraestrutura tira uma função, não tudo. Internet cai: a rede local continua. Energia da rede cai: a bateria mantém os nós. Enlace longo cai: cada lado ainda fala dentro do seu bairro.
2. **Independência de modo de falha**: dois meios só são redundantes se **não falham pela mesma causa**. Fibra e 4G da mesma operadora não são; LoRa com bateria e fibra são.
3. **Ilha primeiro, conectado depois**: o sistema deve funcionar totalmente local (sem internet) e, quando a internet existir, apenas **ampliar**.
4. **Energia é requisito de primeira classe**: dimensione bateria e recarga (por exemplo, solar) como dimensiona o rádio (Aula 10 e Módulo 12).
5. **Simplicidade sob estresse**: em emergência, quem opera está cansado e assustado. Interface mínima, instruções em papel, canais combinados de antemão.
6. **Ensaie**: uma rede de emergência que nunca foi usada em teste provavelmente não funciona. A LABRE menciona que estados com REER participam de exercícios simulados.

## Resumo

- Comunicação de emergência exige pouco (mensagens curtas), mas depende de uma cadeia (energia, ligação de retorno, núcleo, aparelho) cujos elos falham juntos por causas comuns, como a água.
- Enchentes do RS (maio de 2024): em 3 de maio, TIM em 87 cidades, Claro em 51 e Vivo em 19 sem telefonia e internet; roaming entre operadoras e 34 antenas de emergência da Telebras; radioamadores no canal 146,520 MHz repassaram à Defesa Civil a localização de quatro crianças e dez adultos em um telhado em Canoas. A LABRE relata repetidoras fora do ar por falta de energia.
- Lição técnica: o que funcionou foi enlace **direto**, curto e com bateria própria. Lição institucional: sem ligação com a Defesa Civil, a rede de rádio rende pouco (opinião da LABRE).
- Censura e vigilância exploram pontos de controle (DNS, IP, provedor, plataforma); arquitetura distribuída remove esses pontos, mas rádio continua localizável e sujeito a interferência.
- Princípios: degradação graciosa, modos de falha independentes, ilha primeiro, energia como requisito, simplicidade, ensaio.

## Para aprofundar

- [ ] [Radioamadores e as enchentes no RS](https://www.labre.org.br/radioamadores-e-as-enchentes-no-rs/) (LABRE, 8 de maio de 2024): o texto da entidade nacional dos radioamadores, com a discussão sobre REER, RENER e Defesa Civil.
- [ ] [Radioamadores formam rede de informações para ajudar vítimas de enchentes no RS](https://gauchazh.clicrbs.com.br/tecnologia/noticia/2024/05/radioamadores-formam-rede-de-informacoes-para-ajudar-vitimas-de-enchentes-no-rs-clvsij77e02j5011w6qemsqq8.html) (GZH, 4 de maio de 2024): a reportagem com o caso de Canoas e os números das operadoras.
- [ ] [Balanço de ações emergenciais do Ministério das Comunicações para o Rio Grande do Sul, 7 de maio](https://www.gov.br/mcom/pt-br/noticias/2024/maio/balanco-de-acoes-emergenciais-do-ministerio-das-comunicacoes-para-o-rio-grande-do-sul-7-de-maio-1) (gov.br): as 34 antenas da Telebras e a liberação do roaming.
- [ ] [Mesh Networks Can Connect Us During Disasters](https://www.govtech.com/em/safety/Mesh-Networks-Can-Connect-Us-During-Disasters-Commentary.html) (GovTech): os casos de Haiti, Sandy e Haiyan; artigo de opinião, tratar como síntese.

[Próxima aula: Identidade sem autoridade central, criptografia e modelo de ameaça](./05%20-%20Identidade%20Criptografia%20e%20Modelo%20de%20Ameaca.md)
