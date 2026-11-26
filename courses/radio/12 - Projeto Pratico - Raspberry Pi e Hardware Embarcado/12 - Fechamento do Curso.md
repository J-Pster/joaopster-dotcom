[Voltar ao módulo](./README.md)

# Aula 12: Fechamento do curso

*Pergunta que esta aula responde: o que eu realmente aprendi em cada módulo (sem consultar), onde estão as minhas lacunas, e o que estudar e construir a seguir?*

> Esta aula não ensina conteúdo novo. Ela é um instrumento de autoavaliação: percorra os módulos na ordem, responda em voz alta ou por escrito **sem abrir a aula**, marque o que você não soube e volte só nesses pontos. As perguntas de "porquê" completas estão no fim de cada README de módulo; aqui vai o resumo do que cada um entregou.

## Checklist do curso inteiro, módulo por módulo

Para cada módulo: o que ele construiu, e a pergunta-âncora que você deve saber responder sem consultar. Marque quando souber.

### Fundamentos físicos (Módulos 1 a 4)

- [ ] **[Módulo 1: Física de Ondas e Espectro Eletromagnético](../01%20-%20Fisica%20de%20Ondas%20e%20Espectro%20Eletromagnetico/README.md).** Construiu: onda, campos, `c = f x lambda`, fase, decibéis, espectro, ruído, segurança de RF, espectro regulado. Âncora: *por que uma onda eletromagnética viaja no vácuo, e por que o decibel é logarítmico?*
- [ ] **[Módulo 2: Propagação de Rádio](../02%20-%20Propagacao%20de%20Radio/README.md).** Construiu: perda no espaço livre (Friis), linha de visada, Fresnel, fading, ionosfera, orçamento de enlace. Âncora: *por que a perda cresce com a frequência e com a distância, e como se monta um orçamento de enlace com margem?*
- [ ] **[Módulo 3: Modulação](../03%20-%20Modulacao/README.md).** Construiu: AM, SSB, FM, modulação digital, Shannon e sensibilidade, espalhamento espectral, OFDM, o compromisso taxa x alcance x banda x potência. Âncora: *por que mais bits por símbolo exigem mais SNR, e o que Shannon diz sobre o limite?*
- [ ] **[Módulo 4: Antenas](../04%20-%20Antenas/README.md).** Construiu: irradiação, impedância e SWR, linhas de transmissão, diagrama e ganho, tipos, instalação segura, medição e carga fictícia. Âncora: *por que uma antena descasada devolve energia, e por que nunca se transmite sem antena ou carga?*

### Prática regulada e digital (Módulos 5 a 7)

- [ ] **[Módulo 5: Rádio Amador: Regulamentação e Prática](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/README.md).** Construiu: por que o espectro é regulado, COER e classes, bandas e potência, o caráter aberto do serviço, PX e radiação restrita, repetidoras, operação. Âncora: *por que rede privada cifrada não é serviço amador, e onde LoRa legalmente opera?*
- [ ] **[Módulo 6: SDR (Software Defined Radio)](../06%20-%20SDR%20-%20Software%20Defined%20Radio/README.md).** Construiu: receptor, amostras I/Q, FFT e demodulação em software, RTL-SDR, outros SDR, RX versus TX e a lei, primeira recepção. Âncora: *por que são dois canais (I e Q), e por que receber é mais simples e menos regulado que transmitir?*
- [ ] **[Módulo 7: Modos Digitais de Radio Amador](../07%20-%20Modos%20Digitais%20de%20Radio%20Amador/README.md).** Construiu: por que os modos digitais funcionam abaixo do ruído, a placa de som como modem, sincronismo, FT8, WSPR, packet e APRS, Winlink, voz digital. Âncora: *como o FT8 decodifica sinais abaixo do ruído, e por que o relógio importa?*

### LoRa, malha e Reticulum (Módulos 8 a 10)

- [ ] **[Módulo 8: LoRa e LoRaWAN](../08%20-%20LoRa%20e%20LoRaWAN/README.md).** Construiu: chirp e ganho de processamento, SF, BW, CR e tempo no ar, chips e placas, frequências e regulamentação, LoRaWAN, gateway próprio, link ponto a ponto, alcance real. Âncora: *por que LoRa alcança longe com pouca potência, e o que cada aumento de SF troca?*
- [ ] **[Módulo 9: Redes Mesh](../09%20-%20Redes%20Mesh/README.md).** Construiu: por que mesh, roteamento, limites físicos, Meshtastic, MeshCore, planejamento, segurança e legalidade. Âncora: *por que inundação e tráfego automático saturam o ar, e o que o Meshtastic cifra e não cifra?*
- [ ] **[Módulo 10: Reticulum](../10%20-%20Reticulum/README.md).** Construiu: por que IP não serve para rádio lento, destinos e identidades, announces e roteamento, links, interfaces, RNode, aplicações, modelo de ameaça, laboratório. Âncora: *como o endereço vira hash de chave pública, e por que o Reticulum cifra por desenho?*

### Arquitetura e projeto (Módulos 11 e 12)

- [ ] **[Módulo 11: Arquitetura Descentralizada e P2P](../11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md).** Construiu: a história e a taxonomia (centralizado, descentralizado, distribuído, federado, P2P), resiliência e censura, identidade e modelo de ameaça, DHT e panorama de sistemas, DTN e CRDTs, limites e custo de operar, e o método de desenhar a sua rede. Âncora: *o que muda quando não há servidor central, e onde ficam os pontos únicos de falha e de controle?*
- [ ] **[Módulo 12: Projeto Prático: Raspberry Pi e Hardware Embarcado](./README.md).** Construiu: projeto, hardware e energia, Pi preparado, PTT seguro, Rust, nós Meshtastic e Reticulum, gateway, medições, operação, legalidade. Âncora: *como faço, por que cada decisão, e como sei que a rede funciona?*

## Perguntas integradoras (o exame do curso)

Uma pergunta por eixo do curso; cada uma exige juntar módulos. Responda por escrito, com números.

1. **Física e enlace.** Um nó a 915 MHz transmite 14 dBm com antena de 2 dBi, e o receptor tem sensibilidade de -137 dBm com antena de 2 dBi. Ignorando cabos, qual perda máxima o enlace aguenta? Qual distância isso permite no espaço livre e por que o número real é muito menor? *(Módulos 1, 2, 4, 8; Aula 9 deste módulo.)*
2. **Modulação e LoRa.** Por que aumentar o SF de 7 para 12 aumenta o alcance e reduz a taxa? *(Módulos 3 e 8.)*
3. **Antena.** Qual é a diferença entre SWR baixo e antena boa, e o que acontece se você liga o transmissor sem antena? *(Módulo 4.)*
4. **Regime.** Você quer uma rede privada cifrada com LoRa em 915 MHz. Em qual regime ela é legal, que equipamento exige, e por que não pode ser serviço amador? *(Módulos 5, 8, 9, 10; Aula 11.)*
5. **SDR.** Por que um RTL-SDR de 8 bits tem faixa dinâmica limitada, e como você reconhece overload? *(Módulo 6.)*
6. **Digital.** Como o FT8 chega a -21 dB de SNR? Cite quatro ferramentas. *(Módulo 7.)*
7. **Malha.** Por que uma mesh de 100 nós no LongFast pode saturar sem ninguém mandar mensagem? Faça a conta. *(Módulo 9.)*
8. **Reticulum.** O que é um destino, como se calcula o endereço, e o que o announce anuncia? *(Módulo 10.)*
9. **Arquitetura.** Onde está o ponto único de falha do seu desenho, e o que você testou para prová-lo? *(Módulo 11; Aula 8.)*
10. **Hardware.** Por que um Raspberry Pi não vai no morro solar? Faça a conta de energia dos dois casos. *(Aula 2.)*
11. **PTT.** Por que não se liga um pino de GPIO direto ao rádio, e qual é o estado seguro do circuito? *(Aula 4.)*
12. **Operação.** O que você faz se o gateway queimar hoje? Em quanto tempo volta? *(Aula 10.)*

## Diagnóstico de lacunas

Marque cada pergunta como **sei** (respondi sem consultar), **quase** (errei um detalhe) ou **não sei**. Depois:

- **Se errou nas contas (1, 7, 10):** o ponto fraco é aritmética de dB e de orçamento. Refaça os exemplos resolvidos do [Módulo 1, Aula 5](../01%20-%20Fisica%20de%20Ondas%20e%20Espectro%20Eletromagnetico/05%20-%20Decibeis%20e%20Potencia.md), do [Módulo 2, Aula 8](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md) e do [Módulo 9, Aula 3](../09%20-%20Redes%20Mesh/03%20-%20Limites%20Fisicos%20da%20Mesh%20sobre%20LoRa.md), trocando os números.
- **Se errou em regime e cifra (4):** releia [Radioamador é público e aberto](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md) e [Rede privada legal](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md), e a Aula 11 deste módulo. É a lacuna mais cara: ela vira multa e interferência, não só erro.
- **Se errou em fundamentos de rádio (2, 3, 5, 6):** volte aos módulos 3, 4, 6 e 7 no ponto exato da pergunta.
- **Se errou em arquitetura e operação (8, 9, 12):** faça o [laboratório do Módulo 10](../10%20-%20Reticulum/10%20-%20Laboratorio%20Guiado.md) e o ensaio (*game day*) da Aula 10.

Regra do curso, que vale aqui também: **só aceite o que entendeu a fundo.** Se você respondeu "sei" repetindo a frase do texto sem conseguir explicar o mecanismo (o porquê), marque "quase".

## O que este curso não cobriu (lacunas honestas do próprio material)

- **Os vídeos** dos módulos foram confirmados por título e canal, mas **não foram assistidos** por quem escreveu o material; onde faltou vídeo bom, isso está dito na aula.
- **Regulamentação:** o curso leu os atos e resoluções da Anatel disponíveis, e marcou pontos **não confirmados** (LoRa de canal fixo, aplicação da ocupação média por frequência de salto ao LoRaWAN, região `BR_902` do Meshtastic). Eles mudam; a fonte oficial manda.
- **Testes práticos:** as contas e códigos de exemplo foram escritos a partir da documentação; nem tudo foi executado em hardware real (as aulas dizem o que foi e o que não foi testado).
- **Não cobertos:** HF em profundidade (operação de DX e antenas grandes), satélite, LoRaWAN em escala, telefonia celular, redes 5G privadas, radioenlaces licenciados, projeto de amplificadores e de PCB de RF. Cada um é um curso.

## Próximos passos de estudo e de construção

Do mais barato ao mais ambicioso, cada um ligado a algo que o curso ensinou:

1. **Refazer a campanha de alcance** da Aula 9 em outro ambiente (rural, urbano) e comparar o `n`. É o experimento que mais ensina por hora gasta.
2. **Obter o COER e o indicativo** ([Módulo 5, Aula 2](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/02%20-%20Do%20Zero%20ao%20Indicativo.md), [Aula 9](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/09%20-%20Seguranca%20Emergencia%20Comunidade%20e%20Prova.md)): abre HF, voz, FT8 e o mundo dos clubes, e é a única forma legal de experimentar com transmissão aberta e antenas próprias.
3. **Montar o PTT da Aula 4 em um rádio de verdade** (com licença) e operar FT8 e packet com o Pi ([Módulo 7](../07%20-%20Modos%20Digitais%20de%20Radio%20Amador/README.md)).
4. **Rodar um gateway LoRaWAN próprio** com um servidor como o ChirpStack ([Módulo 8, Aula 6](../08%20-%20LoRa%20e%20LoRaWAN/06%20-%20Redes%20TTN%20ChirpStack%20Helium%20e%20Gateway%20Proprio.md)) e ligar sensores.
5. **Estudar o código:** um decodificador em Rust (Aula 5), o `rnsd` do Reticulum ou o firmware do Meshtastic. Ler o código de um protocolo que você já opera fecha o círculo do "porquê".
6. **Contribuir de volta:** relatar um bug, melhorar documentação, ajudar um grupo local de mesh. Os projetos usados aqui vivem de contribuição.
7. **Ir para RF mais fundo:** medição com NanoVNA e projeto de antena ([Módulo 4](../04%20-%20Antenas/README.md)), SDR de transmissão dentro da lei ([Módulo 6, Aula 6](../06%20-%20SDR%20-%20Software%20Defined%20Radio/06%20-%20RX%20e%20TX%20e%20a%20Lei.md)), ou propagação em HF ([Módulo 2](../02%20-%20Propagacao%20de%20Radio/README.md)).

## Resumo

- O curso foi da física da onda (Módulo 1) a uma rede privada montada, medida, operada e conferida do ponto de vista legal (Módulo 12).
- O checklist por módulo mais as doze perguntas integradoras mostram, com honestidade, o que você sabe e o que só decorou.
- Lacunas mais caras: aritmética de dB e orçamento de enlace, regime legal e cifra, e operação e contingência.
- O material tem limites declarados: vídeos não assistidos, regras que mudam, pontos não confirmados.
- O melhor próximo passo é medir em campo e, se quiser transmitir de forma aberta, obter o COER.

## Para aprofundar

- [ ] [Módulo 11: Arquitetura Descentralizada e P2P](../11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md): a última aula dele desenha uma rede privada com exemplo resolvido, que você pode repetir com a sua realidade.
- [ ] [Planejamento de rede (Módulo 9, Aula 8)](../09%20-%20Redes%20Mesh/08%20-%20Planejamento%20de%20Rede.md): o método de planejamento, que você agora pode aplicar a uma rede maior.
- [ ] [Comparação, maturidade e riscos (Módulo 10, Aula 9)](../10%20-%20Reticulum/09%20-%20Comparacao%20Maturidade%20e%20Riscos.md): para decidir, com evidência, quando usar cada tecnologia da sua rede.

---

## Fim do curso

Você percorreu o caminho completo, da onda eletromagnética até uma rede de comunicação que você projetou, montou, mediu, operou e conferiu com a lei. Não há próximo módulo. O próximo passo é a sua rede funcionando, e o registro do que ela ensinar que este texto não ensinou.
